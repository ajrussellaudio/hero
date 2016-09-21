var You = function( name ) {
  this.name = name;
  this.pain = 100;
}

You.prototype = {
  setHero: function( hero ) {
    this.hero = hero;
  },
  getHeroName: function() {
    return this.hero.name;
  }
}

module.exports = You;