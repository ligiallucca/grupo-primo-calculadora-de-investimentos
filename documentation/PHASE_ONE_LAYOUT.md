## Fase 1 - Desenvolvimento do Layout

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