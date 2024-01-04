function sum(a: number | string, b: number | string){
if(typeof a == "string" && typeof b == "string"){
console.log(parseFloat(a) + parseFloat (b))
}
else if (typeof (a) == "number" && typeof (b) == "number"){
console.log(a + b)
} else {
  console.log("Impossivel fazer essa operação")
}
}

sum(10, 10)
sum ("20", "30")
sum ("30", 50)

// check if value existing

function operation(arr: number[], operation?: string | undefined){
if (operation){
  if (operation == "sum"){
const sum = arr.reduce((i, total) => i + total)
console.log(sum)
  } else if(operation == "multiply"){
    const multiply = arr.reduce((i, total) => i * total)
    console.log(multiply)
  }

}else{
  console.log("Insira uma operação")
}

}

operation([1, 2, 3], "sum")
operation([1, 2, 4], "multiply")
operation([1, 2, 4])

// Operador in
class Dog {
name
breed

constructor(name: string, breed?: string){
  this.name = name
  if(breed){
    this.breed = breed
  }
}

}

const tuca = new Dog ("Tuca")
const bob = new Dog ("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog){
if ('breed' in Dog){
  console.log(`Cachorro da raça ${dog.breed}`)
} else{
  console.log(`O cachorro é um SRD`)
}
}

showDogDetails(tuca)
showDogDetails(bob)

function review(grade: number, status?: boolean){
if ((status == false) || Number == null) {
  console.log("Usuário não informou a nota")
} 
else if (grade == 1){
console.log(`A nota foi de 1, melhore mais`)
}
else if (grade == 2){
console.log(`A nota foi de 2, ainda abaixo da média`)
}
else if (grade == 3){
console.log(`A nota foi de 3, Boa nota`)
}
else if (grade == 4){
console.log(`Muito bom, Nota 4`)
}
else if (grade == 5){
console.log(`Excelente, Nota 5, parabéns`)
}
else
console.log(`Nota ${grade} diferente das notas esperadas`)

}
review(10)
review(100, false)
review(5)
review(4)
review(3)
review(2)
review(300)
review(6, true)
review(20, false)

// default 

function sumDefault(m: number, x= 10){

  return m + x
}
console.log(sumDefault(50))
console.log(sumDefault(15, 15))

// Rest operator
function sumAll(...n: number[]){
return n.reduce((number, sum)=> sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5, 7))

// Destructuring 
function showDetails({name, price}: {name: string, price: number}):string {

return `O produto é o ${name} e o preço ${price}`
}

const shirt = {name:"Camisa", price: 10.99}

console.log(showDetails(shirt))

// interface
interface Product{
name: string
price: number
isAvailable: boolean
}

function showDetails1(product: Product){
  console.log(`O nome do produto é ${product} e o preço eh ${print}`)
if (product.isAvailable) {
console.log('Produto disponível')
}
}
