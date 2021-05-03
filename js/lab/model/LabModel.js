// Copyright 2019-2021, University of Colorado Boulder

/**
 * Model for the Lab Screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class LabModel extends CircuitConstructionKitModel {

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  constructor( tandem ) {
    super( tandem );

    //REVIEW: This doesn't seem to provide value, seems like we should delete this file and use the main model directly.
  }
}

circuitConstructionKitAc.register( 'LabModel', LabModel );
export default LabModel;