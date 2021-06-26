
import { firstLetterUppercase } from "./utilitys.js"
export function setImg(urlImg){

  let imgPokemon = document.querySelector(".pokemom-img");
  let bgOpacity = document.querySelector(".bg-opacity");

  imgPokemon.setAttribute("src",urlImg);
  bgOpacity.style.backgroundImage= "url('"+urlImg+"')";
}


export function setInfos(data){

  let list = document.querySelector(".list");
  let name = document.querySelector(".name");

  name.innerHTML = firstLetterUppercase(data.name);
  list.innerHTML = "";

  let pokemon = {
    hp: data.stats[0],
    attack: data.stats[1],
    defense: data.stats[2],
    specialAttack: data.stats[3],
    specialDefense: data.stats[4],
    speed: data.stats[5],
  }

    list.innerHTML = `
      <li><span> ${ pokemon.hp.stat.name }</span> <span class="number">${pokemon.hp.base_stat}</span></li>
      <li><span> ${ pokemon.attack.stat.name }</span> <span class="number">${pokemon.attack.base_stat}</span></li>
      <li><span> ${ pokemon.defense.stat.name }</span> <span class="number">${pokemon.defense.base_stat}</span></li>
      <li><span> ${ pokemon.specialAttack.stat.name }</span> <span class="number">${pokemon.specialAttack.base_stat}</span></li>
      <li><span> ${ pokemon.specialDefense.stat.name }</span> <span class="number">${pokemon.specialDefense.base_stat}</span></li>
      <li><span> ${ pokemon.speed.stat.name }</span> <span class="number">${pokemon.speed.base_stat}</span></li>
  `;
}


export function setAbilties(data,img){
  let boxAbilities = document.querySelector("#abilities");
  boxAbilities.innerHTML = "";

  data.forEach(element => {

  boxAbilities.innerHTML +=  
  `
    <div class="col-10 col-sm-3 col-lg-2">
      <h3>${element.name}</h3>
      <p class="bold">Affect</p>
      <p>${element.affect }</p>
      <p class="bold">Short Effect</p>
      <p>${element.short_effect }</p>
    </div>
  `
  });
}

