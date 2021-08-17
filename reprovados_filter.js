const alunos = ['Anita','Pedro','Melissa','Bruna','Miguel','Luna','Livia','Thomas']
let notas = [8, 7 ,6 ,9 ,8.5 ,5 ,4.9 ,10]

const reprovados = alunos.filter((_,indice) => notas[indice] < 7)
//uma comparação sempre vai retornar como true or false
//o editor de texto VSC reclama dizendo que o parâmetro 'nome' declarado nunca foi lido, ou seja, não esta sendo usado no bloco da função.
//Neste caso o JavaScript tem um padrão para identidicar quando um parâmetro não esta sendo usado. Substituo o nome do parâmetro
//por 'underline'. O javascript sabe que aquele parâmetro existe, mas não será declarado no corpo da função.  
console.log(`Alunos reprovados: ${reprovados}`)
