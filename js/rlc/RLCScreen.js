// Copyright 2019-2021, University of Colorado Boulder

/**
 * The "RLC" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import screenIconRlcImage from '../../images/screen-icon-rlc_png.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import circuitConstructionKitAcStrings from '../circuitConstructionKitAcStrings.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import RLCScreenView from './view/RLCScreenView.js';

const screenRLCString = circuitConstructionKitAcStrings.screen.rlc;


class RLCScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const homeScreenIcon = new Image( screenIconRlcImage );

    const options = {
      name: screenRLCString,
      backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new CircuitConstructionKitModel( tandem.createTandem( 'model' ) ),
      model => new RLCScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'RLCScreen', RLCScreen );
export default RLCScreen;