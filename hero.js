var Hero = function() {
  this.name = "Enrique";
  this.timeToStandByYou = Infinity;
  this.soul = "my soul";
  this.fucksGiven = 0;
}

Hero.prototype = {
  kiss: function( kissedPerson ) {
    kissedPerson.pain = 0;
  },
  cry: function() {
    return "crying";
  },
  touch: function( thing ) {
    thing.touched = true;
  }
}

module.exports = Hero;