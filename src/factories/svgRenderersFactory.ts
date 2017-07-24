import { IRenderersFactory } from "./iRenderersFactory";
import { SVGGraphRenderer, SVGNodeRenderer, IGraphRenderer, INodeRenderer } from "../renderers";
import { IGraphViewModel, INodeViewModel } from "../viewModels";


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
     * @returns {SVGNodeRenderer} 
     * @memberof SVGRenderersFactory
     */
    public createNodeRenderer(): SVGNodeRenderer {
        return new SVGNodeRenderer();
    }

}