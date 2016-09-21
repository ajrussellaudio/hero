var assert = require( "assert" );
var Hero = require( "../hero" );
var You = require( "../you" );

var you = new You( "baby" );
var hero = new Hero( "Enrique" );

var chorus = function() {
  describe( "Hero", function() {

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

  it("would dance if I asked you to dance", function() {
    you.dance();
    assert.equal( "dancing", you.getStatus() );
  });

  it("would run and never look back", function() {
    you.run();
    assert( isNaN( you.timeUntilLookBack ) );
  });

  it("would cry if you saw me crying", function() {
    you.see( hero.cry() );
    assert.equal( "crying", you.getStatus() );
  });

  it("would save my soul tonight", function() {
    you.save( hero.soul );
    assert( you.thingsToSave.indexOf( hero.soul ) > -1 );
  });

});

describe("You", function() {

  it("would tremble if I touched your lips", function() {
    hero.touch( you.lips );
    assert.equal( "trembling", you.getStatus() );
  })

  it("would laugh (oh please tell me this)", function() {
    you.laugh();
    assert.equal( "I am laughing.", you.tellStatus() );
  });


  it("would die for the one you love", function() {
    you.die( hero );
    assert.equal( "dead", you.getStatus() )
  })

  it("can hold me in your arms tonight", function() {
    you.hold( hero );
    assert.equal( hero, you.arms.holding[0] );
  })

})

chorus();

describe("You", function() {

  it("would swear that you'll always be mine", function() {
    assert.equal( hero, you.hero );
  })

  it("would lie, would run and hide", function() {
    you.run();
    assert.equal( "I am running.", you.tellStatus() );
    assert.equal( "I am not running.", you.tellLie() );
  });

})

describe("Hero", function() {

  it("is in too deep...");

  it("...has lost mind");

  it("doesn't care...");

  it("...you're here tonight")

})

chorus();
chorus();