// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import circuitConstructionKitAc from './circuitConstructionKitAc.js';

type StringsType = {
  'circuit-construction-kit-ac': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'ac-voltage': string;
    'ac-voltageStringProperty': LocalizedStringProperty;
    'rlc': string;
    'rlcStringProperty': LocalizedStringProperty;
    'lab': string;
    'labStringProperty': LocalizedStringProperty;
  }
};

const CircuitConstructionKitAcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_AC' ) as StringsType;

circuitConstructionKitAc.register( 'CircuitConstructionKitAcStrings', CircuitConstructionKitAcStrings );

export default CircuitConstructionKitAcStrings;
