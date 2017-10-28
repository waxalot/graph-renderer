import { IGraphItemViewModel } from "./interfaces/iGraphItemViewModel";
import { Utils } from "../utils";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { Point } from "../models/point";
import { Size } from "../models/size";


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
    }

}