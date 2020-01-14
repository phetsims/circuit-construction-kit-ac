// Copyright 2019-2020, University of Colorado Boulder

/**
 * Saved from the PhET-iO state wrapper.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );

  const shortBattery = {
    'circuitConstructionKitAc.general.soundEnabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.global.arrowNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.global.arrowNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.global.arrowNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.activeProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.activeProperty': {
      'value': false
    },
    'circuitConstructionKitAc.general.showHomeScreenProperty': {
      'value': false
    },
    'circuitConstructionKitAc.general.screenIndexProperty': {
      'value': 0,
      'validValues': [
        0,
        1
      ],
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.general.browserTabVisibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.activeProperty': {
      'value': false
    },
    'circuitConstructionKitAc.homeScreen.view.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.homeScreen.view.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.title.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.title.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.title.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.title.textProperty': {
      'value': '‪Circuit Construction Kit: AC‬'
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.text.textProperty': {
      'value': '‪AC Voltage‬'
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenLargeButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.text.textProperty': {
      'value': '‪AC Voltage‬'
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.acVoltageScreenSmallButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.text.textProperty': {
      'value': '‪RLC‬'
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenLargeButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.text.textProperty': {
      'value': '‪RLC‬'
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.homeScreen.view.rlcScreenSmallButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.titleTextNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.titleTextNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.titleTextNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.titleTextNode.textProperty': {
      'value': '‪Circuit Construction Kit: AC‬'
    },
    'circuitConstructionKitAc.general.navigationBar.phetButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.phetButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.homeButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.homeButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.homeButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.homeButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.icon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.icon.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.icon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.text.textProperty': {
      'value': '‪AC Voltage‬'
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.acVoltageScreenButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.icon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.icon.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.icon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.text.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.text.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.text.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.text.textProperty': {
      'value': '‪RLC‬'
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.general.navigationBar.rlcScreenButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.viewTypeProperty': {
      'value': 'LIFELIKE',
      'validValues': [
        'LIFELIKE',
        'SCHEMATIC'
      ]
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireResistivityProperty': {
      'value': 0.00001,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.sourceResistanceProperty': {
      'value': 0,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.circuitElements.lengthProperty': {
      'value': 4,
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.circuitElements': {
      'array': [
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0',
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_0',
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_1',
        'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_2'
      ]
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.currentTypeProperty': {
      'value': 'ELECTRONS',
      'validValues': [
        'ELECTRONS',
        'CONVENTIONAL'
      ]
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.showCurrentProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.prototype': {
      'position': {
        'x': -1000,
        'y': 0
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.prototype.positionProperty': {
      'value': {
        'x': -1000,
        'y': 0
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.prototype.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.prototype.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.selectedCircuitElementProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.prototype.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.highVoltageBatteryGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.highVoltageBatteryGroup.prototype.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.acVoltageGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.acVoltageGroup.prototype.voltageProperty': {
      'value': 0,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.acVoltageGroup.prototype.maximumVoltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.acVoltageGroup.prototype.frequencyProperty': {
      'value': 0.5,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.resistorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.resistorGroup.prototype.resistanceProperty': {
      'value': 10,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.capacitorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.capacitorGroup.prototype.capacitanceProperty': {
      'value': 0.1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0.05,
        'max': 0.2
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.inductorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.inductorGroup.prototype.inductanceProperty': {
      'value': 50,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 10,
        'max': 100
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.switchGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.switchGroup.prototype.closedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.lightBulbGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.lightBulbGroup.prototype.resistanceProperty': {
      'value': 10,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.voltageProperty': {
      'value': null,
      'units': 'volts'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.redProbePositionProperty': {
      'value': {
        'x': 98,
        'y': -89.5
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.voltmeter.blackProbePositionProperty': {
      'value': {
        'x': -58,
        'y': -89.5
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.ammeter.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.ammeter.bodyPositionProperty': {
      'value': {
        'x': -167.32730839170256,
        'y': 72.80898436349014
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.ammeter.draggingProbesWithBodyProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.ammeter.currentProperty': {
      'value': 116022.98058306822,
      'units': 'amperes'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.ammeter.probePositionProperty': {
      'value': {
        'x': -127.32730839170256,
        'y': -7.19101563650986
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.isValueDepictionEnabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.showLabelsProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.showValuesProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.selectedZoomProperty': {
      'value': 1,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.currentZoomProperty': {
      'value': 1,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.modeProperty': {
      'value': 'EXPLORE',
      'validValues': [
        'EXPLORE',
        'TEST'
      ]
    },
    'circuitConstructionKitAc.acVoltageScreen.model.revealingProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.model.showStopwatchProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.rightBatteryIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.rightBatteryIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.rightBatteryIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.acSourceIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.acSourceIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.rightBatteryToolNode.acSourceIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.lightBulbToolNode.lightBulbIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.lightBulbToolNode.lightBulbIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.lightBulbToolNode.lightBulbIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resistorToolNode.resistorIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resistorToolNode.resistorIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resistorToolNode.resistorIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.switchToolNode.switchIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.switchToolNode.switchIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.switchToolNode.switchIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dollarBillToolNode.dollarBillIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dollarBillToolNode.dollarBillIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dollarBillToolNode.dollarBillIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.paperClipToolNode.paperClipIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.paperClipToolNode.paperClipIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.paperClipToolNode.paperClipIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.coinToolNode.coinIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.coinToolNode.coinIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.coinToolNode.coinIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.eraserToolNode.eraserIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.eraserToolNode.eraserIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.eraserToolNode.eraserIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.pencilToolNode.pencilIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.pencilToolNode.pencilIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.pencilToolNode.pencilIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.handToolNode.handIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.handToolNode.handIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.handToolNode.handIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dogToolNode.dogIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dogToolNode.dogIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.dogToolNode.dogIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitLayerNode.cutButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitLayerNode.cutButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitLayerNode.cutButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitLayerNode.cutButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltmeterNode.probeTextNode.titleText.textProperty': {
      'value': '‪Voltage‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.readoutText.textProperty': {
      'value': '‪116022.98 A‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.ammeterNode.probeTextNode.titleText.textProperty': {
      'value': '‪Current‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.meter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.meter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.meter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode1.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode1.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode1.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode2.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode2.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.voltageChartNode.probeNode2.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.meter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.meter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.meter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.probeNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.probeNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.currentChartNode.probeNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.nextButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.nextButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.nextButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.nextButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.previousButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.previousButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.previousButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.previousButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementToolbox.carousel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.textProperty': {
      'value': '‪Voltage‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterIconModel.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterIconModel.bodyPositionProperty': {
      'value': {
        'x': 0,
        'y': 0
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterIconModel.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterIconModel.currentProperty': {
      'value': null,
      'units': 'amperes'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterIconModel.probePositionProperty': {
      'value': {
        'x': 40,
        'y': -80
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.textProperty': {
      'value': '‪Current‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.seriesAmmeterNodeIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.sensorToolbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeIcon.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicIcon.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicIcon.opacityProperty': {
      'value': 0.6,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeRadioButton.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.lifelikeRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.schematicRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.viewRadioButtonGroup.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.arrowNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.arrowNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.arrowNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.electronsRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.electronsRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.electronsRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.electronsRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.conventionalRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.conventionalRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.conventionalRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.conventionalRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.labelsCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.labelsCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.labelsCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.labelsCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.showLabelsProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.labelsCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.valuesCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.valuesCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.valuesCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.valuesCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.showValuesProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.valuesCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.showCurrentCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.showCurrentCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.showCurrentCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.showCurrentCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.showCurrentProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.showCurrentCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.stopwatchCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.stopwatchCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.stopwatchCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.stopwatchCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.showStopwatchProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.stopwatchCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.displayOptionsPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.enabledRangeProperty': {
      'value': {
        'min': 0.00001,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.thumb.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.thumb.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.thumb.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.slider.valueProperty': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireResistivityProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.titleNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.titleNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.titleNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.titleNode.textProperty': {
      'value': '‪Wire Resistivity‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandCollapseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandCollapseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandCollapseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandCollapseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandCollapseButton.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.expandedProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.wireResistivityControl.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.enabledRangeProperty': {
      'value': {
        'min': 0,
        'max': 10
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.thumb.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.thumb.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.thumb.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.slider.valueProperty': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.sourceResistanceProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.minLabel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.minLabel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.minLabel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.minLabel.textProperty': {
      'value': '0'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.maxLabel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.maxLabel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.maxLabel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.maxLabel.textProperty': {
      'value': '10'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.textProperty': {
      'value': '‪0.0 ohms‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.readoutTextPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.titleNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.titleNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.titleNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.titleNode.textProperty': {
      'value': '‪Battery Resistance‬'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandCollapseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandCollapseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandCollapseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandCollapseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandCollapseButton.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.expandedProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.batteryResistanceControl.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resetAllButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resetAllButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resetAllButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.resetAllButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementEditContainerNode.trashButtonGroup.prototype.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.circuitElementEditContainerNode.trashButtonGroup.prototype': {
      'circuitElementID': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.glassNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.glassNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.glassNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.signNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.signNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.signNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomOutButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.glassNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.glassNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.glassNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.signNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.signNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.signNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.zoomInButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.zoomControlPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.isRunningProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.playPauseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.playPauseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.playPauseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.playPauseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.playPauseButton.property': {
      'elementID': 'circuitConstructionKitAc.acVoltageScreen.view.timerNode.isRunningProperty'
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.resetButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.resetButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.resetButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.resetButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.acVoltageScreen.view.timerNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.viewTypeProperty': {
      'value': 'LIFELIKE',
      'validValues': [
        'LIFELIKE',
        'SCHEMATIC'
      ]
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.wireResistivityProperty': {
      'value': 0.00001,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.sourceResistanceProperty': {
      'value': 0,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.circuitElements.lengthProperty': {
      'value': 0,
      'numberType': 'Integer'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.circuitElements': {
      'array': []
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.currentTypeProperty': {
      'value': 'ELECTRONS',
      'validValues': [
        'ELECTRONS',
        'CONVENTIONAL'
      ]
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.showCurrentProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.prototype': {
      'position': {
        'x': -1000,
        'y': 0
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.prototype.positionProperty': {
      'value': {
        'x': -1000,
        'y': 0
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.prototype.voltageProperty': {
      'value': 0,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.vertexGroup.prototype.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.selectedCircuitElementProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.wireGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.batteryGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.batteryGroup.prototype.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.highVoltageBatteryGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.highVoltageBatteryGroup.prototype.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.acVoltageGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.acVoltageGroup.prototype.voltageProperty': {
      'value': 0,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.acVoltageGroup.prototype.maximumVoltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.acVoltageGroup.prototype.frequencyProperty': {
      'value': 0.5,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.resistorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.resistorGroup.prototype.resistanceProperty': {
      'value': 10,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.capacitorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.capacitorGroup.prototype.capacitanceProperty': {
      'value': 0.1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0.05,
        'max': 0.2
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.inductorGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.inductorGroup.prototype.inductanceProperty': {
      'value': 50,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 10,
        'max': 100
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.switchGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.switchGroup.prototype.closedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.lightBulbGroup.prototype': {
      'startVertexID': 'circuitConstructionKitAc.optionalTandem',
      'endVertexID': 'circuitConstructionKitAc.optionalTandem'
    },
    'circuitConstructionKitAc.rlcScreen.model.circuit.lightBulbGroup.prototype.resistanceProperty': {
      'value': 10,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.voltageProperty': {
      'value': null,
      'units': 'volts'
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.redProbePositionProperty': {
      'value': {
        'x': 98,
        'y': -89.5
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.voltmeter.blackProbePositionProperty': {
      'value': {
        'x': -58,
        'y': -89.5
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.ammeter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.ammeter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.ammeter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.ammeter.currentProperty': {
      'value': null,
      'units': 'amperes'
    },
    'circuitConstructionKitAc.rlcScreen.model.ammeter.probePositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.rlcScreen.model.isValueDepictionEnabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.showLabelsProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.showValuesProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.model.selectedZoomProperty': {
      'value': 1,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.currentZoomProperty': {
      'value': 1,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.rlcScreen.model.modeProperty': {
      'value': 'EXPLORE',
      'validValues': [
        'EXPLORE',
        'TEST'
      ]
    },
    'circuitConstructionKitAc.rlcScreen.model.revealingProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.model.showStopwatchProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.rightBatteryIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.rightBatteryIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.rightBatteryIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.acSourceIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.acSourceIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.rightBatteryToolNode.acSourceIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.lightBulbToolNode.lightBulbIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.lightBulbToolNode.lightBulbIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.lightBulbToolNode.lightBulbIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.resistorToolNode.resistorIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.resistorToolNode.resistorIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.resistorToolNode.resistorIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.capacitorToolNode.resistorIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.capacitorToolNode.resistorIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.capacitorToolNode.resistorIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.inductorToolNode.resistorIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.inductorToolNode.resistorIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.inductorToolNode.resistorIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.switchToolNode.switchIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.switchToolNode.switchIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.switchToolNode.switchIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitLayerNode.cutButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitLayerNode.cutButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitLayerNode.cutButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitLayerNode.cutButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltmeterNode.probeTextNode.titleText.textProperty': {
      'value': '‪Voltage‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.ammeterNode.probeTextNode.titleText.textProperty': {
      'value': '‪Current‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.meter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.meter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.meter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode1.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode1.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode1.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode2.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode2.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.voltageChartNode.probeNode2.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.meter.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.meter.bodyPositionProperty': {
      'value': {
        'x': 20,
        'y': 20
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.meter.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.probeNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.probeNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.currentChartNode.probeNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.nextButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.nextButton.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.nextButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.nextButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.previousButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.previousButton.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.previousButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.previousButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementToolbox.carousel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.voltmeterNodeIcon.probeTextNode.titleText.textProperty': {
      'value': '‪Voltage‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterIconModel.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterIconModel.bodyPositionProperty': {
      'value': {
        'x': 0,
        'y': 0
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterIconModel.draggingProbesWithBodyProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterIconModel.currentProperty': {
      'value': null,
      'units': 'amperes'
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterIconModel.probePositionProperty': {
      'value': {
        'x': 40,
        'y': -80
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.readoutText.textProperty': {
      'value': '‪?‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.ammeterNodeIcon.probeTextNode.titleText.textProperty': {
      'value': '‪Current‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.readoutPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.seriesAmmeterNodeIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.sensorToolbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeIcon.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeIcon.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicIcon.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicIcon.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicIcon.opacityProperty': {
      'value': 0.6,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeRadioButton.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.lifelikeRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.schematicRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.viewRadioButtonGroup.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.arrowNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.arrowNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.arrowNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.electronsRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.electronsRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.electronsRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.electronsRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.conventionalRadioButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.conventionalRadioButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.conventionalRadioButton.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.conventionalRadioButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.labelsCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.labelsCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.labelsCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.labelsCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.showLabelsProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.labelsCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.valuesCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.valuesCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.valuesCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.valuesCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.showValuesProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.valuesCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.showCurrentCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.showCurrentCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.showCurrentCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.showCurrentCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.circuit.showCurrentProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.showCurrentCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.stopwatchCheckbox.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.stopwatchCheckbox.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.stopwatchCheckbox.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.stopwatchCheckbox.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.showStopwatchProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.stopwatchCheckbox.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.displayOptionsPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.enabledRangeProperty': {
      'value': {
        'min': 0.00001,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.thumb.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.thumb.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.thumb.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.slider.valueProperty': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.circuit.wireResistivityProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.titleNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.titleNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.titleNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.titleNode.textProperty': {
      'value': '‪Wire Resistivity‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandCollapseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandCollapseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandCollapseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandCollapseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandCollapseButton.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.expandedProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.wireResistivityControl.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.enabledRangeProperty': {
      'value': {
        'min': 0,
        'max': 10
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.thumb.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.thumb.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.thumb.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.pickableProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.slider.valueProperty': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.model.circuit.sourceResistanceProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.minLabel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.minLabel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.minLabel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.minLabel.textProperty': {
      'value': '0'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.maxLabel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.maxLabel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.maxLabel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.maxLabel.textProperty': {
      'value': '10'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.readoutTextNode.textProperty': {
      'value': '‪0.0 ohms‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.pickableProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.readoutTextPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.titleNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.titleNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.titleNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.titleNode.textProperty': {
      'value': '‪Battery Resistance‬'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandCollapseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandCollapseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandCollapseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandCollapseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandCollapseButton.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.expandedProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.batteryResistanceControl.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.resetAllButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.resetAllButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.resetAllButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.resetAllButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementEditContainerNode.trashButtonGroup.prototype.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.circuitElementEditContainerNode.trashButtonGroup.prototype': {
      'circuitElementID': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.glassNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.glassNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.glassNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.signNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.signNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.signNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomOutButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.glassNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.glassNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.glassNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.signNode.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.signNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.signNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.zoomInButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.zoomControlPanel.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.isRunningProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.playPauseButton.enabledProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.playPauseButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.playPauseButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.playPauseButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.playPauseButton.property': {
      'elementID': 'circuitConstructionKitAc.rlcScreen.view.timerNode.isRunningProperty'
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.resetButton.enabledProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.resetButton.visibleProperty': {
      'value': true
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.resetButton.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.resetButton.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.visibleProperty': {
      'value': false
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.pickableProperty': {
      'value': null
    },
    'circuitConstructionKitAc.rlcScreen.view.timerNode.opacityProperty': {
      'value': 1,
      'numberType': 'FloatingPoint',
      'range': {
        'min': 0,
        'max': 1
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.batteryGroup.battery_0.voltageProperty': {
      'value': 9,
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2': {
      'position': {
        'x': -111.79065109614669,
        'y': -169.20549063846983
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2.positionProperty': {
      'value': {
        'x': -111.79065109614669,
        'y': -169.20549063846983
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
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_0': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_2',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5': {
      'position': {
        'x': -213.7906510961467,
        'y': -169.20549063846983
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.positionProperty': {
      'value': {
        'x': -213.7906510961467,
        'y': -169.20549063846983
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.voltageProperty': {
      'value': -8.999999999999998,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_1': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_5'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6': {
      'position': {
        'x': -198.34639852458037,
        'y': 12.722513957681315
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6.positionProperty': {
      'value': {
        'x': -198.34639852458037,
        'y': 12.722513957681315
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6.voltageProperty': {
      'value': -5.7645188036531225,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7': {
      'position': {
        'x': -66.98462757570991,
        'y': 19.315216694207038
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7.positionProperty': {
      'value': {
        'x': -66.98462757570991,
        'y': 19.315216694207038
      }
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7.voltageProperty': {
      'value': -3.4337710251794613,
      'units': 'volts',
      'numberType': 'FloatingPoint'
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7.selectedProperty': {
      'value': false
    },
    'circuitConstructionKitAc.acVoltageScreen.model.circuit.wireGroup.wire_2': {
      'startVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_6',
      'endVertexID': 'circuitConstructionKitAc.acVoltageScreen.model.circuit.vertexGroup.vertex_7'
    }
  };

  return circuitConstructionKitAc.register( 'shortBattery', shortBattery );
} );