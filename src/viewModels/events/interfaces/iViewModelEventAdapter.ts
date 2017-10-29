import { IVisualGraphItem } from "../../../interfaces/iVisualGraphItem";
import { IGraphEventListener } from "../../../events/interfaces/iGraphEventListener";
import { IGraphItemViewModel } from "../../interfaces/iGraphItemViewModel";

/**
 * An adapter class which can connect model events to view-model events.
 * 
 * @export
 * @class ViewModelEventAdapter
 */
export interface IViewModelEventAdapter<TModelSource extends IVisualGraphItem, TModelValue, TViewModelSource extends IGraphItemViewModel<TModelSource>> {

    addEventListener(listener: IGraphEventListener<TViewModelSource, TModelValue>): void;

}    