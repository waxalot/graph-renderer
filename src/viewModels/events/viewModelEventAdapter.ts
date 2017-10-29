import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { IGraphItemViewModel } from "../interfaces/iGraphItemViewModel";
import { IViewModelEventAdapter } from "./interfaces/iViewModelEventAdapter";
import { IGraphEvent } from "../../events/interfaces/iGraphEvent";
import { Utils } from "../../utils";
import { IGraphEventListener } from "../../events/interfaces/iGraphEventListener";


/**
 * An adapter class which can connect model events to view-model events.
 * 
 * @export
 * @class ViewModelEventAdapter
 */
export class ViewModelEventAdapter<TModelSource extends IVisualGraphItem, TModelValue, TViewModelSource extends IGraphItemViewModel<TModelSource>> implements IViewModelEventAdapter<TModelSource, TModelValue, TViewModelSource> {

    /**
     * The model event.
     * 
     * @private
     * @type {IGraphEvent<TModelSource, TModelValue>}
     * @memberof ViewModelEventAdapter
     */
    private modelEvent: IGraphEvent<TModelSource, TModelValue>;


    /**
     * The view-model.
     * 
     * @private
     * @type {TViewModelSource}
     * @memberof ViewModelEventAdapter
     */
    private viewModel: TViewModelSource;


    /**
     * Creates an instance of ViewModelEventAdapter.
     *
     * @param {TViewModelSource} viewModel 
     * @param {IGraphEvent<TModelSource, TModelValue>} modelEvent 
     * @memberof ViewModelEventAdapter
     */
    public constructor(viewModel: TViewModelSource, modelEvent: IGraphEvent<TModelSource, TModelValue>) {
        if (!viewModel) {
            Utils.throwReferenceError('viewModel');
        } else if (!modelEvent) {
            Utils.throwReferenceError('modelEvent');
        }

        this.viewModel = viewModel;
        this.modelEvent = modelEvent;
    }


    /**
     * Adds a listener to the event.
     * 
     * @param {IGraphEventListener<TViewModelSource, TModelValue>} listener 
     * @memberof ViewModelEventAdapter
     */
    public addEventListener(listener: IGraphEventListener<TViewModelSource, TModelValue>): void {

        // Create the new event listener, which delegates the invocation to the model event listener.
        let viewModelEventListener: IGraphEventListener<TModelSource, TModelValue> = (source: TModelSource, value: TModelValue): void => {
            listener(this.viewModel, value);
        }

        this.modelEvent.addEventListener(viewModelEventListener);
    }

}