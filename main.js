
    
   
import { getPokemon } from "./module/service/get-pokemon.js";
import { getPokemonCard } from "./module/build-cards.js";
import { modalFilter } from "./module/modal-filter.js";

modalFilter();

for (let index = 1; index < 100; index++) {
    getPokemonCard(index)
}




// const urlPiName = "https://pokeapi.co/api/v2/pokemon/";
// let input = document.querySelector("#pokemon");
// let bt = document.querySelector(".bt-confirmar");
// let containerCard = document.querySelector("#container-card");

// let boxImg = document.querySelector(".box-img");




 
getPokemon();