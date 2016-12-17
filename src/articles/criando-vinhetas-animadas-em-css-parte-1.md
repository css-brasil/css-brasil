---
title: Criando vinhetas animadas em CSS | Parte 01
template: articles/single.hbt
url: criando-vinhetas-animadas-em-css-parte-1
date: 2016-12-17
description: Chegou a hora, vamos por a mão na massa e desenvolver o primeiro exemplo da nossa série!
author: Clóvis Neto
featured: /images/css-brasil-vinhetas.png
tags: criando vinhetas, séries, parte 1
example_url: https://codepen.io/clovisneto/full/dOjKmz/
is_box_featured: true
---

Faaaaaaaaaaaaaaaaala galeeeera! Depois dos últimos feedbacks super positivos que recebi em relação ao nosso primeiro post da série criando vinhetas animadas em CSS, eu não poderia deixar o ano acabar sem disponibilizar um mega post para vocês.

<br>

_Estou escrevendo este post assistindo [Man of Tai Chi](http://www.adorocinema.com/filmes/filme-196754/), até que está legasinho =D_

<figure class="center-txt">
	<img src="/images/css-brasil-animated-intro.gif" alt="Slideshow com efeito de circo elástico usando apenas CSS3">
</figure>

## Qual será nossa primeira animação?

Como foi falado no último post da série (caso você não chegou a ler, sugiro que [clique aqui](http://cssbrasil.org/criando-vinhetas-animadas-em-css) =D), iremos começar nossos primeiros exemplos explorarando animações nos elementos de textos.

<br>

Para começar, iremos tomar como referência o nome do nosso blog: <span class="text-note">CSS Brasil</span>, como no gif a cima. Note que temos cada letra do 'C'S'S' se movimentando singularmente e o 'Brasil' se destacando no exemplo. Neste caso, teremos a seguinte marcação HTML:

<script src="https://gist.github.com/clovisdasilvaneto/521e9c345447a1a276822260b9ccfbbb.js"></script>

Separamos cada letra do 'C'S'S' com uma tag "span", para poder manipular o movimento de cada uma, e o 'Brasil' deixaremos dentro de uma tag "p" para que ele fique destacado.

_Assim podemos seguir para a parte mais interessante e que eu amo._

## CSS <3

Começaremos colocando as tags "p" e "span" com um <span class="text-note">display: inline-block</span>, para que os textos não quebrem de linha, e aplicaremos uma técnica de <span class="text-note">text-shadow</span>, que funciona da seguinte maneira: _offset-x | offset-y | blur-radius | color_. Onde:

<br>

- <b>offset-x</b>: É o deslocamento da sombra no eixo-x, usando unidades de medidas. Por exemplo 1px.
- <b>offset-y</b>: É o deslocamento da sombra no eixo-y, usando unidades de medidas. Por exemplo 1px.
- <b>blur-radius</b>: O quanto de distorção que a sombra terá, quanto maior a unidade de medida informada, maior a distorção que seu texto terá.
- <b>color</b>: A cor da sombra, podendo ser hexadecimal, rgb, rgba, hsla, etc...

<script src="https://gist.github.com/clovisdasilvaneto/4690f213eab68c1f462e644c807d7aca.js"></script>

Mantemos a cor da sombra <span class="text-note">transparent</span>, pois quando fomos transicionar a cor deste elemento, ele surgirá com um efeito blur. Como no exemplo abaixo:

<div class="bordered">
	<input type="checkbox" id="ts" hidden />
	<p id="exemplo-1">CSS Brasil</p>
	<label for="ts" class="btn">Aplicar transição</label>
	<br>
	<br>
</div>

Repare que no exemplo do post, estamos deslocando as sombras das letras 'C'S'S' e duplicando elas através de uma técnica de duplicação de elementos que pode ser compreendida no post [box shadow e suas mágicas](http://clovisdasilvaneto.github.io/box-shadow-e-suas-magicas/), escrito em meu blog pessoal. Agora vamos adicionar uma animação para que as letras 'C'S'S' apareçam com um efeito blur:

<script src="https://gist.github.com/clovisdasilvaneto/4c0a90906f302e5fb6961c6711676f28.js"></script>

Não colocamos o estado inicial do elemento na animação, pois já está setado no seu seletor. Adicionamos a valor forwards na propriedade animation, para quando a animação terminar, ela não volte para o estado inicial.

Agora precisamos animar as letras 'C'S'S' para que fiquem subindo e descendo. Note que já existe uma animação ligada a elas (enterFromTop) e não podemos adicionar mais estados para a animação atual, pois ela só roda 1 vez, e nós queremos que as letras fiquem subindo e descendo. Logo adicionaremos mais uma animação na propriedade <span class="text-note">animation</span> separada por vírgula, para que duas animações rodem ao mesmo tempo, no mesmo elemento:

<script src="https://gist.github.com/clovisdasilvaneto/717a2436c176f49577a01d9312898d2a.js"></script>

Nossas letrinhas estarão sempre se movendo pra cima e para baixo, mas repare que elas não se movimentam alternadamente, e sim ao mesmo tempo. Isto é fácil de se resolver usando apenas um <span class="text-note">animation-delay</span> para cada 'span':

<script src="https://gist.github.com/clovisdasilvaneto/feef5b23a04e9bc341d6b3b4bd13e08f.js"></script>

Desta forma, teremos um atraso inicial diferente para o primeiro, segundo e terceiro 'spans'.

#### Animando o 'Brasil'

Até agora temos o 'C'S'S' animado, falta animar o 'Brasil' e colocar alguns efeitos especiais *_* ...

<br>

Nosso texto até agora está com uma cor <span class="text-note">transparent</span> e com um <span class="text-note"> text-shadow: 0 0 221px transparent;</span>, precisamos animá-lo a cor dele da mesma forma que fizemos com os nossos 'C'S'S':

<script src="https://gist.github.com/clovisdasilvaneto/585d9d516f08d583305e64b68b65cb48.js"></script>

O próximo passo é adicionar a bolinha que pinta o 'Brasil', para isto iremos cria-la utilizando o pseudo-element <span class="text-note">:after</span>, para não poluir nosso código HTML:

<script src="https://gist.github.com/clovisdasilvaneto/703d3e770290b4972dbcc79f3e5c9146.js"></script>

As linhas CSS acima são bem simples, criamos uma bolinha pequena em cima do 'Brasil', ao seu lado direito com um fundo verde, um <span class="text-note">box-shadow</span> mais escuro, para dar um efeito de clique na bolinha, e um <span class="text-note">transform: scale(0);</span> para que ela fique escondida e apareça num efeito de scale.

Em seguida criaremos sua animação e atualizaremos a animação do 'Brasil', para que fique sincronizada com a animação da bolinha:

<script src="https://gist.github.com/clovisdasilvaneto/0b2a350c254b758481eb3e0b0f8eae4c.js"></script>

Desta forma a cor do 'Brasil' mudará na hora que a bolinha aparece, dando um efeito de pintura ao nosso texto. Note que dupliquei o <span class="text-note">text-shadow</span> mudando a cor e o blur, para que a segunda camada de sombra fique destorcida, lembrando um efeito neon.

<p class="citation">A parte de baixo, irei deixar como um desafio! Use as técnicas aprendidas até agora para criar as listrinhas de baixo do texto, indo e voltando. Comente no post o link do seu exemplo (pode ser no [Codepen](http://codepen.io/pen/)), e no próximo post da série, explicarei a solução que utilizei! \o/\o/</p>

<br>

_Um forte abraço, e até a próxima =D_