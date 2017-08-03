import { IViewModelsFactory } from "./";
import { IGraphViewModel, SVGGraphViewModel, IEdgeRouter } from "../viewModels";
import { Graph, VisualGraph } from "../models";


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
    public createGraphViewModel<TNode>(graph: Graph<TNode>, edgeRouter: IEdgeRouter): IGraphViewModel<VisualGraph> {
        let graphVM = new SVGGraphViewModel(edgeRouter);
        //graphVM.init(graph);
        return graphVM;
    }

}