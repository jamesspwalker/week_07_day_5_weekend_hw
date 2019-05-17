const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Pokemon = function (url) {
  this.url = url;
  this.pokemonData = [];
};

  Pokemon.prototype.getData = function() {
    const request = new RequestHelper(this.url);
    request.get()
    .then((data) => {
      this.pokemonData = data;
      PubSub,publish('Pokemon:pokemon-ready', this.pokemonData);
      console.log(data);
    });
  };



module.exports = Pokemon;
