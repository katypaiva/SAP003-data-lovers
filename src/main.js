const test = POKEMON.pokemon;

const main = document.getElementById("content");
const main2 = document.getElementById("test");
//test.main2 = test.map(images => main2.innerHTML += `<img class="testImg" src="${images.img}"/>`);
//const test2 = test.map(poke => main.innerHTML += `<img class="testImg" src="${poke.img}"/>  ${poke.name} ${poke.type} ${poke.id}`);

// const typeOfPokemons = test.map(types => main.innerHtml += `${types.type} <br>`);
const test2 = test.map(poke => {main.innerHTML += `
<div class ="card">
<img class="image" src="${poke.img}"/>
<p class="nameOf"> ${poke.name}<p>
<div class="informations">
<p><stronger>Pokedex:</stronger>${poke.id}</p>
<p><stronger>Tipo:</stronger>${poke.type}</p>
<p><stronger>Ovo:</stronger>${poke.egg}</p>
</div>
</div>`})