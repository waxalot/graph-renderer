import { IViewModel } from "./";
import { Size } from "../models";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel}
 */
export interface IGraphViewModel extends IViewModel {

    /**
     * The graph's size.
     * 
     * @returns {Size} 
     * @memberof IGraphViewModel
     */
    size: Size;

}