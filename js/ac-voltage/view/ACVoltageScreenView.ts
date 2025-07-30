// Copyright 2019-2025, University of Colorado Boulder

/**
 * The view for the AC Voltage screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import CircuitConstructionKitModel from '../../../../circuit-construction-kit-common/js/model/CircuitConstructionKitModel.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class ACVoltageScreenView extends CCKCScreenView {

  public constructor( model: CircuitConstructionKitModel, tandem: Tandem ) {

    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node,
    // see options.itemsPerPage below
    const circuitElementToolNodes: Array<{ createNode: ( tandem: Tandem ) => Node; tandemName: string }> = [
      { createNode: tandem => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode1' },
      { createNode: tandem => circuitElementToolFactory.createRightBatteryToolNode( tandem ), tandemName: 'rightBatteryToolNode' },
      { createNode: tandem => circuitElementToolFactory.createACVoltageToolNode( tandem ), tandemName: 'acVoltageToolNode' },
      { createNode: tandem => circuitElementToolFactory.createLightBulbToolNode( tandem ), tandemName: 'lightBulbToolNode' },
      { createNode: tandem => circuitElementToolFactory.createResistorToolNode( tandem ), tandemName: 'resistorToolNode' },
      { createNode: tandem => circuitElementToolFactory.createSwitchToolNode( tandem ), tandemName: 'switchToolNode' },

      { createNode: tandem => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode2' },
      { createNode: tandem => circuitElementToolFactory.createFuseToolNode( tandem ), tandemName: 'fuseToolNode' },
      { createNode: tandem => circuitElementToolFactory.createDollarBillToolNode( tandem ), tandemName: 'dollarBillToolNode' },
      { createNode: tandem => circuitElementToolFactory.createPaperClipToolNode( tandem ), tandemName: 'paperClipToolNode' },
      { createNode: tandem => circuitElementToolFactory.createCoinToolNode( tandem ), tandemName: 'coinToolNode' },
      { createNode: tandem => circuitElementToolFactory.createEraserToolNode( tandem ), tandemName: 'eraserToolNode' },

      { createNode: tandem => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode3' },
      { createNode: tandem => circuitElementToolFactory.createPencilToolNode( tandem ), tandemName: 'pencilToolNode' }
    ];

    super( model, circuitElementToolNodes, tandem, {
      showAdvancedControls: false,
      showCharts: true,
      showTimeControls: true,
      circuitElementToolboxOptions: {
        carouselScale: CCKCConstants.AC_CAROUSEL_SCALE,
        carouselOptions: {
          itemsPerPage: 6 // NOTE: this must be kept in sync with the pagination above
        }
      },
      showStopwatchCheckbox: true,
      hasACandDCVoltageSources: true
    } );
  }
}

circuitConstructionKitAc.register( 'ACVoltageScreenView', ACVoltageScreenView );
export default ACVoltageScreenView;