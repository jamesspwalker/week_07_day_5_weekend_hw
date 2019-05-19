const PubSub = require('../helpers/pub_sub.js');
const PokemonView = require('./pokemon_view.js');

const PokemonListView = function(container) {
  this.container = container
};

PokemonListView.prototype.bindEvents = function() {
  PubSub.subscribe('Pokemon:pokemon-ready', (evt) => {
    this.renderPokemonViews(evt.detail.results);
  });
};

PokemonListView.prototype.renderPokemonViews = function (pokemons) {
  // debugger
  pokemons.forEach((pokemon) => {
    const pokemonItem = this.createPokemonListItem(pokemon);
    this.container.appendChild(pokemonItem);
  })
};

PokemonListView.prototype.createPokemonListItem = function (pokemon) {
  const pokemonView = new PokemonView();
  const pokemonDetail = pokemonView.createPokemonDetail(pokemon)
  return pokemonDetail;
}



module.exports = PokemonListView
