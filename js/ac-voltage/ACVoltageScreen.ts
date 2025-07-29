// Copyright 2019-2025, University of Colorado Boulder

/**
 * The "AC Voltage" screen.
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
import screenIconACSource_png from '../../images/screenIconACSource_png.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import CircuitConstructionKitAcStrings from '../CircuitConstructionKitAcStrings.js';
import ACVoltageScreenView from './view/ACVoltageScreenView.js';

class ACVoltageScreen extends Screen<CircuitConstructionKitModel, ACVoltageScreenView> {

  public constructor( tandem: Tandem ) {

    const homeScreenIcon = new Image( screenIconACSource_png );

    const options: ScreenOptions = {
      name: CircuitConstructionKitAcStrings.screen[ 'ac-voltageStringProperty' ],
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
      model => new ACVoltageScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'ACVoltageScreen', ACVoltageScreen );
export default ACVoltageScreen;