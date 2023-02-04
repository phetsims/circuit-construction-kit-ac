// Copyright 2019-2023, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import merge from '../../../../phet-core/js/merge.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class LabScreenView extends CCKCScreenView {

  /**
   * @param {LabModel} model
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( model, tandem, options ) {
    const circuitElementToolFactory = new CircuitElementToolFactory(
      model.circuit,
      model.showLabelsProperty,
      model.viewTypeProperty,
      point => this.circuitNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      { createNode: tandem => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode1' },
      { createNode: tandem => circuitElementToolFactory.createRightBatteryToolNode( tandem ), tandemName: 'rightBatteryToolNode' },
      { createNode: tandem => circuitElementToolFactory.createACVoltageToolNode( tandem ), tandemName: 'aCVoltageToolNode' },
      { createNode: tandem => circuitElementToolFactory.createLightBulbToolNode( tandem ), tandemName: 'lightBulbToolNode' },
      { createNode: tandem => circuitElementToolFactory.createResistorToolNode( tandem ), tandemName: 'resistorToolNode' },
      { createNode: tandem => circuitElementToolFactory.createCapacitorToolNode( tandem ), tandemName: 'capacitorToolNode' },
      { createNode: tandem => circuitElementToolFactory.createInductorToolNode( tandem ), tandemName: 'inductorToolNode' },
      { createNode: tandem => circuitElementToolFactory.createSwitchToolNode( tandem ), tandemName: 'switchToolNode' },

      { createNode: tandem => circuitElementToolFactory.createWireToolNode( tandem ), tandemName: 'wireToolNode2' },
      { createNode: tandem => circuitElementToolFactory.createFuseToolNode( tandem ), tandemName: 'fuseToolNode' },
      { createNode: tandem => circuitElementToolFactory.createDollarBillToolNode( tandem ), tandemName: 'dollarBillToolNode' },
      { createNode: tandem => circuitElementToolFactory.createPaperClipToolNode( tandem ), tandemName: 'paperClipToolNode' },
      { createNode: tandem => circuitElementToolFactory.createCoinToolNode( tandem ), tandemName: 'coinToolNode' },
      { createNode: tandem => circuitElementToolFactory.createEraserToolNode( tandem ), tandemName: 'eraserToolNode' },
      { createNode: tandem => circuitElementToolFactory.createPencilToolNode( tandem ), tandemName: 'pencilToolNode' }
    ];

    super( model, circuitElementToolNodes, tandem, merge( {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showCharts: true,
      showTimeControls: true,
      showStopwatchCheckbox: true,
      showSeriesAmmeters: true,
      circuitElementToolboxOptions: {
        carouselScale: CCKCConstants.AC_CAROUSEL_SCALE,
        carouselOptions: {
          itemsPerPage: 8
        }
      },
      showPhaseShiftControl: true,
      hasACandDCVoltageSources: true,
      showAdvancedControls: true
    }, options ) );
  }
}

circuitConstructionKitAc.register( 'LabScreenView', LabScreenView );
export default LabScreenView;