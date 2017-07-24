import { SVGNodeViewModel } from "../viewModels";
import { INodeRenderer } from "./";
import { Utils } from "../utils";
import { SVGUtils } from "./svgUtils";


/**
 * The SVG based implementation of a node renderer.
 * 
 * @export
 * @class SVGNodeRenderer
 * @implements {INodeRenderer}
 */
export class SVGNodeRenderer implements INodeRenderer {

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
     * @param {SVGNodeViewModel} viewModel 
     * @memberof SVGNodeRenderer
     */
    public render(viewModel: SVGNodeViewModel): void {
        if (!this.containerElement) {
            throw new Error('No container element was set. Call setContainerElement() before!')
        }

        // Render the node's target
        let nodeTargetElement = this.createTargetElement(viewModel);

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

        this.containerElement.appendChild(nodeTargetElement);
    }


    /**
     * Creates the node's target element.
     * 
     * @private
     * @param {SVGNodeViewModel} viewModel 
     * @returns {SVGRectElement} 
     * @memberof SVGNodeRenderer
     */
    private createTargetElement(viewModel: SVGNodeViewModel): SVGRectElement {
        let targetElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        targetElement.classList.add('graph-node');
        SVGUtils.setGuidAttribute(targetElement, viewModel);
        return targetElement;
    }

}