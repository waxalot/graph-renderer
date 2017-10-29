import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { Point } from "../../models/point";
import { Size } from "../../models/size";
import { IGraphEvent } from "../../events/interfaces/iGraphEvent";
import { IViewModelEventAdapter } from "../events/interfaces/iViewModelEventAdapter";


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
     * The selection changed event.
     * 
     * @type {IGraphEvent<IVisualGraphItem, boolean>}
     * @memberof IGraphItemViewModel
     */
    selectionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, boolean, IGraphItemViewModel<IVisualGraphItem>>;


    /**
     * The position.
     * 
     * @type {Point}
     * @memberof IGraphItemViewModel
     */
    position: Point;


    /**
     * The size.
     * 
     * @type {Size}
     * @memberof IGraphItemViewModel
     */
    size: Size;

}