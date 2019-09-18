function filterData(data, condition){
  return data.filter(item => item.type.includes(condition));
}


function sortData (data){
  return data.sort((a, b) =>{
    return a.name.localeCompare(b.name);  
  })
}

const app = {
  filterData: filterData,
  sortData: sortData,
}