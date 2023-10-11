const names = ["Felipe", "Joao", "Julia", 10, false]

const joao = names[1]
console.log(joao)

names.push("Pedro")  //Adiciona no final da lista
console.log(names)

names.shift() //Remove o priemerio elemento da lista
console.log(names)

names.unshift(20) //Adiciona no inicio da lista
console.log(names)

names.pop() //Remove o ultimo elemento da lista
console.log(names)

names[2] = "Mairink" //Muda o terceiro elemnto
console.log(names)

console.log(names.lastIndexOf("Joao")) //Retorna em que posicao esta o elemento Joao na lista

const sortedNames = names.sort() //Ordena em ordem alfabetica, do menor para o maior 
console.log(sortedNames)

const nameIsArray = Array.isArray(names)
console.log(nameIsArray)