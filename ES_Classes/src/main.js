/*
//----------------CLASSES----------------//
//-----------------------------------------
//----------FUNÇÃO CONSTRUTORA----------//
function Car(brand, price){
    this.brand = brand          //this - palavra chave, que faz referência ao próprio corpo da função
    this.price = price
} 
const civic = new Car('honda', 130)
const hb20 = new Car('hyundai', 80)
console.log(civic)
console.log(hb20)

//-----------------------------------------
//----------CLASSES----------//
//Conceito de classes
class Car{
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }
    run(){
        console.log('Correr')
    }
}
const civic = new Car('honda', 130)
civic.run()

//-----------------------------------------
//----------GET & SET----------//
class Person {
    constructor(name){
        this._name = name                    //_Propriedade privada 
    }
    get name(){                             //get - Obter uma propriedade da classe
        return this._name
    }
    set name(newName){                      //set - Manipular 
        this._name = newName
    }
}
const person = new Person('Julio Cesar')
person.name = 'João Silva'                  //Precisa do SET para não dar erro
console.log(person.name)

//-----------------------------------------
//----------MÉTODOS ESTÁTICOS----------//
//Chamar um método de uma classe, sem a utilização do NEW
class Calculator{
    static sum(a, b){                       //método static
        return a + b
    }
}
console.log(Calculator.sum(10, 5))

//Outro caso de uso 
class Person{
    constructor(firstName, secondName){
        this.firstName = firstName
        this.secondName = secondName
    }
    get fullName(){
        return Person.joinNames(this.firstName, this.secondName)
    }
    static joinNames(firstName, secondName){
        return `${firstName} ${secondName}`
    }
}
const person = new Person('Julio', 'Spanholi')
console.log(person.fullName)
*/
//---------------------------------------
//---------------HERANÇA---------------//
class Veiculo{
    constructor(rodas){
        this.rodas = rodas
    }
    acelerar(){                             //classe pai - Genérica 
        console.log('Acelerou')
    }
}
//Conceito de herança
class Moto extends Veiculo{
    constructor(rodas, capacete){
        super(rodas)     //new Veiculo(2)
        this.capacete = capacete
    }
    empinar(){                               //classe filho - Especifica
        console.log(`Empinou`)
    }
    taUsandoCapacete(){
        console.log(this.capacete)
    }
    acelerar(){                             //método especifico da moto
        super.acelerar() //faz referencia a classe pai                  
        console.log('acelerou muito')
    }
}

const bross = new Moto(2, true)
bross.taUsandoCapacete()
bross.acelerar()
bross.empinar()