/**
 * Created by Akshay on 3/4/2015.
 */
var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var app = express();
app.use(cors());

/** app.get('/people', function (req, res) {
    Person.find(function (err, doc) {
        res.send(doc);
    })
}); **/
                                            //modify req to include username, to determine collection
app.post('/send_character', function(req, res, next){    //req variable is a JSON document
    MongoClient.connect('mongodb://localhost:27017/moneysense', function(err, db) {
        if(err) throw err;

        if(typeof db.collection('characters').find({access_token: req.access_token}) === 'object') {
            db.collection('characters').update({access_token: req.access_token}, req, function(err, inserted) {
                if(err) throw err;

                return db.close();
            }); //pass in stored JSON document
            //if not, create array
        } else {
            //find sports and make them into arrays; stores as req1
            db.collection('characters').insert(req);
        }
    });
});

app.listen(3000);