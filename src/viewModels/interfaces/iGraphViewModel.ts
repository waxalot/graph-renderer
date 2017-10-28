import { IGraphItemViewModel } from "./iGraphItemViewModel";
import { IVisualGraph } from "../../interfaces/iVisualGraph";
import { IGraphNodeViewModel } from "./iGraphNodeViewModel";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IGraphItemViewModel<IVisualGraph>}
 * @template TNodeViewModel 
 */
export interface IGraphViewModel extends IGraphItemViewModel<IVisualGraph> {

    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<IGraphNodeViewModel>}
     * @memberof IGraphViewModel
     */
    nodes: Array<IGraphNodeViewModel>;

}