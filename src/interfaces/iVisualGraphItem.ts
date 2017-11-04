import { Point } from "../models/point";
import { Size } from "../models/size";
import { IGraphItem } from "./iGraphItem";
import { ObservableProperty } from "../models/observableProperty";


/**
 * This interface describes visual graph items.
 * 
 * @export
 * @interface IVisualGraphItem
 */
export interface IVisualGraphItem extends IGraphItem {

    /**
     * The position.
     * 
     * @type {ObservableProperty<IVisualGraphItem, Point>}
     * @memberof IVisualGraphItem
     */
    position: ObservableProperty<IVisualGraphItem, Point>;


    /**
     * The size.
     * 
     * @type {ObservableProperty<IVisualGraphItem, Size>}
     * @memberof IVisualGraphItem
     */
    size: ObservableProperty<IVisualGraphItem, Size>;


    /**
     * Determines whether this instance is selected.
     * 
     * @type {ObservableProperty<IVisualGraphItem, boolean>}
     * @memberof IVisualGraphItem
     */
    isSelected: ObservableProperty<IVisualGraphItem, boolean>;

}