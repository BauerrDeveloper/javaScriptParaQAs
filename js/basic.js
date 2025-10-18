console.log("Imprime o texto no console do navegador. Olá, Java Script!")

var userName = 'Rodrigo Paulo Bauernfeind'

document.getElementById('user-name').innerHTML = userName

var nome = 'Rodrigo Paulo Bauernfeind'
var idade = 26
var idade2 = 10
var idade3 = '26'
var idade4 = '10'
var frase = 'Japão é o melhor time do mundo'
var n1 = 5
var n2 = 3

console.log("Nome: " + nome)
console.log("Dessa maneira concatena os valores das idades: " + idade + idade2)
console.log("Soma das idades: " + (parseInt(idade3) + parseInt(idade4)))
console.log("Troca de palavra na frase: " + frase.replace('Japão', 'Brasil'))
console.log("Multiplicação de números: " + n1 * n2)

function soma(n1, n2){
    return n1 + n2
}
var resultado = soma(5, 10)
console.log("Soma através de variável: " + resultado)
console.log("Soma através de função: " + soma(5, 10))

// function boasVindas(nome){
//     alert("Seja bem vindo, " + nome + "!")
// }
// boasVindas('Rodrigo')

function soma2(n1, n2){
 console.log(n1 + n2)
}
soma2(n1, n2)

// BDD (Behavior Driven Development) - Desenvolvimento guiado por comportamento

// Cenario 01: Saque com sucesso
// Dado que o saldo é 1000
// Quando o valor solicitado para saque é 500
// Então o saque é realizado com sucesso e o novo saldo é 500

// Cenario 02: Saldo insuficiente
// Dado que o saldo é 1000
// Quando o valor solicitado para saque é 1500
// Então o saque não é realizado e a mensagem "Saldo insuficiente" é exibida

// Cenario 03: Valor do saque superior ao permitido no dia
// Dado que o saldo é 1000
// Quando o valor solicitado para saque é 800
// Então o saque não é realizado e a mensagem "Valor do saque superior ao permitido no dia" é exibida

var saldo = 1000

function saque(valor) {
    if (valor > saldo ) {
        console.log("Saldo insuficiente.")
    } else if (valor > 700) {
        console.log("Valor do saque superior ao permitido no dia.")
    } else {
        saldo -= valor
        console.log("Saque realizado com sucesso. Novo saldo: " + saldo)
    }
}
saque(701)
console.log("Saldo atual: " + saldo)

//------------------- Exemplos de arrays ------------------
console.log("A partir daqui começa os exemplos de arrays")

var lista = ['maçã', 'banana', 'laranja']
console.log(lista)
console.log("Imprime o segundo item da lista: " + lista[1])
lista.push('uva')
lista.push('Abacate') //adiciona um item na lista
console.log("Adicionou um item na lista: " + lista) 
lista.pop() //remove o ultimo item da lista
console.log("Removeu o ultimo item da lista: " + lista)

lista = lista.filter(function(l){
    return l !== 'banana'
}) // remove item específico da lista
console.log("Removeu banana da lista: " + lista)

lista = lista.filter(function(l) {
    return l == 'maçã'
})
console.log("Lista filtrada para um único resultado: " + lista)

//--------------Exemplos de controles de repetição
console.log("A partir daqui começa os exemplos de controles de repetição")

var lista2 = ['maçã', 'banana', 'laranja', 'uva', 'abacate']

// Laço de repetição for
for (var i = 0; i < lista2.length; i++) {
    console.log("Item " + i + ": " + lista2[i])
}

lista2.forEach(function(lista2){
    console.log(lista2) // imprime o valor
})

for (var i in lista2){
    console.log(lista2[i]) // imprime o valor
}

for (var i in lista2){
    console.log(i) // imprime o índice
}

//Exemplos de objetos
console.log("A partir daqui começa os exemplos de objetos")

var rodrigo = {}

rodrigo.nome = 'Rodrigo Paulo Bauernfeind'
rodrigo.idade = 40
rodrigo.altura = 1.85
rodrigo.peso = 127

console.log(rodrigo)

var rodrigo2 = {
    nome: 'Rodrigo Paulo Bauernfeind',
    idade: 40,
    altura: 1.85,
    peso: 127
}
console.log(rodrigo2)

var rodrigo3 = {
    nome: 'Rodrigo Paulo Bauernfeind',
    idade: 40,
    altura: 1.85,
    peso: 127,
    mostrarNome: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos. Sua altura é ${this.altura}m e pesa ${this.peso}kg.`)
    }
}
rodrigo3.mostrarNome()

//------------------- Exemplos de constantes ------------------
console.log("A partir daqui começa os exemplos de constantes")

const pi = 3.14
console.log("Valor da constante pi: " + pi)

console.log("Tentando alterar o valor da constante pi...") // dá erro pois não pode alterar o valor de uma constante

pi = 3.1415 // dá erro, pois não pode alterar o valor de uma constante
console.log("Valor da constante pi alterado: " + pi)



//------------------- Exemplos de operadores de comparação ------------------
console.log("A partir daqui começa os exemplos de operadores de comparação")
// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1<2 //true
5<3 //false
4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true