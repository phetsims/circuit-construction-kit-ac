// Copyright 2019, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const circuitConstructionKitAcAndDc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuitConstructionKitAcAndDc' );
  const CircuitConstructionKitAcAndDcModel = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuit-construction-kit-ac-and-dc/model/CircuitConstructionKitAcAndDcModel' );
  const CircuitConstructionKitAcAndDcScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuit-construction-kit-ac-and-dc/view/CircuitConstructionKitAcAndDcScreenView' );

  class CircuitConstructionKitAcAndDcScreen extends Screen {

    constructor() {

      const options = {
        backgroundColorProperty: new Property( 'white' )
      };

      super(
        () => new CircuitConstructionKitAcAndDcModel(),
        ( model ) => new CircuitConstructionKitAcAndDcScreenView( model ),
        options
      );
    }
  }

  return circuitConstructionKitAcAndDc.register( 'CircuitConstructionKitAcAndDcScreen', CircuitConstructionKitAcAndDcScreen );
} );