import { Point, VisualGraph, IEdgeRouter } from "./";


/**
 * This interface describes an edge routing algorithm for orthogonal edges.
 * 
 * @export
 * @interface IOrthogonalEdgeRouter
 * @extends {IEdgeRouter}
 */
export interface IOrthogonalEdgeRouter extends IEdgeRouter {

    /**
     * Creates all required points for the visualization of an edge.
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {IGraphViewModel<VisualGraph>} graphViewModel 
     * @returns {Array<Point>} 
     * @memberof IEdgeRouter
     */
    createEdgePoints(startPoint: Point, endPoint: Point, visualGraph: VisualGraph): Array<Point>;
    
}