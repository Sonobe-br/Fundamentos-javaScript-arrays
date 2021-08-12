                //indice 0 -> Anita
const alunos = ['Anita','Pedro','Bruna','Melissa']
                        //indice 0 desta array -> é 10   
const mediasDosAlunos = [10, 8, 9, 6]

//outra forma seria: let listaDeNotasEAlunos[['Anita','Pedro','Bruna','Melissa'],[10, 8, 9, 6]]
                            //0     //1
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
console.log(`${listaDeNotasEAlunos[0][0]} a sua média é ${listaDeNotasEAlunos[1][0]} e ${listaDeNotasEAlunos[0][1]}, a sua média foi ${listaDeNotasEAlunos[1][1]}. Congratulation!`)