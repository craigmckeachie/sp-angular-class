describe( 'Transaction List Test', function() {
  var baseUrl = 'http://localhost:8000/AngularClass/banking/';

  beforeEach( function() {
    browser.get( baseUrl );
  } );

  describe( 'Successful tests: ', function() {

    it( 'should land on transactions', function() {
      expect( browser.getLocationAbsUrl() ).toBe( '/tx' );
    } );

    it( 'should have many transactions', function() {
      var allTx = element.all( by.repeater( 'tx in $ctrl.transactions' ) );
      expect( allTx.count() ).toBeGreaterThan( 500 );
    } );

    it( 'should have at least one specific transaction', function() {
      var oneTx = element( by.cssContainingText( '.dt-body-cell', 'Goodman, Lieber, Kurtzberg, Holliway' ) );
      expect( oneTx.getText() ).toMatch( /Goodman, Lieber/ );
    } );
  } );

  it( 'should transition to detail on click', function() {
    var parentTx = element.all( by.cssContainingText( '.dt-body-cell', 'Goodman, Lieber, Kurtzberg, Holliway' ) )
        .first()
        .element( by.xpath( '..' ) );
    var payee = parentTx.element( by.css( '.dt-payee' ) ).getText(),
        amount = parentTx.element( by.css( '.dt-amount' ) ).getText(),
        txType = parentTx.element( by.css( '.dt-txType' ) ).getText(),
        txDate = parentTx.element( by.css( '.dt-txDate' ) ).getText(),
        category = parentTx.element( by.css( '.dt-category' ) ).getText();

    parentTx.click();
    expect( payee ).toContain( 'Lieber' );

    var txDetails = element.all( by.css( '.panel-body .tx-value' ) );
    expect( txDetails.get( 1 ).getText() ).toBe( payee );
    expect( txDetails.get( 2 ).getText() ).toBe( amount );
    expect( txDetails.get( 3 ).getText() ).toBe( txDate );
    expect( txDetails.get( 4 ).getText() ).toBe( txType );
    expect( txDetails.get( 6 ).getText() ).toBe( category );
  } );
} );