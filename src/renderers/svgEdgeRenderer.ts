import { IEdgeRenderer, SVGRenderer } from "./";
import { SVGEdgeViewModel } from "../viewModels";
import { Utils } from "../utils";
import { VisualGraphNode } from "../models";


/**
 * The SVG based implementation of an edge renderer.
 * 
 * @export
 * @class SVGEdgeRenderer
 * @implements {IEdgeRenderer}
 */
export class SVGEdgeRenderer<T extends VisualGraphNode> extends SVGRenderer<T, SVGEdgeViewModel<T>> implements IEdgeRenderer<T> {

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
    public render(viewModel: SVGEdgeViewModel<T>): void {
        if (!this.containerElement) {
            throw new Error('No container element was set. Call setContainerElement() before!')
        }

        // Render the edge's target element.
        let edgeTargetElement = this.createTargetElement<SVGPolylineElement>('polyline', viewModel);
        edgeTargetElement.classList.add('graph-edge');

        let pointsAttrValue = '';
        viewModel.points.forEach((tempPoint) => {
            pointsAttrValue += tempPoint.x.toFixed() + ',' + tempPoint.y.toFixed();
            pointsAttrValue += ' ';
        });

        edgeTargetElement.setAttribute('points', pointsAttrValue);

        this.containerElement.appendChild(edgeTargetElement);
    }

}