/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { get, union } from 'lodash';

const ARRAY_TYPE_PATTERN = /^Array[.]<([^>]+)>/;
const OBJECT_TYPE_PATTERN = /^Object[.]<([^,]+), ([^>]+)>/;

const describeType = name => {
	const arrayInfo = name.match( ARRAY_TYPE_PATTERN );
	if ( arrayInfo ) {
		const [ /* match */, type ] = arrayInfo;
		return `${ type }[]`;
	}

	const objectInfo = name.match( OBJECT_TYPE_PATTERN );
	if ( objectInfo ) {
		const [ /* match */, keyType, valueType ] = objectInfo;
		return `{ ${ keyType }: ${ valueType } }`;
	}

	return name;
};

export default function DocsSelectorsParamType( { nullable, type } ) {
	const types = union(
		get( type, 'names', [] ),
		nullable ? [ 'null' ] : [],
	);

	return (
		<div className="docs-selectors__param-type">
			{ types.map( ( name, index ) => {
				return (
					<div key={ name }>
						{ index > 0 && (
							<div className="docs-selectors__param-type-separator">or</div>
						) }
						{ describeType( name ) }
					</div>
				);
			} ) }
		</div>
	);
}

DocsSelectorsParamType.propTypes = {
	nullable: PropTypes.bool,
	type: PropTypes.shape( { names: PropTypes.arrayOf( PropTypes.string ) } ),
};
