// Copyright 2019-2020, University of Colorado Boulder

/**
 * Model for the RLC Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel
  from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class RLCModel extends CircuitConstructionKitModel {

  /**
   * TODO: do we really need a class here?
   * @param {Tandem} tandem
   * @constructor
   */
  constructor( tandem ) {
    super( tandem );
  }
}

circuitConstructionKitAc.register( 'RLCModel', RLCModel );
export default RLCModel;