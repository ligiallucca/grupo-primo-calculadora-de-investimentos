# Calculadora de Investimentos - Grupo Primo


## Introdução
Este é um projeto de teste para vaga de FrontEnd para o Grupo Primo, objetivo é ajudar investidores como João a visualizar o rendimento de seus investimentos ao longo do prazo. Nossa calculadora permite que o cliente informe um valor e um prazo, comparando o desempenho de um Fundo Arca do Grupo Primo com a Taxa Selic.

[Veja os detalhes aqui](./documentation/CHALLENGE_PRESENTATION.md) ou no [repositório original](https://gist.github.com/gp-breno/4b2262f135d24367e78e1be6db2e505c) .



## Planejamento

1. Desenvolvimento do layout proposto no Figma.  [Ler documentação](./documentation/PHASE_ONE_LAYOUT.md)
2. Implementação da lógica;  [Ler documentação](./documentation/PHASE_TWO_APLICATION_LOGIC.md)
3. Testes unitários;
4. Personalização do layout proposto;


## Decisões técnicas

Vue3 na última versão com typescript;

SASS como processador de CSS para otimizar o uso de variáveis e funções, repetindo menos código e também facilitando a manutenção.








# calc-invest-gp

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
