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
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class ACVoltageModel extends CircuitConstructionKitModel {

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

  return circuitConstructionKitAc.register( 'ACVoltageModel', ACVoltageModel );
} );