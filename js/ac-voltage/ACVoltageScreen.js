// Copyright 2019-2022, University of Colorado Boulder

/**
 * The "AC Voltage" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { Image } from '../../../scenery/js/imports.js';
import screenIconACSource_png from '../../images/screenIconACSource_png.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import CircuitConstructionKitAcStrings from '../CircuitConstructionKitAcStrings.js';
import ACVoltageScreenView from './view/ACVoltageScreenView.js';

class ACVoltageScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const homeScreenIcon = new Image( screenIconACSource_png );

    const options = {
      name: CircuitConstructionKitAcStrings.screen[ 'ac-voltageStringProperty' ],
      backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
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