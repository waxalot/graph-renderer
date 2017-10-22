import { IViewModel } from "./iViewModel";
import { VisualGraphNode } from "../../models/visualGraphNode";
import { IGraphNode } from "../../interfaces/iGraphNode";
import { Point } from "../../models/point";
import { Size } from "../../models/size";


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
     * @type {IGraphNode<T>}
     * @memberof IViewModel
     */
    model: IGraphNode<T>;


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