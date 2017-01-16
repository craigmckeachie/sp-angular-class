(function( angular ) {
  /*
   * Add a bindings configuration which takes two bindings
   * payee: A one-way data binding
   * onBack: a function
   *
   * Take a look at payee-detail-tpl.html
   * Note that the button at the bottom calls ctrl.clickBack, below
   * And that ctrl.clickBack invokes the callback passed in via on-back
   *
   * You should be ready to test your code.
   * Visit http://localhost:8000/AngularClass/banking/#/payees and try it out!
   */
  angular.module( 'payee.detail', [] )
      .component( 'payeeDetail', {
        templateUrl: 'app/payee/payee-detail-tpl.html',
        controller: PayeeDetailController
      } );

  function PayeeDetailController( $stateParams ) {
    var ctrl = this;
    ctrl.clickBack = function() {
      ctrl.onBack();
    }
  }
})( angular );