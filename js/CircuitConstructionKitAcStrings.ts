// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import circuitConstructionKitAc from './circuitConstructionKitAc.js';

type StringsType = {
  'circuit-construction-kit-ac': {
    'title': string;
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'ac-voltage': string;
    'ac-voltageStringProperty': LinkableProperty<string>;
    'rlc': string;
    'rlcStringProperty': LinkableProperty<string>;
    'lab': string;
    'labStringProperty': LinkableProperty<string>;
  }
};

const CircuitConstructionKitAcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_AC' ) as StringsType;

circuitConstructionKitAc.register( 'CircuitConstructionKitAcStrings', CircuitConstructionKitAcStrings );

export default CircuitConstructionKitAcStrings;
