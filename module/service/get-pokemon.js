
import { setImg } from "../mount-the-card.js"
import { setInfos } from "../mount-the-card.js"
import { setAbilties } from "../mount-the-card.js"

export function getPokemon(){
    let button = document.querySelector(".bt-buscar")

    
    button.addEventListener("click",function(event){
        event.preventDefault();
        getInfos(document.querySelector("#inputPokemon").value);
    })
    
    async function getInfos(value) {
        
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+value);
        const data = await response.json();
        
        let img  = "https://pokeres.bastionbot.org/images/pokemon/"+data.id+".png";
        
        setImg(img);
        setInfos(data);
        getAbilities(data,img);
        controlSlider(data);
    }
}

function getAbilities(data,img){
    let abilities = [];
  
    for (let index = 0; index < data.abilities.length; index++) {
        const element = data.abilities[index].ability.url;
        
        getAbilitText()
        async function getAbilitText(){
            const response = await fetch(element);
            const data = await response.json();

            if(data.effect_entries[1]){
                abilities.push(
                    {
                        name: data.name,
                        affect: data.effect_entries[1].effect,
                        short_effect: data.effect_entries[1].short_effect
    
                    }
                )
            }
     
            setAbilties(abilities,img);
        }
        
    }
}



function controlSlider(data){
    let arrowNext = document.querySelector('.arrow-next');
    let backNext = document.querySelector('.arrow-back');
    let nextId = data.id;

    
    arrowNext.addEventListener('click',()=>{
        nextId++;
        getNextInfos(nextId)
        async function getNextInfos(value) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+value);
            const data = await response.json();
            
            let img  = "https://pokeres.bastionbot.org/images/pokemon/"+data.id+".png";
            
            setImg(img);
            setInfos(data);
            getAbilities(data,img);
        }
    })

    backNext.addEventListener('click',()=>{
        nextId--;
        getNextInfos(nextId)
        async function getNextInfos(value) {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+value);
            const data = await response.json();
            
            let img  = "https://pokeres.bastionbot.org/images/pokemon/"+data.id+".png";

            setImg(img);
            setInfos(data);
            getAbilities(data,img);
        }
    })
}