(function( angular ) {
  angular.module( 'examples.customFilter', [] )
      .component( 'customFilterExample', {
        templateUrl: 'custom-filter-tpl.html',
        controller: FilteringController
      } )
      .filter( 'greaterThan', greaterThanFilter );

  function greaterThanFilter() {
    return function(collection, fieldName, value) {
      if (!fieldName || !value) {
        return collection;
      }
      value = Number( value );
      return collection.filter(function(item) {
        return item[fieldName] && item[fieldName] >= value;
      })
    }
  }

  function FilteringController( $log ) {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.showWell = true;
      ctrl.people = [
        {
          "name": "Jenny Sparks",
          "gender": "female",
          "age": 15,
          "id": "201"
        },
        {
          "name": "Lucas Trent",
          "gender": "male",
          "age": 35,
          "id": "202"
        },
        {
          "name": "Jack Hawksmoor",
          "gender": "male",
          "age": 42,
          "id": "203"
        },
        {
          "name": "Jeroen Thornedike",
          "gender": "male",
          "age": 28,
          "id": "204"
        },
        {
          "name": "Angela Spica",
          "gender": "female",
          "age": 44,
          "id": "205"
        },
        {
          "name": "Shen Li-Min",
          "gender": "female",
          "age": 22,
          "id": "206"
        },
        {
          "name": "Spider Jerusalem",
          "gender": "male",
          "age": 40,
          "id": "207"
        },
        {
          "name": "Jakita Wagner",
          "gender": "female",
          "age": 38,
          "id": "208"
        },
        {
          "name": "Elijah Snow",
          "gender": "male",
          "age": 48,
          "id": "209"
        },
        {
          "name": "Ambrose Chase",
          "gender": "male",
          "age": 25,
          "id": "210"
        }
      ]

    }
  }
})( angular );