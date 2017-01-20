/**
 * Internal dependencies
 */
import { combineTours } from 'layout/guided-tours/config-elements';
import { MainTour } from 'layout/guided-tours/tours/main-tour';
import { TutorialSitePreviewTour } from 'layout/guided-tours/tours/tutorial-site-preview-tour';
import { DesignShowcaseWelcomeTour } from 'layout/guided-tours/tours/design-showcase-welcome-tour';
import { ThemeSheetWelcomeTour } from 'layout/guided-tours/tours/theme-sheet-welcome-tour';
import { SiteTitleTour } from 'layout/guided-tours/tours/site-title-tour';
import { EditorInsertMenuTour } from 'layout/guided-tours/tours/editor-insert-menu-tour';
import { GDocsIntegrationTour } from 'layout/guided-tours/tours/gdocs-integration-tour';

export default combineTours( {
	designShowcaseWelcome: DesignShowcaseWelcomeTour,
	editorInsertMenu: EditorInsertMenuTour,
	gdocsIntegrationTour: GDocsIntegrationTour,
	main: MainTour,
	siteTitle: SiteTitleTour,
	themeSheetWelcomeTour: ThemeSheetWelcomeTour,
	tutorialSitePreview: TutorialSitePreviewTour,
} );
