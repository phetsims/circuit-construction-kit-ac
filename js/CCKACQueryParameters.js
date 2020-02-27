// Copyright 2019, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import circuitConstructionKitAc from './circuitConstructionKitAc.js';

const CCKACQueryParameters = window.QueryStringMachine.getAll( {

  loadCircuit: {
    type: 'string',
    defaultValue: null
  }
} );

circuitConstructionKitAc.register( 'CCKACQueryParameters', CCKACQueryParameters );

export default CCKACQueryParameters;