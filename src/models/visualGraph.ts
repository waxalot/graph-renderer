import { VisualGraphNode } from "./visualGraphNode";


/**
 * The visual representation of a graph.
 * 
 * @export
 * @class VisualGraph
 */
export class VisualGraph {

    /**
     * The visual graph nodes.
     * 
     * @type {Array<VisualGraphNode>}
     * @memberof VisualGraph
     */
    public nodes: Array<VisualGraphNode>;


    /**
     * Creates an instance of VisualGraph.
     *
     * @memberof VisualGraph
     */
    public constructor() {
        this.nodes = new Array<VisualGraphNode>();
    }

}