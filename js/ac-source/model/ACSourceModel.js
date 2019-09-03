// Copyright 2019, University of Colorado Boulder

/**
 * Model for the AC Voltage Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const BooleanProperty = require( 'AXON/BooleanProperty' );
  const circuitConstructionKitAcAndDc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuitConstructionKitAcAndDc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class ACSourceModel extends CircuitConstructionKitModel {

    /**
     * @param {Tandem} tandem
     * @constructor
     */
    constructor( tandem ) {
      super( tandem );

      // @public {Property.<boolean>} - true if the stopwatch should be shown in the play area
      this.showStopwatchProperty = new BooleanProperty( false, {
        tandem: tandem.createTandem( 'showStopwatchProperty' )
      } );
    }
  }

  return circuitConstructionKitAcAndDc.register( 'ACSourceModel', ACSourceModel );
} );