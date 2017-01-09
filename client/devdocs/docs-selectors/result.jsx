/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import DocsSelectorsParamType from './param-type';

export default function DocsSelectorsResult( { jsDocInfo, expanded, url } ) {
	const {
		description,
		name,
		params,
		returns,
	} = jsDocInfo;

	const classes = classnames( 'docs-selectors__result', {
		'is-expanded': expanded
	} );

	return (
		<Card compact className={ classes }>
			<h1 className="docs-selectors__result-name">
				{ url && <a href={ url }>{ name }</a> }
				{ ! url && name }
			</h1>
			<p className="docs-selectors__result-description">
				{ description || <em>No description available</em> }
			</p>
			<div className="docs-selectors__result-io">
				{ params.length > 0 && (
					<div className="docs-selectors__result-arguments">
						<span className="docs-selectors__result-label">Arguments</span>
						{ params.map( param => (
							<div key={ param.name }>
								<div className="docs-selectors__result-arguments-content">
									<strong className="docs-selectors__result-arguments-name">
										{ param.variable && '...' }
										{ param.optional && '[' }
										{ param.name }
										{ param.hasOwnProperty( 'defaultvalue' ) && ' = ' + param.defaultvalue }
										{ param.optional && ']' }
									</strong>
									<p className="docs-selectors__result-arguments-description">{ param.description }</p>
								</div>
								<DocsSelectorsParamType { ...param } />
							</div>
						) ) }
					</div>
				) }
				{ returns && returns.map( param => (
					<div className="docs-selectors__result-return" key={ param.description }>
						<span className="docs-selectors__result-label">Returns</span>
						<p>{ param.description }</p>
						<DocsSelectorsParamType { ...param } />
					</div>
				) ) }
			</div>
		</Card>
	);
}

DocsSelectorsResult.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	tags: PropTypes.array,
	expanded: PropTypes.bool
};
