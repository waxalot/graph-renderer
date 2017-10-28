import { Point } from "../models/point";
import { Size } from "../models/size";
import { IGraphItem } from "./iGraphItem";
import { IGraphEvent } from "../events/interfaces/iGraphEvent";


/**
 * This interface describes visual graph items.
 * 
 * @export
 * @interface IVisualGraphItem
 */
export interface IVisualGraphItem extends IGraphItem {

    /**
     * The selection changed event.
     * 
     * @type {IGraphEvent<IVisualGraphItem, boolean>}
     * @memberof IVisualGraphItem
     */
    selectionChangedEvent: IGraphEvent<IVisualGraphItem, boolean>;

    
    /**
     * The position.
     * 
     * @type {Point}
     * @memberof IVisualGraphItem
     */
    position: Point;


    /**
     * The size.
     * 
     * @type {Size}
     * @memberof IVisualGraphItem
     */
    size: Size;


    /**
     * Determines whether this instance is selected.
     * 
     * @type {boolean}
     * @memberof IVisualGraphItem
     */
    isSelected: boolean;

}