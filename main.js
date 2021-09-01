/*Manipulación del DOM*/
import data from "./data/pokemon/pokemon.js";
import { filterByType, filterByGeneration, pokemonOrder } from "./data.js";

const allPokemon = data.pokemon;
let pokemonHtml = "";
 

allPokemon.forEach((eachPokemon) => {
  pokemonHtml += `<div class="container">
    <div class="box">
      <div class="front">
        <h4>${eachPokemon.num + "  " + eachPokemon.name.charAt(0).toUpperCase() + eachPokemon.name.slice(1)}</h4>
        <img src="${eachPokemon.img}">
        <p>Peso: ${eachPokemon.size.weight}</p>
        <p>Altura:  ${eachPokemon.size.height}</p></div>
        <div class="back">
        <h4>${eachPokemon.num + "  " + eachPokemon.name.charAt(0).toUpperCase() + eachPokemon.name.slice(1)}</h4>
        <p>Debilidad: ${eachPokemon.weaknesses}</p>
        <p>Probabilidad de aparición: ${eachPokemon["spawn-chance"]} %</p>
        <p>Resistencia: ${eachPokemon.resistant}</p>
        </div>
      </div>
    </div>`;
});

document.getElementById("root").innerHTML = pokemonHtml;


document.getElementById("types").addEventListener("change", function () {
  const typeHtml = document.getElementById("types").value;
  const pokemonTypes = filterByType(allPokemon, typeHtml)
  let showfilter = "";
  pokemonTypes.forEach((filterType) => { 
    showfilter += `<div class="container">
      <div class="box">
      <div class="front">
       <h4>${filterType.num + "  " + filterType.name.charAt(0).toUpperCase() + filterType.name.slice(1)}</h4>
         <img src="${filterType.img}">
         <p>Peso: ${filterType.size.weight}</p>
         <p>Altura:  ${filterType.size.height}</p></div>
         <div class="back">
         <h4>${filterType.num + "  " + filterType.name.charAt(0).toUpperCase() + filterType.name.slice(1)}</h4>
         <p>Debilidad: ${filterType.weaknesses}</p>
         <p>Probabilidad de aparición: ${filterType["spawn-chance"]} %</p>
         <p>Resistencia: ${filterType.resistant}</p>
       </div>
       </div>
      </div>`;
  });
  document.getElementById("root").innerHTML = showfilter;
});


document.getElementById("generation").addEventListener("change", function () {
  const generationHtml = document.getElementById("generation").value;
  const pokemonGeneration = filterByGeneration(allPokemon, generationHtml);
  let showfilterG = "";
  pokemonGeneration.forEach((filterG) => {
    showfilterG += `<div class="container">
    <div class="box">
      <div class="front">
      <h4>${filterG.num + "  " + filterG.name.charAt(0).toUpperCase() + filterG.name.slice(1)}</h4>
      <img src="${filterG.img}">
      <p>Peso: ${filterG.size.weight}</p>
      <p>Altura:  ${filterG.size.height}</p></div>
      <div class="back">
      <h4>${filterG.num + "  " + filterG.name.charAt(0).toUpperCase() + filterG.name.slice(1)}</h4>
      <p>Debilidad: ${filterG.weaknesses}</p>
      <p>Probabilidad de aparición: ${filterG["spawn-chance"]} %</p>
      <p>Resistencia: ${filterG.resistant}</p>
      </div>
     </div>
    </div>`;
  });
  document.getElementById("root").innerHTML = showfilterG;
});


document.getElementById("order").addEventListener("click", function () {
  const orderHtml = document.getElementById("order").value;
  const orderAbc = pokemonOrder(allPokemon, orderHtml)
   let showOrder =""
   orderAbc.forEach(sortPokemon => {
    showOrder += `<div class="container">
      <div class="box">
        <div class="front">
        <h4>${sortPokemon.num + "  " + sortPokemon.name.charAt(0).toUpperCase() + sortPokemon.name.slice(1)}</h4>
        <img src="${sortPokemon.img}">
        <p>Peso: ${sortPokemon.size.weight}</p>
        <p>Altura:  ${sortPokemon.size.height}</p></div>
        <div class="back">
        <h4>${sortPokemon.num + "  " + sortPokemon.name.charAt(0).toUpperCase() + sortPokemon.name.slice(1)}</h4>
        <p>Debilidad: ${sortPokemon.weaknesses}</p>
        <p>Probabilidad de aparición: ${sortPokemon["spawn-chance"]} %</p>
        <p>Resistencia: ${sortPokemon.resistant}</p>
        </div>
       </div>
      </div>`;
  })
  document.getElementById("root").innerHTML = showOrder;
});



