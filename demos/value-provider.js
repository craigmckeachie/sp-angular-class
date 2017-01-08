(function( angular ) {
  angular.module( 'examples.value', [] )
      .value( 'appName', 'Values Demo' )
      .value( 'staticData', {
        person: {
          name: 'Hal Jordan',
          birthdate: new Date( '1980-05-01T00:00:00-0500' )
        },
        getAge: function( person ) {
          var today = new Date();
          var diff = today.getTime() - person.birthdate.getTime();
          return diff / 1000 / 60 / 60 / 24 / 365.25;
        }
      } )
      .component( 'valueComponent', {
        controller: function( appName, staticData ) {
          ctrl = this;
          ctrl.person = staticData.person;
          ctrl.yearsOld = staticData.getAge( ctrl.person );
          ctrl.currentAppName = appName;
        },

        template: '<h2>{{ $ctrl.currentAppName }}</h2>' +
        '<h3>Person</h3>' +
        '<ul><li>Name: {{ $ctrl.person.name }}</li>' +
        '<li>Birthday: {{ $ctrl.person.birthdate | date:"MMM dd, yyyy" }}</li>' +
        '<li>{{ $ctrl.person.name }} is {{ $ctrl.yearsOld | number:0 }} years old.</li>' +
        '</ul>'
      } )
})( angular );