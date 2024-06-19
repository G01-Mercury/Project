# Project Mercury

## Benvenuti nel mondo della musica con Mercury

### Descrizione
Questo è un prototipo di come apparirà il nostro progetto Mercury una volta completamente sviluppato. Purtroppo, l'API di Spotify richiede un account premium per essere utilizzata, quindi non abbiamo potuto integrarla nel prototipo. Inoltre, per non entrare in problemi di tipo legale, non possiamo usare API riguardanti salvataggio o utilizzo di denaro. Purtroppo senza poter pubblicare il sito a causa di restrizioni dell'API di Google utilizzata, solo e soltanto gli account che hanno già i permessi possono entrare nel sito, ci scusiamo dell'inconveniente '-_- , proprio per questo motivo, abbiamo creato un account di prova e si possono utilizzare le seguenti credenziali per accedere: email provamercury8@gmail.com; password Prova_Mercury8!.

### Installazione
Per utilizzare il progetto:
1. Scarica il progetto.
2. Avvia una connessione localhost.
3. Utilizza una piattaforma come [ngrok](https://ngrok.com/) per il traffico HTTP. Segui [questo link](https://ngrok.com/download) per installare ngrok e utilizza il comando indicato nel sito nella prompt dei comandi, un esempio potrebbe essere: `ngrok http --domain=bonefish-massive-sincerely.ngrok-free.app 8080`, per la creazione del prototipo abbiamo utilizzato questo metodo. In alternativa, puoi utilizzare [questo link](https://mercury-music.netlify.app) per utilizzare Mercury direttamente sul proprio browser.

### Utilizzo
In questa anteprima, è possibile:
- Cambiare la lingua da inglese a italiano e poter utilizzare le seguenti funzioni in entrambi i linguaggi.
- Creare un account , anche utilizzando le credenziali Google.
- Accedere, anche utilizzando le credenziali Google.
- Inserire i propri dati della carta.
- Visualizzare come sarebbe poi la schermata principale del sito dopo l'accesso.
Non si può:
- Guardare punteggi o prezzi.
- Accedere/Registrarsi con Apple.
- Registrare le informazioni della carta con servizi esterni.
- Interagire con la schermata principale del sito dopo l'accesso.

### Struttura del Codice
Il codice è organizzato come segue:
- Si inizia da `home.html`.
- In base alla scelta di lingua, si procede con il salvataggio delle credenziali o l'accesso inglese `eng` o  italiano `ita`.
- Le funzioni per l'accesso sono contenute nella cartella `js`.
- Gli stili sono implementati in `css`.
- I file di test sono all'interno do `test`.
- Per alcune librerie per l'utilizzo dei file di testing esiste la directory `json`. 

### Contatti
Per domande o feedback, contattaci all'indirizzo email [dani21roby@gmail.com].

### Link al Sito del Progetto
Visita il nostro sito [Mercury](https://mercury-music.netlify.app).

### Testing
Per utilizzare le funzioni per l'accesso alle API di Google, decommenta i file di testing. Tenere presente che se non sono commentati, potrebbero generare errori nella console di tutti i browser.

## Speriamo che questo lavoro vi sia piaciuto
