describe( 'Testing tx.utils', function() {
  var txUtils, criteria;
  beforeEach( function() {
    module( 'tx.utils' );

    inject( function( _txUtils_ ) {
      txUtils = _txUtils_;
    } );

    criteria = {
      '#': 'hash',
      bar: 'bar',
      foo: 'foo'
    };

  } );

  it( 'should check that lastParams is null at init', function() {
    expect( txUtils.lastParams ).toBeNull();
  } );

  it( 'should remove any "#" parms from a criteria object', function() {
    var results = txUtils.paramsToCriteria( criteria );

    expect( results[ '#' ] ).toBeUndefined();
    expect( results[ 'bar' ] ).toBeDefined();
  } );

} );