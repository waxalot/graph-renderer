import { VisualGraphNode } from "../../models/visualGraphNode";
import { VisualGraph } from "../../models/visualGraph";
import { IGraphRenderer } from "../../renderers/interfaces/iGraphRenderer";
import { INodeRenderer } from "../../renderers/interfaces/iNodeRenderer";
import { IEdgeRenderer } from "../../renderers/interfaces/iEdgeRenderer";
import { IOrthogonalEdgeRouter } from "../../interfaces/iOrthogonalEdgeRouter";
import { IEdgeViewModel } from "../../viewModels/interfaces/iEdgeViewModel";


/**
 * The abstract definition for renderers factories.
 * 
 * @export
 * @interface IRenderersFactory
 */
export interface IRenderersFactory {

    /**
     * Creates an instance of {IGraphRenderer<VisualGraph>}.
     * 
     * @returns {IGraphRenderer<VisualGraph>} 
     * @memberof IRenderersFactory
     */
    createGraphRenderer(): IGraphRenderer<VisualGraph, VisualGraphNode>;


    /**
     * Creates an instance of {INodeRenderer<VisualGraphNode>}.
     * 
     * @returns {INodeRenderer<VisualGraphNode>} 
     * @memberof IRenderersFactory
     */
    createNodeRenderer(): INodeRenderer<VisualGraphNode>;


    /**
     * Creates an instance of {IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>}.
     * 
     * @returns {IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>} 
     * @memberof IRenderersFactory
     */
    createOrthogonalEdgeRenderer(): IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>;

}