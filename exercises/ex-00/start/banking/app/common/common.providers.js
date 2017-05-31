(function( angular ) {
  angular.module( 'common' )
    .factory( 'bankingHttpSerializer', bankingHttpSerializerFactory );

  /*
   * Updated serializer for $http service. The standard serializer does not
   * handle nested objects the way we want it to. We use json-server as a
   * back-end, which expects this object:
   *
   *   {
   *     startDate: '2016-01-01',
   *     payee: {
   *       payeeName: 'Yoyodyne'
   *     }
   *   }
   *
   * To look like this as a query string:
   * payee.payeeName=Yoyodyne&startDate=2016-01-01
   *
   * Much of this code is an altered version of Angular's $httpSerializer
   */
  function bankingHttpSerializerFactory( _ ) {
    return function bankingHttpSerializer( params ) {
      if ( !params ) return '';
      var parts = [];
      _.forEach( params, function( value, key ) {
        if ( value === null || _.isUndefined( value ) ) return;
        if ( _.isArray( value ) ) {
          forEach( value, function( v ) {
            parts.push( encodeUriQuery( key ) + '=' + encodeUriQuery( serializeValue( v ) ) );
          } );
        } else if ( _.isPlainObject( value ) ) {
          Array.prototype.push.apply( parts, encodeObject( value, key ) );
        } else {
          parts.push( encodeUriQuery( key ) + '=' + encodeUriQuery( serializeValue( value ) ) )
        }

      } );

      return parts.join( '&' );
    }
  }

  function encodeObject( obj, root ) {
    root = (root ? root + '.' : '');

    var results = [];
    _.forEach( obj, function( value, key ) {
      results.push( encodeUriQuery( root + key ) + '=' + serializeValue( value ) );
    } );

    return results;
  }

  function serializeValue( v ) {
    if ( _.isObject( v ) ) {
      return _.isDate( v ) ? v.toISOString() : encodeObject( v );
    }
    return v;
  }

  function encodeUriQuery( val, pctEncodeSpaces ) {
    return encodeURIComponent( val ).replace( /%40/gi, '@' ).replace( /%3A/gi, ':' ).replace( /%24/g, '$' ).replace( /%2C/gi, ',' ).replace( /%3B/gi, ';' ).replace( /%20/g, (pctEncodeSpaces ? '%20' : '+') );
  }
})( angular );