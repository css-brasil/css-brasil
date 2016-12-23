---
title: Inputs Materializados com CSS.
description: É possível validar dados com HTML e CSS?.
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

http://codepen.io/soutomario/pen/bBzZXj

As validações com required são bem bacanas, pois elas pegam o [type] do input e tiram por base dele se o campo foi preenchido corretamente ou não, validando e-mails, texts e etc…

Porém, uma coisa que pouca gente sabe é que é possível juntamente do required utilizar o atributo **pattern** que possibilita fazer validações complexas baseadas em expressões regulares sem o uso de JavaScript.

![WHERE IS YOUR GOD NOW?](https://mariosouto.com/assets/img/im-god.gif)
> WHERE IS YOUR GOD NOW?

Calma que não para por ai, além de ser possível fazer validações no HTML é possível capturar o estado delas utilizando CSS com as Pseudo Classes **valid** e **invalid**, ou seja: _É possível estilizar um elemento, se baseando em tratamento de dados somente utilizando linguagens de marcação e estilo!_

## Segundamente: Mãos a obra!

Dessa vez nosso objetivo não é o trapézio descendente e sim esse cara aqui: 

![Exemplo de input do Material Design](https://mariosouto.com/assets/img/input-material-design.gif)

Indo pelo passo a passo, vamos começar pela estrutura HTML que será bem simples:

```html
<section>
	<form action="">
		<h1>Material Design Input with pure CSS</h1>
		<div class="input-container">
			<input id="name" class="input" type="text" pattern=".+" required />
			<label class="label" for="name">Nome</label>
		</div>
	</form>
</section>
```

1 - Uma tag section e uma form
2 - Um input-container para agrupar o conjunto da label com o input
3 - E por fim, um input com um id "name" e um label logo _abaixo_, com o `for=` referenciando para o id do input (a ordem nesse caso é bem importante e vocês já irão entender).

Feito isso, o próximo passo é colocar nossa regex no atributo pattern deixando ele assim: `pattern=".+"` (essa condição retorna válido caso qualquer caracter seja inserido dentro do input).

Agora vem a parte do amor com CSS <3

### Base

```css
/* Estrutura */
.input-container {
  position: relative;
}

input {
  border: 0;
  border-bottom: 2px solid #9e9e9e;
  outline: none;
  transition: .2s ease-in-out;
  box-sizing: border-box;
}

label {
  top: 0;
  left: 0; right: 0;
  color: #616161;
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  cursor: text;
  transition: .2s ease-in-out;
  box-sizing: border-box;
}

input,
label {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
}
```

A estrutura é bem simples, basicamente aplicamos um estilo no input para ele se parecer com o do Material Design e posicionamentos de forma absoluta o label a esquerda do input-container e centralizado em relação ao input.

### Interação

```css
/* Interation */
input:valid,
input:focus {
  border-bottom: 2px solid #26a69a;  
}

input:valid + label,
input:focus + label {
  color: #26a69a;
  font-size: .8rem;
  top: -30px;
  pointer-events: none;
}
```

Aqui é onde acontece a mágica, nós validamos quando o input for valido no HTML e pelo CSS verificamos esse estado, adicionando um efeito ao label que é o elemento seguinte ao input.

E para finalizar com um toque especial vamos dar um tapa no visual:

```css
/* Just for leave it a little more beautiful */
* {
	font-family: sans-serif;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 100vh;
	background-color: #e0f2f1;
}
h1 {
	color: #616161;
	text-align: center;
	margin-bottom: 30px;
}

section {
	margin: 15px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	padding: 20px;
	border-radius: 0 0 2px 2px;
	background-color: #FFF;
}
```

E finalmente aqui está o resultado do nosso experimento!

<p data-height="357" data-theme-id="dark" data-slug-hash="LbENBr" data-default-tab="html,result" data-user="soutomario" data-embed-version="2" data-pen-title="Material Design Input - CSS Pure" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/soutomario/pen/LbENBr/">Material Design Input - CSS Pure</a> by Mario Souto (<a href="http://codepen.io/soutomario">@soutomario</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Bom, espero que tenham gostado do post em breve trarei mais conteúdos, quaisquer dúvidas deixem nos comentários ou me chamem em alguma rede social!


## Referências: 

* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation
* https://developer.mozilla.org/pt-BR/docs/Web/CSS/:invalid
* https://developer.mozilla.org/pt-BR/docs/Web/CSS/:valid
* http://materializecss.com/forms.html
