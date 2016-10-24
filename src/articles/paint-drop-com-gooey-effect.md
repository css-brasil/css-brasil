---
title: Paint Drop com Gooey Effect
description: Uma maneira diferente de se utilizar o Gooey Effect de maneira interativa e bonita.
date: 2016-10-22
template: articles/single.hbt
url: paint-drop-com-gooey-effect
featured: /images/paint-drop.png
example_url: http://jeffersonmourak.me/
author: Jefferson Moura
tags: Gooey, SVG Filters, Paint Drop
is_box_featured: true
---

Recentemente estava lendo um artigo no CSS Tricks sobre um efeito criado pelo brasileiro Lucas Bebber chamado _Gooey Effect_ no qual se utiliza um SVG filter para fazer parecer que os elementos que estão mais perto uns dos outros estão grudados. (https://css-tricks.com/gooey-effect/) , e isso me deu uma inspiração para criar um outro efeito com base no _Gooey_.

A ideia desse efeito é criar a intenção de que está caindo um balde de tinta em seu site.

## Estrutura

Para se criar o efeito, você precisa criar uma pequena estrutura de elementos, é bem simples.
<br>
<br>

```
.wrapper
    ├── .column
    └── .content
```
<br>
<br>

O `.wrapper` é o elemento no qual será adicionado o efeito principal.
Note que a class tem white-space: nowrap e overflow-x: hidden, pra que o não exista espaços indevidos entre as colunas e também não apareça uma coluna extra caso a largura do seu elemento seja inferior ao das colunas.
<br>
<br>
<p data-height="265" data-theme-id="dark" data-slug-hash="pEGddP" data-default-tab="css,result" data-user="jeffersonmourak" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jeffersonmourak/pen/pEGddP/">Gooey Effect wrapper</a> by Jefferson Moura (<a href="http://codepen.io/jeffersonmourak">@jeffersonmourak</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<br />
<br />
<p>O `.content` é o elemento que você adiciona caso queira ter algum conteúdo dentro do efeito, e assim você pode ter por exemplo o nome da sua aplicação ou a logo da sua empresa, fica ao seu critério as informações contidas no Content.</p>
<br />
<p>Basicamente é um quadrado com a mesma cor das colunas.</p>
<br />
<br />
<p data-height="265" data-theme-id="dark" data-slug-hash="yakPpX" data-default-tab="css,result" data-user="jeffersonmourak" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jeffersonmourak/pen/yakPpX/">Gooey Effect content</a> by Jefferson Moura (<a href="http://codepen.io/jeffersonmourak">@jeffersonmourak</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<br />
<br />
As `.column` São os elementos que irão fazer as linhas da tinta, e assim ficar algo mais &quot;realista&quot;. Elas são divs com tamanho variado e com as bordas inferiores arredondadas.
<br />
<br />
<p data-height="265" data-theme-id="dark" data-slug-hash="ALNbdy" data-default-tab="css,result" data-user="jeffersonmourak" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jeffersonmourak/pen/ALNbdy/">Gooey Effect columns</a> by Jefferson Moura (<a href="http://codepen.io/jeffersonmourak">@jeffersonmourak</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<br />
<br />
Após isso você pode adicionar uma animação pra parecer realmente que a tinta está sendo derramada na sua página.

![Paint Drop Gif](/images/paint-drop.gif)

This is all folks, Essa é o primeiro post sobre SVG Filters, em breve estarei voltando com mais artigos.
Até mais 😀