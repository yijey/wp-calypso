/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */

const FollowingIntro = ( { translate } ) => {
	const isNewReader = true;

	if ( ! isNewReader ) {
		return null;
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

export default localize( FollowingIntro );
