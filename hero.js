var Hero = function() {
  this.name = "Enrique";
  this.timeToStandByYou = Infinity;
  this.soul = "my soul";
}

Hero.prototype = {
  kiss: function( kissedPerson ) {
    kissedPerson.pain = 0;
  },
  cry: function() {
    return "crying";
  }
}

module.exports = Hero;