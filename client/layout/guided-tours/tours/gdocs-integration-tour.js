/**
* External dependencies
*/
import React from 'react';
import { translate } from 'i18n-calypso';

/**
* Internal dependencies
*/
import {
        makeTour,
        Tour,
        Step,
        ButtonRow,
        Quit,
} from 'layout/guided-tours/config-elements';
import {
        isEnabled,
        isSelectedSitePreviewable,
} from 'state/ui/guided-tours/contexts';

export const GDocsIntegrationTour = makeTour(
        <Tour
                name="gdocsIntegrationTour"
                version="20160118"
                path="/post"
                when={ isEnabled( 'guided-tours/gdocs-integration-tour' ) }
                >
                <Step name="init"
                        target=".mce-wpcom-insert-menu"
                        arrow="top-left"
                        placement="below"
                        when={ isSelectedSitePreviewable }
                        scrollContainer=".sidebar__region"
                        >
                        <p> {
                                translate( 'Did you know you can post a draft directly from Google Docs? {{a}}Learn how{{/a}}', {
	components: {
		a: <a href="http://wordpress.com" />
	}
} )
                        }</p>
                        <ButtonRow>
                                <Quit subtle>{ translate( 'Got it, thanks.' ) }</Quit>
                        </ButtonRow>
                </Step>
        </Tour>

);
