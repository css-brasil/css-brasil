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

Eva é uma é uma robô meiga, fofa, maravilhosa, criada pela [Pixar](https://pt.wikipedia.org/wiki/WALL%C2%B7E). Como boa fã, da Pixar, e do CSS, criei uma fanart dela usando formas em CSS.
Nesse tutorial será mostrado como adicionar animações na ilustração, então nossa Eva ganhará vida.

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


``` css
.shadow {
  animation-name: shadow;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
```

``` css
@keyframes shadow {
	100% {
    transform: scaleX(1.2);
  }
}
```
