"use strict";

/*
//--------------------------------------------
//----------CONFIGURAÇÃO E TESTE----------//
console.log('Hello World!')

//--------------------------------------------
//----------CONST E LET----------/
let car = 'fusca'
car = 'jipe Samurai'                            //O let deixa reatribuir o valor 
console.log(car)

const person = { name: 'Spanholi'}              //Mutação usando CONST
person.name = 'Julio'
console.log(person)

//--------------------------------------------
//----------ARRAY----------// 
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (number, index) {      //Para cada item na Array, vamos executar a função
    console.log(number, index)
})

//Imutabilidade
const numbers = [1, 2, 3, 4, 5]                 //[1+1, 2+1, 3+1, 4+1, 5+1]
const newNumbers = numbers.map(function(number){
    return number + 1 
})
console.log(newNumbers)                         //Modificada
console.log(numbers)                            //Original

//reduce - reduz tudo para uma única variável
const numbers = [1, 2, 3, 4, 5]                 
const total = numbers.reduce(function (total, next) {  
    return total + next
})
console.log(total)

const todos = [
    {text: 'Lavar a louça', done: false},
    {text: 'apanhar o lixo', done: true},
    {text: 'dobrar as roupas', done: true},
]
const doneTodos = todos.filter(function (todo){     //filter - filtrar alguma informação
    return todo.done == true
})
console.log(doneTodos)

const todos = [
    {text: 'Lavar a louça', done: false},
    {text: 'apanhar o lixo', done: true},
    {text: 'dobrar as roupas', done: true},
]
const find = todos.find(function (todo){        //find - retorna um único objeto 
    return todo.text == 'dobrar as roupas'
})
console.log(find)

const cars = ['fusca', 'hb20', 'civic']
const hasFusca = cars.some(function (car){      //True or False
    return car == 'fusca'
})
console.log(hasFusca)                           //True

//--------------------------------------------
//----------ARROW FUNCTIONS----------//
const todos = [
    {text: 'Lavar a louça', done: true},
    {text: 'apanhar o lixo', done: false},
    {text: 'dobrar as roupas', done: false},
]
//Função anônima (não tem um nome definido)
    const doneTodos = todos.filter((todo)=>todo.done)   //Retorno implicito
    console.log(doneTodos)

//Função normal (sem parâmetro)
const anything = ()=>{
    console.log('Hello World!')
}
anything()

//--------------------------------------------
//----------PARÂMETRO----------//
function sayHello(name = "Julio"){
    console.log('Olá '+ name)
}
//usando arrow functions
const sayHello = (name = "Julio") => console.log('Olá '+ name)
sayHello()

//--------------------------------------------
//----------TEMPLATE STRINGS----------//
//Uma nova maneira de fazer concatenação usando js
const showProduct = (product, price) => {
    console.log(`O valor da ${product.toUpperCase()} é R$ ${Math.round(price)}, pode comprar.`)}
                                     //Letra maiuscula     //Arredonda valor                                 
showProduct('Camisa', 20.7)

//-------------------------------------------
//----------OBJECT SHORT SYNTAX----------//
const name = 'camisa'
const price = 20
const product = { 
    name: name,             //name,
    price: price,           //price,
    inStock: true           
}
console.log(product)

//-------------------------------------------
//----------DESESTRUTURAÇÃO----------//
//Selecionar o necessário
const fruits = ['laranja', 'morango', 'maça']
const a = fruits[0]         
const b = fruits[1]
console.log(a, b)
//Utilizando o método de desestruturação
const fruits = ['laranja', 'morango', 'maça']
const [a, b] = fruits
console.log(a, b)

//Outro método
const person = {
    firstName: 'Julio', 
    secondName: 'Spanholi', 
    age: 20, 
    address:{
        city: 'Cacique Doble',
        region: 'RS',
    },
}
const {firstName, secondName, address:{city}} = person
console.log(firstName, secondName, city)

//-------------------------------------------
//----------OPERADORES REST/SPREAD----------//
//----------REST----------//
const numbers = [1, 2, 3, 4, 5]
const [first, second, ...rest] = numbers            //Vai pegar todo o restante - 3, 4, 5
console.log(rest)

//Para objetos
const person = {
    name: 'Julio', 
    age: 20, 
    height: 1.80,
    company: 'Compasso',
}
const {name, ...rest} = person
console.log(rest)

//Caso de uso - conceito de rest
const sum = (...params) => {
    return params.reduce((total, next)=> total + next)
}
console.log(sum(5, 5, 10, 10))
*/
//----------SPREAD----------//
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [5, 6, 7, 8, 9, 10];
var numbers = [].concat(numbers1, numbers2); //Pegando o conteúdo e despejando em numbers

console.log(numbers); //Uma úniva Array
