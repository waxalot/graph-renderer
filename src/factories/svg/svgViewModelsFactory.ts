import { IViewModelsFactory } from "../interfaces/iViewModelsFactory";
import { VisualGraphNode } from "../../models/visualGraphNode";
import { Graph } from "../../models/graph";
import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";
import { VisualGraph } from "../../models/visualGraph";
import { SVGGraphViewModel } from "../../viewModels/svg/svgGraphViewModel";


/**
 * The SVG based representation of a view-models factory.
 * 
 * @export
 * @class SVGViewModelsFactory
 * @implements {IViewModelsFactory}
 */
export class SVGViewModelsFactory implements IViewModelsFactory {


    /**
     * Creates an instance of {IGraphViewModel<VisualGraph, TNode>}.
     * 
     * @template TNode 
     * @param {Graph<TNode>} graph 
     * @returns {IGraphViewModel<VisualGraph, TNode>} 
     * @memberof SVGViewModelsFactory
     */
    public createGraphViewModel<TNode extends VisualGraphNode>(graph: Graph<TNode>): IGraphViewModel<VisualGraph, TNode> {
        let graphVM = new SVGGraphViewModel(graph);
        return graphVM;
    }

}