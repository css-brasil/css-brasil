---
title: Inputs Materializados com CSS.
description: É possível validar dados com HTML e CSS?
date: 2016-12-22
template: articles/single.hbt
url: inputs-materializados-com-css
featured: /images/material-input-css.png
author: Mario Souto
tags: experimentos, animações
example_url: https://codepen.io/soutomario/pen/LbENBr
---

Depois de muita luta e vencer a faculdade, cá estou eu escrevendo meu primeiro post que dedico ao @afonsopacifer (pela insistência em me motivar a escrever). Bom eu sempre usei Android e acho muito mágico o que a galera faz nos aplicativos e como algumas animações violam o que eu considero como física do front-end.

Boa parte dessas animações na web são facilmente feitas com JS…

> Ahhh, mas ai é fácil quero ver fazer diferente, ser pioneiro, inovador, senhor descolado.

Cof cof, continuando… Sim é relativamente fácil fazer essas animações com JS e justamente por buscar uma outra alternativa eu resolvi fazer esse post. Então o desafio foi lançado: **Como fazer um Material Input somente com CSS?**

## Primeiramente ~~(fora temer)~~

Os ingredientes necessários para essa receita serão: HTML5 Data Form Validations, Alguns seletores e lógica de CSS <3, amor e pensar um pouco fora do padrão.

Vale ressaltar que **isso é um experimento**, e que experimentos são uma fonte importante de conhecimento para lidar com problemas do dia-a-dia.

### Data Form Validations
Faz algum tempo que muitas pessoas utilizam o atributo **required** do HTML5 para fazer algumas validações simples em formulários como no exemplo abaixo:

<p data-height="265" data-theme-id="dark" data-slug-hash="bBzZXj" data-default-tab="html,result" data-user="soutomario" data-embed-version="2" data-pen-title="HTML5 Data Form Validations" class="codepen">See the Pen <a href="http://codepen.io/soutomario/pen/bBzZXj/">HTML5 Data Form Validations</a> by Mario Souto (<a href="http://codepen.io/soutomario">@soutomario</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As validações com required são bem bacanas, pois elas pegam o [type] do input e tiram por base dele se o campo foi preenchido corretamente ou não, validando e-mails, texts e etc…

Porém, uma coisa que pouca gente sabe é que é possível juntamente do required utilizar o atributo **pattern** que possibilita fazer validações complexas baseadas em expressões regulares sem o uso de JavaScript.

![WHERE IS YOUR GOD NOW?](https://mariosouto.com/assets/img/im-god.gif)
> WHERE IS YOUR GOD NOW?

Calma que não para por ai, além de ser possível fazer validações no HTML é possível capturar o estado delas utilizando CSS com as Pseudo Classes **valid** e **invalid**, ou seja: _É possível estilizar um elemento, se baseando em tratamento de dados somente utilizando linguagens de marcação e estilo!_

## Segundamente: Mãos a obra!

Dessa vez nosso objetivo não é o trapézio descendente e sim esse cara aqui:

![Exemplo de input do Material Design](https://mariosouto.com/assets/img/input-material-design.gif)

Indo pelo passo a passo, vamos começar pela estrutura HTML que será bem simples:

<script src="https://gist.github.com/soutomario/8fc58a5149603e00d02288ebdeb2d509.js"></script>

1 - Uma tag section e uma form
2 - Um input-container para agrupar o conjunto da label com o input
3 - E por fim, um input com um id "name" e um label logo _abaixo_, com o `for=` referenciando para o id do input (a ordem nesse caso é bem importante e vocês já irão entender).

Feito isso, o próximo passo é colocar nossa regex no atributo pattern deixando ele assim: `pattern=".+"` (essa condição retorna válido caso qualquer caracter seja inserido dentro do input).

Agora vem a parte do amor com CSS <3

### Base

<script src="https://gist.github.com/soutomario/184bcff2e14c6e4a45e1b6e0cf7c7a65.js"></script>

A estrutura é bem simples, basicamente aplicamos um estilo no input para ele se parecer com o do Material Design e posicionamentos de forma absoluta o label a esquerda do input-container e centralizado em relação ao input.

### Interação

<script src="https://gist.github.com/soutomario/302b568ba17d5a62c954ee997d70b98b.js"></script>

Aqui é onde acontece a mágica, nós validamos quando o input for valido no HTML e pelo CSS verificamos esse estado, adicionando um efeito ao label que é o elemento seguinte ao input.

E para finalizar com um toque especial vamos dar um tapa no visual:

<script src="https://gist.github.com/soutomario/e3013895740025ea91715bbe643138fb.js"></script>

E finalmente aqui está o resultado do nosso experimento!

<p data-height="357" data-theme-id="dark" data-slug-hash="LbENBr" data-default-tab="html,result" data-user="soutomario" data-embed-version="2" data-pen-title="Material Design Input - CSS Pure" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/soutomario/pen/LbENBr/">Material Design Input - CSS Pure</a> by Mario Souto (<a href="http://codepen.io/soutomario">@soutomario</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Bom, espero que tenham gostado do post em breve trarei mais conteúdos, quaisquer dúvidas deixem nos comentários ou me chamem em alguma rede social!

- [Facebook](https://www.facebook.com/soutomario)


## Referências:

* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation
* https://developer.mozilla.org/pt-BR/docs/Web/CSS/:invalid
* https://developer.mozilla.org/pt-BR/docs/Web/CSS/:valid
* http://materializecss.com/forms.html
