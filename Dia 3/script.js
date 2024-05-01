let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt('Digite seu nome: ')
idade = parseInt(prompt('Digite a sua idade: '))
altura = parseFloat(prompt('Digite a sua altura: '))
peso = parseInt(prompt('Digite a seu peso: '))


let anoNascimento = 0
anoNascimento = 2024 - idade

let imc = 0
imc = peso / (altura ** 2)

console.log('Olá, ' + nome + ' você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ' tem ' + altura + ' de altura e ' + peso + ' kg. Logo seu IMC é: ' + imc + 'kg/m²' )
