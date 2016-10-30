const Metalsmith   = require('metalsmith');
const collections  = require('metalsmith-collections');
const markdown     = require('metalsmith-markdown');
const templates    = require('metalsmith-templates');
const permalinks   = require('metalsmith-permalinks');
const tags         = require('metalsmith-tags');
const gist         = require('metalsmith-gist');
const drafts       = require('metalsmith-drafts');
const fs           = require('fs');
const Handlebars   = require('handlebars');
const moment       = require('moment');

module.exports = () => {

	// Handlebars Helpers
	Handlebars.registerPartial({
		'header': fs.readFileSync('./templates/partials/header.hbt').toString(),
		'footer': fs.readFileSync('./templates/partials/footer.hbt').toString(),
		'navigation': fs.readFileSync('./templates/partials/navigation.hbt').toString()
	});

	Handlebars.registerHelper('dateFormat', (context) => {
	 	return moment(context).format("LL");
	});

	Handlebars.registerHelper('dateGMT', (context) => {
		context = context === 'new' ? new Date() : context;
		return context.toUTCString();
	});

	Handlebars.registerHelper('ifCond', (v1, v2, options) => {
		if(v1 === v2) {
			return options.fn(this);
		}
		return options.inverse(this);
	});

	Metalsmith(__dirname)
	  .use(drafts())                 // páginas com atributo 'draft: true' não serão geradas.
	  .use(collections({             // nos dará acesso a um objeto chamado 'collections' ...
		articles: {
			pattern: 'articles/*.md',
			sortBy: 'date',
			reverse: true
		},
		playground: {
			pattern: 'playground/*.md',
			sortBy: 'date',
			reverse: true
		}
	  }))
	  .use(markdown()) // vai ler todos arquivos .md e transformar em um objeto
	  .use(permalinks({ // vai mudar o arquivo destino no padrão {title}/index.html
	      pattern: ':url',
	      relative: false
	  }))
	  .use(gist()) // adiciona gists nas páginas desejadas.
	  .use(tags({ // criará páginas conforme as tags informadas
	    handle: 'tags',
	    template:'tags.hbt',
	    path:'tags',
	    sortBy: 'title',
	    reverse: true
	  }))
	  .use(templates('handlebars')) // nossos objetos serão passados para o handlebars
	  .destination('./build') // diretório destino
	  .build((err, files) => { // escreve os aquivos no diretório build
	    if (err) { throw err; } // um handler de erro, sempre é bom
	  });

};
