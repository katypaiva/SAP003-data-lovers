const pokemonData = POKEMON.pokemon;

let test = filterType(pokemonData, "grass")

console.log(filterType())

const main = document.getElementById("content");

const test2 = pokemonData.map(poke => {main.innerHTML +=`
<div class ="card">
<img class="image" src="${poke.img}"/>
<p class="nameOf"> ${poke.name}<p>
<div class="info">
<p><strong>Pokedex:</strong> ${poke.id}</p>
<p><strong>Type:</strong> ${poke.type}</p>
<p><strong>weaknesses:</strong> ${poke.weaknesses}</p>
</div>
</div>`})

//test.main2 = test.map(images => main2.innerHTML += `<img class="testImg" src="${images.img}"/>`);
//const test2 = test.map(poke => main.innerHTML += `<img class="testImg" src="${poke.img}"/>  ${poke.name} ${poke.type} ${poke.id}`);
// const typeOfPokemons = test.map(types => main.innerHtml += `${types.type} <br>`);
