// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const ACVoltageScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/ac-voltage/ACVoltageScreen' );
  const CCKACQueryParameters = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/CCKACQueryParameters' );
  const RLCScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/rlc/RLCScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );
  const capacitor = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuits/capacitor' );

  // strings
  const circuitConstructionKitAcTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_AC/circuit-construction-kit-ac.title' );

  // constants
  const tandem = Tandem.rootTandem;

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
    },
    accessibility: true
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( circuitConstructionKitAcTitleString, [
      new ACVoltageScreen( tandem.createTandem( 'acVoltageScreen' ) ),
      new RLCScreen( tandem.createTandem( 'rlcScreen' ) )
    ], simOptions );

    // For debugging, load the specified circuit, saved from PhET-iO state wrapper
    if ( phet.phetIo ) {
      if ( CCKACQueryParameters.loadCircuit === 'capacitor' ) {
        sim.endedSimConstructionEmitter.addListener( () => phet.phetIo.phetioEngine.phetioStateEngine.setState( capacitor ) );
      }
    }
    sim.start();
  } );
} );