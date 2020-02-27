// Copyright 2019, University of Colorado Boulder

/**
 * The "Lab" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import lightBulbImageIcon from '../../../circuit-construction-kit-common/mipmaps/lightbulb-middle-icon_png.js';
import lightBulbImage from '../../../circuit-construction-kit-common/mipmaps/lightbulb-middle_png.js';
import Screen from '../../../joist/js/Screen.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Rectangle from '../../../scenery/js/nodes/Rectangle.js';
import circuitConstructionKitAcStrings from '../circuit-construction-kit-ac-strings.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

const screenLabString = circuitConstructionKitAcStrings.screen.lab;


class LabScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    // Create the icon
    const homeScreenIcon = Rectangle.dimension( Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, {
      fill: CCKCConstants.BACKGROUND_COLOR
    } );
    homeScreenIcon.addChild( new Image( lightBulbImage, {
      scale: 0.95,
      center: homeScreenIcon.center
    } ) );

    // Render a smaller icon for Edge because it is aliasing the image (even with mipmap on)
    // see https://github.com/phetsims/circuit-construction-kit-dc/issues/120
    const navigationBarIcon = Rectangle.dimension( Screen.MINIMUM_NAVBAR_ICON_SIZE, {
      fill: CCKCConstants.BACKGROUND_COLOR
    } );
    navigationBarIcon.addChild( new Image( lightBulbImageIcon, {
      scale: 1.05,
      center: navigationBarIcon.center
    } ) );

    const options = {
      name: screenLabString,
      backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
      homeScreenIcon: homeScreenIcon,
      navigationBarIcon: navigationBarIcon,
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new LabModel( tandem.createTandem( 'model' ) ),
      model => new LabScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'LabScreen', LabScreen );
export default LabScreen;