var fs = require('fs'),mongo = require('mongodb'), readline = require('readline');

var text = fs.readFileSync('monsters.json', 'utf8');

var monsterJSON = JSON.parse(text);

console.log(monsterJSON[0]);
for(var i = 0; i < monsterJSON.length; i++){
    console.log(monsterJSON[i].name);
}
console.log(monsterJSON.length);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/monsterdb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("monsters",function(err, res){
      if(err) throw err;
    });
    db.collection("monsters").insertMany(monsterJSON, function(err, res){
    	if(err) throw err;
	console.log("Num records inserted: " + 
			res.insertedCount);
	db.close();
    });

});

