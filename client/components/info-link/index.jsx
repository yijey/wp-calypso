/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Gridicon from 'components/gridicon';
import classNames from 'classnames';

export default class InfoLink extends Component {
	static propTypes = {
		href: PropTypes.string.isRequired
	}

	render() {
		return (
			<span
				ref="infoLink"
				className={ classNames(
					'info-link',
					this.props.className )
					}
				>
				<a href={ this.props.href }>
					<Gridicon icon="info-outline" size={ 18 } />
				</a>
			</span>
		);
	}
}
