describe( 'testing component testing', function() {
  var $componentController, $compile, $rootScope;

  beforeEach( function() {
    module( 'examples.testing' );
    module( 'htmlTemplates' );

    inject( function( _$componentController_, _$compile_, _$rootScope_ ) {
      $componentController = _$componentController_;
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    } )
  } );

  it( 'should be a basic test', function() {
    expect( 1 ).toBeTruthy();
  } );

  it( 'should load the testComponent controller', function() {
    var ctrl = $componentController( 'testTarget' );
    expect( ctrl ).not.toBeNull();
    expect( ctrl.rightMessage ).toBeDefined();
    expect( ctrl.leftMessage ).toContain( 'left' );
    expect( ctrl.rightMessage ).not.toContain( 'after $onInit()' );
  } );

  it( 'should fire $onInit()', function() {
    var ctrl = $componentController( 'testTarget' );
    expect( ctrl ).toBeDefined();
    expect( ctrl.rightMessage ).toBeDefined();
    expect( ctrl.leftMessage ).toContain( 'left' );

    ctrl.$onInit();

    // Inverted the test in 'should load the testComponent controller'
    expect( ctrl.rightMessage ).toContain( 'after $onInit()' );
  } );

  describe( 'Testing test-target via $compile', function() {
    var scope, element, testTarget, controller, isoScope;

    beforeEach( function() {
      scope = $rootScope.$new();
      element = '<test-target external-message="$ctrl.externalMessage"></test-target>';

      scope.$ctrl = { externalMessage: { greeting: 'Hello' } };

      testTarget = $compile( element )( scope );
      scope.$digest();

      controller = testTarget.controller( 'testTarget' );

      // This is the scope which belongs to the component and has $ctrl on it
      isoScope = testTarget.isolateScope();
    } );

    it( 'should load testTarget through $compile', function() {

      expect( testTarget ).toBeDefined();
      expect( testTarget.scope() ).toEqual( scope );
      expect( testTarget.html() ).toContain( 'left' );
      expect( testTarget.html() ).toContain( 'right' );
    } );

    it( 'should update with a change to scope.$ctrl', function() {

      expect( testTarget.html() ).toContain( 'Hello' );

      scope.$ctrl.externalMessage.greeting = 'Good-bye';

      scope.$digest();
      expect( testTarget.html() ).not.toContain( 'Hello' );
      expect( testTarget.html() ).toContain( 'Good-bye' );

    } );

    it( 'should trigger $onChanges()', function() {
      expect( controller.$onChanges ).toBeDefined();

      spyOn( controller, '$onChanges' ).and.callThrough();
      expect( controller.$onChanges ).not.toHaveBeenCalled();

      /* Has to be a replacement of externalMessage, not a re-assignment of
       * externalMessage.greeting. Just re-assigning externalMessage.greeting
       * will not trigger $onChanges when a $digest happens, because it is a
       * deep property. $onChanges is only watching externalMessage, not the
       * properties under it.
       */
      scope.$ctrl.externalMessage = { greeting: 'Good-bye' };
      scope.$digest();
      expect( testTarget.html() ).not.toContain( 'Hello' );
      expect( testTarget.html() ).toContain( 'Good-bye' );
      expect( controller.$onChanges ).toHaveBeenCalled();
    } )
  } )
} );
