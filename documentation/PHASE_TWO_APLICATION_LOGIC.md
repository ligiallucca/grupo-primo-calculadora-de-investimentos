## Fase 2 - Implementação da Lógica

Nesta fase de implementação da lógica foi necessário o estudo das regras de negócio para definir a melhor forma de calcular os resultados, levando em conta o Investimento inicial, os aportes mensais e os meses.

  Para calcular quanto o valor inicial rende durante os meses, foi necessário criar uma fórmula de juros simples, que recebe o Investimento Inicial, multiplica por (1 + a taxa mensal) e eleva à potência da quantidade de meses em números: 

Em matemática:

investimentoIncial * (1 +  taxaMensal) ^^ quantidadeDeMeses.

Para calcular quanto os aportes mensais rendem durante os meses, foi necessário criar uma fórmula de juros composto, que recebe o valor a ser aportado por mês, multiplica por (1 + a taxa mensal) e eleva à potência da quantidade de meses em números menos um:

  Em matemática:

  aporteMensal * ((1+ taxaMensal) ^^ quantidadeDeMeses -1)

  E para chegar ao resultado final, basta somar o resultado da duas fórmulas.

  Nesta etapa também foi trabalhada a criação da propriedades dos componentes e de uma store reactiva

  Nesta fase, toda a lógica da aplicação de encontra no GPCalculator, que recebe os dados nessários do GPForm, resolve os cálculos, manda os resultados enquanto o GPResults "ouve" esses dados e pega os resultados e demais dados que ele precisa da store.
