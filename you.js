var Hero = require( "./hero" )

var You = function( name ) {
  this.name = name;
  this.pain = 100;
  this.status = "new";
  this.thingsToSave = [];
  this.lips = { touched: false };
  this.arms = { holding: [] };
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
  laugh: function() {
    this.status = "laughing";
  },
  die: function( reason ) {
    if( reason instanceof Hero ) {
      this.status = "dead"; 
    }
  },
  hold: function( thing ) {
    this.arms.holding.push( thing );
  },

  getStatus: function() {
    if( this.lips.touched ){
      this.status = "trembling";
      this.lips.touched = false;
    }
    return this.status;
  },
  tellStatus: function() {
    var status = this.getStatus();
    var string = ("I am " + status + ".");
    return string;
  }


}

module.exports = You;