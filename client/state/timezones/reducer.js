/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';
import { TIMEZONES_RECEIVE } from 'state/action-types';
import {
	rawOffsetsSchema,
	timezonesSchema
} from './schema';

const offsets = createReducer( [], {
	[ TIMEZONES_RECEIVE ]: ( state, { rawOffsets = [] } ) => rawOffsets.slice( 0 )
}, rawOffsetsSchema	);

const timezones = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, { timezonesByContinent } ) => ( timezonesByContinent )
}, timezonesSchema );

export const items = combineReducers( {
	rawOffsets: offsets,
	timezonesByContinent: timezones,
} );

export default combineReducers( {
	items,
} );
