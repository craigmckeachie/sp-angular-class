(function( angular ) {
  /*
   * Create a component, Payee detail
   * It belongs to the existing module payee
   * It is called payeeDetail
   * Its template is payee-detail.component.html
   * Add a bindings configuration, which expects to be passed a single payee via
   * the "payee" attribute, as a one-way binding
   * It does not, at the moment, need a controller
   *
   * Then go to payee-list.component.html and pass the selected Payee from
   * payee-list to payee-detail
   *
   */
  angular.module( 'payee' )
    .component( 'payeeDetail', {
      templateUrl: 'app/payee/payee-detail.component.html',
      bindings   : {
        payee: '<'
      }
    } );
})( angular );