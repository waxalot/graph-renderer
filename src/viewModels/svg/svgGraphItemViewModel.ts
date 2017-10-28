import { IGraphItemViewModel } from "../interfaces/iGraphItemViewModel";
import { GraphItemViewModel } from "../graphItemViewModel";
import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { ISVGGraphItemViewModel } from "./interfaces/iSVGGraphItemViewModel";


/**
 * The base class of all SVG based graph item's view-models.
 * 
 * @export
 * @abstract
 * @class SVGGraphItemViewModel
 * @extends {GraphItemViewModel<TModel>}
 * @implements {ISVGGraphItemViewModel<TModel>}
 * @template TModel 
 */
export abstract class SVGGraphItemViewModel<TModel extends IVisualGraphItem> extends GraphItemViewModel<TModel> implements ISVGGraphItemViewModel<TModel> {

    /**
     * Initializes the view-model instance.
     * 
     * @protected
     * @abstract
     * @memberof SVGGraphItemViewModel
     */
    protected abstract initViewModel(): void;

}