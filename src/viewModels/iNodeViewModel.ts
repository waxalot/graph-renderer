import { Size, Point } from "../models";
import { IViewModel } from "./";


/**
 * This interface describes a node view-model.
 * 
 * @export
 * @interface INodeViewModel
 * @extends {IViewModel}
 */
export interface INodeViewModel extends IViewModel {

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
     * @returns {Size} 
     * @memberof INodeViewModel
     */
    size: Size;

}