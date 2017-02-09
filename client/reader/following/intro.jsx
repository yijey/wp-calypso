/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { hasGraduatedRecommendations } from 'state/reader/start/selectors';

const FollowingIntro = ( { isNewReader, translate } ) => {
	if ( ! isNewReader ) {
		//return null;
	}

	return (
		<header className="following__intro">
			<h1 className="following__intro-title">{ translate( 'This is Reader' ) }</h1>
			<p className="following__intro-description">
				{ translate( 'Reader is a customizable magazine of stories from WordPress.com and across the web. Follow a site and their latest posts will appear here.' ) }
			</p>
		</header>
	);
};

export default connect( ( state ) => {
	return {
		isNewReader: ! hasGraduatedRecommendations( state )
	};
} )( localize( FollowingIntro ) );
