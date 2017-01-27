/**
 * External dependencies
 */
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Internal dependencies
 */
import useNock from 'test/helpers/use-nock';
import {
	plansReceiveAction,
} from 'state/plans/actions';

import {
	PLANS_REQUEST_SUCCESS,
	PLANS_RECEIVE,
} from 'state/action-types';

import {
	requestPlans,
} from '../';

import {
	WPCOM_RESPONSE as wpcomResponse,
} from 'state/plans/test/fixture';

describe( 'wpcom-api', () => {
	describe( 'plans request', () => {
		useNock( nock => (
			nock( 'https://public-api.wordpress.com:443' )
				.persist()
				.get( '/rest/v1.4/plans' )
				.reply( 200, wpcomResponse )
		) );

		it( 'should dispatch SUCCESS action when request completes', ( done ) => {
			const dispatch = sinon.spy( action => {
				if ( action.type === PLANS_REQUEST_SUCCESS ) {
					done();
				}
			} );

			requestPlans( { dispatch } );
		} );

		it( 'should dispatch RECEIVE action when request completes', ( done ) => {
			const plans = wpcomResponse;
			const actionResponse = plansReceiveAction( plans );
			const dispatch = sinon.spy( action => {
				if ( action.type === PLANS_RECEIVE ) {
					expect( dispatch ).to.have.been.calledWith( actionResponse );
					done();
				}
			} );

			requestPlans( { dispatch } );
		} );
	} );
} );
