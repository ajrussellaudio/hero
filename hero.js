var Hero = function() {
  this.name = "Enrique";
  this.timeToStandByYou = Infinity;
}

Hero.prototype = {
  kiss: function( kissedPerson ) {
    kissedPerson.pain = 0;
  } 
}

module.exports = Hero;