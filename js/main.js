// INIZIO - Richiesta all'utente tramite prompt (Prendo i valori in input e li salvo nelle variabili)
    const firstName = prompt('Inserisci il tuo nome');
    const lastName = prompt('Inserisci il tuo cognome');
    const colorFavorite = prompt('Inserisci il tuo colore preferito');
//////////////////// INIZIO EXTRA aggiungi 2 numeri e dividi il primo per il secondo////////////////////
    let firstNumber = prompt('Ti chiederemo 2 numeri diversi (il primo deve essere maggiore del secondo) Inserisci il primo numero');
    firstNumber = parseInt(firstNumber);
    let secondNumber = prompt('Inserisci il secondo numero'); 
    secondNumber = parseInt(secondNumber);
    let numberComplete = firstNumber / secondNumber;  
//////////////////// FINE EXTRA aggiungi 2 numeri e dividi il primo per il secondo////////////////////
// FINE - Richiesta all'utente tramite prompt (Prendo i valori in input e li salvo nelle variabili)


// INIZIO - Creo una variabile che contiene i dati formattati in maniera specifica
    const output = `
    --------- (insicurissimo) password generator ---------- 

    password: ${firstName}${lastName}${colorFavorite}21
    password Extra: ${firstName}${lastName}${colorFavorite}${numberComplete}

    
    ---------------------------------------- 
    Contattami per maggiori informazioni
    `;
// FINE - Creo una variabile che contiene i dati formattati in maniera specifica

// INIZIO - Stampa la variabile in console
    console.log(output); 
// FINE - Stampa la variabile in console

// INIZIO (NON RICHIESTO) - modificare il contehnuto HTML
    document.getElementById('nome-utente').innerHTML = firstName;
    document.getElementById('cognome-utente').innerHTML = lastName;
    document.getElementById('colorePreferito-utente').innerHTML = colorFavorite;
//////////////////// INIZIO EXTRA Mostrare la password generata nel Layout HTML////////////////////
    document.getElementById('passwordDefault').innerHTML =`${firstName}${lastName}${colorFavorite}21`;
    document.getElementById('passwordExtra').innerHTML =`${firstName}${lastName}${colorFavorite}${numberComplete}`;

//////////////////// FINE EXTRA Mostrare la password generata nel Layout HTML////////////////////
// FINE (NON RICHIESTO) - modificare il contehnuto HTML


//////////////////// INIZIO EXTRA ////////////////////
//al posto del 21
//documentati su come trasformare una stringa in un numero





//////////////////// FINE EXTRA ////////////////////

    





