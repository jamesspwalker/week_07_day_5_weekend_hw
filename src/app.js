const Pokemon = require('./models/pokemon.js');
const PokemonListView = require('./views/pokemon_list_views.js');

document.addEventListener('DOMContentLoaded', () => {

  const listContainer = document.querySelector('#pokemon');
  const pokemonListView = new PokemonListView(listContainer);
  pokemonListView.bindEvents();

  const pokemons = new Pokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150");
    console.log('Pokemon', pokemons);
  pokemons.getData();


});
