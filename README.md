# Calculadora de Investimentos - Grupo Primo



## Introdução
Este é um projeto de teste para vaga de FrontEnd para o Grupo Primo, objetivo é ajudar investidores como João a visualizar o rendimento de seus investimentos ao longo do prazo. Nossa calculadora permite que o cliente informe um valor e um prazo, comparando o desempenho de um Fundo Arca do Grupo Primo com a Taxa Selic.

## Regras e Considerações
- A Taxa Selic é assumida como 9,25% ao ano, enquanto o Fundo Arca rende 18% ao ano.
- Um ano é considerado como tendo 252 dias úteis.
- A rentabilidade ocorre apenas em dias úteis, desconsiderando feriados.
- Impostos sobre os investimentos são desconsiderados.
- A fórmula para o cálculo da rentabilidade é ```M = P . (1 + i) ^ t/252```, onde M é o montante final, P é o principal, i é a taxa de rendimento e t é o prazo em dias úteis.

## Design
Apresentamos alguns modelos que podem servir como referência para a interface da calculadora. Sinta-se à vontade para escolher e implementar um deles.

Link para o Figma:


https://www.figma.com/file/gKHVPjyRLAv0YW62CVI593/Calculadora-Grupo-Primo?type=design&node-id=1-254&mode=design&t=hCUspeVeOKVA855g-0

## Tecnologia e Frameworks
Você pode utilizar qualquer linguagem de programação, mas damos preferência às seguintes:
- TypeScript
- JavaScript

## Frameworks recomendados:
- Vue.js

## Diferenciais
- Implementação de testes de unidade.
- Testes de interface para garantir a usabilidade.
- Documentação detalhada do código.

## Requisitos
- Desenvolver uma versão web e mobile da calculadora.
- Incluir um README com instruções passo-a-passo para a execução.
- Cumprir o prazo estipulado de 2 a 3 dias corridos.
- Entregar o projeto em um repositório público (GitHub, GitLab ou Bitbucket).

## Planejamento

1. Desenvolvimento do layout proposto no Figma;
2. Implementação da lógica;
3. Testes unitários;
4. Personalização do layout proposto;
5. Testes de usabilidade e acessibilidade;

## Decisões técnicas

Vue3 na última versão com typescript;

SASS como processador de CSS para otimizar o uso de variáveis e funções, repetindo menos código e também facilitando a manutenção.

## Fase 1 - Desenvolvimento do layout

Comecei pelos componentes sem lógica (dumb components), como o header e o banner, optei por branches separadas e por PRs para ir registrando a adição de código e as decisões de cada parte.

Optei por fazer todos os componentes sem uso de libs de CSS, portanto deixei todos com o prefixo GP, indicando que eles foram feitos a mão para o grupo. 

Caso o projeto escalasse e fosse necessário Implementação de alguma lib de ui para componentes mais complexos, os componentes feito a mão teria o prefixo para tornar a identificação mais rápida para outra pessoa que fosse desenvolver também. 

### Sessão principal

Essa sessão contém a maior parte dos componentes da aplicação e todos componentes com lógica, ela contém:

2 componentes **GPForm** e **GPResults**

O **GPForm** contém:

* GPInput
* GPInputSlider

No layout proposto, o GPInput poderia ser um parágrafo que reinderizasse o valor da model do Range, porém optei por deixá-lo como input porque uma das melhorias de acessibilidade que quero fazer é a pessoa poder controlar tanto os valores pelo slider quanto digitando o valor precisamente.
Supondo que a pessoa queira investir algum valor mais "quebrado", por exemplo, R$ 117,36 e não tenha muita destreza com o slider, talvez seja melhor para ela digitar o valor no campo.


O **GPResults** contém o resultado do cálculo do possível investimento e todas as observações sobre taxas e afins propostas no layout, por enquanto, ele está em um componente só, mas pode ser que com os testes e demais melhorias ele seja mais componentizado.

(Nessa sessão, tive um contratempo com a energia elétrica, acabei fazendo mais de um componente por branch e acabei esquecendo de mudar de branch, fazendo um pull direto na main -- um erro, se estisse trabalhando em um projeto com mais gente...)

Até aqui, todo o desenvolvimento básico do layout com HTML e CSS está feito.




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
