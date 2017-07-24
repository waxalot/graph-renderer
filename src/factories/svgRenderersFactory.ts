import { IRenderersFactory } from "./iRenderersFactory";
import { SVGGraphRenderer, SVGNodeRenderer, IRenderer } from "../renderers";
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
     * @returns {IRenderer<IGraphViewModel>} 
     * @memberof SVGRenderersFactory
     */
    createGraphRenderer(): IRenderer<IGraphViewModel> {
        let nodeRenderer = this.createNodeRenderer();
        return new SVGGraphRenderer(nodeRenderer);
    }


    /**
     * Creates the node renderer.
     * 
     * @returns {IRenderer<INodeViewModel>} 
     * @memberof SVGRenderersFactory
     */
    createNodeRenderer(): IRenderer<INodeViewModel> {
        return new SVGNodeRenderer();
    }

}