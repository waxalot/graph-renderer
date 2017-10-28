import { IGraphItem } from "./iGraphItem";
import { IGraphNode } from "./iGraphNode";
import { IItemList } from "./iItemList";


/**
 * The interface for a graph.
 * 
 * @export
 * @interface IGraph
 */
export interface IGraph extends IGraphItem {

    /**
     * A list of all graph nodes.
     * 
     * @type {IItemList<IGraphNode>}
     * @memberof IGraph
     */
    nodes: IItemList<IGraphNode>;


    /**
     * Adds the given node to the graph.
     * 
     * @param {IGraphNode} node 
     * @memberof IGraph
     */
    addNode(node: IGraphNode): void;

}