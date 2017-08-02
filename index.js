var express = require('express');
var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
var server = new Server('localhost',27017,{auto_reconnect: true} );
var app = express();
db = new Db('monsterdb',server);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/monsterdb";


app.get('/', function(req, res){
	res.sendFile("index.html");
});
app.get('/getAllMonsters',function(req, res){
    MongoClient.connect(url,function(err, db){
        db.collection("monsters").find().toArray(
	function(err, result){
	  if(err) throw err;
	  res.send(result);
	  db.close();
	});
    });
});

app.get('/getMonster/:monster_name',function(req,res){
    var monster_name = req.params.monster_name;
    console.log('getting monster: ' + monster_name);
    MongoClient.connect(url, function(err, db){
        var query = {name : monster_name};
	db.collection("monsters").find(query).toArray(
	function(err, result){
	    if(err) throw err;
	    res.send(result);
	    db.close();
	});
    
    });
    
});
app.listen(6969);

