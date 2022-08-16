// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import circuitConstructionKitAc from './circuitConstructionKitAc.js';

type StringsType = {
  'circuit-construction-kit-ac': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'ac-voltage': string;
    'ac-voltageProperty': TReadOnlyProperty<string>;
    'rlc': string;
    'rlcProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labProperty': TReadOnlyProperty<string>;
  }
};

const circuitConstructionKitAcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_AC' ) as StringsType;

circuitConstructionKitAc.register( 'circuitConstructionKitAcStrings', circuitConstructionKitAcStrings );

export default circuitConstructionKitAcStrings;
