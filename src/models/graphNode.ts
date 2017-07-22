import { Point } from "./point";


/**
 * A representation of a graph node.
 * 
 * @export
 * @class GraphNode
 */
export class GraphNode {

    /**
     * The node's position.
     * 
     * @type {Point}
     * @memberof GraphNode
     */
    public position: Point;


    /**
     * An array of all connected nodes.
     * 
     * @type {Array<GraphNode>}
     * @memberof GraphNode
     */
    public connections: Array<GraphNode>;


    /**
     * Creates an instance of GraphNode.
     *
     * @param {Point} position 
     * @memberof GraphNode
     */
    public constructor(position: Point) {
        this.position = position;
        this.connections = new Array<GraphNode>();
    }


    /**
     * Adds a new connection to the given node.
     * 
     * @param {GraphNode} node 
     * @memberof GraphNode
     */
    public addConnection(node: GraphNode): void {
        this.connections.push(node);
    }

}