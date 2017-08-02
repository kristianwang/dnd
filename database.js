var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/monsterdb";

MongoClient.connect(url, function(err,db){
	if (err) throw err;
	var monsters = JSON.parse("monsters.json");
	db.collection("monsters").insertMany(monsters, function(err, res){
	    if (err) throw err;
	    console.log("Num monsters inserted " + res.insertedCount);
	    db.close();

	});


});
