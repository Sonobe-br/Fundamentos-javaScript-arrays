const nomes = ['Juliana','João','Paulo','Ricardo','Luciana','Raquel','Flaviana','Renata','Barbara','Caio',
'Rafaela','Renato','Carlos','Guilherme','Marjorie','Laura','Isabela','Aline','Viviane','Beatriz','Renan','Daniel'];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
//O método slice aceita alguns parâmetros, e os métodos são funções e aceitam os parâmetros de acordo com elas precisam executar.
//slice = cortar

animaisDoAquario = ['baleia','polvo','golfinho','tubarão']

animaisDoAquario.splice(1,0,'peixe nemo');
animaisDoAquario.splice(3,2,'peixe beta');

console.log(animaisDoAquario)