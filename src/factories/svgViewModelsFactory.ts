import { IViewModelsFactory } from "./";
import { IGraphViewModel, SVGGraphViewModel } from "../viewModels";
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
     * @returns {IGraphViewModel} 
     * @memberof SVGViewModelsFactory
     */
    createGraphViewModel(graph: Graph): IGraphViewModel {
        return new SVGGraphViewModel(graph);
    }

}