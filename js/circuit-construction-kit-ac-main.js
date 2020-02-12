// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const ACVoltageScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/ac-voltage/ACVoltageScreen' );
  const LabScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/lab/LabScreen' );
  const RLCScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/rlc/RLCScreen' );
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
      leadDesign: 'Amy Rouinfar',
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
    sim.start();

    // turn off common UI sounds until a sound design has been done for this sim
    soundManager.setOutputLevelForCategory( 'user-interface', 0 );
  } );
} );