import { IViewModelsFactory } from "./";
import { IGraphViewModel, SVGGraphViewModel, IEdgeRouter } from "../viewModels";
import { Graph } from "../models";


/**
 * The SVG based representation of a view-models factory.
 * 
 * @export
 * @class SVGViewModelsFactory
 * @implements {IViewModelsFactory}
 */
export class SVGViewModelsFactory implements IViewModelsFactory {

    /**
     * Creates an instance of {IGraphViewModel}.
     * 
     * @param {Graph} graph 
     * @param {IEdgeRouter} edgeRouter 
     * @returns {IGraphViewModel} 
     * @memberof SVGViewModelsFactory
     */
    public createGraphViewModel(graph: Graph, edgeRouter: IEdgeRouter): IGraphViewModel {
        let graphVM = new SVGGraphViewModel(edgeRouter);
        graphVM.init(graph);
        return graphVM;
    }

}