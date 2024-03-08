
// Verificare il numero di chilometri che vuole percorrere il passeggero
const chilometri = 47;    //number
console.log(chilometri)

// Verificare l'età del passeggero
const eta = 16;     //number
console.log(eta)

// Verificare il prezzo totale del viaggio
 
// SE il passeggero percorre 47km
//  ALLORA il prezzo è definito dai km percorsi
//  ALLORA scrivo in console il 'prezzo totale'
const prezzoTot = 47 * 0.21;
console.log(prezzoTot)

// SE il passeggero è <18 anni
//  ALLORA srivo in console 'sconto20%'

// ALTRIMENTI SE il passeggero è >65 anni
//  ALLORA scrivo in console 'sconto40%'

// ALTRIMENTI il passeggero non avrà lo sconto

if (eta < 18) {
    console.log('Applica sconto 20%')
} else if (eta > 65) {
    console.log('Applica sconto 40%')
}



