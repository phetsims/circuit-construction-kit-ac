// Copyright 2019-2020, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
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
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      tandem
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createRightBatteryToolNode(),
      circuitElementToolFactory.createACVoltageToolNode(),
      circuitElementToolFactory.createLightBulbToolNode(),
      circuitElementToolFactory.createResistorToolNode(),
      circuitElementToolFactory.createCapacitorToolNode(),
      circuitElementToolFactory.createInductorToolNode(),
      circuitElementToolFactory.createSwitchToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createFuseToolNode(),
      circuitElementToolFactory.createDollarBillToolNode(),
      circuitElementToolFactory.createPaperClipToolNode(),
      circuitElementToolFactory.createCoinToolNode(),
      circuitElementToolFactory.createEraserToolNode(),
      circuitElementToolFactory.createPencilToolNode(),
      circuitElementToolFactory.createHandToolNode(),

      circuitElementToolFactory.createWireToolNode( ),
      circuitElementToolFactory.createDogToolNode()
    ];

    super( model, circuitElementToolNodes, tandem, merge( {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showCharts: true,
      showTimeControls: true,
      showStopwatchCheckbox: true,
      showSeriesAmmeters: true,
      circuitElementToolboxOptions: {
        carouselOptions: {
          itemsPerPage: 8,
          pageHeight: 400
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