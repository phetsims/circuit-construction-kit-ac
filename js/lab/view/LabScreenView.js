// Copyright 2019, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const BooleanProperty = require( 'AXON/BooleanProperty' );
  const CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  const circuitConstructionKitAc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC/circuitConstructionKitAc' );
  const CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  const NumberProperty = require( 'AXON/NumberProperty' );
  const TimerNode = require( 'SCENERY_PHET/TimerNode' );

  class LabScreenView extends CCKCScreenView {

    /**
     * @param {LabModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point ) );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

        // This page is duplicated in the Lab Screen View
        circuitElementToolFactory.createWireToolNode( 25, tandem.createTandem( 'wireToolNode' ) ),
        circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createACVoltageToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
        circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
        circuitElementToolFactory.createCapacitorToolNode( 10, tandem.createTandem( 'capacitorToolNode' ) ),
        circuitElementToolFactory.createInductorToolNode( 10, tandem.createTandem( 'inductorToolNode' ) ),
        circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) )
      ];

      super( model, circuitElementToolNodes, tandem, {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown.
        showResistivityControl: false,
        showBatteryResistanceControl: false,
        showCharts: true,
        showStopwatchCheckbox: true,
        circuitElementToolboxOptions: {
          hideDisabledButtons: true,
          itemsPerPage: circuitElementToolNodes.length,
          pageHeight: 400
        }
      } );

      // @public - the TimerNode
      // TODO: consider generalizing Stopwatch and StopwatchNode from gas-properties
      const timerNodeTandem = tandem.createTandem( 'timerNode' );
      this.timerNode = new TimerNode( new NumberProperty( 0 ), new BooleanProperty( false, {
        tandem: timerNodeTandem.createTandem( 'isRunningProperty' )
      } ), {
        tandem: timerNodeTandem
      } );
      this.addChild( this.timerNode );

      // Show the TimerNode when the checkbox is checked
      // TODO: duplicated
      model.showStopwatchProperty.link( showStopwatch => {
        this.timerNode.visible = showStopwatch;
      } );
    }
  }

  return circuitConstructionKitAc.register( 'LabScreenView', LabScreenView );
} );