import { IGraphItem } from "./iGraphItem";
import { IGraphNode } from "./iGraphNode";


/**
 * The interface for a graph edge.
 * 
 * @export
 * @interface IGraphEdge
 */
export interface IGraphEdge extends IGraphItem {

    /**
     * The cost of the edge.
     * 
     * @type {number}
     * @memberof IGraphEdge
     */
    cost: number;


    /**
     * The edge's start node.
     * 
     * @type {IGraphNode}
     * @memberof IGraphEdge
     */
    from: IGraphNode;


    /**
     * The edge's end node.
     * 
     * @type {IGraphNode}
     * @memberof IGraphEdge
     */
    to: IGraphNode;

}