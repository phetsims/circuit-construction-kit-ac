// Copyright 2019-2020, University of Colorado Boulder

/**
 * The "Lab" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import merge from '../../../phet-core/js/merge.js';
import screenIconLabImage from '../../images/screen-icon-lab_png.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import circuitConstructionKitAcStrings from '../circuitConstructionKitAcStrings.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

// constants
const screenLabString = circuitConstructionKitAcStrings.screen.lab;

class LabScreen extends Screen {

  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( tandem, options ) {

    const homeScreenIcon = new Image( screenIconLabImage );

    options = merge( {
      name: screenLabString,
      backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT,
      labScreenViewOptions: {
        showNoncontactAmmeters: true
      }
    }, options );

    super(
      () => new LabModel( tandem.createTandem( 'model' ) ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ), options.labScreenViewOptions ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'LabScreen', LabScreen );
export default LabScreen;