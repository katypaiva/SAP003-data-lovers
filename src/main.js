const pokemonData = POKEMON.pokemon;
const main = document.getElementById("content");
const btnType = document.getElementById("btn-type");
const btnOrder = document.getElementById("btn-order");
const calc = document.getElementById("result");
const searchText = document.getElementById("searchtxt");
const searchBtn = document.getElementById("btn-search");
const filterOdr = document.getElementsByClassName("filterOrder");

function menuTypes(data) {
  let arrTypes = [];
  let opt = "";
  data.map(poke => poke.type.map(type => {
    if (!arrTypes.includes(type)) {
      arrTypes.push(type);
      opt += `<option class="${type}" value="${type}">${type}</option>`;
    } else {
      return false;
    }

  }));

  btnType.innerHTML = "<option value=\"none\" >Filter</option>";
  btnType.innerHTML += opt;
}

searchText.addEventListener("keydown", (event) => {
  if (event.keyCode !== 13) {
    main.innerHTML = "";
    return template(window.app.filterName(pokemonData, searchText.value));
  }
});

searchBtn.addEventListener("click", () => {
  main.innerHTML = "";
  template(window.app.filterName(pokemonData, searchText.value));
});

btnOrder.addEventListener("change", () => {
  if (btnOrder.value === "ascendingOrder" || btnOrder.value === "descendingOrder") {
    main.innerHTML = "";
    return template(window.app.sortData(pokemonData, "name", btnOrder.value));

  } else {
    main.innerHTML = "";
    return template(window.app.sortData(window.app.filterData(pokemonData, btnType.value), "name", btnOrder.value));
  }
});

btnType.addEventListener("change", () => {
  main.innerHTML = "";
  template(window.app.filterData(pokemonData, btnType.value)),
  calc.innerHTML = `There are ${window.app.computers(window.app.filterData(pokemonData, btnType.value))}% ${btnType.value} type among 151 pokemons.`;
});

window.onload = () => {
  menuTypes(pokemonData);
  template(pokemonData);
};

function template(arr) {
  let template = "";
  arr.forEach(poke => {
    template += `
<div class ="card"> 
<img class="image" src="${poke.img}"/>
<p class="nameOf"> ${poke.name.replace("(Male)", "").replace("(Female)", "")}<p>
<div class="info card${poke.type[0]}">
<p><strong>Pokedex:</strong> ${poke.id}</p>
<p><strong>Type:</strong> ${poke.type.join(", ")}</p>
<p><strong>Weaknesses:</strong> ${poke.weaknesses.join(", ")}</p>
</div>
</div>`;
  });

  main.innerHTML += template;
}

