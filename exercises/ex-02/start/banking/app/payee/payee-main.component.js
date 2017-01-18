(function( angular ) {
  /*
   * Objectives:
   * * Make the payee object available on the controller
   * * Build a template HTML file which displays the Payee
   * * Change the template config for a templateUrl file path
   *
   * Add the payee, declared outside the controller, below, to the controller
   *
   * Change the template to a templateUrl pointing to
   * 'app/payee/payee-main.component.html'
   *
   * Go to payee-main.component.html and follow the directions there
   *
   * When you are finished, load http://localhost:8000/banking/#!/payees
   * in your browser to test the results
   *
   */

  var payee = {
    "id"        : 47,
    "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
    "categoryId": 13,
    "address"   : "16 W 12 St.",
    "city"      : "New York",
    "state"     : "NY",
    "zip"       : "10015",
    "image"     : "/images/animals/9.jpg",
    "motto"     : null
  };

  angular.module( 'payee' )
    .component( 'payeeMain', {
      template  : '<h3>Welcome to the {{ $ctrl.componentName }} component.</h3>',
      controller: PayeeMainController
    } );

  function PayeeMainController() {
    var ctrl = this;
    ctrl.componentName = 'payeeMain';

  }
})
( angular );