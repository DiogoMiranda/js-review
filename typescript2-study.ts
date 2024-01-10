// interface e (Propriedade opcional  = email)
interface Product{
name: string
price: number
isAvailable: boolean
email?: string
}

function showDetails1(product: Product){
  console.log(`O nome do produto é ${product.name} e o preço eh ${product.price}`)
if (product.isAvailable) {
console.log('Produto disponível')
}
}

const shirt:Product = {
  name: "Camisa",
  price: 99.90,
  isAvailable: true

}

showDetails1(shirt)

// Readonly

interface car{
brand: string
readonly wheels: 4
}

const fusca: car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)

// generic
function showData<T>(arg: T): string{

  return `O valor é: ${arg}`
}
console.log(showData(5))
console.log(showData("teste"))
console.log(showData(true))
console.log(showData([1, "teste"]))

// Generic with constraint
function showProductName <T extends {name: string}>(obj: T){

return`o Nome do produto é: ${obj.name}`
}

const Myobj1 = {name: "Carro"}
const Myobj2 = {name: "Camisa", color: "red"}

console.log(showProductName(Myobj1))
console.log(showProductName(Myobj2))

// generics with interface
interface MyObject<T, U, Q> {
name: String
wheels: T
engine: U
color: Q
}
 
type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const Mycar = {name: "Fusca", wheels: 4, engine: 1.0, color: "Blue"}
const Mypen = {name: "Caneta", wheels: false,engine: false, color: "Pink"  }

console.log(Mycar)
console.log(Mypen)

// Type of poperator

const UserName: string = "Diogo"
const UserName2: typeof UserName = "João"

// conditional types
interface A {}

interface B {}

interface Teste {

  showName(): string
}

type myType = B extends A ? number : string
const someVar:myType = 5

type myTypeB = Teste extends {showNumber(): number} ? string : boolean


// class
class User{
  name!: string
  age!: number
}

const diogo = new User()
console.log(diogo)
diogo.name = "D10"

// constructor
class NewUser{
name
age

constructor(name: string, age: number){
  this.name = name
  this.age = age
}
}
const joao = new NewUser("João",1)
console.log(joao)

// Read Only
class Car1{
 name
 readonly wheels = 40
constructor(name: string){
  this.name = name
}
}
const Fusca = new Car1("Fusca")
console.log(fusca.wheels)

// Super 

class Machine{
name
constructor(name: string){
  this.name = name
}
}

const trator = new Machine ("Trator")

class KillMachine extends Machine{

  guns
  constructor(name: string, guns: number){
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillMachine ("Teste", 10)
console.log(destroyer)

// method

class Dwarf {
name

constructor(name: string){
  this.name = name
}
greeting(){

  console.log(`Hello ${name}`)
}
}

const jimmy = new Dwarf ("Pedro")
console.log(jimmy.name)

class Computer {
description
value

constructor(description: string, value: number){
  this.description = description

this.value = value
}

}

const mac = new Computer ("Mac", 10000)
const pc = new Computer("PC", 5000)

console.log(mac)
console.log(pc)

// getter 

class Person{
name
surname

constructor (name: string, surname:string ){
  this.name = name
  this.surname = surname  
}
get fullName(){
  return this.name + ""+ this.surname
}
}

const diogoMiranda = new Person("Diogo", "Miranda")
console.log(diogoMiranda)
console.log(diogoMiranda.fullName)

// setter 

class Coords{
  x!: number
  y!: number

  set fillX(x: number){
    if (x == 0){
      return
    }
    this.x = x
    console.log("X inserido com sucesso")
  }

  set fillY(y: number){
    if(y == 0){
      return
    }
    this.y = y
    console.log ("Y inserido com sucesso")
  }
  get getCoords(){
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()
myCoords.fillX = 15
myCoords.fillY = 10

console.log(myCoords)

// interfaces 

interface showTitle{
  itemTitle(): string
}

class blogPost implements showTitle{
  title 
  constructor(title: string){
    this.title = title
  }
  itemTitle(){
    return `O Titulo do post é: ${this.title}`
  }
}

const myPost = new blogPost("Hello World")
console.log(myPost.itemTitle())

// Override

class Base {
  someMethod(){
    console.log("Testando alguma coisa")
  }
}

class Nova extends Base{
  someMethod(){
    console.log("Testando outra coisa")
  }
}

const MyObject = new Nova()
MyObject.someMethod()

// public 

class C {
  public x = 10
}

class D extends C {

}
const cInstance = new C
console.log(cInstance.x)

const dInstance = new D
console.log(cInstance.x)

// protected

class E {
protected x = 10

protected protectedMethod(){
  console.log("Este é um metodo protegido")
}

}

class F extends E{
showX(){
  console.log("X:" + this.x)
}
showProtectedMethod(){
  this.protectedMethod()
}
}

const fInstance = new F
fInstance.showX

fInstance.showProtectedMethod()

// Private 

class Privateclass{
  private name = "private"
  showName (){
    this.name
  }

}
const pObj = new Privateclass()

  console.log(pObj.showName)

  // static members

  class staticMembers{
    static prop = "Teste static"

    static staticmethod(){
      console.log("ESte é um metodo estático")
    }
  }

  console.log(staticMembers.prop)
  staticMembers.staticmethod()



