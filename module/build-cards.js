import { themePokemon } from "./theme-pokemon.js";
import { firstLetterUppercase } from "./utilitys.js"

export function getPokemonCard(id) {
  requested(id)
  async function requested(id) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const data = await response.json();
    mountCard(data);
  }
}

function mountCard(data) {
  let theme = {};

  themePokemon.forEach((item) => {
    if (item.type === data.types[0].type.name) {
      theme["bgColor"] = item.color;
      theme["colorText"] = item.color_text;
    }
  });

  let boxCards = document.querySelector('.box-cards');
  boxCards.innerHTML += card(data, theme);
}

let card = function getCardHtml(data, theme) {
  return `
  <div class="col-6 col-md-3">
  <div class="card shadow mt-4">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" class="card-img-top" alt="..." />
    <div class="card-body py-2">
      <h5 class="card-title text-center mb-0">${firstLetterUppercase(data.name)}<span class="ml-2" style="color:${theme.bgColor}">${firstLetterUppercase(data.types[0].type.name)}</span></h5>
      <span class="">
      
    </span>
    </div>
    <div class="card-footer bg-gradient  d-flex justify-content-between" style="background-color: ${theme.bgColor}">
      <div>
          <span class="font-weight-bolder" style="color:${theme.colorText}; font-size:14px">Id:</span>
          <span class="font-weight-bolder" style="color:${theme.colorText}">${data.id}</span>
      </div>
    <div>
      <span class="font-weight-bolder" style="color:${theme.colorText}; font-size: 12px">
      Hp: 
    </span>
    <span class="font-weight-bolder" style="color:${theme.colorText}">${data.stats[0].base_stat}</sapn>
      </div>
    </div>
  </div>
</div>
  `;
}