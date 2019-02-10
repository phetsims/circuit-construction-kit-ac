// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const CircuitConstructionKitAcAndDcScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuit-construction-kit-ac-and-dc/CircuitConstructionKitAcAndDcScreen' );

  // strings
  const circuitConstructionKitAcAndDcTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuit-construction-kit-ac-and-dc.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( circuitConstructionKitAcAndDcTitleString, [ new CircuitConstructionKitAcAndDcScreen() ], simOptions );
    sim.start();
  } );
} );