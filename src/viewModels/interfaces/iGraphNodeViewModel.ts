import { IVisualGraphNode } from "../../interfaces/iVisualGraphNode";
import { IGraphItemViewModel } from "./iGraphItemViewModel";
import { IGraphEvent } from "../../events/interfaces/iGraphEvent";


/**
 * This interface describes a graph node view-model.
 * 
 * @export
 * @interface IGraphNodeViewModel
 * @extends {IGraphItemViewModel<IVisualGraphNode>}
 */
export interface IGraphNodeViewModel extends IGraphItemViewModel<IVisualGraphNode> {

    /**
     * The selection changed event.
     * 
     * @type {IGraphEvent<IGraphNodeViewModel, boolean>}
     * @memberof IGraphNodeViewModel
     */
    selectionChangedEvent: IGraphEvent<IGraphNodeViewModel, boolean>;

}