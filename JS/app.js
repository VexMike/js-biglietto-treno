
// Verificare il numero di chilometri che vuole percorrere il passeggero

const kmViaggio = parseInt(prompt('Inserisci il numero di km del viaggio'));    // number
console.log(kmViaggio, typeof kmViaggio)

// Verificare l'età del passeggero

const eta = parseInt(prompt('Inserisci la tua età'));   // number
console.log(eta, typeof eta)

const prezzoPerKm = 0.21;   // number

// Verificare il prezzo totale del viaggio
// - calcolare il prezzo base sapendo che ogni km costa 0.21€

const prezzoBase = parseFloat(kmViaggio * prezzoPerKm); // number
console.log(prezzoBase, typeof prezzoBase)

// - calcolare lo sconto

let sconto // undefined  /*Posso applicare lo sconto = 0 e togliere l'else finale, il risultato non cambia //number */

// -- SE età passeggero <18 = sconto 20%

if (eta < 18) {
    sconto = prezzoBase * 0.2
} else if (eta > 65) {
    // -- ALTRIMENTI SE età passeggero >65 = sconto40%
    sconto = prezzoBase * 0.4
} else {
    // -- ALTRIMENTI sconto = 0%
    sconto = 0
}

// - calcolare il prezzo finale = prezzo base - sconto
// Stampare il prezzo con 2 cifre decimali

const prezzo = prezzoBase - sconto; // numebr  /*Possiamo ottimizzare con prezzoBase * sconto aggiungendo sconto = 0 e togliento tutti i prezzoBase dall'if ed else*/
console.log(prezzo.toFixed(2), typeof prezzo, prezzo)

// Bonus: stampare biglietto nell'HTML con un tag 'p'

const prezzoElemento = document.getElementById('prezzo'); 
// console.log(prezzoElemento)
prezzoElemento.innerHTML = 'Prezzo del biglietto: ' + prezzo.toFixed(2) + '&euro;'

