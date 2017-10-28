import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { Point } from "../../models/point";
import { Size } from "../../models/size";


/**
 * This interface describes a graph item view-model.
 * 
 * @export
 * @interface IGraphItemViewModel
 * @template TModel 
 */
export interface IGraphItemViewModel<TModel extends IVisualGraphItem> {

    /**
     * The graph item's identifier.
     * 
     * @type {string}
     * @memberof IGraphItemViewModel
     */
    guid: string;


    /**
     * The related model.
     * 
     * @type {TModel}
     * @memberof IGraphItemViewModel
     */
    model: TModel


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

}