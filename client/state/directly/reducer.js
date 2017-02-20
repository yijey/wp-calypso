/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import {
	DIRECTLY_INITIALIZE
} from 'state/action-types';
import { createReducer } from 'state/utils';

export const isInitialized = createReducer( false, {
	[ DIRECTLY_INITIALIZE ]: () => true,
} );

export const config = createReducer( null, {
	[ DIRECTLY_INITIALIZE ]: ( state, action ) => action.config,
} );

export default combineReducers( { isInitialized, config } );
