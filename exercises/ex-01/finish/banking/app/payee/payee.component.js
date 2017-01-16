(function( angular ) {

  /*
   * Here in payee.component.js, you will add the following code
   *
   * A new angular module, 'payee.component' which has no dependencies
   * From the payee.component module, create a new component, payeeComponent
   * which has a configuration with a template property and a controller property
   *
   * The controller (defined in the revealing module style) should make
   * a variable called 'componentName' available to the view. This variable
   * should be set to the name of the component (i.e., 'payeeComponent')
   *
   * The template property should declare, in a header 3, "Welcome to the
   * componentName component" where componentName is the variable defined
   * in the controller, above.
   *
   * When you think you are ready to test your code, open a browser and navigate
   * to http://localhost:8000/AngularClass/banking/
   * and then click on the "Payees" item in the navbar.
   *
   */

  angular.module( 'payee.component', [] )
      .component( 'payeeComponent', {
        template: '<h3>Welcome to the {{ $ctrl.componentName }} component.</h3>',
        controller: PayeeComponentController
      } );

  function PayeeComponentController() {
    var ctrl = this;
    ctrl.componentName = 'payeeComponent';

  }
})
( angular );