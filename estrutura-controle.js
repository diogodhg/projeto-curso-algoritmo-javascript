// na media primeiro se soma o que está no () e depois divide pelo que está fora
var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a nota 01 do aluno")
nota02 = prompt("Digite a nota 02 do aluno")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >= 50)
    alert("Aprovado!" + nome)

    else
    alert("Reprovado!" + nome)
