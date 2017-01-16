/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Card from 'components/card';
import config from 'config';
import { recordTracksEvent } from 'state/analytics/actions';

const JetpackNewSite = React.createClass( {
	displayName: 'JetpackNewSite',

	componentDidMount() {
		this.props.recordTracksEvent( 'calypso_jetpack_new_site_view' );
	},

	getNewWpcomSiteUrl() {
		return config( 'signup_url' ) + '?ref=calypso-selector';
	},

	render() {
		return (
			<div className="jetpack-new-site">
				<div className="jetpack-new-site__header">
					<div className="jetpack-new-site__header-title">{ this.translate( 'Add a New Site' ) }</div>
					<div className="jetpack-new-site__header-text">{ this.translate(
						'Lorem ipsum blah blah blah'
					) } </div>
				</div>
				<div className="jetpack-new-site__content">
					<Card>
						<div className="jetpack-new-site__new-wpcom-title">
							{ this.translate( 'Create a new shiny WordPress.com site' ) }
						</div>
						<Button href={ this.getNewWpcomSiteUrl() }>{ this.translate( 'Start Now' ) }</Button>
					</Card>
					<Card>
						<div className="jetpack-new-site__new-jetpack-title">
							{ this.translate( 'Connect My Site' ) }
						</div>
						<Button>{ this.translate( 'Start Now' ) }</Button>
					</Card>
				</div>
			</div>

		)
	}
} );

export default connect(
	null,
	dispatch => bindActionCreators( {
		recordTracksEvent
	}, dispatch )
)( JetpackNewSite );
