import { Graph } from "./models/graph";
import { IGraphRenderer } from "./interfaces/iGraphRenderer";


/**
 * The SVG based implementation of a graph renderer.
 * 
 * @export
 * @class SVGGraphRenderer
 */
export class SVGGraphRenderer implements IGraphRenderer {

    private targetElement: HTMLElement;
    private svgElement: SVGSVGElement;


    /**
     * Creates an instance of SVGGraphRenderer.
     *
     * @param {HTMLElement} targetElement 
     * @memberof SVGGraphRenderer
     */
    public constructor(targetElement: HTMLElement) {
        if (!targetElement) {
            throw new ReferenceError('The argument "targetElement" is null or undefined.');
        }

        this.targetElement = targetElement;
    }


    /**
     * Renders the graph.
     * 
     * @param {Graph} graph 
     * @memberof SVGGraphRenderer
     */
    public render(graph: Graph): void {

        if (!this.svgElement) {
            this.svgElement = this.createSVGElement();
        }

    }


    /**
     * Creates a new SVG element.
     * 
     * @private
     * @returns {SVGSVGElement} 
     * @memberof SVGGraphRenderer
     */
    private createSVGElement(): SVGSVGElement {
        let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        return svgElement;
    }

}