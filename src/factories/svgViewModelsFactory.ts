import { IViewModelsFactory } from "./";
import { IGraphViewModel, SVGGraphViewModel, IEdgeRouter } from "../viewModels";
import { Graph, VisualGraph, VisualGraphNode } from "../models";


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
     * @template TNode 
     * @param {Graph<TNode>} graph 
     * @param {IEdgeRouter} edgeRouter 
     * @returns {IGraphViewModel<VisualGraph, TNode>} 
     * @memberof SVGViewModelsFactory
     */
    public createGraphViewModel<TNode extends VisualGraphNode>(graph: Graph<TNode>, edgeRouter: IEdgeRouter): IGraphViewModel<VisualGraph, TNode> {
        let graphVM = new SVGGraphViewModel(graph, edgeRouter);
        return graphVM;
    }

}