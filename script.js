//Display weelcome message
console.log("Meu primeiro codigo em JavaScript");

//Add two numbers
let valor = 10 * 5;
console.log(valor);

let nome = "João";
let idade = 30;

let isJavaFun = true; //precisa desse nome is javafun? fiquei na duvida.

user = {
  nome: "João",
  idade: 30,
  isJavaFun: true,
};

console.log(user);
console.log("Nome: " + user.nome);
console.log("Idade: " + user.idade);
console.log("Is Java Fun: " + user.isJavaFun);


//Check if a number is odd or even
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}


//greeting based on time of day
const now = new Date("2025-07-28");
const hours = now.getHours(17);
let greeting;

if (hours < 12) {
  greeting = "Bom dia!";
} else if (hours < 18) {
  greeting = "Boa tarde!";
} else {
  greeting = "Boa noite!";
}

console.log(greeting); // console pode ficar nesse lugar ? ou tudo tem que ficar embaixo dos codigos?? tipo igual a aula.



//Print numbers from 1 to 10
for (let loop = 1; loop <= 10; loop++) {
  console.log("Loop numero: " + loop);
}



// Reverse a word
let palavra = "Natanny";
let invertida = palavra.split("").reverse().join("");
console.log(invertida); // "ynnatN"