import { Graph } from "../models/graph";


/**
 * This interface describes a graph renderer.
 * 
 * @export
 * @interface IGraphRenderer
 */
export interface IGraphRenderer {

    /**
     * Renders the graph.
     * 
     * @memberof IGraphRenderer
     */
    render(graph: Graph): void;

}