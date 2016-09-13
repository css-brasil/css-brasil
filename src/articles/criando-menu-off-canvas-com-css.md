---
title: Criando um menu off canvas
template: articles/single.hbt
url: criando-menu-off-canvas-com-css
date: 2016-09-06
description: Hoje é um dia especial, pois este é o primeiro de muitos exemplos "shows" que faremos utilizando apenas CSS3.
author: Clóvis Neto
featured: /images/menu-wrapper.jpg
tags: menu off canvas
example_url: http://codepen.io/clovisneto/full/zrMOKZ/
source: http://codepen.io/clovisneto/pen/zrMOKZ
---

Este é o nosso primeiro post técnico do CSS Brasil, e para começar, nada melhor que compartilhar a técnica utilizada para criar um menu off-canvas, utilizando apenas CSS <3

## Funcionamento

O funcionamento do menu é bem simples e consiste apenas em 3 camadas (apesar de ter utilizado apenas 2 no exemplo a cima :p)

<br>

* <span class="green">wrapper</span>
* <span class="green">navigation</span>
* <span class="green">canvas</span>

<br>

O <span class="green">wrapper</span> será nossa view, que terá a largura do tamanho da nossa tela, a <span class="green">navegação</span> será o nosso menu que fica escondido no <span class="green">eixo X da tela</span> e o <span class="green">canvas</span> será o conteúdo da nossa página.

<br>

Iremos controlar o estado de aberto e fechado do nosso menu pelo css, utilizando o seletor <span class="green">:checked</span> e selecionando o irmão por meio do seletor de herança <span class="green">~</span> (til), logo depois colocaremos um <span class="green">input type="checkbox" id="menu"</span> no html para fazer toda mágica acontecer :)

<br>

Agora a brincadeira vai começar a ficar boa, chega de teoria e mãos a obra que é hora de códificar.

<img src="/images/menu-gif.gif" alt="Menu Off Canvas com CSS">

## Estrutura

A estrutura é muiito simples, seguindo os conceitos explicados a cima, temos o seguinte código HTML:

<script src="https://gist.github.com/clovisdasilvaneto/0e9bfa72ed31edba723dd73472e14b6d.js"></script>

Note que temos dois <span class="green">label for=""</span> no nosso trecho HTML. Eles servem para marcar ou desmarcar o checkbox que controla o estado de aberto / fechado do menu off canvas.

Esconderemos o checkbox colocando um <span class="green">display: none</span> em seguida adicionamos a propriedade <span class="green">transform: translate3d(-100%,0,0)</span>, no menu para ele fique escondido no canto esquerdo da tela, ex:

<script src="https://gist.github.com/clovisdasilvaneto/238aa51a573e978e012c4facdfef7c72.js"></script>

Agora precisamos verificar o estado de <span class="green">:checked</span> do menu, pois se ele estiver checado deslocaremos o nosso wrapper <span class="green">300px</span> para a direita, fazendo com que o menu off-canvas apareça:

<script src="https://gist.github.com/clovisdasilvaneto/5db3e4a93f2212291b5acd8dd78b744e.js"></script>

Colocaremos todos os links com um <span class="green">opacity: 0</span> e <span class="green">transform: translate3d(0, 40px, 0)</span> para que eles apareçam de baixo para cima.

<script src="https://gist.github.com/clovisdasilvaneto/a142aacd94c2daaf2f484cfeb61a1577.js"></script>

Como o número de links que temos não são dinâmicos, colocaremos um <span class="green">transition-delay</span> em cada um deles para que apareçam de um por um, deixando nossa animação mais sexy ;)

Para finalizar capturamos o estado de <span class="green">:checked</span> do menu e mostramos nossos links setando a propriedade <span class="green">opacity: 1</span> e zeramos seu <span class="green">translate3d</span> para que os links apareçam já se movimentando.

<script src="https://gist.github.com/clovisdasilvaneto/059cd2fbcd20100f425ea5fb59d4a1af.js"></script>

Caso você use algum pré-processador, aconselho usar <span class="green">for</span> para interagir com os indices dos links do menu.

<p class="citation">Dica: Sempre que você precise criar uma grande animação com css, deixe para aplicar as transições e animações no final do desenvolvimento, pois facilita bastante no controle dos elementos da tela.</p>

E assim chegamos a conclusão do nosso menu off-canvas e do nosso primeiro post técnico do CSS Brasil, até a próxima :D \o/

