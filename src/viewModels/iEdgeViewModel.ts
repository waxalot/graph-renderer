import { IViewModel } from "./";
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
     * The start point of the edge.
     * 
     * @type {Point}
     * @memberof IEdgeViewModel
     */
    startPoint: Point;


    /**
     * The end point of the edge.
     * 
     * @type {Point}
     * @memberof IEdgeViewModel
     */
    endPoint: Point;

}