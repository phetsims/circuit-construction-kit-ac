// Copyright 2019-2020, University of Colorado Boulder

/**
 * The view for the AC Voltage screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class ACVoltageScreenView extends CCKCScreenView {

  /**
   * @param {ACVoltageModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {

    // TODO: Can this move to CCKCScreenView?
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
      circuitElementToolFactory.createSwitchToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createDollarBillToolNode(),
      circuitElementToolFactory.createPaperClipToolNode(),
      circuitElementToolFactory.createCoinToolNode( ),
      circuitElementToolFactory.createEraserToolNode( ),
      circuitElementToolFactory.createPencilToolNode( ),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createHandToolNode(),
      circuitElementToolFactory.createDogToolNode( )
    ];

    super( model, circuitElementToolNodes, tandem, {
      showResetAllButton: true,
      showAdvancedControls: false,
      showCharts: true,
      showTimeControls: true,
      circuitElementToolboxOptions: {
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