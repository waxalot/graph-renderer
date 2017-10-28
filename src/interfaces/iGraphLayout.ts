import { VisualGraph } from "../models/visualGraph";


/**
 * The interface for a graph layout.
 * 
 * @export
 * @interface IGraphLayout
 */
export interface IGraphLayout {

    /**
     * Layouts the given visual graph.
     * 
     * @param {VisualGraph} graph 
     * @memberof IGraphLayout
     */
    layout(graph: VisualGraph): VisualGraph;

}