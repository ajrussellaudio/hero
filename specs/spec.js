var assert = require( "assert" );
var Hero = require( "../hero" );
var You = require( "../you" );

var you = new You( "baby" );
var hero = new Hero( "Enrique" );

var chorus = function() {
  describe( "Hero", function() {

    var you;
    var hero;

    beforeEach(function() {
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

describe("You", function() {

  it("would dance if I asked you to dance");

  it("would run and never look back");

  it("would cry if you saw me crying");

  it("would save my soul tonight");

});

describe("You", function() {

  it("would tremble if I touched your lips")

  it("would laugh (oh please tell me this)")

  it("would die for the one you love")

  it("can hold me in your arms tonight")

})

chorus();