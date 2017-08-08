import { IEdgeViewModel } from "./";
import { VisualGraphNode, Point, IOrthogonalEdgeRouter } from "../models";


/**
 * This interface describes an edge view-model for an orthogonal edge.
 * 
 * @export
 * @interface IOrthogonalEdgeViewModel
 * @extends {IEdgeViewModel<T>}
 * @template T 
 */
export interface IOrthogonalEdgeViewModel<T extends VisualGraphNode, EdgeRouterType extends IOrthogonalEdgeRouter> extends IEdgeViewModel<T, EdgeRouterType> {

    /**
     * An array with all (start, end, intermediate) points.
     * 
     * @type {Array<Point>}
     * @memberof IEdgeViewModel
     */
    points: Array<Point>;

}