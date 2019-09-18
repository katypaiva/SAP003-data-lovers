function filterData(data, condition){
  return data.filter(item => item.type.includes(condition));
}

const filter = {
  filterData,
}
