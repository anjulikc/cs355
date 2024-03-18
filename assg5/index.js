const express = require('express')
const app = express();
const nedb = require('nedb-promises');
const db = nedb.create('hits.jsonl')

app.use(express.static('public'));

app.get('/hits', (req, res) => {
    console.log('res')
    db.find({}).then((docs) => {
        if (docs.length) {
            db.updateOne({'hits': docs[0].hits}, {$set: {'hits': docs[0].hits + 1}}, {upsert: true})
            res.json(docs[0].hits + 1)
        }
        else {
            db.insertOne({'hits': 1})
            res.json(1)
        }
    })


})

app.listen(4000, () => console.log('Server is running on PORT 4000'))