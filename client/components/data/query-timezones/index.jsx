
/**
 * External dependencies
 */
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { timezonesRequestAction } from 'state/timezones/actions';

export class QueryTimezones extends Component {
	static propTypes = {
		requestingTimezones: PropTypes.bool,
		requestTimezones: PropTypes.func
	};

	componentDidMount() {
		this.props.requestTimezones();
	}

	render() {
		return null;
	}
}

export const mapDispatchToProps = ( {
	requestTimezones: timezonesRequestAction,
} );

export default connect( null, mapDispatchToProps )( QueryTimezones );
