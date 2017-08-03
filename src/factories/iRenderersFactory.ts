import { IRenderer, INodeRenderer, IEdgeRenderer, IGraphRenderer } from "../renderers";
import { INodeViewModel, IEdgeViewModel, IGraphViewModel } from "../viewModels";
import { VisualGraph, VisualGraphNode } from "../models";


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
    createGraphRenderer(): IGraphRenderer<VisualGraph>;


    /**
     * Creates an instance of {INodeRenderer<VisualGraphNode>}.
     * 
     * @returns {INodeRenderer<VisualGraphNode>} 
     * @memberof IRenderersFactory
     */
    createNodeRenderer(): INodeRenderer<VisualGraphNode>;


    /**
     * Creates an instance of {IEdgeRenderer<VisualGraphEdge>}.
     * 
     * @returns {IEdgeRenderer<VisualGraphEdge>} 
     * @memberof IRenderersFactory
     */
    createEdgeRenderer(): IEdgeRenderer<VisualGraphNode>;

}