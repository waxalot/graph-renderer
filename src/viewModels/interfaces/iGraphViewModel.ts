import { IViewModel } from "./iViewModel";
import { VisualGraphNode } from "../../models/visualGraphNode";
import { VisualGraph } from "../../models/visualGraph";
import { Graph } from "../../models/graph";
import { INodeViewModel } from "./iNodeViewModel";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel<T>}
 * @template T 
 * @template TNode 
 */
export interface IGraphViewModel<T extends VisualGraph, TNode extends VisualGraphNode> extends IViewModel<T> {

    /**
     * The related model instance.
     * 
     * @type {Graph<TNode>}
     * @memberof IViewModel
     */
    model: Graph<TNode>;


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<INodeViewModel<TNode>>}
     * @memberof IGraphViewModel
     */
    nodes: Array<INodeViewModel<TNode>>;

}