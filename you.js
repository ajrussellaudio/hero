var You = function( name ) {
  this.name = name;
  this.pain = 100;
  this.status = "new";
  this.thingsToSave = [];
  this.lips = { touched: false };
}

You.prototype = {
  setHero: function( hero ) {
    this.hero = hero;
  },
  getHeroName: function() {
    return this.hero.name;
  },
  takeBreathAway: function( debreathed ) {
    debreathed.breath = 0;
  },
  dance: function() {
    this.status = "dancing";
  },
  run: function() {
    this.timeUntilLookBack = "song" / 0;
  },
  see: function( sight ) {
    this.status = sight;
  },
  save: function( thing ) {
    this.thingsToSave.push( thing );
  },
  getStatus: function() {
    if( this.lips.touched ){
      this.status = "trembling";
    }
    return this.status;
  },


}

module.exports = You;