/*
 * Write a spec file to unit test payee-utils
 * In particular, you will want to test the following items
 *
 * - If payeeUtils.sameParams is invoked one time only, it should return false
 * - If payeeUtils.sameParams is invoked twice with criteria objects that
 *   are equal, it should return true
 * - If payeeUtils.sameParams is invoked twice with criteria objects that
 *   are different, it should return false
 */
describe( 'Testing payee.utils', function() {
  var payeeUtils, criteria;
  beforeEach( function() {
    module( 'payee.utils' );

    inject( function( _payeeUtils_ ) {
      payeeUtils = _payeeUtils_;
    } );

    criteria = {
      '#': 'hash',
      bar: 'bar',
      foo: 'foo'
    };

  } );

  it( 'should find the first set of parameters unequal', function() {
    expect( payeeUtils.sameParams( criteria ) ).toBeFalsy();
  } );

  it( 'should find two equal sets of parameters equal', function() {
    payeeUtils.sameParams( criteria );
    expect( payeeUtils.sameParams( { foo: 'foo', bar: 'bar' } ) ).toBeTruthy();
  } );

  it( 'should find unequal sets of parameters unequal', function() {
    payeeUtils.sameParams( criteria );
    expect( payeeUtils.sameParams( { baz: 'baz' } ) ).toBeFalsy();
  } )
} );