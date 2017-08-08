import { IViewModelsFactory } from "./";
import { IGraphViewModel, SVGGraphViewModel } from "../viewModels";
import { Graph, VisualGraph, VisualGraphNode, IEdgeRouter } from "../models";


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