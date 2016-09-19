---
title: Como criar um efeito de GLITCH com CSS3
template: articles/single.hbt
url: como-cirar-um-efeito-de-glitch-com-css3
date: 2016-09-20
description: Aprenda a criar um efeito de glitch apenas utilizando CSS3 com keyframes e algumas técnicas de clip
author: Clóvis Neto
featured: /images/brasil.png
tags: glitch, css clip, animações
is_box_featured: true
example_url: https://codepen.io/clovisneto/full/bwZoqb/
---

Semana passada estava navegando pelo codepen e me deparei com alguns efeitos glitch, feitos em javascript, bastante interessante. Resolvi então desenvolver algo parecido mas que seja utilizando CSS3.

<figure class="center-txt">
	<img src="/images/brasil-animado.gif" alt="Brasil in GLITCH CSS3">
</figure>

O conceito é bem simples, iremos criar duas camadas de texto 'fakes' e cortaremos dois pedaços do texto que sobrescrevem o texto original, como mostra a figura a seguir:

<figure class="center-txt">
	<img src="/images/brasil-glitch-wireframe.jpg" alt="Brasil GLITCH Efect wireframe">
	<figcaption class="legend">*Wireframe do nosso efeito*</figcaption>
</figure>

## Mãos a obra o/

A estrutura html é muito simples, só iremos precisar de um parágrafo e faremos os cortes com os pseudos elementos <span class="green">::before</span> e <span class="green">::after</span>.

<script src="https://gist.github.com/clovisdasilvaneto/8921bb906361c85452bcfba17a0ff19b.js"></script>

Para obter o efeito a cima, deslocaremos as camadas para a direção que queremos distorcer o texto <span class="green">2px</span> negativos a esquerda e a direita dos seus respectivos filhos (<span class="green">::before</span> e <span class="green">::after</span>) utilizaremos a propriedade <span class="green">clip</span> para poder cortar os textos e animar a posição que o corte se encontra, obtendo o efeito de GLITCH desejado.

<script src="https://gist.github.com/clovisdasilvaneto/71babafa6b1270845ead953f9e407077.js"></script>

Note que colocamos a cor de fundo para a mascara sobreponha o texto original. Seguindo esta base, conseguimos obter o seguinte estado:

<figure class="center-txt">
	<img src="/images/brasil-inital-state.png" alt="Brasil GLITCH efect initial state">
</figure>

Agora é só aplicar um delay em cada um dos cortes e animar as suas respectivas posições, com a propriedade <span class="green">clip: rect</span>.

<script src="https://gist.github.com/clovisdasilvaneto/8d8ef874e08b1f5c7dd768e633671c52.js"></script>

<p class="danger-note">
	De acordo com o site da MDN, o recurso da propriedade <span class="yellow text-note">clip</span> está depreciado, mas você pode utilizar a propriedade [clip path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) como uma alternativa.
</p>

O interessante desta técnica é que podemos obter efeitos diferenciados de GLITH, este é só um get started. Caso você queira aperfeiçoar um pouco mais, aconselho dar uma olhadinha nos exemplos fantásticos do [codepen](http://codepen.io/search/pens/?q=GLITCH%20&limit=all&order=popularity&depth=everything&show_forks=false).