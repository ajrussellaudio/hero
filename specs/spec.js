var assert = require( "assert" );
var Hero = require( "../hero" );
var You = require( "../you" );

var chorus = function() {
  describe( "Hero", function() {

    var you;
    var hero;

    beforeEach(function() {
      you = new You( "baby" );
      hero = new Hero( "Enrique" );
    })

    it("can be your hero baby", function() {
      you.setHero( hero );
      assert.equal( "Enrique", you.getHeroName() );
    });

    it("can kiss away the pain", function() {
      hero.kiss( you );
      assert.equal( 0, you.pain );
    });

    it("will stand by you forever", function() {
      assert.equal( Infinity, hero.timeToStandByYou )
    });

    it("you can take its breath away", function() {
      you.takeBreathAway( hero );
      assert.equal( 0, hero.breath );
    });

  })
};

chorus();