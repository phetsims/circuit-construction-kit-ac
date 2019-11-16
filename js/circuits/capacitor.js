// Copyright 2019, University of Colorado Boulder

/**
 * Saved from the PhET-iO state wrapper.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );

  const capacitor = {
    'circuitConstructionKitAc.rlcScreen.activeProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.showHomeScreenProperty': {
      'value': false
    },
    'circuitConstructionKitAc.general.screenIndexProperty': {
      'value': 1,
      'validValues': [
        0,
        1,
        2
      ],
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.homeScreen.activeProperty': {
      'value': false
    },
    'circuitConstructionKitAc.homeScreen.view.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.general.navigationBar.titleTextNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.circuitElements.lengthProperty': {
      'value': 3,
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.circuitElements': {
      'array': [
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0',
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_0',
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_1'
      ]
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitLayerNode.cutButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.circuitElements.lengthProperty': {
      'value': 5,
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.circuitElements': {
      'array': [
        'circuitConstructionKitAc.rlcScreen.model.circuit.batteryGroup.battery_0',
        'circuitConstructionKitAc.rlcScreen.model.circuit.wireGroup.wire_0',
        'circuitConstructionKitAc.rlcScreen.model.circuit.capacitorGroup.capacitor_0',
        'circuitConstructionKitAc.rlcScreen.model.circuit.resistorGroup.resistor_0',
        'circuitConstructionKitAc.rlcScreen.model.circuit.wireGroup.wire_1'
      ]
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitLayerNode.cutButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2': {
      'position': {
        'x': -200.43962233477623,
        'y': 10.860202550065907
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2.positionProperty': {
      'value': {
        'x': -200.43962233477623,
        'y': 10.860202550065907
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3': {
      'position': {
        'x': -116.04774212837219,
        'y': -126.27489308817633
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3.positionProperty': {
      'value': {
        'x': -116.04774212837219,
        'y': -126.27489308817633
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_0': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_3'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4': {
      'position': {
        'x': -14.047742128372192,
        'y': -126.27489308817633
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4.positionProperty': {
      'value': {
        'x': -14.047742128372192,
        'y': -126.27489308817633
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4.voltageProperty': {
      'value': 9,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5': {
      'position': {
        'x': 73.73359541399725,
        'y': 20.514543192139996
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.positionProperty': {
      'value': {
        'x': 73.73359541399725,
        'y': 20.514543192139996
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.voltageProperty': {
      'value': 9,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_1': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_4',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.batteryGroup.battery_0': {
      'startVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3',
      'endVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.batteryGroup.battery_0.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3': {
      'position': {
        'x': -237.2412235736847,
        'y': -153.65124848546654
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3.positionProperty': {
      'value': {
        'x': -237.2412235736847,
        'y': -153.65124848546654
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.wireGroup.wire_0': {
      'startVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4',
      'endVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_3'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4': {
      'position': {
        'x': -133.17199707031244,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4.positionProperty': {
      'value': {
        'x': -133.17199707031244,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.capacitorGroup.capacitor_0': {
      'startVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_4',
      'endVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.capacitorGroup.capacitor_0.capacitanceProperty': {
      'value': 0.1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0.05,
        'max': 0.2
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6': {
      'position': {
        'x': -23.171997070312443,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6.positionProperty': {
      'value': {
        'x': -23.171997070312443,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6.voltageProperty': {
      'value': 9.000000000000028,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.resistorGroup.resistor_0': {
      'startVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_6',
      'endVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.resistorGroup.resistor_0.resistanceProperty': {
      'value': 10,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8': {
      'position': {
        'x': -135.2412235736847,
        'y': -153.65124848546654
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8.positionProperty': {
      'value': {
        'x': -135.2412235736847,
        'y': -153.65124848546654
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8.voltageProperty': {
      'value': 9.000000000000002,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9': {
      'position': {
        'x': 86.8280029296875,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9.positionProperty': {
      'value': {
        'x': 86.8280029296875,
        'y': 117.36357085211526
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9.voltageProperty': {
      'value': 9.000000000000002,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.wireGroup.wire_1': {
      'startVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_8',
      'endVertexID': 'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.vertex_9'
    }
  };

  return circuitConstructionKitAc.register( 'capacitor', capacitor );
} );