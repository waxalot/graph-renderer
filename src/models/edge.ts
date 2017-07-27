import { GraphNode, GraphModel } from "./";


/**
 * A representation of an edge between two nodes.
 * 
 * @export
 * @class Edge
 */
export class Edge extends GraphModel {

    /**
     * The source node of the edge.
     * 
     * @public
     * @type {GraphNode}
     * @memberof Edge
     */
    public sourceNode: GraphNode;


    /**
     * The target node of the edge.
     * 
     * @public
     * @type {GraphNode}
     * @memberof Edge
     */
    public targetNode: GraphNode;


    /**
     * Creates an instance of Edge.
     *
     * @param {GraphNode} sourceNode 
     * @param {GraphNode} targetNode 
     * @memberof Edge
     */
    public constructor(sourceNode: GraphNode, targetNode: GraphNode) {
        super();

        if (!sourceNode) {
            throw new ReferenceError('The argument "sourceNode" is null or undefined.');
        } else if (!targetNode) {
            throw new ReferenceError('The argument "targetNode" is null or undefined.');
        }

        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
    }

}