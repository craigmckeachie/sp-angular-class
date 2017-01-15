describe( 'Testing common.providers', function() {
  var serializer, params, serializedParams, startDate;
  beforeEach( function() {
    module( 'common' );
    startDate = new Date( 2015, 0, 1 );

    inject( function( bankingHttpSerializer ) {
      serializer = bankingHttpSerializer;
    } );

    params = {
      payee       : {
        payeeName: 'Yoyodyne'
      },
      amountHigh  : 10,
      amountLow   : 1,
      startDate   : startDate,
      endDate     : new Date( 2016, 0, 1 ),
      categoryName: 'Industrial'
    };

    serializedParams = serializer( params );
    console.log('serializedParams: ', serializedParams)
  } );

  it( 'should generate an encoded string', function() {
    expect( typeof serializedParams ).toBe( 'string' );
  } );

  it( 'should contain some of the keys', function() {
    expect( serializedParams ).toMatch( /amountHigh/ );
    expect( serializedParams ).toContain( 2015 );
  } );

  it('should correctly serialize dates', function() {
    expect( params.startDate ).toBe( startDate );
    expect( serializedParams ).toMatch( startDate.toISOString() );
  })

} );