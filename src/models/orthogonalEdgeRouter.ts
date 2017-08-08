import { IGraphLayout, VisualGraph, IEdgeRouter, Point, VisualGraphNode } from "./";
import { IGraphViewModel } from "../viewModels";


/**
 * This class represents an edge router for orthogonal edges.
 * 
 * @export
 * @class OrthogonalEdgeRouter
 * @implements {IEdgeRouter}
 */
export class OrthogonalEdgeRouter implements IEdgeRouter {

    /**
     * Creates all required points for the visualization of a rectangular edge.
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {IGraphViewModel<VisualGraph>} graphViewModel 
     * @returns {Array<Point>} 
     * @memberof OrthogonalEdgeRouter
     */
    public createEdgePoints(startPoint: Point, endPoint: Point, graphViewModel: IGraphViewModel<VisualGraph, VisualGraphNode>): Array<Point> {
        let result = new Array<Point>();

        result.push(this.createRectangularIntermediatePoint(startPoint, endPoint));

        return result;
    }


    /**
     * Creates a rectangular intermediate point for two given points.
     * 
     * @private
     * @param {Point} point1 
     * @param {Point} point2 
     * @returns {Point} 
     * @memberof OrthogonalEdgeRouter
     */
    private createRectangularIntermediatePoint(point1: Point, point2: Point): Point {

        let result = new Point();

        result.x = point1.x + (point2.x - point1.x);
        result.y = point1.y;

        return result;
    }

}