const PubSub = require('../helpers/pub_sub.js')

const PokemonView = function () {};

PokemonView.prototype.createPokemonDetail = function (pokemon) {
  const pokemonDetail = document.createElement('div');
  pokemonDetail.classList.add('pokemon-detail');

  const name = document.createElement('h3');
  name.textContent = pokemon.name;
  pokemonDetail.appendChild(name);
}


module.exports = PokemonView;
