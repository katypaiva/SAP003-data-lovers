const pokemonData = POKEMON.pokemon;
const main = document.getElementById("content");
const btnType = document.getElementById("btn-type");
const btnOrder = document.getElementById("btn-order");

btnOrder.addEventListener ("click", () => {
  main.innerHTML = "";
  template(sortData(pokemonData));   
});

btnType.addEventListener("change", () => {
  main.innerHTML = "";
  template(app.filterData(pokemonData, btnType.value))
});

template(pokemonData);

window.onload = () => {
  menuTypes(pokemonData);
}

function template(arr) {
 arr.forEach(poke => {
    main.innerHTML += `
<div class ="card card${poke.type[0]}"> 
<img class="image" src="${poke.img}"/>
<p class="nameOf"> ${poke.name}<p>
<div class="info">
<p><strong>Pokedex:</strong> ${poke.id}</p>
<p><strong>Type:</strong> ${poke.type}</p>
<p><strong>weaknesses:</strong> ${poke.weaknesses}</p>
</div>
</div>`})
}


function menuTypes(data) {
  let arrTypes = [];
  data.map(poke => poke.type.map(type => {
    if (!arrTypes.includes(type)) {
      arrTypes.push(type);
    } else {
      return false;
    }

  }))
  btnType.innerHTML = `<option value="none" >Selecione o filtro</option>`;
  btnType.innerHTML += arrTypes.map(type => `<option class="${type}" value="${type}">${type}</option>`).join("");

}
