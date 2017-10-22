import { IRenderersFactory } from "../interfaces/iRenderersFactory";
import { VisualGraph } from "../../models/visualGraph";
import { VisualGraphNode } from "../../models/visualGraphNode";
import { SVGGraphRenderer } from "../../renderers/svg/svgGraphRenderer";
import { SVGNodeRenderer } from "../../renderers/svg/svgNodeRenderer";
import { SVGOrthogonalEdgeRenderer } from "../../renderers/svg/svgOrthogonalEdgeRenderer";
import { OrthogonalEdgeRouter } from "../../models/orthogonalEdgeRouter";
import { SVGOrthogonalEdgeViewModel } from "../../viewModels/svg/svgOrthogonalEdgeViewModel";
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