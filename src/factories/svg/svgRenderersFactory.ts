import { IRenderersFactory } from "../interfaces/iRenderersFactory";
import { ISVGGraphNodeRenderer } from "../../renderers/svg/interfaces/iSVGGraphNodeRenderer";
import { SVGGraphNodeRenderer } from "../../renderers/svg/svgGraphNodeRenderer";
import { SVGGraphRenderer } from "../../renderers/svg/svgGraphRenderer";
import { IGraphRenderer } from "../../renderers/interfaces/iGraphRenderer";


/**
 * The SVG based representation of a renderers factory.
 * 
 * @export
 * @class SVGRenderersFactory
 * @implements {IRenderersFactory}
 */
export class SVGRenderersFactory implements IRenderersFactory {

    /**
     * Creates the graph renderer.
     * 
     * @returns {IGraphRenderer} 
     * @memberof SVGRenderersFactory
     */
    public createGraphRenderer(): IGraphRenderer {
        let nodeRenderer = this.createNodeRenderer();
        return new SVGGraphRenderer(nodeRenderer);
    }


    /**
     * Creates the node renderer.
     * 
     * @returns {ISVGGraphNodeRenderer} 
     * @memberof SVGRenderersFactory
     */
    public createNodeRenderer(): ISVGGraphNodeRenderer {
        return new SVGGraphNodeRenderer();
    }


}