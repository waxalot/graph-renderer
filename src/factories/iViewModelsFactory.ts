import { IGraphViewModel, IEdgeRouter } from "../viewModels";
import { Graph, VisualGraph } from "../models";


/**
 * The abstract definition for view-models factories.
 * 
 * @export
 * @interface IViewModelsFactory
 */
export interface IViewModelsFactory {

    /**
     * Creates an instance of {IGraphViewModel<VisualGraph>} .
     * 
     * @param {Graph} graph 
     * @param {IEdgeRouter} edgeRouter 
     * @returns {IGraphViewModel<VisualGraph>} 
     * @memberof IViewModelsFactory
     */
    createGraphViewModel<T>(graph: Graph<T>, edgeRouter: IEdgeRouter): IGraphViewModel<VisualGraph>;

}