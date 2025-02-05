// importiamo express
const express = require ('express');
// inizializziamo express tramite funzione e salviamolo sull'app
const app = express();
// salviamo la porta del server
const port = 3000;
// importiamo il router
const postsRouter = require ('./routers/posts')

// collegamento ai file statici
app.use (express.static('public'));

// definiamo la prima rotta
app.get('/', (req, res) => {
    res.send('hello word')
});

// tramite la funzione use indichiamo che esistono nuove rotte
app.use ("/posts", postsRouter);

// avviamo il server mettendolo in ascolto sulla porta indicata
app.listen (port,() => {
    console.log (`Example app listening on port: ${port}`)
});