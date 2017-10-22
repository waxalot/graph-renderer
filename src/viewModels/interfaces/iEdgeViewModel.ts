import { VisualGraphNode } from "../../models/visualGraphNode";
import { IEdgeRouter } from "../../interfaces/iEdgeRouter";
import { IViewModel } from "./iViewModel";
import { INodeViewModel } from "./iNodeViewModel";
import { IGraphViewModel } from "./iGraphViewModel";
import { VisualGraph } from "../../models/visualGraph";


/**
 * This interface describes an edge view-model.
 * 
 * @export
 * @interface IEdgeViewModel
 * @extends {IViewModel<T>}
 * @template T 
 * @template EdgeRouterType 
 */
export interface IEdgeViewModel<T extends VisualGraphNode, EdgeRouterType extends IEdgeRouter> extends IViewModel<T> {

    /**
     * The start node's view-model.
     * 
     * @type {INodeViewModel<T>}
     * @memberof IEdgeViewModel
     */
    startNodeViewModel: INodeViewModel<T>;


    /**
     * The end node's view-model
     * 
     * @type {INodeViewModel<T>}
     * @memberof IEdgeViewModel
     */
    endNodeViewModel: INodeViewModel<T>;


    /**
     * The edge router.
     * 
     * @type {EdgeRouterType}
     * @memberof IEdgeViewModel
     */
    edgeRouter: EdgeRouterType;


    /**
     * The graph's view-model.
     * 
     * @type {IGraphViewModel<VisualGraph, T>}
     * @memberof IEdgeViewModel
     */
    graphViewModel: IGraphViewModel<VisualGraph, T>;

}