// Copyright 2017-2018, University of Colorado Boulder

/**
 * The view for the AC Source screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  const circuitConstructionKitAcAndDc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuitConstructionKitAcAndDc' );
  const CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  const Node = require( 'SCENERY/nodes/Node' );

  class ACSourceScreenView extends CCKCScreenView {

    /**
     * @param {ACSourceModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point ) );

      const wireToolNode = circuitElementToolFactory.createWireToolNode( 25, tandem.createTandem( 'wireToolNode' ) );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

        // This page is duplicated in the Lab Screen View
        wireToolNode,
        circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createACSourceToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
        circuitElementToolFactory.createCapacitorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
        // circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
        circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
        circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
        circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
        circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),

        new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
        circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),
        circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),
        circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
      ];

      super( model, circuitElementToolNodes, tandem, {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown.
        showResistivityControl: false,
        showBatteryResistanceControl: false
      } );
    }
  }

  return circuitConstructionKitAcAndDc.register( 'ACSourceScreenView', ACSourceScreenView );
} );