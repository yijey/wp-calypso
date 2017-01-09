/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns true if the save sharing buttons requests is successful
 *
 * @alias isSharingButtonsSaveSuccessful
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Boolean}        Whether the request is successful or not
 */
export default function isSiteSettingsSaveSuccessful( state, siteId ) {
	return get( state.sites.sharingButtons.saveRequests, [ siteId, 'status' ] ) === 'success';
}
