import { SVGGraphNodeViewModel } from "../../viewModels/svg/svgGraphNodeViewModel";
import { SVGGraphItemRenderer } from "./svgGraphItemRenderer";
import { IGraphNodeRenderer } from "../interfaces/iGraphNodeRenderer";
import { Utils } from "../../utils";
import { SVGUtils } from "./svgUtils";
import { ISVGGraphNodeRenderer } from "./interfaces/iSVGGraphNodeRenderer";
import { ISVGGraphNodeViewModel } from "../../viewModels/svg/interfaces/iSVGGraphNodeViewModel";
import { IVisualGraphNode } from "../../interfaces/iVisualGraphNode";
import { IGraphItemViewModel } from "../../viewModels/interfaces/iGraphItemViewModel";


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

        // Set the position
        if (viewModel.position) {
            nodeTargetElement.setAttribute('x', viewModel.position.x.toFixed());
            nodeTargetElement.setAttribute('y', viewModel.position.y.toFixed());
        }

        // Set the size
        if (viewModel.size) {
            nodeTargetElement.setAttribute('width', viewModel.size.width.toFixed());
            nodeTargetElement.setAttribute('height', viewModel.size.height.toFixed());
        }

        viewModel.selectionChangedEvent.addEventListener(this.selectionChangedListener);

        this.containerElement.appendChild(nodeTargetElement);
    }



    private selectionChangedListener(source: ISVGGraphNodeViewModel, selected: boolean): void {
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