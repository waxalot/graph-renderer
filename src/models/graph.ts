import { IGraphNode } from "../interfaces/iGraphNode";
import { GraphNode } from "./graphNode";
import { IGraph } from "../interfaces/iGraph";
import { Utils } from "../utils";
import { GraphItem } from "./graphItem";
import { IItemList } from "../interfaces/iItemList";
import { ItemList } from "./ItemList";


/**
 * A representation of a graph.
 * 
 * @export
 * @class Graph
 */
export class Graph extends GraphItem implements IGraph {

    /**
     * The graph's identifier.
     * 
     * @type {string}
     * @memberof Graph
     */
    public guid: string;


    /**
     * A list of all graph nodes.
     * 
     * @type {IItemList<IGraphNode>}
     * @memberof Graph
     */
    public nodes: IItemList<IGraphNode>;


    /**
     * Creates an instance of Graph.
     *
     * @memberof Graph
     */
    public constructor() {
        super();

        this.nodes = new ItemList<IGraphNode>();
    }


    /**
     * Adds the given node to the graph.
     * 
     * @param {TNode} value 
     * @returns {IGraphNode<TNode>} 
     * @memberof Graph
     */
    public addNode(node: IGraphNode): void {
        if (!node) {
            Utils.throwReferenceError('node');
        }

        this.nodes.add(node);
    }


    // /**
    //  * Determines whether the graph contains a node with the given guid.
    //  * 
    //  * @param {strig} guid
    //  * @returns {boolean} 
    //  * @memberof Graph
    //  */
    // public contains(guid: string): boolean {
    //     return this.nodes.findByGuid(guid) != null;
    // }


    // /**
    //  * Removes the node with the given guid from the graph.
    //  * 
    //  * @param {string} guid 
    //  * @returns {boolean} 
    //  * @memberof Graph
    //  */
    // public remove(guid: string): boolean {
    //     // First remove the node from the nodeset
    //     let nodeToRemove = this.nodes.findByGuid(guid);
    //     if (!nodeToRemove) {
    //         // Node was not found
    //         return false;
    //     }

    //     this.nodes.remove(nodeToRemove);

    //     // Try to remove all edges to this node
    //     let tempNode: IGraphNode<any>;
    //     this.nodes.forEach((tempNode) => {
    //         let index = tempNode.neighbors.indexOf(nodeToRemove);
    //         if (index > -1) {
    //             // Remove the reference to the node and associated cost
    //             tempNode.neighbors.removeAt(index);
    //             tempNode.costs.splice(index, 1);
    //         }
    //     });

    //     return true;
    // }

}