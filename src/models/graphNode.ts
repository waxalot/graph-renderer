import { Point, Size, Edge, GraphModel } from "./";


/**
 * A representation of a graph node.
 * 
 * @export
 * @class GraphNode
 */
export class GraphNode extends GraphModel {

    /**
     * The item's position.
     * 
     * @type {Point}
     * @memberof GraphItem
     */
    public position: Point;


    /**
     * An array with all connections of the node's instance.
     * 
     * @private
     * @type {Array<Edge>}
     * @memberof GraphNode
     */
    private connections: Array<Edge>;


    /**
     * Creates an instance of GraphNode.
     *
     * @param {Point} position 
     * @param {Size} [size] 
     * @memberof GraphNode
     */
    public constructor(position: Point, size?: Size) {
        super(size);

        this.position = position;

        this.connections = new Array<Edge>();
    }


    /**
     * Adds a new edge to the given node.
     * 
     * @param {GraphNode} targetNode 
     * @memberof GraphNode
     */
    public addConnection(targetNode: GraphNode): void {
        let newEdge = new Edge(this, targetNode);
        this.connections.push(newEdge);
    }


    /**
     * Returns an array with all node connections.
     * 
     * @returns {Array<Edge>} 
     * @memberof GraphNode
     */
    public getConnections(): Array<Edge> {
        // Use concat to copy the array, so that the original array can't be changed.
        return new Array<Edge>().concat(this.connections);
    }

}