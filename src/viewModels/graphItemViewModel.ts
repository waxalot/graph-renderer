import { IGraphItemViewModel } from "./interfaces/iGraphItemViewModel";
import { Utils } from "../utils";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { Point } from "../models/point";
import { Size } from "../models/size";
import { IGraphEvent } from "../events/interfaces/iGraphEvent";
import { IViewModelEventAdapter } from "./events/interfaces/iViewModelEventAdapter";
import { ViewModelEventAdapter } from "./events/viewModelEventAdapter";


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
     * @type {IViewModelEventAdapter<IVisualGraphItem, boolean, IGraphItemViewModel<IVisualGraphItem>>}
     * @memberof GraphItemViewModel
     */
    public selectionChangedEvent: IViewModelEventAdapter<IVisualGraphItem, boolean, IGraphItemViewModel<IVisualGraphItem>>;


    /**
     * Gets the model's position.
     * 
     * @readonly
     * @type {Point}
     * @memberof GraphItemViewModel
     */
    get position(): Point {
        return this.model.position;
    }


    /**
     * Gets the model's size.
     * 
     * @readonly
     * @type {Size}
     * @memberof GraphItemViewModel
     */
    get size(): Size {
        return this.model.size;
    }


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
        this.selectionChangedEvent = new ViewModelEventAdapter<IVisualGraphItem, boolean, IGraphItemViewModel<IVisualGraphItem>>(this, this.model.selectionChangedEvent);
    }

}