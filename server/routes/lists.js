const express = require('express');
const router = express.Router();

const clientCollection = 'notes';

module.exports.routeLists = function (db) {

    router.get('/', function (req, res) {
        res.send('Hello from express')
    })

    router.get('/test', async function (req, res) {
        const collection = db.collection(clientCollection);

        const notes = await collection.find({
            price: {
                $gt: 5
            }
        });
        res.send(notes)
    });

    return router;
}