const person = {
    firstName: 'Marcelo',
    lastName: 'Augusto',
    age: "21",
    hobbies: ["Programar", "Jogar futevolei", "Ver filmes"],
    animal: {
        name: "luck",
        age: 8
    }
}

//const firstName = person.firstName
//const lastName = person.lastName     ISSO TUDO AQUI PODE SER RESUMIDO EM UMA LINHA
//const age = person.age
//const hobbies = person.hobbies

const { firstName: primeiroNome, lastName, age, hobbies, animal: { name: nameAnimal } } = person //NESTA LINHA AQUI

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies[1])
//console.log(person.animal.name)
console.log(nameAnimal)


//Adicionar um elemento ao objeto person
person.dog = "Simba"
console.log(person)



