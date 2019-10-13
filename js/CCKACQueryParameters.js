// Copyright 2016-2019, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );

  const CCKACQueryParameters = window.QueryStringMachine.getAll( {

    loadCircuit: {
      type: 'string',
      defaultValue: null
    }
  } );

  circuitConstructionKitAc.register( 'CCKACQueryParameters', CCKACQueryParameters );

  return CCKACQueryParameters;
} );