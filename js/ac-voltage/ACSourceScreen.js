// Copyright 2019, University of Colorado Boulder

/**
 * The "AC Voltage" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const CCKCConstants = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CCKCConstants' );
  const circuitConstructionKitAcAndDc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuitConstructionKitAcAndDc' );
  const Image = require( 'SCENERY/nodes/Image' );
  const ACSourceModel = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/ac-voltage/model/ACSourceModel' );
  const ACSourceScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/ac-voltage/view/ACSourceScreenView' );
  const Property = require( 'AXON/Property' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const acSourceString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/screen.ac-voltage' ); // eslint-disable-line

  // images
  const lightBulbImage = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/lightbulb-middle.png' );
  const lightBulbImageIcon = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/lightbulb-middle-icon.png' );

  class ACSourceScreen extends Screen {

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
        name: acSourceString,
        backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
        homeScreenIcon: homeScreenIcon,
        navigationBarIcon: navigationBarIcon,
        tandem: tandem
      };

      super(
        () => new ACSourceModel( tandem.createTandem( 'model' ) ),
        model => new ACSourceScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return circuitConstructionKitAcAndDc.register( 'ACSourceScreen', ACSourceScreen );
} );