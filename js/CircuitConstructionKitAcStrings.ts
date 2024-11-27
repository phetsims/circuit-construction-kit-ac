// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
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
