import { VisualGraph } from "./";


/**
 * This interface describes a visual graph layout.
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