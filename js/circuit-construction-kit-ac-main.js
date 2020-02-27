// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import ACVoltageScreen from './ac-voltage/ACVoltageScreen.js';
import circuitConstructionKitAcStrings from './circuit-construction-kit-ac-strings.js';
import LabScreen from './lab/LabScreen.js';
import RLCScreen from './rlc/RLCScreen.js';

const circuitConstructionKitAcTitleString = circuitConstructionKitAcStrings[ 'circuit-construction-kit-ac' ].title;

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