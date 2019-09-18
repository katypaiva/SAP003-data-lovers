// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
function filterData(data, condition){
  return data.filter(item => item.type.includes(condition));
}

const filter = {
  filterData,
}