/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

console.log("---");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("Array ordinato alfabeticamente", pets);

console.log("---");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// for (let i = pets.length - 1; i > -1; i--) {
//   console.log(pets[i]);
// }
//oppure

console.log("Elementi dell'array con ordine invertito");
pets.reverse();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
console.log("---");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log(pets);
const firstElement = pets.shift(); //Rimuovo il primo elemento dall'array e lo inizializzo in una variabile
console.log(pets);
pets.push(firstElement); //Metto il valore della variabile come ultimo elemento dell'array
console.log(pets);

console.log("---");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "valore a scelta";
}

console.log(cars);

console.log("---");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Bmw",
  model: "Serie 1",
  color: "black",
  trims: ["life", "style", "sport"]
});
console.log(cars);

// COMMENTATO IN QUANTO SERVE CHE IL VALORE TRIMS SIA PRESENTE PER IL PROSSIMO ESERCIZIO

// for (let i = 0; i < cars.length; i++) {
//   delete cars[i].trims;
// }
// console.log(cars);

console.log("---");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

console.log("---");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. 
    Se la prima lettera della proprietà "color" ha valore "b", mostra in console "Fizz". 
    Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  //console.log(cars[i].color[0]);
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

console.log("---");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105
];

let count = 0;

while (count < numericArray.length) {
  const num = numericArray[count];
  if (num === 32) {
    console.log(num);
    break;
  } else {
    console.log(num);
  }
  count++;
}

console.log("---");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

let letter = "";
let num = 0;
const numberArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  letter = charactersArray[i];
  switch (
    letter //switch case per il caso specifico di charactersArray ma sicuramente espandibile a tutto l'alfabeto con aggiunta di altri case
  ) {
    case "g":
      num = 7;
      break;
    case "n":
      num = 12;
      break;
    case "u":
      num = 19;
      break;
    case "z":
      num = 21;
      break;
    case "d":
      num = 4;
      break;
  }
  numberArray.push(num);
}

console.log(numberArray);
