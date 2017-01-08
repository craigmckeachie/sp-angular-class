describe( 'Payee List Test', function() {
  var baseUrl = 'http://localhost:8000/AngularClass/banking/#/payees/search';

  describe( 'Payee path tests: ', function() {

    beforeEach( function() {
      browser.get( baseUrl );
    } );

    it( 'should land on payees/search', function() {
      expect( browser.getLocationAbsUrl() ).toBe( '/payees/search' );
    } );

    describe( 'Search to list tests: ', function() {
      var state = 'CA';

      beforeEach( function() {
        element( by.model( '$ctrl.searchForm.state' ) ).sendKeys( state );
        element( by.buttonText( 'Search' ) ).click();
      } );

      it( 'should update the URL to /payees/list', function() {
        expect( browser.getLocationAbsUrl() ).toBe( '/payees/list?state=' + state );
      } );

      it( 'should search and find payees', function() {
        var allPayee = element.all( by.repeater( 'payee in $ctrl.payees' ) );
        expect( allPayee.count() ).toBeGreaterThan( 2 );

        allPayee.each( function( element, idx ) {
          expect( element.getText() ).toContain( state );
        } );
      } );

      it('should update criteria when the URL updates: ', function() {
        // TODO: Complete test.
      });

      describe( 'Search to list to detail tests: ', function() {
        var selectedPayee, previousPayee;

        beforeEach( function() {
          selectedPayee = element.all( by.repeater( 'payee in $ctrl.payees' ) ).get( getRandomInt( 0, 2 ) );
          previousPayee = {
            payeeName: selectedPayee.$( '.dt-payeeName' ).getText(),
            city: selectedPayee.$( '.dt-payeeCity' ).getText(),
            state: selectedPayee.$( '.dt-payeeState' ).getText()
          };

          selectedPayee.click();
        } );

        it( 'should update the URL to /payees/detail', function() {
          expect( browser.getLocationAbsUrl() ).toMatch( /\/payees\/detail\/[0-9]+/ );
        } );

        it( 'should match the selected payee', function() {
          var container = element( by.css( '.payee-detail-container' ) );
          expect( container.$( '.payee-payeeName' ).getText() ).toBe( previousPayee.payeeName );
          expect( container.$( '.payee-city' ).getText() ).toBe( previousPayee.city );
          expect( container.$( '.payee-state' ).getText() ).toBe( previousPayee.state );
        } );

        it( 'should change to another payeeId', function() {
          var newLocation = '/payees/detail/47';
          browser.setLocation( newLocation );

          expect( browser.getLocationAbsUrl() ).toBe( newLocation );

          var container = element( by.css( '.payee-detail-container' ) );

          expect( container.$( '.payee-payeeName' ).getText() ).toBeTruthy();
          expect( container.$( '.payee-payeeName' ).getText() ).not.toBe( previousPayee.payeeName);
          expect( container.$( '.payee-city' ).getText() ).toBeTruthy();
          expect( container.$( '.payee-city' ).getText() ).not.toBe( previousPayee.city );
          expect( container.$( '.payee-state' ).getText() ).toBeTruthy();
          expect( container.$( '.payee-state' ).getText() ).not.toBe( previousPayee.state );
        } )
      } )
    } );
  } );

  describe( 'Payee standalone tests: ', function() {
    describe( 'Payee detail standalone tests: ', function() {
      beforeEach( function() {
        browser.get( 'http://localhost:8000/AngularClass/banking/#/payees/detail/47' );
      } );
      it( 'should find an actual payee', function() {

        var container = element( by.css( '.payee-detail-container' ) );
        expect( container.$( '.payee-payeeName' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-city' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-state' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-payeeId' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-address' ).getText() ).toBeTruthy();
      } );

      it( 'should switch to another payee', function() {
        var previousContainer = element( by.css( '.payee-detail-container' ) );
        var previousPayee = {
          payeeName: previousContainer.$( '.payee-payeeName' ).getText(),
          city: previousContainer.$( '.payee-city' ).getText(),
          state: previousContainer.$( '.payee-state' ).getText()
        };

        browser.setLocation( '/payees/detail/48' );

        var container = element( by.css( '.payee-detail-container' ) );
        expect( container.$( '.payee-payeeName' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-payeeName' ).getText() ).not.toBe( previousPayee.payeeName);
        expect( container.$( '.payee-city' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-city' ).getText() ).not.toBe( previousPayee.city );
        expect( container.$( '.payee-state' ).getText() ).toBeTruthy();
        expect( container.$( '.payee-state' ).getText() ).not.toBe( previousPayee.state );
      } );
    } )
  } );

  // Thanks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt( min, max ) {
    return Math.floor( Math.random() * (max - min) ) + min;
  }
} );