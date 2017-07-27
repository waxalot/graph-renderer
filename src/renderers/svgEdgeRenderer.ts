import { IEdgeRenderer, SVGRenderer } from "./";
import { SVGEdgeViewModel } from "../viewModels";
import { Utils } from "../utils";


/**
 * The SVG based implementation of an edge renderer.
 * 
 * @export
 * @class SVGEdgeRenderer
 * @implements {IEdgeRenderer}
 */
export class SVGEdgeRenderer extends SVGRenderer<SVGEdgeViewModel> implements IEdgeRenderer {

    /**
     * The edge's container element.
     * 
     * @private
     * @type {SVGSVGElement}
     * @memberof SVGEdgeRenderer
     */
    private containerElement: SVGSVGElement;


    /**
     * Sets the edge's container element.
     * 
     * @param {SVGSVGElement} containerElement 
     * @memberof SVGEdgeRenderer
     */
    public setContainerElement(containerElement: SVGSVGElement): void {
        if (!containerElement) {
            Utils.throwReferenceError('containerElement');
        }

        this.containerElement = containerElement;
    }


    /**
     * Renders the edge view-model.
     * 
     * @param {SVGEdgeViewModel} viewModel 
     * @memberof SVGEdgeRenderer
     */
    public render(viewModel: SVGEdgeViewModel): void {
        if (!this.containerElement) {
            throw new Error('No container element was set. Call setContainerElement() before!')
        }

        // Render the edge's target
        let edgeTargetElement = this.createTargetElement<SVGPathElement>('line', viewModel);
        edgeTargetElement.classList.add('graph-edge');

        // Set start point
        if (viewModel.startPoint) {
            edgeTargetElement.setAttribute('x1', viewModel.startPoint.x.toFixed());
            edgeTargetElement.setAttribute('y1', viewModel.startPoint.y.toFixed());
        }

        // Set end point
        if (viewModel.endPoint) {
            edgeTargetElement.setAttribute('x2', viewModel.endPoint.x.toFixed());
            edgeTargetElement.setAttribute('y2', viewModel.endPoint.y.toFixed());
        }

        this.containerElement.appendChild(edgeTargetElement);
    }

}