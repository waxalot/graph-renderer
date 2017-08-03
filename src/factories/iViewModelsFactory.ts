import { IGraphViewModel, IEdgeRouter } from "../viewModels";
import { Graph, VisualGraph, VisualGraphNode } from "../models";


/**
 * The abstract definition for view-models factories.
 * 
 * @export
 * @interface IViewModelsFactory
 */
export interface IViewModelsFactory {

    /**
     * Creates an instance of {IGraphViewModel<VisualGraph>}.
     * 
     * @template TNode 
     * @param {Graph<TNode>} graph 
     * @param {IEdgeRouter} edgeRouter 
     * @returns {IGraphViewModel<VisualGraph, TNode>} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel<TNode extends VisualGraphNode>(graph: Graph<TNode>, edgeRouter: IEdgeRouter): IGraphViewModel<VisualGraph, TNode>;

}