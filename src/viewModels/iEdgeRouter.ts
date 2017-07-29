import { Point, Graph } from "../models";
import { IGraphViewModel } from "./";


/**
 * This interface describes an edge routing algorithm.
 * 
 * @export
 * @interface IEdgeRouter
 */
export interface IEdgeRouter {

    /**
     * Creates all required points for the visualization of an edge.
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {IGraphViewModel} graphViewModel 
     * @returns {Array<Point>} 
     * @memberof IEdgeRouter
     */
    createEdgePoints(startPoint: Point, endPoint: Point, graphViewModel: IGraphViewModel): Array<Point>;
    
}