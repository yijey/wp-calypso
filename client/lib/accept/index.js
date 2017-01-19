/**
 * External dependencies
 */
import { render } from 'react-dom';
import React from 'react';

/**
 * Internal dependencies
 */
import AcceptDialog from './dialog';

module.exports = function( message, callback, confirmButtonText, cancelButtonText ) {
	let wrapper = document.createElement( 'div' );
	document.body.appendChild( wrapper );

	function onClose( result ) {
		if ( wrapper ) {
			document.body.removeChild( wrapper );
			wrapper = null;
		}

		if ( callback ) {
			callback( result );
		}
	}

	render(
		<AcceptDialog message={ message }
			onClose={ onClose }
			confirmButtonText={ confirmButtonText }
			cancelButtonText={ cancelButtonText } />,
		wrapper
	);
};
