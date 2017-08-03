import { IEdgeRouter, IViewModel, INodeViewModel } from "./";
import { Point, VisualGraphNode } from "../models";


/**
 * This interface describes an edge view-model.
 * 
 * @export
 * @interface IEdgeViewModel
 * @extends {IViewModel<T>}
 * @template T 
 */
export interface IEdgeViewModel<T extends VisualGraphNode> extends IViewModel<T> {

    /**
     * The start node's view-model.
     * 
     * @type {INodeViewModel<T>}
     * @memberof IEdgeViewModel
     */
    startNodeViewModel: INodeViewModel<T>;


    /**
     * The end node's view-model
     * 
     * @type {INodeViewModel<T>}
     * @memberof IEdgeViewModel
     */
    endNodeViewModel: INodeViewModel<T>;


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
     * @param {IEdgeRouter<T>} edgeRouter 
     * @memberof IEdgeViewModel
     */
    setEdgeRouter(edgeRouter: IEdgeRouter): void;

}