const fs = require('fs')
const jsonexport = require('jsonexport/dist')

// let pokeFile = fs.readFileSync('./newPokedex.json',"utf-8")
// pokeInsert = pokeFile.replace(pokeFile[(pokeFile.length)-2],"]")
// console.log(pokeFile.length)
// let file = fs.readFileSync('./server/pokedex.json',"utf-8")

// pokeJson = JSON.parse(file)
// numOfPokemon = pokeJson.length
// condition = pokeJson[24]["attaques"]
// console.log(pokeJson[25]["attaques"])

// if (condition=='') {
//     console.log('vide')
// }
// else {
//     console.log('Non vide')
// }

// for (i=0;i<numOfPokemon;i++){
//     console.log(numOfPokemon)
//     console.log("i : ",i)
//     attaqueJson = pokeJson[i]["attaques"]
//     numOfAttaque = attaqueJson.length
    // for (j=0;j<numOfAttaque;j++){
    //     attaqueJson[j]["numéro"] = pokeJson[i]["numéro"]
    // }
    // attaqueStringify = JSON.stringify(attaqueJson)                  // ------------------------------------------------
    // console.log(attaqueStringify)                                //  A conserver : Ajoute numéro dans les attaques 
    // fs.appendFileSync('./attaques.json',attaqueStringify+"\n")      // ------------------------------------------------
// }

let attaqueFile = fs.readFileSync('./attaques.json',"utf-8")
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
