const sum = 1 + 1;

if (sum === 2) {
    console.log("Sum is 2!")
} else {
    console.log("Sum is not 2!")
}

//&& (and) e || (or)

let number = sum === 2 ? 2 : 4 //if sum igual a 2, number recebe 2, se nao for recebe 4


const car = "Mercedes"

switch (car) {
    case "Mercedes":
        console.log("Mercedes e muito bonito")
        break;
    default:
        break;
}