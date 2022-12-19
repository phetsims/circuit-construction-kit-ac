// Copyright 2019-2022, University of Colorado Boulder

/**
 * The view for the AC Voltage screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
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
      point => this.circuitLayerNode.globalToLocalPoint( point ),
      tandem.createTandem( 'circuitElementToolbox' ).createTandem( 'carousel' ).createTandem( 'circuitElementTools' )
    );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node,
    // see options.itemsPerPage below
    const circuitElementToolNodes = [
      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createRightBatteryToolNode(),
      circuitElementToolFactory.createACVoltageToolNode(),
      circuitElementToolFactory.createLightBulbToolNode(),
      circuitElementToolFactory.createResistorToolNode(),
      circuitElementToolFactory.createSwitchToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createFuseToolNode(),
      circuitElementToolFactory.createDollarBillToolNode(),
      circuitElementToolFactory.createPaperClipToolNode(),
      circuitElementToolFactory.createCoinToolNode(),
      circuitElementToolFactory.createEraserToolNode(),

      circuitElementToolFactory.createWireToolNode(),
      circuitElementToolFactory.createPencilToolNode()
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