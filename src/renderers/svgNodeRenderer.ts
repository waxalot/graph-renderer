import { SVGNodeViewModel } from "../viewModels";
import { INodeRenderer } from "./";
import { Utils } from "../utils";
import { SVGUtils } from "./svgUtils";
import { SVGRenderer } from "./svgRenderer";
import { VisualGraphNode } from "../models/visualGraphNode";


/**
 * The SVG based implementation of a node renderer.
 * 
 * @export
 * @class SVGNodeRenderer
 * @extends {SVGRenderer<T>}
 * @implements {INodeRenderer<SVGNodeViewModel<T>>}
 * @template T 
 */
export class SVGNodeRenderer<T extends VisualGraphNode> extends SVGRenderer<T, SVGNodeViewModel<T>> implements INodeRenderer<T> {

    /**
     * The node's container element.
     * 
     * @private
     * @type {SVGSVGElement}
     * @memberof SVGNodeRenderer
     */
    private containerElement: SVGSVGElement;


    /**
     * Sets the node's container element.
     * 
     * @param {SVGSVGElement} containerElement 
     * @memberof SVGNodeRenderer
     */
    public setContainerElement(containerElement: SVGSVGElement): void {
        if (!containerElement) {
            Utils.throwReferenceError('containerElement');
        }

        this.containerElement = containerElement;
    }


    /**
     * Renders the node view-model.
     * 
     * @param {SVGNodeViewModel<T>} viewModel 
     * @memberof SVGNodeRenderer
     */
    public render(viewModel: SVGNodeViewModel<T>): void {
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

        if (viewModel.width) {
            let attributeName = 'width';
            nodeTargetElement.setAttribute(attributeName, viewModel.width.toFixed());
            // Data bind to the view-model's width property
            let vmPropertyName = 'width';
            nodeTargetElement.setAttribute('data-bind-' + viewModel.guid + '-' + attributeName, vmPropertyName);
        }

        if (viewModel.height) {
            let attributeName = 'height';
            nodeTargetElement.setAttribute(attributeName, viewModel.height.toFixed());
            // Data bind to the view-model's height property
            let vmPropertyName = 'height';
            nodeTargetElement.setAttribute('data-bind-' + viewModel.guid + '-' + attributeName, vmPropertyName);
        }

        this.containerElement.appendChild(nodeTargetElement);
    }

}