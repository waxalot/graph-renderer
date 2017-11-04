import { IGraphItemViewModel } from "./interfaces/iGraphItemViewModel";
import { Utils } from "../utils";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { Point } from "../models/point";
import { Size } from "../models/size";
import { IGraphEvent } from "../events/interfaces/iGraphEvent";
import { IViewModelEventAdapter } from "./events/interfaces/iViewModelEventAdapter";
import { ViewModelEventAdapter } from "./events/viewModelEventAdapter";
import { ChangedEventValuePair } from "../models/changedEventValues";


/**
 * The abstract base class for all graph item view-models.
 * 
 * @export
 * @abstract
 * @class GraphItemViewModel
 * @implements {IGraphItemViewModel}
 * @template TModel 
 */
export abstract class GraphItemViewModel<TModel extends IVisualGraphItem> implements IGraphItemViewModel<TModel> {

    /**
     * Gets the model's identifier.
     * 
     * @type {string}
     * @memberof GraphItemViewModel
     */
    get guid(): string {
        return this.model.guid;
    }


    /**
     * The related model.
     * 
     * @private
     * @type {TModel}
     * @memberof GraphItemViewModel
     */
    public readonly model: TModel;

    /**
     * The selection changed event.
     * 
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<boolean>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof GraphItemViewModel
     */
    public selectionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<boolean>, IGraphItemViewModel<IVisualGraphItem>>;

    /**
     * The position changed event.
     * 
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Point>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof GraphItemViewModel
     */
    public positionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Point>, IGraphItemViewModel<IVisualGraphItem>>;

    /**
     * The size changed event. 
     * 
     * @type {IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Size>, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof GraphItemViewModel
     */
    public sizeChangedEvent: IViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Size>, IGraphItemViewModel<IVisualGraphItem>>;


    /**
     * Creates an instance of GraphItemViewModel.
     * 
     * @param {TModel} model 
     * @memberof GraphItemViewModel
     */
    public constructor(model: TModel) {
        if (!model) {
            Utils.throwReferenceError('model');
        }

        this.model = model;
        this.selectionChangedEvent = new ViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<boolean>, IGraphItemViewModel<IVisualGraphItem>>(this, this.model.isSelected.valueChangedEvent);
        this.positionChangedEvent = new ViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Point>, IGraphItemViewModel<IVisualGraphItem>>(this, this.model.position.valueChangedEvent);
        this.sizeChangedEvent = new ViewModelEventAdapter<IVisualGraphItem, ChangedEventValuePair<Size>, IGraphItemViewModel<IVisualGraphItem>>(this, this.model.size.valueChangedEvent);
    }

}