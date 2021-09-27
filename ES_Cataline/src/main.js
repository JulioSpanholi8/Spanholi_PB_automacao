//----------CONFIGURAÇÃO E TESTE----------//
console.log('Hello World!')


//----------CONST E LET----------//
const person = { name: 'Spanholi'}
person.name = 'Julio'
console.log(person)


//----------ARRAY----------// 
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (number, index) {
    console.log(number, index)
})

//const numbers = [1, 2, 3, 4, 5]
//const total = numbers.reduce(function (total, next) {
//    return total + next
//})
//console.log(total)

const todos = [
{text: 'Lavar a louça', done: true},
{text: 'apanhar o lixo', done: true},
{text: 'dobrar as roupas', done: true},
]
const doneTodos = todos.filter(function (todo){
    return todos.text == 'dobrar as roupas'
})
console.log(doneTodos)

const cars = ['fusca', 'hb20', 'civic']
const hasFusca = cars.some(function (car){
    return car == 'fusca'
})
console.log(hasFusca)


//----------ARROW FUNCTIONS----------//
for(let i = 0; i < 10; i++){
    console.log(i)
}

const anything = ()=>{
    console.log('Hello World!')
}
anything()

//Função anônima 
const todos = [
    {text: 'Lavar a louça', done: true},
    {text: 'apanhar o lixo', done: false},
    {text: 'dobrar as roupas', done: false},
]
    const doneTodos = todos.filter((todo)=> todo.done)
    console.log(doneTodos)


//----------PARÂMETRO----------//
//function sayHello(name = "Julio"){
//    console.log('Olá '+ name)
//}

const sayHello = (name = "Julio") => console.log('Olá '+ name)
sayHello()