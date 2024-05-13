// INIZIO - Richiesta all'utente tramite prompt (Prendo i valori in input e li salvo nelle variabili)
    const firstName = prompt('Inserisci il tuo nome');
    const lastName = prompt('Inserisci il tuo cognome');
    const colorFavorite = prompt('Inserisci il tuo colore preferito');
// FINE - Richiesta all'utente tramite prompt (Prendo i valori in input e li salvo nelle variabili)

// INIZIO - Creo una variabile che contiene i dati formattati in maniera specifica
    const output = `
    --------- (insicurissimo) password generator ---------- 

    password: ${firstName}${lastName}${colorFavorite}21
    
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
// FINE (NON RICHIESTO) - modificare il contehnuto HTML



    





