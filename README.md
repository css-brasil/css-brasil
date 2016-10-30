# CSS Brasil

> CSS Brasil website

## Rodando o website localmente

**1 -** Fork e Clone o repositório.

```sh
$ git clone https://github.com/css-brasil/css-brasil.git
```

**2 -** Instale as dependências:

```sh
$ cd css-brasil
$ npm install
```

**3 -** Inicie a plicação em [localhost:8080](http://localhost:8080/)

```sh
$ gulp serve
```

## Adicionando um novo artigo

**1 -** Crie um arquivo `.md` (markdown) dentro da pasta `src/articles/`

Ex: `criando-menu-off-canvas.md`

**2 -** Adicione um cabeçalho com as configurações desejadas:

```
---
title: Seguuura coração, o CSS Brasil chegou!
description: Com exemplos fantásticos e artigos incríveis, criamos o CSS Brasil com a expectativa de compartilhar conhecimento e promover taletos.
date: 2016-09-6
draft: true
template: articles/single.hbt
url: exemplo-de-post
featured: /images/css-brasil-wrapper.jpg
author: Clóvis Neto
tags: Pessoal
---
```

**3 -** Escreva seu artigo :)

Veja um [exemplo aqui](https://raw.githubusercontent.com/css-brasil/css-brasil/master/src/articles/exemplo-de-post.md).

## Gulp Tasks

- `$ gulp build` - Compila todos os arquivos e gera o website estático na pasta `build/`.
- `$ gulp serve` - Inicia um servidor estático com livereload.

## Contribua :)

Busque em nossas [issues](https://github.com/css-brasil/css-brasil/issues/1) os próximos passos  ;)
<br>
Deseja contribuir? [Siga nossas instruções](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/CONTRIBUTING.md).

## Licença

[MIT License](https://github.com/css-brasil/css-brasil/blob/master/LICENSE.md) © [Clóvis Neto](http://clovisdasilvaneto.github.io)
