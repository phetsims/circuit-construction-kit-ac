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
  const capacitor = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuits/capacitor' );
  const CCKACQueryParameters = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/CCKACQueryParameters' );
  const LabScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/lab/LabScreen' );
  const RLCScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/rlc/RLCScreen' );
  const shortBattery = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuits/shortBattery' );
  const shortBatterySideBulb = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuits/shortBatterySideBulb' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const soundManager = require( 'TAMBO/soundManager' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const circuitConstructionKitAcTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_AC/circuit-construction-kit-ac.title' );

  // constants
  const tandem = Tandem.ROOT;

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
      new RLCScreen( tandem.createTandem( 'rlcScreen' ) ),
      new LabScreen( tandem.createTandem( 'labScreen' ) )
    ], simOptions );

    // For debugging, load the specified circuit, saved from PhET-iO state wrapper
    if ( phet.phetIo ) {
      if ( CCKACQueryParameters.loadCircuit === 'capacitor' ) {
        sim.endedSimConstructionEmitter.addListener( () => phet.phetIo.phetioEngine.phetioStateEngine.setState( capacitor ) );
      }
      if ( CCKACQueryParameters.loadCircuit === 'shortBattery' ) {
        sim.endedSimConstructionEmitter.addListener( () => phet.phetIo.phetioEngine.phetioStateEngine.setState( shortBattery ) );
      }
      if ( CCKACQueryParameters.loadCircuit === 'shortBatterySideBulb' ) {
        sim.endedSimConstructionEmitter.addListener( () => phet.phetIo.phetioEngine.phetioStateEngine.setState( shortBatterySideBulb ) );
      }
    }
    sim.start();

    // turn off common UI sounds until a sound design has been done for this sim
    soundManager.setOutputLevelForCategory( 'user-interface', 0 );
  } );
} );