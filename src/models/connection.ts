import { GraphNode } from "./";


/**
 * A representation of a connection between two nodes.
 * 
 * @export
 * @class Connection
 */
export class Connection {

    /**
     * The source node of the connection.
     * 
     * @private
     * @type {GraphNode}
     * @memberof Connection
     */
    private sourceNode: GraphNode;


    /**
     * The target node of the connection.
     * 
     * @private
     * @type {GraphNode}
     * @memberof Connection
     */
    private targetNode: GraphNode;


    /**
     * Creates an instance of Connection.
     *
     * @param {GraphNode} sourceNode 
     * @param {GraphNode} targetNode 
     * @memberof Connection
     */
    public constructor(sourceNode: GraphNode, targetNode: GraphNode) {
        if (!sourceNode) {
            throw new ReferenceError('The argument "sourceNode" is null or undefined.');
        } else if (!targetNode) {
            throw new ReferenceError('The argument "targetNode" is null or undefined.');
        }

        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
    }

}