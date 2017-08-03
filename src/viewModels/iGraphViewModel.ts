import { INodeViewModel, IViewModel } from "./";
import { VisualGraphNode, GraphNode, Graph, VisualGraph } from "../models";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel<T>}
 * @template T 
 */
export interface IGraphViewModel<T extends VisualGraph> extends IViewModel<T> {

    /**
     * The related model instance.
     * 
     * @type {T}
     * @memberof IViewModel
     */
    model: T;


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<INodeViewModel<VisualGraphNode>>}
     * @memberof IGraphViewModel
     */
    nodes: Array<INodeViewModel<VisualGraphNode>>;

}