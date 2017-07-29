import { IEdgeRouter, IViewModel } from "./";
import { Point } from "../models/index";


/**
 * This interface describes an edge view-model.
 * 
 * @export
 * @interface IEdgeViewModel
 * @extends {IViewModel}
 */
export interface IEdgeViewModel extends IViewModel {

    /**
     * An array with all (start, end, intermediate) points.
     * 
     * @type {Array<Point>}
     * @memberof IEdgeViewModel
     */
    points: Array<Point>;


    /**
     * Sets the edge router.
     * 
     * @param {IEdgeRouter} edgeRouter 
     * @memberof IEdgeViewModel
     */
    setEdgeRouter(edgeRouter: IEdgeRouter): void;

}