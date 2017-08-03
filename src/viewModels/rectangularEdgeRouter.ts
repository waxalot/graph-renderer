import { IEdgeRouter, IGraphViewModel } from "./";
import { Point, VisualGraph, VisualGraphNode } from "../models";


/**
 * An implementation of {IEdgeRouter} to create points for rectangular edges.
 * 
 * @export
 * @class RectangularEdgeRouter
 * @implements {IEdgeRouter}
 */
export class RectangularEdgeRouter implements IEdgeRouter {

    /**
     * Creates all required points for the visualization of a rectangular edge.
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {IGraphViewModel<VisualGraph>} graphViewModel 
     * @returns {Array<Point>} 
     * @memberof RectangularEdgeRouter
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
     * @memberof SVGEdgeViewModel
     */
    private createRectangularIntermediatePoint(point1: Point, point2: Point): Point {

        let result = new Point();

        result.x = point1.x + (point2.x - point1.x);
        result.y = point1.y;

        return result;
    }

}