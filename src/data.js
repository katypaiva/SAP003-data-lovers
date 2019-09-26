function filterData(data, condition) {
  return data.filter(item => item.type.includes(condition));
}

function filterName(data, condition) {
  return data.filter(item => item.name.includes(condition.charAt(0).toUpperCase() + condition.slice(1)));
}

function sortData(data, sortBy, sortOrder) {
  let orderAZ = (a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  };

  if (sortOrder === "ascendingOrder") {
    return data.sort(orderAZ);
  } else if (sortOrder === "descendingOrder") {
    return data.reverse(data.sort(orderAZ));
  };
}

function computers(data) {
  return ((data.length * 100) / 151).toFixed(1);
}

window.app = {
  filterData: filterData,
  sortData: sortData,
  computers: computers,
  filterName: filterName,
};