import { Size } from "../models";


/**
 * This interface describes a view-model.
 * 
 * @export
 * @interface IViewModel
 */
export interface IViewModel {

    /**
     * Indicates whether the item is selected.
     * 
     * @type {boolean}
     * @memberof IViewModel
     */
    isSelected: boolean;


    /**
     * The node's size.
     * 
     * @returns {Size} 
     * @memberof INodeViewModel
     */
    size: Size;

}