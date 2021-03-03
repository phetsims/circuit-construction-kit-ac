// Copyright 2019-2020, University of Colorado Boulder

/**
 * The view for the AC Voltage screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Resistor from '../../../../circuit-construction-kit-common/js/model/Resistor.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class ACVoltageScreenView extends CCKCScreenView {

  /**
   * @param {ACVoltageModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point )
    );

    const createWireToolNode = () => new Node( {
      children: [ circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, tandem.createTandem( 'wireToolNode' ) ) ]
    } );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      createWireToolNode(),
      circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createACVoltageToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, Resistor.ResistorType.RESISTOR, tandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

      createWireToolNode(),
      circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
      circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
      circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),
      circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),

      createWireToolNode(),
      circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),
      circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
    ];

    super( model, circuitElementToolNodes, tandem, {
      showResetAllButton: true, // The reset all button should be shown.
      showAdvancedControls: false,
      showCharts: true,
      showTimeControls: true,
      circuitElementToolboxOptions: {
        carouselOptions: {
          itemsPerPage: 6
        }
      },
      showStopwatchCheckbox: true,
      hasACandDCVoltageSources: true
    } );
  }
}

circuitConstructionKitAc.register( 'ACVoltageScreenView', ACVoltageScreenView );
export default ACVoltageScreenView;