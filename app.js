// importiamo express
const express = require ('express');
// inizializziamo express tramite funzione e salviamolo sull'app
const app = express();
// salviamo la porta del server
const port = 3000;

// collegamento ai file statici
app.use (express.static('public'));

// definiamo la prima rotta
app.get('/', (req, res) => {
    res.send('hello word')
});

// avviamo il server mettendolo in ascolto sulla porta indicata
app.listen (port,() => {
    console.log (`Example app listening on port: ${port}`)
});