# Calculadora de Investimentos - Grupo Primo


## Introdução
Este é um projeto de teste para vaga de FrontEnd para o Grupo Primo, objetivo é ajudar investidores como João a visualizar o rendimento de seus investimentos ao longo do prazo. Nossa calculadora permite que o cliente informe um valor e um prazo, comparando o desempenho de um Fundo Arca do Grupo Primo com a Taxa Selic.

[Veja os detalhes aqui](./documentation/CHALLENGE_PRESENTATION.md) ou no [repositório original](https://gist.github.com/gp-breno/4b2262f135d24367e78e1be6db2e505c) .



## Planejamento

1. Desenvolvimento do layout proposto no Figma.  [Ler documentação](./documentation/PHASE_ONE_LAYOUT.md)
2. Implementação da lógica;  [Ler documentação](./documentation/PHASE_TWO_APLICATION_LOGIC.md)
3. Testes unitários; [Ler documentação](./documentation/PHASE_THREE_UNIT_TESTS.md)
4. Personalização do layout proposto; [Ler documentação](./documentation/PHASE_FOUR.md)


## Decisões técnicas

Vue3 na última versão com typescript;

SASS como processador de CSS para otimizar o uso de variáveis e funções, repetindo menos código e também facilitando a manutenção.




## Setup da IDE Recomendado

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



## Como rodar o projeto

```sh
npm install
```

### Compilar e manter o "hot-reload"

```sh
npm run dev
```

### Checagem de Tipo, Compilar e Minificar para Produção

```sh
npm run build
```

### Rodando os testes [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint com [ESLint](https://eslint.org/)

```sh
npm run lint
```
