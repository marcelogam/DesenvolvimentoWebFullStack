const numbers = [1, 2, 3, 4, 5]

const numberMultiplieByTwo = numbers.map(function (number) {
    return number * 2
})
console.log(numberMultiplieByTwo)
//O metodo map recebe uma funcao como parametro e passa em todos os elementos da lista, nesse caso multiplicando por 2

const ages = [8, 13, 27, 30, 22, 40]
const evenAges = ages.filter(function (age) {
    return age % 2 === 0
})
console.log(evenAges)
/*O metodo filter e literalmente um filtro que recebe uma funcao como parametro e filtra neste caso os numeros fossem pares e se o 
 * numero for par ele adiciona na nova lista
 */

const ages2 = [8, 13, 27, 30, 22, 40]
const sumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator + age
}, 0)
// ^ acumulator, na primeira iteracao e 0, quando for pra segunda ele passa pra 8 e assim por diante 
console.log(sumOfAges)

/* o metodo reduce, passa por todos os elemtos da lista e reduz em uma unica variavel, neste exemplo 
 * ele pegou todas as idades e somou ao acumulator que no caso se iniciou com zero. Se iniciarmos o acumulator
 * com 100 no final das contas a variaevel sumOfAges iria estar com 240.
 */