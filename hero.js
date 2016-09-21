var Hero = function() {
  this.name = "Enrique"
}

Hero.prototype = {
  kiss: function( kissedPerson ) {
    kissedPerson.pain = 0;
  } 
}

module.exports = Hero;