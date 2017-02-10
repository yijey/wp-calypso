/**
 * External dependencies
 */
import { isString } from 'lodash';

/**
 * Internal dependencies
 */
import wpcom from 'lib/wp';

import {
	ACCOUNT_RECOVERY_RESET_OPTIONS_REQUEST,
	ACCOUNT_RECOVERY_RESET_OPTIONS_RECEIVE,
	ACCOUNT_RECOVERY_RESET_OPTIONS_ERROR,
} from 'state/action-types';

export const fromApi = data => ( [
	{
		email: data.primary_email,
		sms: data.primary_sms,
	},
	{
		email: data.secondary_email,
		sms: data.secondary_sms,
	},
] );

const validateFromApi = ( { primary_email, primary_sms, secondary_email, secondary_sms } ) => {
	return isString( primary_email ) &&
		isString( primary_sms ) &&
		isString( secondary_email ) &&
		isString( secondary_sms )
	;
};

export const requestResetOptions = ( { dispatch }, { userData } ) => {
	const onError = error => dispatch( {
		type: ACCOUNT_RECOVERY_RESET_OPTIONS_ERROR,
		error,
	} );

	const onSuccess = data => dispatch( {
		type: ACCOUNT_RECOVERY_RESET_OPTIONS_RECEIVE,
		options: fromApi( data ),
	} );

	return wpcom.req.get( {
		body: userData,
		apiNamespace: 'wpcom/v2',
		path: '/account-recovery/lookup',
	} )
	.then( data => validateFromApi( data ) ? onSuccess( data ) : onError( { data } ) )
	.catch( onError );
};

export default {
	[ ACCOUNT_RECOVERY_RESET_OPTIONS_REQUEST ]: [ requestResetOptions ],
};
