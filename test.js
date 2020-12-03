const fs = require('fs')
const jsonexport = require('jsonexport/dist')

// let file = fs.readFileSync('./pokedexMini.json',"utf-8") // Fichier test
let file = fs.readFileSync('./server/pokedex.json',"utf-8")

pokeJson = JSON.parse(file)
numOfPokemon = pokeJson.length
fs.writeFileSync('./newPokedex.json',"[")  
for (i=0;i<numOfPokemon;i++){
    console.log(numOfPokemon)
    console.log("i : ",i)
    attaqueJson = pokeJson[i]["attaques"]
    numOfAttaque = attaqueJson.length
    for (j=0;j<numOfAttaque;j++){
        attaqueJson[j]["numéro"] = pokeJson[i]["numéro"]
    }
    condition = pokeJson[i]["attaques"]
    if (condition=='') {
        console.log('vide')                                         // N'ajoute pas de ligne si le pokémon n'a pas d'attaques
    }
    else {
        console.log('Non vide')
        attaqueStringify = JSON.stringify(attaqueJson)              // -------------------------------
        fs.appendFileSync('./attaques.json',attaqueStringify+"\n")  // Ajoute numéro dans les attaques
    }
    // console.log(attaqueStringify)                                 

    delete pokeJson[i]["attaques"]
    pokeStringify = JSON.stringify(pokeJson[i])
    // console.log(pokeStringify)
    if(i===(numOfPokemon-1)){
        fs.appendFileSync('./newPokedex.json',pokeStringify+"]")
    }
    if(i<(numOfPokemon-1)){
        fs.appendFileSync('./newPokedex.json',pokeStringify+",\n")
    }
}

let attaqueFile = fs.readFileSync('./attaques.json',"utf-8")
attaqueInsert = attaqueFile.replace(/\]\n\[+/g,",\n")
fs.writeFileSync('./attaques.json',attaqueInsert)  

let pokeFile = fs.readFileSync('./newPokedex.json',"utf-8")
let attaqueCsv = JSON.parse(attaqueFile)
let pokeCsv = JSON.parse(pokeFile)

jsonexport(attaqueCsv, function(err, csv){
    if (err) {
    return console.error(err);
    }
    // console.log(csv);
    fs.writeFileSync('./attaques.csv',csv)  
});

jsonexport(pokeCsv, function(err, csv){
    if (err) {
    return console.error(err);
    }
    // console.log(csv);
    fs.writeFileSync('./pokedex.csv',csv)  
});

