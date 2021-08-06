//médias escolares: 10, 6.5, 8, 7.5
//1º) model
/* let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4)/4
console.log(media) */

//2º) model array
//Obs.: o primeiro número do indice é zero nas Arrays 
//indices:    //0  //1  //2  //3
const notas = [10, 6.5, 8, 7.5];
let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;
console.log(media);

//3º) model array
const numbers = [100.000, 10.000, 1.000, 100, 1];
let value = (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4])/ numbers.length;
console.log(value);

//4º model array
const quantidade = [50, 100, 150, 200];
let volume = (quantidade[0]+quantidade[1]+quantidade[2]+quantidade[3]) *quantidade.length;
console.log(volume);

//5º model
const n1 = [100, 100, 100, 100];
let n2 = (n1[0]*n1[1]*n1[2]*n1[3])/ n1.length;
console.log(n2);