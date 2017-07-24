import { GraphNode } from "./";


/**
 * A representation of a graph.
 * 
 * @export
 * @class Graph
 */
export class Graph {

    /**
     * A collection of all graph nodes.
     * 
     * @private
     * @type {Array<GraphNode>}
     * @memberof Graph
     */
    private nodes: Array<GraphNode>;


    /**
     * Creates an instance of Graph.
     *
     * @memberof Graph
     */
    public constructor() {
        this.nodes = new Array<GraphNode>();
    }


    /**
     * Adds a given node to the graph.
     * 
     * @param {GraphNode} node 
     * @memberof Graph
     */
    public addNode(node: GraphNode): void {
        this.nodes.push(node);
    }


    /**
     * Returns an array with all graph nodes.
     * 
     * @returns {Array<GraphNode>} 
     * @memberof Graph
     */
    public getNodes(): Array<GraphNode> {
        // Use concat to copy the array, so that the original array can't be changed.
        return new Array<GraphNode>().concat(this.nodes);
    }

}