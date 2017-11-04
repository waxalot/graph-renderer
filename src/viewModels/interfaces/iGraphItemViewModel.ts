import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { Point } from "../../models/point";
import { Size } from "../../models/size";
import { IViewModelEventAdapter } from "../events/interfaces/iViewModelEventAdapter";
import { ChangedEventValuePair } from "../../models/changedEventValues";


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
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<boolean>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof IGraphItemViewModel
     */
    selectionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<boolean>, IGraphItemViewModel<IVisualGraphItem>>;


    /**
     * The position changed event.
     * 
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Point>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof IGraphItemViewModel
     */
    positionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Point>, IGraphItemViewModel<IVisualGraphItem>>;


    /**
     * The size changed event.
     * 
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Size>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof IGraphItemViewModel
     */
    sizeChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Size>, IGraphItemViewModel<IVisualGraphItem>>;

}