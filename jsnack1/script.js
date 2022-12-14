// Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti

// Recupero result dal DOM

const result = document.getElementById('result');

// Mi creo una variabile di appoggio che mi serva per fare la somma dei vari numeri che l'utente andrà ad inserire

let sum = 0;

// Chiedo 10 volte all'utente un numero, quindi mi credo un ciclo da 0 a < 10

let isValid = true

for (let i = 0; isValid && i < 10; i++) {

    const number = parseInt(prompt('Inserisci un numero intero').trim());

    // Faccio la validazione
    if (isNaN(number)) {
        isValid = false;
    } else {
        sum += number;
    }

}

// Stampo in pagina la somma dei numeri

const message = isValid ? `La somma dei tuoi numeri è ${sum}` : `Hai inserito valori non validi`;
console.log(message);

result.innerText = message;