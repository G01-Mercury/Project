# Project Mercury

## Benvenuti nel mondo della musica con Mercury

### Descrizione
Questo è un prototipo di come apparirà il nostro progetto Mercury una volta completamente sviluppato. Purtroppo, l'API di Spotify richiede un account premium per essere utilizzata, quindi non abbiamo potuto integrarla nel prototipo.

### Installazione
Per utilizzare il progetto:
1. Scarica il progetto.
2. Avvia una connessione localhost.
3. Utilizza una piattaforma come [ngrok](https://ngrok.com/) per il traffico HTTP. Segui [questo link](https://ngrok.com/download) per installare ngrok e utilizza il comando nella prompt dei comandi: `ngrok http --domain=bonefish-massive-sincerely.ngrok-free.app 8080`. In alternativa, puoi utilizzare [questo link](link_a_Mercury) per scaricare Mercury direttamente (nota: il file "node_modules" è stato compresso a causa delle dimensioni eccessive).

### Utilizzo
In questa anteprima, è possibile:
- Cambiare la lingua da inglese a italiano.
- Creare un account e accedere, anche utilizzando le credenziali Google (l'accesso con Google è limitato per ragioni politiche; si possono utilizzare le seguenti credenziali per accedere: email provamercury8@gmail.com; password Prova_Mercury8!).

### Struttura del Codice
Il codice è organizzato come segue:
- Si inizia da `home.html`.
- In base alla scelta di lingua, si procede con il salvataggio delle credenziali o l'accesso.
- Le funzioni per l'accesso sono contenute nella cartella `js`.
- Gli stili sono implementati in `css`.

### Contatti
Per domande o feedback, contattaci all'indirizzo email [dani21roby@gmail.com].

### Link al Sito del Progetto
Visita il nostro sito [Mercury](link_al_sito_del_progetto).

### Testing
Per utilizzare le funzioni per l'accesso alle API di Google, decommenta i file di testing. Tieni presente che se non sono commentati, potrebbero generare errori nella console di tutti i browser. Il risultato del testing è comunque il seguente: Testing.
