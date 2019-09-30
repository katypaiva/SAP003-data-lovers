require("../src/data.js");

const pokemonData = [
  { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"] },
  { "id": 2, "num": "002", "name": "Ivysaur", "type": ["Grass", "Poison"] },
  { "id": 3, "num": "003", "name": "Venusaur", "type": ["Grass", "Poison"] },
  { "id": 4, "num": "004", "name": "Charmander", "type": ["Fire"] },
  { "id": 5, "num": "005", "name": "Charmeleon", "type": ["Fire"] }
];

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toEqual("function");
  });

  it("returns `example`", () => {

    expect(app.filterData(pokemonData, "Fire")).toEqual
    ([
      { "id": 4, "num": "004", "name": "Charmander", "type": ["Fire"] },
      { "id": 5, "num": "005", "name": "Charmeleon", "type": ["Fire"] }
    ]);
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof app.sortData).toEqual("function");
  });

  it("returns `example`", () => {

    expect(app.sortData(pokemonData, "name", "ascendingOrder")).toEqual
    ([
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"] },
      { "id": 4, "num": "004", "name": "Charmander", "type": ["Fire"] },
      { "id": 5, "num": "005", "name": "Charmeleon", "type": ["Fire"] },
      { "id": 2, "num": "002", "name": "Ivysaur", "type": ["Grass", "Poison"] },
      { "id": 3, "num": "003", "name": "Venusaur", "type": ["Grass", "Poison"] }
    ]);

  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof app.sortData).toEqual("function");
  });

  it("returns `example`", () => {

    expect(app.sortData(pokemonData, "name", "descendingOrder")).toEqual
    ([
      { "id": 3, "num": "003", "name": "Venusaur", "type": ["Grass", "Poison"] },
      { "id": 2, "num": "002", "name": "Ivysaur", "type": ["Grass", "Poison"] },
      { "id": 5, "num": "005", "name": "Charmeleon", "type": ["Fire"] },
      { "id": 4, "num": "004", "name": "Charmander", "type": ["Fire"] },
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"] }
    ]);
  });
});

describe("computers", () => {
  it("is a function", () => {
    expect(typeof app.computers).toBe("function");
  });

  it("returns `1.3`", () => {

    expect(app.computers(app.filterData(pokemonData, "Fire"))).toBe("1.3");
  });
});

describe("filterName", () => {
  it("is a function", () => {
    expect(typeof app.filterName).toEqual("function");
  });

  it("returns `pokemons`", () => {

    expect(app.filterName(pokemonData, "Charmander")).toEqual
    ([
      { "id": 4, "num": "004", "name": "Charmander", "type": ["Fire"] }
    ]);
  });
});