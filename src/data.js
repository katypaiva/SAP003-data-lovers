// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
function filterType(){
  pokemonData.filter(typeOf => typeOf.type);
}

  window.main = {filterType : filterType}