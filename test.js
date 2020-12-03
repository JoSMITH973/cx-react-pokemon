const fs = require('fs')
const convertJToC = require()

// let file = fs.readFileSync('./pokedexMini.json',"utf-8") // Fichier test
let file = fs.readFileSync('./server/pokedex.json',"utf-8")

pokeJson = JSON.parse(file)
numOfPokemon = pokeJson.length
fs.writeFileSync('./newPokedex.json',"[")  
let startModif=0;
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