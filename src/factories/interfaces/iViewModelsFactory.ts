import { IGraphNodeViewModel } from "../../viewModels/interfaces/iGraphNodeViewModel";
import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";
import { IVisualGraph } from "../../interfaces/iVisualGraph";


/**
 * The abstract definition for view-models factories.
 * 
 * @export
 * @interface IViewModelsFactory
 */
export interface IViewModelsFactory {

    /**
     * Creates an instance of {IGraphViewModel<TNodeViewModel>}.
     * 
     * @template TNodeViewModel 
     * @param {IVisualGraph} graph 
     * @returns {IGraphViewModel} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel<TNodeViewModel extends IGraphNodeViewModel>(graph: IVisualGraph): IGraphViewModel;

}