import { VisualGraphItem } from "./visualGraphItem";
import { IVisualGraphNode } from "../interfaces/iVisualGraphNode";
import { IGraphEvent } from "../events/interfaces/iGraphEvent";
import { IVisualGraphEdge } from "../interfaces/iVisualGraphEdge";
import { IItemList } from "../interfaces/iItemList";
import { IGraphNode } from "../interfaces/iGraphNode";
import { ItemList } from "./ItemList";


/**
 * The implementation of a visual graph node.
 * 
 * @export
 * @class VisualGraphNode
 * @extends {VisualGraphItem}
 * @implements {IVisualGraphNode}
 */
export class VisualGraphNode extends VisualGraphItem implements IVisualGraphNode {

    /**
     * A list of all visual graph edges.
     * 
     * @type {IItemList<IVisualGraphEdge>}
     * @memberof VisualGraphNode
     */
    public edges: IItemList<IVisualGraphEdge>;


    /**
     * The related graph node.
     * 
     * @type {IGraphNode}
     * @memberof VisualGraphNode
     */
    public node: IGraphNode;


    /**
     * Creates an instance of VisualGraphNode.
     *
     * @memberof VisualGraphNode
     */
    public constructor() {
        super();

        this.edges = new ItemList<IVisualGraphEdge>();
    }

}