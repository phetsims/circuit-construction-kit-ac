// Copyright 2019-2025, University of Colorado Boulder

/**
 * The "Lab" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import CCKCColors from '../../../circuit-construction-kit-common/js/view/CCKCColors.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import { ScreenViewOptions } from '../../../joist/js/ScreenView.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Tandem from '../../../tandem/js/Tandem.js';
import screenIconLab_png from '../../images/screenIconLab_png.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import CircuitConstructionKitAcStrings from '../CircuitConstructionKitAcStrings.js';
import LabScreenView from './view/LabScreenView.js';

class LabScreen extends Screen<CircuitConstructionKitModel, LabScreenView> {

  public constructor( tandem: Tandem ) {

    const homeScreenIcon = new Image( screenIconLab_png );

    const options: ScreenViewOptions = {

      // @ts-expect-error
      name: CircuitConstructionKitAcStrings.screen.labStringProperty,
      backgroundColorProperty: new Property( CCKCColors.screenBackgroundColorProperty ),
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new CircuitConstructionKitModel( true, true, tandem.createTandem( 'model' ) ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ), {

          // @ts-expect-error
          showNoncontactAmmeters: true
        }
      ),

      // @ts-expect-error
      options
    );
  }
}

circuitConstructionKitAc.register( 'LabScreen', LabScreen );
export default LabScreen;