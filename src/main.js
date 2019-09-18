const pokemonData = POKEMON.pokemon;

const main = document.getElementById("content");
const btnType = document.getElementById("btn-type");

// const filterValue = filter.filterData(pokemonData, btnType.value);


btnType.addEventListener("change", funcao)

function funcao(){
    template(filter.filterData(pokemonData, btnType.value));
}


function template(arr) { 
 return arr.map(poke => {main.innerHTML +=`
<div class ="card">
<img class="image" src="${poke.img}"/>
<p class="nameOf"> ${poke.name}<p>
<div class="info">
<p><strong>Pokedex:</strong> ${poke.id}</p>
<p><strong>Type:</strong> ${poke.type}</p>
<p><strong>weaknesses:</strong> ${poke.weaknesses}</p>
</div>
</div>`})
}


window.onload = () => {
    //template(pokemonData);
    menuTypes(pokemonData);
}

function menuTypes (data){
    let arrTypes = [];

    data.map(poke => poke.type.map (type => {
        if(!arrTypes.includes(type)){
            arrTypes.push(type);
            } else {
                return false;
            }

    }))
    btnType.innerHTML = `<option value="none" >Selecione o filtro</option>`;
    btnType.innerHTML +=  arrTypes.map(type =>`<option value="${type}">${type}</option>`).join("");

}


//test.main2 = test.map(images => main2.innerHTML += `<img class="testImg" src="${images.img}"/>`);
//const test2 = test.map(poke => main.innerHTML += `<img class="testImg" src="${poke.img}"/>  ${poke.name} ${poke.type} ${poke.id}`);
// const typeOfPokemons = test.map(types => main.innerHtml += `${types.type} <br>`);
