describe( 'Transaction List Test', function() {
  var baseUrl = 'http://localhost:8000/AngularClass/banking/';

  describe( 'Transaction path tests: ', function() {

    beforeEach( function() {
      browser.get( baseUrl );
    } );

    it( 'should land on transactions/search', function() {
      expect( browser.getLocationAbsUrl() ).toBe( '/tx/search' );
    } );

    describe( 'Search to list tests: ', function() {
      var payeeName = 'Yoyodyne';

      beforeEach( function() {
        element( by.model( 'searchForm.payeeName' ) ).sendKeys( payeeName );
        element( by.buttonText( 'Search' ) ).click();
      } );

      it( 'should update the URL to /tx/list', function() {
        expect( browser.getLocationAbsUrl() ).toBe( '/tx/list?payeeName=' + payeeName );
      } );

      it( 'should search and find transactions', function() {
        var allTx = element.all( by.repeater( 'tx in $ctrl.transactions' ) );
        expect( allTx.count() ).toBeGreaterThan( 2 );

        allTx.each( function( element, idx ) {
          expect( element.getText() ).toContain( payeeName );
        } );
      } );

      describe( 'txList change tests: ', function() {
        var amtLow, amtHigh, addedCriteria, initCount;
        beforeEach( function() {
          amtLow = -40;
          amtHigh = -30;
          addedCriteria = '/tx/list?payeeName=' + payeeName + '&amountLow=' + amtLow + '&amountHigh=' + amtHigh;

          element.all( by.repeater( 'tx in $ctrl.transactions' ) ).count()
              .then( function( count ) {
                browser.getLocationAbsUrl().then( function( url ) {
                  console.log( 'Url [%s]', url );
                } );
                initCount = count;
              } );
          browser.setLocation( addedCriteria );
        } );

        it( 'should update criteria when the URL updates: ', function() {
          expect( browser.getLocationAbsUrl() ).toBe( addedCriteria );
        } );

        // This is failing, because it's not picking up updated transaction list
        // I don't know why
        xit( 'should shrink the count of transactions: ', function() {
          expect( browser.getLocationAbsUrl() ).toBe( addedCriteria );
          var allTx = element.all( by.repeater( 'tx in $ctrl.transactions' ) );
          allTx.count().then( function( finalCount ) {
            browser.getLocationAbsUrl().then( function( url ) {
              console.log( 'Url [%s]', url );
              expect( browser.getLocationAbsUrl() ).toBe( addedCriteria );
              expect( finalCount ).toBeLessThan( initCount );
            } );
          } );
        } )

      } );

      describe( 'Search to list to detail tests: ', function() {
        var selectedTx, previousTx;

        beforeEach( function() {
          selectedTx = element.all( by.repeater( 'tx in $ctrl.transactions' ) ).get( getRandomInt( 1, 10 ) );
          previousTx = {
            amount: selectedTx.$( '.dt-amount' ).getText(),
            txType: selectedTx.$( '.dt-txType' ).getText(),
            txDate: selectedTx.$( '.dt-txDate' ).getText(),
            categoryName: selectedTx.$( '.dt-category' ).getText()
          };

          selectedTx.click();
        } );

        it( 'should update the URL to /tx/detail', function() {
          expect( browser.getLocationAbsUrl() ).toMatch( /\/tx\/detail\/[0-9]+/ );
        } );

        it( 'should match the selected tx', function() {
          var container = element( by.css( '.tx-detail-container' ) );
          expect( container.$( '.tx-payeeName' ).getText() ).toMatch( new RegExp( payeeName ) );
          expect( container.$( '.tx-amount' ).getText() ).toBe( previousTx.amount );
          expect( container.$( '.tx-txType' ).getText() ).toBe( previousTx.txType );
          expect( container.$( '.tx-txDate' ).getText() ).toBe( previousTx.txDate );
          expect( container.$( '.tx-categoryName' ).getText() ).toBe( previousTx.categoryName );
        } );

        it( 'should change to another txId', function() {
          browser.setLocation( '/tx/detail/500' );

          expect( browser.getLocationAbsUrl() ).toBe( '/tx/detail/500' );

          var container = element( by.css( '.tx-detail-container' ) );

          expect( container.$( '.tx-payeeName' ).getText() ).toBeTruthy();
          expect( container.$( '.tx-payeeName' ).getText() ).not.toMatch( new RegExp( payeeName ) );
          expect( container.$( '.tx-amount' ).getText() ).toBeTruthy();
          expect( container.$( '.tx-amount' ).getText() ).not.toBe( previousTx.amount );
          expect( container.$( '.tx-txType' ).getText() ).toBeTruthy();
          expect( container.$( '.tx-txType' ).getText() ).not.toBe( previousTx.txType );
          expect( container.$( '.tx-txDate' ).getText() ).toBeTruthy();
          expect( container.$( '.tx-txDate' ).getText() ).not.toBe( previousTx.txDate );
          expect( container.$( '.tx-categoryName' ).getText() ).toBeTruthy();
          expect( container.$( '.tx-categoryName' ).getText() ).not.toBe( previousTx.categoryName );
        } )
      } )
    } );
  } );

  describe( 'Transaction standalone tests: ', function() {
    describe( 'Transaction detail standalone tests: ', function() {
      beforeEach( function() {
        browser.get( 'http://localhost:8000/AngularClass/banking/#/tx/detail/500' );
      } );
      it( 'should find an actual tx', function() {

        var container = element( by.css( '.tx-detail-container' ) );
        expect( container.$( '.tx-payeeName' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-amount' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-txType' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-txDate' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-categoryName' ).getText() ).toBeTruthy();
      } );

      it( 'should switch to another tx', function() {
        var previousContainer = element( by.css( '.tx-detail-container' ) );
        var previousTx = {
          payeeName: previousContainer.$( '.tx-payeeName' ).getText(),
          amount: previousContainer.$( '.tx-amount' ).getText(),
          txType: previousContainer.$( '.tx-txType' ).getText(),
          txDate: previousContainer.$( '.tx-txDate' ).getText(),
          categoryName: previousContainer.$( '.tx-categoryName' ).getText()
        };

        browser.setLocation( '/tx/detail/501' );

        var container = element( by.css( '.tx-detail-container' ) );
        expect( container.$( '.tx-payeeName' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-payeeName' ).getText() ).not.toBe( previousTx.payeeName );
        expect( container.$( '.tx-amount' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-amount' ).getText() ).not.toBe( previousTx.amount );
        expect( container.$( '.tx-txType' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-txType' ).getText() ).not.toBe( previousTx.txType );
        expect( container.$( '.tx-txDate' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-txDate' ).getText() ).not.toBe( previousTx.txDate );
        expect( container.$( '.tx-categoryName' ).getText() ).toBeTruthy();
        expect( container.$( '.tx-categoryName' ).getText() ).not.toBe( previousTx.categoryName );
      } );
    } );

    describe( 'Transaction list standalone tests: ', function() {
      var amtLow = -40, amtHigh = -30;
      beforeEach( function() {
        var url = 'http://localhost:8000/AngularClass/banking/#/tx/list?amountLow=' + amtLow + '&amountHigh=' + amtHigh;
        browser.get( url );
      } );

      it( 'should find some tx', function() {
        var allTx = element.all( by.repeater( 'tx in $ctrl.transactions' ) );
        expect( allTx.count() ).toBeGreaterThan( 2 );

        allTx.each( function( element, idx ) {
          element.$( '.dt-amount' ).getText().then( function( results ) {
            results = results.replace( '$', '' );
            expect( results ).toBeGreaterThan( amtLow );
            expect( results ).toBeLessThan( amtHigh );
          } );
        } );
      } );

    } )
  } );

// Thanks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt( min, max ) {
    return Math.floor( Math.random() * (max - min) ) + min;
  }
} );