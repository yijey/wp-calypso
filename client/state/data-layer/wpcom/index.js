/**
 * Internal dependencies
 */
import { mergeHandlers } from 'state/data-layer/utils';
import plans from './plans';
import sites from './sites';
import timezones from './timezones';

export const handlers = mergeHandlers(
	plans,
	sites,
	timezones
);

export default handlers;
