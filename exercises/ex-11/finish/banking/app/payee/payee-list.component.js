/*
 * In this exercise, you will add two feature to the list view
 * 1) When a user clicks on a column heading, the rows are sorted by that column
 * 2) There are filters below each column header for the user, allowing the
 *    filtering of the current recordset
 *
 * To implement part 1, go to payee-list-tpl.html and add an orderBy filter to
 * the ng-repeat. What field should it order by? That should be determined by
 * which header was clicked-on! Once you have figured out the basics, try this
 * If you click on the same header again, the sort should reverse itself, but
 * if you click on a different header, it should be a simple ascending sort
 * for that property. You may want to have a function here in the component
 * handle this.
 *
 * To implement part 2, stay in payee-list-tpl.html. Add a row to the header
 * section (it's there in the comments). The row should have a form field
 * for each column header. When users enter data in the form fields,
 * Angular should automatically filter the data set based on the data in
 * the fields. Don't forget that this means there will be changes to the
 * ng-repeat expression as well.
 *
 */

(function( angular ) {
  angular.module( 'payee.list', [] )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list-tpl.html',
        controller: PayeeListController,
        require: {
          payeeComponent: '^^payeeComponent'
        },
        bindings: {
          payees: '<',
          onSelect: '&'
        }
      } );

  function PayeeListController( $stateParams, payeeUtils ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.callSelect = callSelect;
    ctrl.toggleSort = toggleSort;

    function onInit() {
      var criteria = payeeUtils.paramsToCriteria($stateParams);
      var criteriaKeys = Object.keys( criteria );
      if (criteriaKeys.length === 0) {
        // Do nothing, but don't do any of the below
      } else if ( criteriaKeys.length >= 1 && !ctrl.payees ) {
        updatePayees( criteria );
      } else if ( !payeeUtils.sameParams( criteria ) ) {
        updatePayees( criteria );
      }
    }

    function onChanges() {
      // Flag for whether to display results
      ctrl.noPayees = ctrl.payees && ctrl.payees.length === 0;
    }

    function updatePayees( criteria ) {
      ctrl.payees = [];
      ctrl.payeeComponent.search( criteria )
          .then( function( results ) {
            ctrl.payees = results;
          } )
    }

    function callSelect( clickedPayee ) {
      ctrl.onSelect( { payee: clickedPayee } );
    }

    function toggleSort(field) {
      if (ctrl.sortField === field) {
        ctrl.sortField = '-' + field;
      } else {
        ctrl.sortField = field;
      }
    }

  }
})( angular );