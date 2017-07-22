import { GraphNode } from "./graphNode";
import { Point } from "./point";


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
     * Adds a new connection between to given nodes.
     * 
     * @param {GraphNode} sourceNode 
     * @param {GraphNode} targetNode 
     * @memberof Graph
     */
    public addConnection(sourceNode: GraphNode, targetNode: GraphNode): void {
        sourceNode.addConnection(targetNode);
    }

}