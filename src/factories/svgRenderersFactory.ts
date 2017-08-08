import { IRenderersFactory } from "./";
import { SVGGraphRenderer, SVGNodeRenderer, IGraphRenderer, INodeRenderer, SVGOrthogonalEdgeRenderer, IEdgeRenderer } from "../renderers";
import { IGraphViewModel, INodeViewModel, IEdgeViewModel, SVGOrthogonalEdgeViewModel } from "../viewModels";
import { VisualGraph, VisualGraphNode } from "../models";
import { OrthogonalEdgeRouter } from "../models/orthogonalEdgeRouter";


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
    public createGraphRenderer(): IGraphRenderer<VisualGraph, VisualGraphNode> {
        let nodeRenderer = this.createNodeRenderer();
        return new SVGGraphRenderer(nodeRenderer);
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
     * Creates the orthogonal edge renderer.
     * 
     * @returns {SVGOrthogonalEdgeRenderer<VisualGraphNode, OrthogonalEdgeRouter, SVGOrthogonalEdgeViewModel<VisualGraphNode, OrthogonalEdgeRouter>>} 
     * @memberof SVGRenderersFactory
     */
    public createOrthogonalEdgeRenderer(): SVGOrthogonalEdgeRenderer<VisualGraphNode, OrthogonalEdgeRouter, SVGOrthogonalEdgeViewModel<VisualGraphNode, OrthogonalEdgeRouter>> {
        return new SVGOrthogonalEdgeRenderer<VisualGraphNode, OrthogonalEdgeRouter, SVGOrthogonalEdgeViewModel<VisualGraphNode, OrthogonalEdgeRouter>>();
    }

}