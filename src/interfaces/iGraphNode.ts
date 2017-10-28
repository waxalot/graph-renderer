import { IGraphItem } from "./iGraphItem";
import { IItemList } from "./iItemList";
import { IGraphEdge } from "./iGraphEdge";


/**
 * The interface for a graph node.
 * 
 * @export
 * @interface IGraphNode
 */
export interface IGraphNode extends IGraphItem {

    /**
     * The node's value.
     * 
     * @type {*}
     * @memberof IGraphNode
     */
    value: any;


    /**
     * The list of the node's edges.
     * 
     * @type {IItemList<IGraphEdge>}
     * @memberof IGraphNode
     */
    edges: IItemList<IGraphEdge>;


    /**
     * Adds the given edge to the node.
     * 
     * @param {IGraphEdge} edge 
     * @memberof IGraphNode
     */
    addEdge(edge: IGraphEdge): void;

}