/**
 * External Dependencies
 */
import { expect } from 'chai';
import { spy } from 'sinon';
import deepfreeze from 'deep-freeze';

/**
 * Internal Dependencies
 */
import { http } from 'state/data-layer/wpcom-http/actions';
import {
	// syncReaderFollows,
	requestPage,
	// handleSyncPage,
	// handleSyncError,
} from '../';
import {
	requestFollows
} from 'state/reader/follows/actions';
// import {
// 	errorNotice
// } from 'state/notices/actions';

describe( 'follows', () => {
	const action = deepfreeze( requestFollows() ); // @todo change to syncFollows and pass { page: 1 }

	describe( 'requestPage', () => {
		let dispatch;

		beforeEach( () => {
			dispatch = spy();
			requestPage( { dispatch }, action );
		} );

		it( 'should dispatch an http request', () => {
			expect( dispatch ).to.have.been.calledWith( http( {
				method: 'GET',
				path: '/read/following/mine',
				apiVersion: '1.2',
				query: { page: action.page },
				onSuccess: action,
				onFailure: action,
			} ) );
		} );
	} );

	// describe( 'handlePage', () => {
	// 	const next = spy();
	// 	const dispatch = spy();
	// 	const data = deepfreeze( {
	// 		posts: []
	// 	} );

	// 	before( () => {
	// 		handlePage( { dispatch }, action, next, data );
	// 	} );

	// 	it( 'should dispatch receivePage', () => {
	// 		expect( dispatch ).to.have.been.calledWith( receivePage( action.streamId, action.query, data.posts ) );
	// 	} );

	// 	it( 'should swallow the original action', () => {
	// 		expect( next ).to.not.have.been.called;
	// 	} );
	// } );

	// describe( 'handleError', () => {
	// 	const next = spy();
	// 	const dispatch = spy();
	// 	const error = { error: true };

	// 	before( () => {
	// 		handleError( { dispatch }, action, next, error );
	// 	} );

	// 	it( 'should dispatch a notice about the error', () => {
	// 		const notice = errorNotice( 'Could not fetch the next page of results' );
	// 		delete notice.notice.noticeId;
	// 		expect( dispatch ).to.have.been.calledWithMatch( notice );
	// 	} );
	// } );
} );
