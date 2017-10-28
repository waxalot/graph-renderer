import { IVisualGraphItem } from "./iVisualGraphItem";
import { IGraphNode } from "./iGraphNode";
import { IVisualGraphEdge } from "./iVisualGraphEdge";
import { IItemList } from "./iItemList";


/**
 * The interface for a visual graph node.
 * 
 * @export
 * @interface IVisualGraphNode
 */
export interface IVisualGraphNode extends IVisualGraphItem {

    /**
     * The related graph node.
     * 
     * @type {IGraphNode}
     * @memberof IVisualGraphNode
     */
    node: IGraphNode;


    /**
     * A list of all visual graph edges.
     * 
     * @type {IItemList<IVisualGraphEdge>}
     * @memberof IVisualGraphNode
     */
    edges: IItemList<IVisualGraphEdge>;

}