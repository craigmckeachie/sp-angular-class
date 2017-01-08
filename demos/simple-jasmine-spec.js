describe( 'A simple test', function() {
  beforeEach( function() {
    console.log( 'This runs before each it()' );
  } );

  afterEach( function() {
    console.log( 'This runs after each it()' );
  } );

  it( 'should pass, always.', function() {
    expect( 1 ).toEqual( 1 );
  } );

  it( 'should also pass, always.', function() {
    expect( 'one' ).toBeTruthy();
  } );

  describe( 'A sub-describe!', function() {
    it( 'should pass as part of a sub-describe', function() {
      expect( 'antidisestablishmentarianism' ).toContain( 'establish' );
    } )
  } )
} );