import { IGraphViewModel } from "../viewModels";
import { Graph } from "../models";


/**
 * The abstract definition for view-models factories.
 * 
 * @export
 * @interface IViewModelsFactory
 */
export interface IViewModelsFactory {

    /**
     * Creates an instance of {IGraphViewModel}.
     * 
     * @param {Graph} graph 
     * @returns {IGraphViewModel} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel(graph: Graph): IGraphViewModel;

}