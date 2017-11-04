import { SVGGraphNodeViewModel } from "../../viewModels/svg/svgGraphNodeViewModel";
import { SVGGraphItemRenderer } from "./svgGraphItemRenderer";
import { IGraphNodeRenderer } from "../interfaces/iGraphNodeRenderer";
import { Utils } from "../../utils";
import { SVGUtils } from "./svgUtils";
import { ISVGGraphNodeRenderer } from "./interfaces/iSVGGraphNodeRenderer";
import { ISVGGraphNodeViewModel } from "../../viewModels/svg/interfaces/iSVGGraphNodeViewModel";
import { IVisualGraphNode } from "../../interfaces/iVisualGraphNode";
import { IGraphItemViewModel } from "../../viewModels/interfaces/iGraphItemViewModel";
import { ChangedEventValuePair } from "../../models/changedEventValues";
import { Point } from "../../models/point";
import { Size } from "../../models/size";


/**
 * The SVG based implementation of a graph node renderer.
 * 
 * @export
 * @class SVGGraphNodeRenderer
 * @extends {SVGGraphItemRenderer<ISVGGraphNodeViewModel>}
 * @implements {ISVGGraphNodeRenderer}
 */
export class SVGGraphNodeRenderer extends SVGGraphItemRenderer<ISVGGraphNodeViewModel> implements ISVGGraphNodeRenderer {

    /**
     * The node's container element.
     * 
     * @private
     * @type {SVGSVGElement}
     * @memberof SVGGraphNodeRenderer
     */
    private containerElement: SVGSVGElement;


    /**
     * Sets the node's container element.
     * 
     * @param {SVGSVGElement} containerElement 
     * @memberof SVGGraphNodeRenderer
     */
    public setContainerElement(containerElement: SVGSVGElement): void {
        if (!containerElement) {
            Utils.throwReferenceError('containerElement');
        }

        this.containerElement = containerElement;
    }


    /**
     * Renders the graph node view-model.
     * 
     * @param {ISVGGraphNodeViewModel} viewModel 
     * @memberof SVGGraphNodeRenderer
     */
    public render(viewModel: ISVGGraphNodeViewModel): void {
        if (!this.containerElement) {
            throw new Error('No container element was set. Call setContainerElement() before!')
        }

        // Render the node's target
        let nodeTargetElement = this.createTargetElement<SVGRectElement>('rect', viewModel);
        nodeTargetElement.classList.add('graph-node');
        nodeTargetElement.classList.add('graph-draggable');

        // Set selection handler
        nodeTargetElement.onmousedown = viewModel.mouseDownHandler;

        // Set the initial transform matrix (identity matrix)
        nodeTargetElement.setAttribute('transform', 'matrix(1 0 0 1 0 0)');

        // Set all property changed handler
        viewModel.selectionChangedEvent.addEventListener(this.selectionChangedListener);
        viewModel.positionChangedEvent.addEventListener(this.positionChangedListener);
        viewModel.sizeChangedEvent.addEventListener(this.sizeChangedListener);

        // Append the new element to the container element.
        this.containerElement.appendChild(nodeTargetElement);
    }

    /**
     * The position changed event listener.
     * 
     * @private
     * @param {ISVGGraphNodeViewModel} source 
     * @param {ChangedEventValuePair<Point>} values 
     * @returns {void} 
     * @memberof SVGGraphNodeRenderer
     */
    private positionChangedListener(source: ISVGGraphNodeViewModel, values: ChangedEventValuePair<Point>): void {
        if (!source) {
            return;
        }

        // Find the target element by the guid.
        let targetElement = SVGUtils.getElementByGuid(document, source.guid);
        if (targetElement) {
            targetElement.setAttribute('x', values.newValue.x.toFixed());
            targetElement.setAttribute('y', values.newValue.y.toFixed());
        }
    }


    /**
     * The size changed event listener.
     * 
     * @private
     * @param {ISVGGraphNodeViewModel} source 
     * @param {ChangedEventValuePair<Size>} values 
     * @returns {void} 
     * @memberof SVGGraphNodeRenderer
     */
    private sizeChangedListener(source: ISVGGraphNodeViewModel, values: ChangedEventValuePair<Size>): void {
        if (!source) {
            return;
        }

        // Find the target element by the guid.
        let targetElement = SVGUtils.getElementByGuid(document, source.guid);
        if (targetElement) {
            targetElement.setAttribute('width', values.newValue.width.toFixed());
            targetElement.setAttribute('height', values.newValue.height.toFixed());
        }
    }


    /**
     * The selection changed event listener.
     * 
     * @private
     * @param {ISVGGraphNodeViewModel} source 
     * @param {ChangedEventValuePair<boolean>} values 
     * @returns {void} 
     * @memberof SVGGraphNodeRenderer
     */
    private selectionChangedListener(source: ISVGGraphNodeViewModel, values: ChangedEventValuePair<boolean>): void {
        if (!source) {
            return;
        }

        // Find the target element by the guid.
        let targetElement = SVGUtils.getElementByGuid(document, source.guid);
        if (targetElement) {
            targetElement.classList.toggle('graph-node-selected');
        }
    }

}