const notas = [10, 6, 8, 5, 7]
notas.pop();
console.log(notas)

let medias = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;
console.log(`A média é ${medias}`)
/* método pop para remover o elemento e não possui nenhum parametro, que é uma particularidade do método. */

const idades = [43, 69, 87, 35, 27]
idades.unshift(39, 13);
console.log(idades)
/* Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor. */

const arrayVazia = [, , ,];
console.log(arrayVazia.length)
arrayVazia.push(78)
console.log(arrayVazia)
console.log(arrayVazia.length)
/* O JavaScript manteve as posições vazias e adicionou o 78 ao final do array. Após a execução, ele passou a ter 4 
posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante 
lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos. */

const jantarDeHoje = ['hamburguer', 'hot-dog', 'pizza']
jantarDeHoje.pop();
jantarDeHoje.pop();

jantarDeHoje.push('ovos fritos');
jantarDeHoje.push('salada cesar');
jantarDeHoje.push('maçã');

console.log(jantarDeHoje)
/* Alternativa correta! Certo! No jantar de hoje, a pizza e o cachorro quente não estão presentes por conta do 
código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na 
lista com comando push. */

const valorTotalDoSitio = (8600);
const listaDeNatal = ['Daniel','Anita','Pedro','Minéa','Yara','Sergio','Andrea','Sergio cunhado','Bruna','Silvia','Danilo','Rosana','Chico','Ivan','Melissa','Mariana','André','Tomas','Obatian','Paulo','Regina','Paulinho','Minoru','Miriam','Guilherme','Daniela','Miguel','Liva','Italo','Raquel','Luna','Henrique','Izabela'];
console.log(listaDeNatal.length)
//listaDeNatal.push('Sara');
console.log(listaDeNatal)

valorMedio = (valorTotalDoSitio)/ listaDeNatal.length;

let valorMedioPorPessoa = (listaDeNatal[0] + listaDeNatal[1] + listaDeNatal[2] + listaDeNatal[3] + listaDeNatal[4] + listaDeNatal[5] + listaDeNatal[6] + listaDeNatal[7] + listaDeNatal[8] + listaDeNatal[9] + listaDeNatal[10] + listaDeNatal[11] + listaDeNatal[12] + listaDeNatal[13] + listaDeNatal[14] + listaDeNatal[15] + listaDeNatal[16] + listaDeNatal[17] + listaDeNatal[18] + listaDeNatal[19] + listaDeNatal[20] + listaDeNatal[21] + listaDeNatal[22] + listaDeNatal[23] + listaDeNatal[24] + listaDeNatal[25] + listaDeNatal[26] + listaDeNatal[27] + listaDeNatal[28] + listaDeNatal[29] + listaDeNatal[30] + listaDeNatal[31] + listaDeNatal[32]);
resultado = (valorTotalDoSitio)/ valorMedioPorPessoa.length
console.log(`O valor médio por pessoa será de ${valorMedio}`)

let chefeDeFamilia = (14);
totalPorFecheDeFamilia = (valorTotalDoSitio)/ chefeDeFamilia;

console.log(totalPorFecheDeFamilia)