module.exports = function( url, prev, done ) {
	console.log( url );
	if ( url === 'shared/colors' ) {
			done( { file: 'shared/colors-wpadmin' } );
	} else {
		done();
	}
};

