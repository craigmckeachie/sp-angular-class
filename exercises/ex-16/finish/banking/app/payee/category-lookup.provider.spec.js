describe( 'Testing categoryLookup value', function() {
  /*
   * Objectives
   * * Write unit tests for the categoryLookup constant
   * * Add the appropriate list of files to the Karma configuration files
   *
   * Start here, do the following:
   * - Add a beforeEach function which loads the payee module and injects
   *   the categoryLookup provider
   * - Write one test to see if categoryLookup.byId() works with an id of 1
   * - Then go to test/karma/category-lookup.karma-conf.js
   *
   * Try running your single test by going to your command prompt
   * changing directory to banking/app/payee/test/karma
   * And then running
   * karma start category-lookup.karma-conf.js
   *
   * When your test runs successfully, add the following tests:
   * - Test whether categoryLookup.byId() returns null
   *   if the number is out of bounds
   * - Test whether categoryLookup.byId() returns null if the argument is
   *   of the wrong type (a string, date, whatever)
   * - Test whether categoryLookup.byNames() returns an array of values
   *   and whether those values are correct
   *
   * Since the karma configuration file has autoWatch enabled and singleRun
   * turned off, each time you save your file, the tests will re-run. If
   * it seems like karma is having difficulty, you can always hit ctrl-c
   * and then restart it.
   *
   */
  var categoryLookup;

  beforeEach( function() {
    module( 'payee' );

    inject( function( _categoryLookup_ ) {
      categoryLookup = _categoryLookup_;
    } )
  } );

  it( 'should return a single valid value with byId()', function() {
    var id = 1,
      category = categoryLookup.byId( id );

    expect( category.id ).toBe( id );
    expect( category.categoryName ).toBe( 'Automotive' );
  } );

  it( 'should return null if the category id is not found/out of bounds', function() {
    var id = -500,
      category = categoryLookup.byId( id );

    expect( category ).toBeNull();
  } );

  it( 'should return null if the category id is of the wrong type', function() {
    var id = 'Platypus',
      category = categoryLookup.byId( id );

    expect( category ).toBeNull();
  } );

  it( 'should return an array of values with byName()', function() {
    var name = 'Food',
      categories = categoryLookup.byName( name );

    var categoryNames = categories.map( function( category ) {
      return category.categoryName;
    } );

    expect( categoryNames ).toContain( name );
    expect( categoryNames ).not.toContain( 'Industrial' );
    expect( angular.isArray( categories ) ).toBeTruthy();
  } )
} );