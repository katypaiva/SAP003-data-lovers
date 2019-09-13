const test = POKEMON.pokemon;

const main = document.getElementById("content");
const test2 = test.map(poke => main.innerHTML +=`${poke.name}</br>`);


test.map(image => main.innerHTML += `<img src"${image.img}">`);