import { IRenderersFactory } from "./iRenderersFactory";
import { SVGGraphRenderer, SVGNodeRenderer, IGraphRenderer, INodeRenderer, SVGEdgeRenderer } from "../renderers";
import { IGraphViewModel, INodeViewModel, IEdgeViewModel } from "../viewModels";


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
        let edgeRenderer = this.createEdgeRenderer();
        return new SVGGraphRenderer(nodeRenderer, edgeRenderer);
    }


    /**
     * Creates the node renderer.
     * 
     * @returns {SVGNodeRenderer} 
     * @memberof SVGRenderersFactory
     */
    public createNodeRenderer(): SVGNodeRenderer {
        return new SVGNodeRenderer();
    }


    /**
     * Creates the edge renderer.
     * 
     * @returns {SVGEdgeRenderer} 
     * @memberof SVGRenderersFactory
     */
    public createEdgeRenderer(): SVGEdgeRenderer {
        return new SVGEdgeRenderer();
    }

}