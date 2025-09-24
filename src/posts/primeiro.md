---
img: '/neovim.png'
title: First post of markdown, how to make this work?
description: First post.
date: '2023-4-14'
tags:
  - sveltekit
  - svelte
  - supabase
  - react
  - javascript
  - tailwindcss
  - java
published: true
---

# Exemplo Completo de Funcionalidades do Markdown

Este arquivo demonstra diversas funcionalidades da linguagem de marcação Markdown.

---

## 1. Cabeçalhos

Os cabeçalhos são criados usando o caractere `#`. O número de `#` indica o nível do cabeçalho.

# Cabeçalho de Nível 1

## Cabeçalho de Nível 2

### Cabeçalho de Nível 3

#### Cabeçalho de Nível 4

##### Cabeçalho de Nível 5

###### Cabeçalho de Nível 6

---

## 2. Ênfase no Texto

Você pode formatar o texto para dar ênfase a ele.

- **Texto em negrito** é criado com dois asteriscos ou dois underscores: `**texto em negrito**` ou `__texto em negrito__`.
- _Texto em itálico_ é criado com um asterisco ou um underscore: `*texto em itálico*` ou `_texto em itálico_`.
- **_Texto em negrito e itálico_** pode ser criado com três asteriscos ou três underscores: `***texto em negrito e itálico***`.
- ~~Texto riscado~~ é criado com dois tils: `~~texto riscado~~`.

---

## 3. Citações (Blockquotes)

Para citar um texto, use o caractere `>`.

> Esta é uma citação. Você pode ter múltiplas linhas em uma mesma citação.
>
> > Citações também podem ser aninhadas.

---

## 4. Listas

### Listas Não Ordenadas

Use asteriscos (`*`), hifens (`-`) ou sinais de mais (`+`) para criar listas não ordenadas.

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2

* Item 3

- Item 4

### Listas Ordenadas

Use números seguidos de um ponto.

1. Primeiro item
2. Segundo item
3. Terceiro item
   1. Sub-item 3.1
   2. Sub-item 3.2

### Listas de Tarefas (Checklists)

Listas de tarefas são uma extensão do Markdown, muito comum em plataformas como o GitHub.

- [x] Tarefa concluída
- [ ] Tarefa pendente
- [ ] Outra tarefa a fazer

---

## 5. Código

### Código Inline

Para destacar um `código` no meio de uma frase, coloque-o entre crases.

### Blocos de Código

Para blocos de código maiores, use três crases para abrir e fechar o bloco. Você pode especificar a linguagem para obter realce de sintaxe (syntax highlighting).

```typescript
function saudacao(nome) {
	console.log(`Olá, ${nome}!`);
}

saudacao('Mundo');
```

## imagens

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')
