(function( angular ) {
  angular.module( 'examples.ajax', [] )
    .component( 'successfulAjax', {
      template  : '<p>This is the success-ajax component</p>' +
      '<p>Results: </p>' +
      '<ul>' +
      '<li>Transaction id: {{ $ctrl.tx.id }}</li>' +
      '<li>Transaction payee: {{ $ctrl.tx.payee.payeeName }}</li>' +
      '<li>Transaction amount: {{ $ctrl.tx.amount | currency }}</li>' +
      '</ul>',
      controller: SuccessAjaxController
    } )
    .component( 'failedAjax', {
      template  : '<p>This is the failed-ajax component</p>' +
      '<div ng-if="$ctrl.tx"><p>Results: </p>' +
      '<ul>' +
      '<li>Transaction id: {{ $ctrl.tx.id }}</li>' +
      '<li>Transaction payee: {{ $ctrl.tx.payee.payeeName }}</li>' +
      '<li>Transaction amount: {{ $ctrl.tx.amount | currency }}</li>' +
      '</ul></div>' +
      '<p ng-if="!$ctrl.tx">Check the console for error details.</p>',

      controller: FailedAjaxController
    } );

  function SuccessAjaxController( $log, $http ) {
    var ctrl = this;

    $http.get( 'http://localhost:8001/tx/500' )
      .then( successCallback );

    function successCallback( results ) {
      ctrl.tx = results.data;
      $log.log( 'Successful result: [%s %s]', results.status, results.statusText );
    }

  }

  function FailedAjaxController( $log, $http ) {
    var ctrl = this;

    // This URL doesn't exist.
    $http.get( 'http://localhost:8001/tq/500' )
      .then( null, failureCallback );

    function failureCallback( err ) {
      $log.error( 'Error with the Ajax request [%s %s %o]', err.status, err.statusText, err.data );
    }
  }

})( angular );