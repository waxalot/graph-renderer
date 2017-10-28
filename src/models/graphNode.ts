import { GraphItem } from "./graphItem";
import { IGraphNode } from "../interfaces/iGraphNode";
import { IItemList } from "../interfaces/iItemList";
import { IGraphEdge } from "../interfaces/iGraphEdge";
import { ItemList } from "./ItemList";


/**
 * A representation of a graph node.
 * 
 * @export
 * @class GraphNode
 * @extends {GraphItem}
 */
export class GraphNode extends GraphItem implements IGraphNode {

    /**
     * The node's value.
     * 
     * @type {*}
     * @memberof GraphNode
     */
    public value: any;


    /**
     * The list of the node's edges.
     * 
     * @type {IItemList<IGraphEdge>}
     * @memberof GraphNode
     */
    public edges: IItemList<IGraphEdge>;


    /**
     * Creates an instance of GraphNode.
     *
     * @memberof GraphNode
     */
    public constructor() {
        super();

        this.edges = new ItemList<IGraphEdge>();
    }


    /**
     * Adds the given edge to the node.
     * 
     * @param {IGraphEdge} edge 
     * @memberof GraphNode
     */
    public addEdge(edge: IGraphEdge): void {
        edge.from = this;
        this.edges.add(edge);
    }

}