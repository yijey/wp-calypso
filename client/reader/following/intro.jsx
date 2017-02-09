/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';
import { connect } from 'react-redux';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { hasGraduatedRecommendations } from 'state/reader/start/selectors';
import { requestGraduate } from 'state/reader/start/actions';

const FollowingIntro = ( props ) => {
	if ( ! props.isNewReader ) {
		//return null;
	}

	const handleIntroClose = () => {
		props.requestGraduate();
	};

	return (
		<header className="following__intro">
			<div className="following__intro-close" onClick={ handleIntroClose }>
				<Gridicon icon="cross" className="following__intro-close-icon" />
			</div>
			<h1 className="following__intro-title">{ props.translate( 'This is Reader' ) }</h1>
			<p className="following__intro-description">
				{ props.translate( 'Reader is a customizable magazine of stories from WordPress.com and across the web. Follow a site and their latest posts will appear here.' ) }
			</p>
		</header>
	);
};

export default connect( ( state ) => {
	return {
		isNewReader: ! hasGraduatedRecommendations( state )
	};
}, { requestGraduate } )( localize( FollowingIntro ) );
