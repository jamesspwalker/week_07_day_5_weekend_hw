const PubSub = require('../helpers/pub_sub.js');
const PokemonView = require('./pokemon_view');

const PokemonListView = function(container){
  this.container = container;
};

PokemonListView.prototype.bindEvents = function () {
  PubSub.subscribe('Pokemon:pokemon-ready', (evt) => {

  });
};




module.exports = PokemonListView
