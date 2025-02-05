// importiamo express
const express = require ('express');
// creiamo una variabile router il cui valore sarà un istanza di express.Router()
const router = express.Router();
// importiamo l'array con i post e lo salviamo in una variabile
const myPosts = require ('../data/posts')

// definiamo le rotte rimuovendo il nome dalla risposta uri
router.get('/', function (req,res){
    res.json(myPosts);
});
router.get('/:id', function (req,res){
    res.json (myPosts[req.params.id])
});
router.post('/', function (req,res){
    res.send ('crea un nuovo post')
});
router.put('/:id', function (req,res){
    res.send (`modifica interamente il post numero ${req.params.id}`)
});
router.patch('/:id', function (req,res){
    res.send (`modifica parzialmente il post numero ${req.params.id}`)
});
router.delete('/:id', function (req,res){
    res.send (`elimina il post numero ${req.params.id}`)
});

// esportiamo l'istanza di Router
module.exports = router;