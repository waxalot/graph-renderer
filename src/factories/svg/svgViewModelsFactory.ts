import { IViewModelsFactory } from "../interfaces/iViewModelsFactory";
import { IVisualGraph } from "../../interfaces/iVisualGraph";
import { SVGGraphViewModel } from "../../viewModels/svg/svgGraphViewModel";
import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";


/**
 * The SVG based representation of a view-models factory.
 * 
 * @export
 * @class SVGViewModelsFactory
 * @implements {IViewModelsFactory}
 */
export class SVGViewModelsFactory implements IViewModelsFactory {

    /**
     * Creates the graph view-model.
     * 
     * @param {IVisualGraph} graph 
     * @returns {IGraphViewModel} 
     * @memberof SVGViewModelsFactory
     */
    public createGraphViewModel(graph: IVisualGraph): IGraphViewModel {
        let graphVM = new SVGGraphViewModel(graph);
        return graphVM;
    }

}