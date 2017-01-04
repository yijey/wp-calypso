/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Main from 'components/main';
import styles from './styles';

class Manage extends React.Component {

	render() {
		const { domain } = this.props;
		return (
			<Main wideLayout>
				<h2 className={ styles.header }>What do you want do with { domain }?</h2>
				<div className={ styles.cardRow }>
					<Card className={ styles.landingPage } href={ '/domains-prototype/manage/landing-page/' + domain }>
						<div className={ styles.cardText }>
							<h2 className={ styles.cardHeader }>Landing Page</h2>
							<div>Customize a simple, one-page placeholder site.</div>
						</div>
					</Card>

					<Card className={ styles.newSite } href={ '/domains-prototype/manage/start/' + domain }>
						<div className={ styles.cardText }>
							<h2 className={ styles.cardHeader }>New Site</h2>
							<div>Build a new website or blog on WordPress.com.</div>
						</div>
					</Card>

					<Card className={ styles.existingSite } href={ '/domains-prototype/manage/connect/' + domain }>
						<div className={ styles.cardText }>
							<h2 className={ styles.cardHeader }>Existing Site</h2>
							<div>Connect an existing website or redirect to your social media.</div>
						</div>
					</Card>
				</div>

				<div className={ styles.secondaryCta }>
					<a href={ '/domains/manage/' + domain + '/edit/' + domain }>Manage advanced settings</a>
				</div>

			</Main>
		);
	}
}

Manage.propTypes = {
	domain: PropTypes.string.required
};

export default withStyles( styles )( Manage );
