// Copyright 2019, University of Colorado Boulder

/**
 * Model for the AC Voltage Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );
  const CircuitConstructionKitModel = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/CircuitConstructionKitModel' );

  class ACVoltageModel extends CircuitConstructionKitModel {

    /**
     * @param {Tandem} tandem
     * @constructor
     */
    constructor( tandem ) {
      super( tandem );
    }
  }

  return circuitConstructionKitAc.register( 'ACVoltageModel', ACVoltageModel );
} );