/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import page from 'page';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Card from 'components/card';
import config from 'config';
import { recordTracksEvent } from 'state/analytics/actions';
import SiteURLInput from '../site-url-input';

const JetpackNewSite = React.createClass( {
	displayName: 'JetpackNewSite',

	componentDidMount() {
		this.props.recordTracksEvent( 'calypso_jetpack_new_site_view' );
	},

	getNewWpcomSiteUrl() {
		return config( 'signup_url' ) + '?ref=calypso-selector';
	},

	onURLEnter() {
		this.props.recordTracksEvent( 'calypso_jetpack_new_site_connect_click' );
		page( '/jetpack/connect?url=' + this.refs.siteUrlInputRef.state.value.toLowerCase() );
	},

	handleOnClickTos() {
		this.props.recordTracksEvent( 'calypso_jpc_tos_link_click' );
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
					<Card className="jetpack-new-site__wpcom-site">
						<div className="jetpack-new-site__card-title">
							{ this.translate( 'Create a new shiny WordPress.com site' ) }
						</div>
						<div className="jetpack-new-site__card-description">
							{ this.translate( 'Start telling your history ' +
								'blahblah blah blah ' +
								'blah blah'
							) }
						</div>
						<Button href={ this.getNewWpcomSiteUrl() }>{ this.translate( 'Start Now' ) }</Button>
					</Card>
					<Card className="jetpack-new-site__jetpack-site">
						<div className="jetpack-new-site__card-title">
							{ this.translate( 'Connect My Site' ) }
						</div>
						<div className="jetpack-new-site__card-description">
							{ this.translate( 'We\'ll be using the Jetpack plugin to ' +
								'blahblah blah blah ' +
								'blah blah'
							) }
						</div>
						<SiteURLInput ref="siteUrlInputRef"
							onTosClick={ this.handleOnClickTos }
							onClick={ this.onURLEnter } />
					</Card>
				</div>
			</div>
		);
	}
} );

export default connect(
	null,
	dispatch => bindActionCreators( {
		recordTracksEvent
	}, dispatch )
)( JetpackNewSite );
