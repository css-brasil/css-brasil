
var Metalsmith   = require('metalsmith');
var collections  = require('metalsmith-collections');
var markdown     = require('metalsmith-markdown');
var templates    = require('metalsmith-templates');
var permalinks   = require('metalsmith-permalinks');
var tags         = require('metalsmith-tags');
var gist         = require('metalsmith-gist');
var drafts       = require('metalsmith-drafts');

var fs           = require('fs');
var Handlebars   = require('handlebars');
var moment       = require('moment');

// Handlebars Helpers
Handlebars.registerPartial({
	'header': fs.readFileSync('./templates/partials/header.hbt').toString(),
	'footer': fs.readFileSync('./templates/partials/footer.hbt').toString(),
	'navigation': fs.readFileSync('./templates/partials/navigation.hbt').toString()
});
Handlebars.registerHelper('dateFormat', function( context ) {
 	return moment(context).format("LL");
});
Handlebars.registerHelper('dateGMT', function( context ) {
	context = context === 'new' ? new Date() : context;
	return context.toUTCString();
});
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
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
		reverse: false
	},
	playground: {
		pattern: 'playground/*.md',
		sortBy: 'date',
		reverse: false
	}
  }))
  .use(markdown())        // vai ler todos arquivos .md e transformar em um objeto
  .use(permalinks({       // vai mudar o arquivo destino no padrão {title}/index.html
      pattern: ':url',
      relative: false
  }))
  .use(gist()) // adiciona gists nas páginas desejadas.
  .use(tags({  // criará páginas conforme as tags informadas
    handle: 'tags',
    template:'tags.hbt',
    path:'tags',
    sortBy: 'title',
    reverse: true
  }))
  .use(templates('handlebars')) // nossos objetos serão passados para o handlebars
  .destination('./build')       // diretório destino
  .build(function(err, files) { // escreve os aquivos no diretório build
    if (err) { throw err; }     // um handler de erro, sempre é bom
  });