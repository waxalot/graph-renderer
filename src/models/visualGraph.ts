import { VisualGraphNode } from "./visualGraphNode";
import { Graph } from "./graph";
import { VisualGraphItem } from "./visualGraphItem";
import { IVisualGraph } from "../interfaces/iVisualGraph";
import { IGraph } from "../interfaces/iGraph";
import { IVisualGraphNode } from "../interfaces/iVisualGraphNode";
import { IItemList } from "../interfaces/iItemList";
import { ItemList } from "./ItemList";


/**
 * The implementation of a visual graph.
 * 
 * @export
 * @class VisualGraph
 */
export class VisualGraph extends VisualGraphItem implements IVisualGraph {

    /**
     * A list of all visual graph nodes.
     * 
     * @type {IItemList<IVisualGraphNode>}
     * @memberof VisualGraph
     */
    public nodes: IItemList<IVisualGraphNode>;


    /**
     * The related graph.
     * 
     * @type {IGraph}
     * @memberof VisualGraph
     */
    public graph: IGraph;


    /**
     * Creates an instance of VisualGraph.
     *
     * @memberof VisualGraph
     */
    public constructor() {
        super();

        this.nodes = new ItemList<IVisualGraphNode>();
    }


    /**
     * Handles the selection intent of a node.
     * 
     * @param {boolean} ctrlKey 
     * @memberof VisualGraph
     */
    public handleGraphNodeSelection(node: IVisualGraphNode, ctrlKey: boolean): void {
        if (!node) {
            return;
        }

        if (ctrlKey) {
            node.isSelected = !node.isSelected;
        } else {
            this.deselectAllNodes();

            node.isSelected = true;
        }
    }


    /**
     * Deselects all graph nodes.
     * 
     * @returns {void} 
     * @memberof VisualGraph
     */
    public deselectAllNodes(): void {
        if (!this.nodes) {
            return;
        }

        this.nodes.forEach((node) => {
            node.isSelected = false;
        });
    }

}