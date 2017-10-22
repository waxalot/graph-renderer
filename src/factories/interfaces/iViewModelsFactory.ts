import { VisualGraphNode } from "../../models/visualGraphNode";
import { Graph } from "../../models/graph";
import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";
import { VisualGraph } from "../../models/visualGraph";


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
     * @returns {IGraphViewModel<VisualGraph, TNode>} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel<TNode extends VisualGraphNode>(graph: Graph<TNode>): IGraphViewModel<VisualGraph, TNode>;

}