//O1 - Fruits

const fruits = ["mango", "lemon", "blueberry"]
console.log(fruits)
console.table(fruits)


//02 - Access

const ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"))


//03 Add and Remove

const objects = ["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)

objects.pop()
console.log(objects)

objects.push("laptop")
console.log(objects)

objects.shift()
console.log(objects)


//04 Order

const numbers=[4,10,8,12,6]
numbers.reverse()
console.log(numbers)


//05 Boucle

let total = 0
const limit = 10

for (let i=0; i<= limit; i++) {
  console.log(i)
  total=total+i
}

console.log(total)



//06 Reverse

  const sentence = "Hello Konexio!"
  let array = sentence.split("")
  let result = ""

  console.log(array)

  for (let i=array.length-1; i >= 0; i-- ){
    console.log(array[i])
    result = result + array[i]
  }
  console.log(result)

  


// 07 Fizzbuzz

  const stop = 100
  const rest = 10 % 3
  
  for (let i = 0; i <= stop; i++) {

    if ((i % 3) = 0) && ((i % 5) = 0) {
      console.log("fizzbuzz")
    } else if (i % 5 = 0) {
      console.log("buzz")
    } else if (i % 3) === 0 {
      console.log("fizz")
    } else if (i % 7 = 0) {
      console.log("")
    } else {
      console.log(i)
    }
  }


// 08 While

  let total = 0
  const limit = 10
  
  while (total <= limit) {
    total = total + 1
    console.log(total)
    }
  
  console.log(total)

// 09 Sans boucle

  // const copains = ["Ami A","Copain B","pote C","camarade D","compagnon E"]
  // const min = 1
  // const max = copains.length -1
  // const random = Math.floor(Math.random() * max) + min

  // console.log(copain[random])

  // //10 Random and max

  // const arrayToFill = []

  // for (i=0, arrayToFill.length<20, random(1,100)) {
  //   console.log(arrayToFill)
  // }