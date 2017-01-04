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

class LandingPage extends React.Component {

	render() {
		const { domain } = this.props;
		return (
			<Main wideLayout>
				<h2 className={ styles.header }>Choose your type of landing page to get started.</h2>
				<div className={ styles.cardRow }>
					<Card className={ styles.landingPage } href={ '/domains-prototype/manage/landing-page/' + domain }>
						<div className={ styles.cardText }>
							<div>Personalized call-to-action</div>
						</div>
					</Card>

					<Card className={ styles.newSite } href={ '/domains-prototype/manage/start/' + domain }>
						<div className={ styles.cardText }>
							<div>Email signup page</div>
						</div>
					</Card>

					<Card className={ styles.existingSite } href={ '/domains-prototype/manage/connect/' + domain }>
						<div className={ styles.cardText }>
							<div>Tagline on a custom background</div>
						</div>
					</Card>
				</div>

				<div className={ styles.backWrapper }>
					<a href={ '/domains/manage/' + domain + '/edit/' + domain }>Back</a>
				</div>

			</Main>
		);
	}
}

LandingPage.propTypes = {
	domain: PropTypes.string.required
};

export default withStyles( styles )( LandingPage );
