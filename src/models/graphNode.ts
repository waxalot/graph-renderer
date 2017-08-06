import { GraphItem, NodeList, INodeList } from "./";


/**
 * A representation of a graph node.
 * 
 * @export
 * @class GraphNode
 * @extends {GraphItem}
 * @template T 
 */
export class GraphNode<T> extends GraphItem {

    /**
     * The node's value.
     * 
     * @type {T}
     * @memberof GraphNode
     */
    public value: T;


    /**
     * The costs of the node.
     * 
     * @public
     * @type {Array<number>}
     * @memberof GraphNode
     */
    public costs: Array<number>;


    /**
     * The node list with all neighbor nodes.
     * 
     * @public
     * @type {INodeList<T>}
     * @memberof GraphNode
     */
    public neighbors: INodeList<T>;


    /**
     * Creates an instance of GraphNode.
     *
     * @memberof GraphNode
     */
    public constructor() {
        super();

        this.costs = new Array<number>();
        this.neighbors = new NodeList<T>();
    }

}