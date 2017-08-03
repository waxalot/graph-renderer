import { VisualGraphNode, Point, Size } from "../models";
import { IViewModel } from "./";


/**
 * This interface describes a node view-model.
 * 
 * @export
 * @interface INodeViewModel
 * @extends {IViewModel<T>}
 * @template T 
 */
export interface INodeViewModel<T extends VisualGraphNode> extends IViewModel<T> {

    /**
     * The related model instance.
     * 
     * @type {T}
     * @memberof IViewModel
     */
    model: T;


    /**
     * The node's position.
     * 
     * @returns {Point} 
     * @memberof INodeViewModel
     */
    position: Point;


    /**
     * The node's size.
     * 
     * @type {Size}
     * @memberof INodeViewModel
     */
    size: Size;

}