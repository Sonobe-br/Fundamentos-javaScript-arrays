//const valorTotalDoSitio = (10000);
const listaDeNatal = ['Daniel','Anita','Pedro','Minéa','Yara','Sergio','Andrea','Sergio cunhado','Bruna','Silvia','Danilo','Rosana','Chico','Ivan','Melissa','Mariana','André','Tomas','Obatian','Paulo','Regina','Paulinho','Minoru','Miriam','Guilherme','Daniela','Miguel','Liva','Italo','Raquel','Luna','Henrique','Izabela']
let listaDePagantes = [10,10,10,0,10,10,10,10,10,0,0,10,10,10,10,10,10,10,10,0,0,0,10,10,10,10,10,10,0,10,10,10,10,0,0,0]
listaDeNatal.push('Rafael','Nisa','Simão');
const reprovados = listaDeNatal.filter((_,indice) => listaDePagantes[indice] < 1);

console.log(`Nomes que não confirmaram: ${reprovados}`)
console.log(listaDeNatal.length)
console.log(listaDeNatal)

/* valorMedio = (valorTotalDoSitio)/ listaDeNatal.length;

let valorMedioPorPessoa = (listaDeNatal[0] + listaDeNatal[1] + listaDeNatal[2] + listaDeNatal[3] + listaDeNatal[4] + listaDeNatal[5] + listaDeNatal[6] + listaDeNatal[7] + listaDeNatal[8] + listaDeNatal[9] + listaDeNatal[10] + listaDeNatal[11] + listaDeNatal[12] + listaDeNatal[13] + listaDeNatal[14] + listaDeNatal[15] + listaDeNatal[16] + listaDeNatal[17] + listaDeNatal[18] + listaDeNatal[19] + listaDeNatal[20] + listaDeNatal[21] + listaDeNatal[22] + listaDeNatal[23] + listaDeNatal[24] + listaDeNatal[25] + listaDeNatal[26] + listaDeNatal[27] + listaDeNatal[28] + listaDeNatal[29] + listaDeNatal[30] + listaDeNatal[31] + listaDeNatal[32]);
resultado = (valorTotalDoSitio)/ valorMedioPorPessoa.length
console.log(`O valor médio por pessoa será de ${valorMedio}`) */