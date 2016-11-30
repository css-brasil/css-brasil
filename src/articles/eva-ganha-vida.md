---
title: Eva ganha vida.
description: Criando uma simples animação com CSS.
date: 2016-11-29
is_external: true
template: articles/single.hbt
url: eve-ganha-vida.md
featured:
author: Dalianny Vieira
tags: 
---

#Eva ganha vida

Eva é uma robô meiga, fofa, maravilhosa, criada pela [Pixar](https://pt.wikipedia.org/wiki/WALL%C2%B7E). Como boa fã, da Pixar, e do CSS, criei uma fanart dela usando formas em CSS.
Nesse tutorial será mostrado como adicionar animações na ilustração, então nossa Eva ganhará vida.

Todos os exemplos dessa postagem estão disponíveis no [Codepen](http://codepen.io/collection/XmZvqo/).
Você pode ler mais sobre animações no meu [guia de bolso](https://github.com/daliannyvieira/css-animations-pocket-guide) ou em outras postagens aqui mesmo no blog. 

##Montando ~~o esqueleto~~ as peças

Eva foi montada com classes em HTML e formas geométricas estilizadas com CSS. O foco nesse tutorial é falar sobre as **animações**. Então vou assumir que você já sabe criar formas assim, mas se não souber ainda, você pode conferir outros posts sobre isso e aprender aqui.

http://codepen.io/daliannyvieira/full/amqNZV/

##Primeiros ~~passos~~ voos

Nossa Eva não foi construída com pés ou rodinhas. Ela precisa flutuar para voar por aí. Usando a propriedade `animation` vamos animar a classe responsável mostrar seu corpo.

``` css
.eve {
  animation-name: up;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```

O código acima diz ao navegador que queremos que nossa Eva ganhe uma animação chamada up, flutue em um espaço de tempo de 0.4segundos, de forma infinita (não queremos que ela pare, não é? hihi), usando a função de tempo ease-in-out, em direção alternate, fazendo com que ela entre em um looping bonitinho e contínuo.

Cada animação precisa ser definida com um `@keyframe`, que diz **quando**, **onde** e **como** uma propriedade deve ser animada.

``` css
@keyframes up {
  100% {
    transform: translateY(-25px);
  }
}
```

Nosso código diz apenas que quando nossa animação chegar em 100% Eva deve se movimentar até o ponto -25px no eixo Y, em um [plano cartesiano](http://brasilescola.uol.com.br/matematica/plano-cartesiano.htm]), da página.  

Agora Eva já flutua, mas para deixar a composição dela mais realista, precisamos modificar também sua sombra. Afinal, agora ela está se afastando do chão, e a sombra projetada sob ela precisa ser animada também. A animação shadow possui a mesma duração, iteração, função de tempo e direção da up. 

``` css
.shadow {
  animation-name: shadow;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```

Mas agora, ela não se movimenta, apenas tem o tamanho de sua largura transformada, em uma escala de 1.2.

``` css
@keyframes shadow {
  100% {
    transform: scaleX(1.2);
  }
}
```
http://codepen.io/daliannyvieira/pen/KgQrNN

## Movimentando os braços

A animação arm-left possui a mesma duração, iteração, função de tempo e direção da up e shadow.

``` css
.arm-left {
  animation-name: arm-left;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```
O @keyframe, por sua vez, diz ao navegador que a animação ao alcançar 100% de sua duração deve fazer a forma arm-left (braço esquerdo) girar em 25 graus.

``` css
@keyframes arm-left {
	100% {
    transform: rotate(25deg);
  }
}
```
A animação arm-right possui a mesma duração, iteração, função de tempo e direção da arm-left. Mas seu @keyframe diz que ela deve girar em -25 graus.

``` css
@keyframes arm-right {
	100% {
    transform: rotate(-25deg);
  }
}
```

http://codepen.io/daliannyvieira/pen/EgQykE

## Ganhando emoções

Nossa Eva já consegue flutuar por aí, e mexer seus bracinhos. Mas ainda não parece sentir emoções. Para deixa-la mais empática, vamos adicionar animações também em seus olhos. 

A animação eye-left tem a mesma iteração, função de tempo e direção das anteriores, mas, sua duração é de 2 segundos.

``` css
.eye-left {
  animation-name: eye-left;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```
E seu @keyframe diz que ela deve girar em -22 graus.
``` css
@keyframes eye-left {
	100% {
    transform: rotate(-22deg);
  }
}
```

A animação eye-right tem a mesma duração, iteração, função de tempo e direção da eye-left.

``` css
.eye-right {
  animation-name: eye-right;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```

Enquanto seu @keyframe, por sua vez, indica que ela deve girar em 22 graus.
``` css
@keyframes eye-right {
  100% {
    transform: rotate(22deg);
  }
}
```
Fim! Se você acompanhou esse post até aqui, muito obrigada!
Você acompanhou uma robô fofinha ganhar vida! ♥ E uma geek se divertir muito no processo.

http://codepen.io/daliannyvieira/pen/gwvrvb
