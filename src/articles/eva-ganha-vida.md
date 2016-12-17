---
title: Eva ganha vida.
description: Criando uma simples animação com CSS.
date: 2016-11-30
template: articles/single.hbt
url: eve-ganha-vida
featured: /images/eva.png
author: Dalianny Vieira
tags: formas, animações
example_url: http://codepen.io/daliannyvieira/pen/gwvrvb
---

Eva é uma robô meiga, fofa, maravilhosa, criada pela [Pixar](https://pt.wikipedia.org/wiki/WALL%C2%B7E). Como boa fã, da Pixar, e do CSS, criei uma fanart dela usando formas em CSS.
Nesse tutorial será mostrado como adicionar animações na ilustração, então nossa Eva ganhará vida.

Todos os exemplos dessa postagem estão disponíveis no [Codepen](http://codepen.io/collection/XmZvqo/).
Você pode ler mais sobre animações no meu [guia de bolso](https://github.com/daliannyvieira/css-animations-pocket-guide) ou em outras postagens aqui mesmo no blog.

## Montando ~~o esqueleto~~ as peças

Eva foi montada com classes em HTML e formas geométricas estilizadas com CSS. O foco nesse tutorial é falar sobre as **animações**. Então vou assumir que você já sabe criar formas assim, mas se não souber ainda, você pode conferir outros posts sobre isso e aprender aqui.

<p data-height="400" data-theme-id="0" data-slug-hash="amqNZV" data-default-tab="css,result" data-user="daliannyvieira" data-embed-version="2" data-pen-title="Eva 00" class="codepen">See the Pen <a href="http://codepen.io/daliannyvieira/pen/amqNZV/">Eva 00</a> by Dalianny Vieira (<a href="http://codepen.io/daliannyvieira">@daliannyvieira</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Primeiros ~~passos~~ voos

Nossa Eva não foi construída com pés ou rodinhas. Ela precisa flutuar para voar por aí. Usando a propriedade `animation` vamos animar a classe responsável mostrar seu corpo.

<script src="https://gist.github.com/clovisdasilvaneto/73de6a007ee4ec2311e9ee2406272c6f.js"></script>

O código acima diz ao navegador que queremos que nossa Eva ganhe uma animação chamada up, flutue em um espaço de tempo de 0.4segundos, de forma infinita (não queremos que ela pare, não é? hihi), usando a função de tempo ease-in-out, em direção alternate, fazendo com que ela entre em um looping bonitinho e contínuo.

Cada animação precisa ser definida com um `@keyframe`, que diz **quando**, **onde** e **como** uma propriedade deve ser animada.

<script src="https://gist.github.com/clovisdasilvaneto/e8ad28572d2218d8ab851a6bf7935bf9.js"></script>

Nosso código diz apenas que quando nossa animação chegar em 100% Eva deve se movimentar até o ponto -25px no eixo Y, em um [plano cartesiano](http://brasilescola.uol.com.br/matematica/plano-cartesiano.htm]), da página.  

Agora Eva já flutua, mas para deixar a composição dela mais realista, precisamos modificar também sua sombra. Afinal, agora ela está se afastando do chão, e a sombra projetada sob ela precisa ser animada também. A animação shadow possui a mesma duração, iteração, função de tempo e direção da up.

<script src="https://gist.github.com/clovisdasilvaneto/3111baf8a9456fc542daf78110e04bef.js"></script>

Mas agora, ela não se movimenta, apenas tem o tamanho de sua largura transformada, em uma escala de 1.2.

<script src="https://gist.github.com/clovisdasilvaneto/925726a0eac0fc3a46ddc63dd299ad60.js"></script>

<p data-height="400" data-theme-id="0" data-slug-hash="KgQrNN" data-default-tab="css,result" data-user="daliannyvieira" data-embed-version="2" data-pen-title="Eva 01" class="codepen">See the Pen <a href="http://codepen.io/daliannyvieira/pen/KgQrNN/">Eva 01</a> by Dalianny Vieira (<a href="http://codepen.io/daliannyvieira">@daliannyvieira</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Movimentando os braços

A animação arm-left possui a mesma duração, iteração, função de tempo e direção da up e shadow.

<script src="https://gist.github.com/clovisdasilvaneto/23b66f0151bb71574103374d74f83255.js"></script>

O @keyframe, por sua vez, diz ao navegador que a animação ao alcançar 100% de sua duração deve fazer a forma arm-left (braço esquerdo) girar em 25 graus.

<script src="https://gist.github.com/clovisdasilvaneto/dd15f0172ee960c8a9cb0d9e92579190.js"></script>

A animação arm-right possui a mesma duração, iteração, função de tempo e direção da arm-left. Mas seu @keyframe diz que ela deve girar em -25 graus.

<script src="https://gist.github.com/clovisdasilvaneto/a3ac2732b92d66c636854c2c880afea2.js"></script>

<p data-height="400" data-theme-id="0" data-slug-hash="EgQykE" data-default-tab="css,result" data-user="daliannyvieira" data-embed-version="2" data-pen-title="Eva 02" class="codepen">See the Pen <a href="http://codepen.io/daliannyvieira/pen/EgQykE/">Eva 02</a> by Dalianny Vieira (<a href="http://codepen.io/daliannyvieira">@daliannyvieira</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Ganhando emoções

Nossa Eva já consegue flutuar por aí, e mexer seus bracinhos. Mas ainda não parece sentir emoções. Para deixa-la mais empática, vamos adicionar animações também em seus olhos.

A animação eye-left tem a mesma iteração, função de tempo e direção das anteriores, mas, sua duração é de 2 segundos.

<script src="https://gist.github.com/clovisdasilvaneto/f4d90c56f5e2955a17a5cc77bcbb5a3d.js"></script>

E seu @keyframe diz que ela deve girar em -22 graus.

<script src="https://gist.github.com/clovisdasilvaneto/88211b4edf368e8c462017ecc7652830.js"></script>

A animação eye-right tem a mesma duração, iteração, função de tempo e direção da eye-left.

<script src="https://gist.github.com/clovisdasilvaneto/1dbf761439e803d0963ea88bf2d5a62d.js"></script>

Enquanto seu @keyframe, por sua vez, indica que ela deve girar em 22 graus.

<script src="https://gist.github.com/clovisdasilvaneto/d2e427f31754760a548deac3c7f8e7c0.js"></script>

Fim! Se você acompanhou esse post até aqui, muito obrigada!
Você acompanhou uma robô fofinha ganhar vida! ♥ E uma geek se divertir muito no processo.

<p data-height="400" data-theme-id="0" data-slug-hash="gwvrvb" data-default-tab="css,result" data-user="daliannyvieira" data-embed-version="2" data-pen-title="Eva 03" class="codepen">See the Pen <a href="http://codepen.io/daliannyvieira/pen/gwvrvb/">Eva 03</a> by Dalianny Vieira (<a href="http://codepen.io/daliannyvieira">@daliannyvieira</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
