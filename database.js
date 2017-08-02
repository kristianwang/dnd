var fs = require('fs');
var text = fs.readFileSync('monsters.json','utf8');

var monsterJSON = JSON.parse(text);
for(var i = 0; i < monsterJSON.length; i++){
    console.log(monsterJSON[i].name);
}

