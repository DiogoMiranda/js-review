const firstName: String = "Diogo"
console.log(firstName.toUpperCase())

let fullName: String
const lastName: string = "Miranda"

console.log(firstName + "" + lastName)

let a: boolean = false
console.log(a)
console.log(typeof a)
a = true 
console.log(a)

const ann: string = "Teste 1"
const iff = "Teste 2"

console.log(ann, iff)

let value1 = 10
let value2: string = value1.toString()

console.log(value2.toUpperCase())


let numbers: number[] = [1, 3, 3, 4]
numbers.push(7)
console.log(numbers[3])

const names: string[] = ["Diogo", "João"]
names.push("Be")

console.log(names)

// Outro tipo de Array
const nums: Array<number> = [20, 30, 40, 50]
console.log(nums)

// Tipo Any
const arr1: any = [1, 2, "teste", true]
console.log(arr1)

function soma(a: number, b: number){
  console.log(a + b)
}
soma(200, 300)


function sub(a: number, b: number){
console.log(a - b )
}

sub (1000, 700)

function mult(a: number, b: number){

  console.log(a * b)
}

mult (400, 2)

function greeting(name: string): string {
  return `olá ${name}`
}
console.log(greeting("Diogo"))

// Tipos de objectStore
function passCoordinates(coord: {x: number, y: number}){
  console.log("x coordinates: "+ coord.x)
  console.log("y coordinates:" + coord.y)
}

const objCoord = {x: 234, y: 234.45}
passCoordinates(objCoord)

// objetos opcionais

function showNums(a: number, b: number, c?: number){
console.log("A: " + a)
console.log("B: " + b)
console.log("C: " + c)
}

showNums(1, 2)

// validando propriedades opcionais
function advancedGreeting(firstName: string, lastName?: string){
if (lastName != undefined){
 return `Olá ${firstName} ${lastName} `
}
return `Olá ${firstName}`
}

console.log(advancedGreeting("Diogo", "Miranda"))
console.log(advancedGreeting("João"))

// union
function showBalance(balance: string | number){
console.log(`o show balance eh: R$${balance}`)
}
showBalance(100)
showBalance("500")

// Type alias

type ID = number | string
function show(id: ID){

  console.log(`O ID é: ${id}`)
}

show(1)
show("90")

// interfaces
interface Point {
x: number
y: number
z: number
}

function showCoords(obj: Point){
  console.log(`x: ${obj.x}, y: ${obj.y}, z:${obj.z}`)

const coodObj:Point = {
  x: 10,
  y: 50,
  z: 80
}

}

// Literal types
function showDirection (direction: "left" | "right" | "center"){
  console.log(`a direção eh ${{direction}}`)
}

showDirection("left")
//showDirection("top") // error


// Symbol
let symbolA: symbol = Symbol("A")
let symbolB = Symbol("A")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
