// Copyright 2017, University of Colorado Boulder

/**
 * Unit tests. Please run once in phet brand and once in brand=phet-io to cover all functionality.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuit-construction-kit-ac-and-dc/model/DynamicCircuitTests' );

  // Since our tests are loaded asynchronously, we must direct QUnit to begin the tests
  QUnit.start();
} );