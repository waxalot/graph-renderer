import { IRenderersFactory } from "./";
import { SVGGraphRenderer, SVGNodeRenderer, IGraphRenderer, INodeRenderer, SVGEdgeRenderer } from "../renderers";
import { IGraphViewModel, INodeViewModel, IEdgeViewModel } from "../viewModels";
import { VisualGraph, VisualGraphNode } from "../models";


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
     * @returns {IGraphRenderer<VisualGraph>} 
     * @memberof SVGRenderersFactory
     */
    public createGraphRenderer(): IGraphRenderer<VisualGraph> {
        let nodeRenderer = this.createNodeRenderer();
        let edgeRenderer = this.createEdgeRenderer();
        return new SVGGraphRenderer(nodeRenderer, edgeRenderer);
    }


    /**
     * Creates the node renderer.
     * 
     * @returns {SVGNodeRenderer<VisualGraphNode>} 
     * @memberof SVGRenderersFactory
     */
    public createNodeRenderer(): SVGNodeRenderer<VisualGraphNode> {
        return new SVGNodeRenderer();
    }


    /**
     * Creates the edge renderer.
     * 
     * @returns {SVGEdgeRenderer<VisualGraphNode>} 
     * @memberof SVGRenderersFactory
     */
    public createEdgeRenderer(): SVGEdgeRenderer<VisualGraphNode> {
        return new SVGEdgeRenderer();
    }

}