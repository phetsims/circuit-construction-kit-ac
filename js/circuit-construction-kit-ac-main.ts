// Copyright 2019-2026, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../circuit-construction-kit-common/js/CCKCConstants.js';
import CCKCQueryParameters from '../../circuit-construction-kit-common/js/CCKCQueryParameters.js';
import CCKCSim from '../../circuit-construction-kit-common/js/view/CCKCSim.js';
import CCKCSimulationPreferencesContentNode from '../../circuit-construction-kit-common/js/view/CCKCSimulationPreferencesContentNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import ACVoltageScreen from './ac-voltage/ACVoltageScreen.js';
import CircuitConstructionKitAcStrings from './CircuitConstructionKitAcStrings.js';
import LabScreen from './lab/LabScreen.js';
import RLCScreen from './rlc/RLCScreen.js';

const circuitConstructionKitAcTitleStringProperty = CircuitConstructionKitAcStrings[ 'circuit-construction-kit-ac' ].titleStringProperty;

// constants
const tandem = Tandem.ROOT;

const simOptions: SimOptions = {
  preferencesModel: new PreferencesModel( {
    simulationOptions: {
      customPreferences: [ {
        createContent: tandem => new CCKCSimulationPreferencesContentNode( tandem )
      } ]
    }
  } ),
  credits: CCKCConstants.CREDITS
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( async () => {

  // Initialize EEcircuit solver if using that solver
  if ( CCKCQueryParameters.solver === 'spice' ) {
    const { default: EEcircuitSolverManager } = await import(
      '../../circuit-construction-kit-common/js/model/analysis/spice/SpiceSolverManager.js'
    );
    await EEcircuitSolverManager.instance.initialize();
  }

  const sim = new CCKCSim( circuitConstructionKitAcTitleStringProperty, [
    new ACVoltageScreen( tandem.createTandem( 'acVoltageScreen' ) ),
    new RLCScreen( tandem.createTandem( 'rlcScreen' ) ),
    new LabScreen( tandem.createTandem( 'labScreen' ), true )
  ], simOptions );
  sim.start();

  // turn off common UI sounds until a sound design has been done for this sim
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );