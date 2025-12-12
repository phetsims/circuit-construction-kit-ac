// Copyright 2020-2025, University of Colorado Boulder

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
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'ac-voltageStringProperty': LocalizedStringProperty;
    'rlcStringProperty': LocalizedStringProperty;
    'labStringProperty': LocalizedStringProperty;
  }
};

const CircuitConstructionKitAcStrings = getStringModule( 'CIRCUIT_CONSTRUCTION_KIT_AC' ) as StringsType;

circuitConstructionKitAc.register( 'CircuitConstructionKitAcStrings', CircuitConstructionKitAcStrings );

export default CircuitConstructionKitAcStrings;
