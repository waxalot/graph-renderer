import { IVisualGraphItem } from "../../../interfaces/iVisualGraphItem";
import { IGraphItemViewModel } from "../../interfaces/iGraphItemViewModel";


/**
 * This interface describes a SVG based graph item view-model.
 * 
 * @export
 * @interface ISVGGraphItemViewModel
 * @extends {IGraphItemViewModel<TModel>}
 * @template TModel 
 */
export interface ISVGGraphItemViewModel<TModel extends IVisualGraphItem> extends IGraphItemViewModel<TModel> {
}