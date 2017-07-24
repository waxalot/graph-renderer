import { Point, Size } from "./";
import { Connection } from "./connection";


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
     * The node's size.
     * 
     * @type {Size}
     * @memberof GraphNode
     */
    public size: Size;


    /**
     * An array with all connections of the node's instance.
     * 
     * @type {Array<Connection>}
     * @memberof GraphNode
     */
    public connections: Array<Connection>;


    /**
     * Creates an instance of GraphNode.
     *
     * @param {Point} position 
     * @param {Size} [size] 
     * @memberof GraphNode
     */
    public constructor(position: Point, size?: Size) {
        this.position = position;

        this.size = size;
        if (!this.size) {
            this.size = new Size();
        }

        this.connections = new Array<Connection>();
    }


    /**
     * Adds a new connection to the given node.
     * 
     * @param {GraphNode} targetNode 
     * @memberof GraphNode
     */
    public addConnection(targetNode: GraphNode): void {
        let newConnection = new Connection(this, targetNode);
        this.connections.push(newConnection);
    }

}