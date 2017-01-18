(function( angular ) {
  angular.module( 'examples.promises', [] )
    .component( 'promiseChain', {
      template  : '<p>This is the promise-chain component</p>' +
      '<p>Results: </p>' +
      '<ul>' +
      '<li>Transaction id: {{ $ctrl.tx.txId }}</li>' +
      '<li>Transaction payee: {{ $ctrl.tx.payee.payeeName }}</li>' +
      '<li>Transaction amount: {{ $ctrl.tx.amount | currency }}</li>' +
      '</ul>',
      controller: PromiseChainController
    } );

  function PromiseChainController( $log, $http, $q ) {
    var ctrl = this;

    // Swap these to change from running a successful request to one that will fail
    var p1 = $http.get( 'http://localhost:7100/banking/tq/500' );
    // var p1 = $http.get( 'http://localhost:7100/banking/tx/500' );

    var p2 = p1.then( function( results ) {
      $log.log( 'First-order promise [%o]', results );

      // Comment this out to see the effects in later promises
      return results.data;
    }, function( err ) {
      $log.error( 'First-order promise: Something went wrong! [%o]', err );

      // Comment this out to see that if the error is not passed along,
      // the success "chain" continues. That is, if this error callback
      // does not pass the error along (by re-throwing or returning a rejected
      // promise), the next step in the promise chain assumes success!
      throw new Error( err );
    } );

    var p3 = p2.then( function( tx ) {
      $log.log( 'Second-order promise [%o]', tx );
      ctrl.tx = tx;
      return tx.payee.payeeName;
    }, function( err ) {
      $log.error( 'Second-order promise: Something went wrong! [%o]', err );

      // Returning a rejected promise
      return $q.reject( err );
    } );

    var p4 = p3.then( function( payeeName ) {
      $log.log( 'Third-order promise' );
      $log.log( 'The payeeName is %s', payeeName );
    }, function( err ) {
      $log.error( 'Third-order promise: Something went wrong! [%o]', err );
    } );
  }
})( angular );