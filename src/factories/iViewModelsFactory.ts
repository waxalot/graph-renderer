import { IGraphViewModel, IEdgeRouter } from "../viewModels";
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
     * @param {IEdgeRouter} edgeRouter 
     * @returns {IGraphViewModel} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel(graph: Graph, edgeRouter: IEdgeRouter): IGraphViewModel;

}