import { IVisualGraphItem } from "./iVisualGraphItem";
import { IGraph } from "./iGraph";
import { IVisualGraphNode } from "./iVisualGraphNode";
import { IItemList } from "./iItemList";


/**
 * The interface for a visual graph.
 * 
 * @export
 * @interface IVisualGraph
 */
export interface IVisualGraph extends IVisualGraphItem {

    /**
     * The related graph.
     * 
     * @type {IGraph}
     * @memberof IVisualGraph
     */
    graph: IGraph;


    /**
     * A list of all visual graph nodes.
     * 
     * @type {IItemList<IVisualGraphNode>}
     * @memberof IVisualGraph
     */
    nodes: IItemList<IVisualGraphNode>;


    /**
     * Handles the selection intent of a node.
     * 
     * @param {IVisualGraphNode} node 
     * @param {boolean} ctrlKey 
     * @memberof IVisualGraph
     */
    handleGraphNodeSelection(node: IVisualGraphNode, ctrlKey: boolean): void;

}