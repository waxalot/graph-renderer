import { IGraphItem } from "./iGraphItem";
import { INodeList } from "./iNodeList";


/**
 * The interface for a graph node.
 * 
 * @export
 * @interface IGraphNode
 */
export interface IGraphNode<T> extends IGraphItem {

    /**
     * The node's value.
     * 
     * @type {T}
     * @memberof GraphNode
     */
    value: T;


    /**
     * The costs of the node.
     * 
     * @public
     * @type {Array<number>}
     * @memberof GraphNode
     */
    costs: Array<number>;


    /**
     * The node list with all neighbor nodes.
     * 
     * @public
     * @type {INodeList<T>}
     * @memberof GraphNode
     */
    neighbors: INodeList<T>;

}