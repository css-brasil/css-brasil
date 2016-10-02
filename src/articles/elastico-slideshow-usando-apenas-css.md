---
title: Slideshow com efeito elástico usando apenas CSS3
template: articles/single.hbt
url: criando-efeito-de-glitch-com-css
date: 2016-09-20
description: Baseado em um exemplo do Codrops, criamos este lindo slide sem nenhuma linha de javascript
author: Clóvis Neto
featured: /images/elastic-circle.jpg
tags: glitch, css clip, animações
is_box_featured: true
example_url: http://cssbrasil.org/examples/css-elastic-slide/
---

Faaala galera! Hoje voltamos com mais um mega post do CSS Brasil, desta vez iremos conhecer algumas técnicas utilizadas para criar "ações" nos nossos componentes por meio do CSS \o/\o/

<br>

Como [POC](https://en.wikipedia.org/wiki/Proof_of_concept), desenvolvi um exemplo de slideshow elástico, onde toda a sua interação é controlada por meio do CSS =D

<br>

*Let's Go!*

<br>

<figure class="center-txt">
	<img src="/images/pure-css-elastic-slideshow.gif" alt="Slideshow com efeito de circo elástico usando apenas CSS3">
</figure>

### Conhecendo nossos amigos: <span class="green">:checked</span> e <span class="green">~</span>

Estes são uns dos seletores que eu mais gosto no CSS e quem me conhece sabe que eu falo bastante deles. Antes de partir para o código vamos dar uma olhada no conceito desses carinhas.

<br>

O seletor <span class="green">:checked</span> seleciona o elemento que está se encontra no estado checado, podemos utilizá-lo em input's do tipo checkbox ou radio, já o <span class="green">~</span> seleciona os próximos irmãos do elemento declarado antes do seletor. Ex: <span class="green">li:nth-child(2) ~ li</span> irá selecionar todos os <span class="green">&lt;li&gt;</span> posteriores ao segundo <span class="green">&lt;li&gt;</span> do documento que sejam filhos do mesmo pai, ou seja, que estejam dentro da mesma <span class="green">&lt;ul&gt;</span>

<br>

Bem simples, não é? Mas é importante entender o que esses seletores fazem, porque será por meio deles que iremos controlar as animações do nosso slide.

### Estrutura HTML

Neste exemplo a nossa marcação HTML será um pouquinho mais longa do que as últimas que vimos nos post's anteriores, observe o código abaixo:

<script src="https://gist.github.com/clovisdasilvaneto/ab96de6a73000f59169cb488840257b6.js"></script>

Apesar de ser um pouco longa, esta estrutura é fundamental para que a troca dos slides funcione corretamente.Vamos analisar o código por partes.

<script src="https://gist.github.com/clovisdasilvaneto/85a4a4041a8785eae08c7fddc72cad01.js"></script>

Os input's acima, serão responsáveis por controlar o estado de cada item do slide e no nosso CSS iremos ficar "escutando" o seu estado de "<span class="green">:checked</span>", para exibir o item do slide que corresponde ao input checado.

<p class="citation">
	Como queremos que apenas um item fique visível para o usuário, utilizaremos input's do <span class="green">type="radio"</span>.
</p>

<script src="https://gist.github.com/clovisdasilvaneto/4b7f5e48ba2158805c4170bd32307687.js"></script>

Este é o trecho mais interessante do nosso HTML, eu ocultei as outras <span class="green">&lt;li&gt;</span> para o código não ficar muito extenso.

<br>

Basicamente as label's que estão fora da nossa tag <span class="green">&lt;figure&gt;</span> terão a função de passar o nosso slide, pois os radios ficarão ocultos. Note que no seu atributo <span class="green">for</span> colocamos o id de qual slide iremos exibir quando o usuário clicar no <span class="green">&lt;label&gt;</span>.

<br>

Dentro da nossa tag <span class="green">&lt;figure&gt;</span> temos um <span class="green">&lt;label&gt;</span> que será a nossa setinha que fica ao lado do circulo do slide.

<br>

*Chega de marcação HTML e vamos para a melhor parte do post... CSS ♥ ❤ ❥ ❣ ❦ ❧*

<br>

### CSS

A estilização é bem simples, vai da criatividade de cada um =D

<script src="https://gist.github.com/clovisdasilvaneto/e88a2131c586fbe4b177d0e21803dca5.js"></script>

Neste trecho a cima, é importante notar que colocamos um <span class="green">z-index: 1</span> nas nossas <span class="green">li</span> para que elas fiquem por baixo do slide visível e adicionamos um <span class="green">transform: translateX(300%)</span> na classe <span class="green">.slide-item</span>, logo todos os itens ficarão escondidos no canto direito da tela.

<br>

Seguindo a estilização acima, teremos algo parecido com isto:

<figure class="center-txt">
	<img src="/images/developmenting-elastic-slide.png" alt="developmenting elastic slide">
</figure>

Agora só precisamos exibir o item referente ao input que está checado... Conseguimos capturar este estado por meio do seletor <span class="green">:checked</span>

<script src="https://gist.github.com/clovisdasilvaneto/085d0f49f11286b52643312a1589db7d.js"></script>

Note que estamos usando os dois seletores que vimos no inicio do post, <span class="green">#slide-1:checked ~ ul li:nth-of-type(1)</span> desta forma conseguimos selecionar o primeiro <span class="green">&lt;li&gt;</span> que é filho da <span class="green">&lt;ul&gt;</span> que é irmão do <span class="green">&lt;input id="slide-1"&gt;</span>. Em seguida zeramos o <span class="green">translateX</span> do nosso <span class="green">.slide-item</span> e o colocamos com um <span class="green">visibility: visible</span>.

<p class="citation">
	O mesmo é feito para os outros <span class="green">&lt;li&gt;</span>, apenas mudamos o <span class="green">id</span> do <span class="green">input</span> checado e o indice dentro da propriedade <span class="green">li:nth-child(1)</span>... ex: <span class="green">#slide-2:checked ~ ul li:nth-of-type(2)</span>
</p>

Como temos um <span class="green">transition</span> aplicado no <span class="green">.slide-item</span>, ele aparecerá se deslocando levemente para a esquerda =D
<br>
Falta exibir as legendas, mas como já sabemos capturar o <span class="green">&lt;li&gt;</span> referente ao input checado, não teremos nenhum problema nesta tarefa.

<script src="https://gist.github.com/clovisdasilvaneto/2c96064b6276f87d8c955b6c8d19a75e.js"></script>

Já estamos na reta final do slide (uhuuu), agora iremos criar as animações das nossas bolinhas laterais, o que é bem simples, usaremos um <span class="green">scale()</span> e nada mais:

<script src="https://gist.github.com/clovisdasilvaneto/d0ac26694c9d1c7bd1ba1ab9b2ad40eb.js"></script>

Para finalizar adicionaremos as animações nas bolinhas, apenas quando o item estiver visível, como fizemos anteriormente:

<script src="https://gist.github.com/clovisdasilvaneto/21acdf6e036e3104abc24aafc76304c7.js"></script>

*E voalá, concluímos nosso slide elástico \o/\o/\o/*

<br>

É muito importante entender os conceitos destas técnicas CSS e treinar bastante, pois por meio delas podemos fazer coisas incríveis!

<br>

*Um abraço e até a próxima!*