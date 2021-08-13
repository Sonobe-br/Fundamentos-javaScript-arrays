const alunos = ['Anita','Pedro','Bruna','Melissa']
const mediasDosAlunos = [10, 8, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomesENotas = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0] [indice] + ', a sua média é ' + listaDeNotasEAlunos[1] [indice]
    } else {
        return 'O aluno não esta cadastrado'
    }
}
console.log(exibeNomesENotas('Pedro'))
console.log(exibeNomesENotas('Anita'))
console.log(exibeNomesENotas('Daniel'))

//includes retorna um valor booleano
//indexOf = 3