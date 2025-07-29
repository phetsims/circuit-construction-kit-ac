// Copyright 2019-2025, University of Colorado Boulder

/**
 * The "RLC" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import CCKCColors from '../../../circuit-construction-kit-common/js/view/CCKCColors.js';
import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Tandem from '../../../tandem/js/Tandem.js';
import screenIconRLC_png from '../../images/screenIconRLC_png.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import CircuitConstructionKitAcStrings from '../CircuitConstructionKitAcStrings.js';
import RLCScreenView from './view/RLCScreenView.js';

class RLCScreen extends Screen<CircuitConstructionKitModel, RLCScreenView> {

  public constructor( tandem: Tandem ) {

    const homeScreenIcon = new Image( screenIconRLC_png );

    const options: ScreenOptions = {
      name: CircuitConstructionKitAcStrings.screen.rlcStringProperty,
      backgroundColorProperty: CCKCColors.screenBackgroundColorProperty,
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new CircuitConstructionKitModel( true, false, tandem.createTandem( 'model' ) ),
      model => new RLCScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'RLCScreen', RLCScreen );
export default RLCScreen;