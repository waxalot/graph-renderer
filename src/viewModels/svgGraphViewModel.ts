import { IGraphViewModel, SVGNodeViewModel, SVGViewModel, SVGEdgeViewModel, IEdgeRouter } from "./";
import { Graph, Size, VisualGraph, VisualGraphNode } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of a graph's view-model.
 * 
 * @export
 * @class SVGGraphViewModel
 * @extends {SVGViewModel}
 * @implements {IGraphViewModel}
 */
export class SVGGraphViewModel<T extends VisualGraph, TNode extends VisualGraphNode> extends SVGViewModel<T> implements IGraphViewModel<T, TNode> {

    /**
     * The graph model.
     * 
     * @type {TNode}
     * @memberof SVGGraphViewModel
     */
    public model: Graph<TNode>;


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<SVGNodeViewModel<TNode>>}
     * @memberof SVGGraphViewModel
     */
    public nodes: Array<SVGNodeViewModel<TNode>>;


    /**
     * A collection of the graph's edge view-models.
     * 
     * @type {Array<SVGEdgeViewModel<VisualGraphNode>>}
     * @memberof SVGGraphViewModel
     */
    public connections: Array<SVGEdgeViewModel<VisualGraphNode>>;


    /**
     * The edge router.
     * 
     * @private
     * @type {IEdgeRouter}
     * @memberof SVGGraphViewModel
     */
    private edgeRouter: IEdgeRouter;


    /**
     * Creates an instance of SVGGraphViewModel.
     * 
     * @param {Graph<TNode>} graph 
     * @param {IEdgeRouter} edgeRouter 
     * @memberof SVGGraphViewModel
     */
    public constructor(graph: Graph<TNode>, edgeRouter: IEdgeRouter) {
        super();

        this.model = graph;

        this.nodes = new Array<SVGNodeViewModel<TNode>>();
        this.connections = new Array<SVGEdgeViewModel<TNode>>();

        this.edgeRouter = edgeRouter;

        this.initViewModel();
    }


    /**
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGGraphViewModel
     */
    protected initViewModel(): void {
        // Create nodes view-models
        this.initNodes();
    }


    /**
     * Initializes all nodes view-models.
     * 
     * @private
     * @memberof SVGGraphViewModel
     */
    private initNodes(): void {

        // Create all required nodes view-models by traversing the model graph.
        let graphNodes = this.model.nodes;
        if (graphNodes && graphNodes.count > 0) {

            graphNodes.forEach((tempNode) => {

                // Create the graph node view-model
                let newNodeVM = new SVGNodeViewModel(tempNode);
                this.nodes.push(newNodeVM);
            });

        }

        // if (graphNodes && graphNodes.length > 0) {
        //     graphNodes.forEach((tempNode) => {

        //         // // Create the graph node view-model
        //         // let newNodeVM = new SVGNodeViewModel();
        //         // newNodeVM.init(tempNode);
        //         // this.nodes.push(newNodeVM);

        //         // // Create the node's connection view-models
        //         // let edges = tempNode.getConnections();
        //         // if (edges && edges.length > 0) {
        //         //     edges.forEach((tempEdge) => {
        //         //         let newEdgeVM = new SVGEdgeViewModel();
        //         //         newEdgeVM.setEdgeRouter(this.edgeRouter);
        //         //         newEdgeVM.init(tempEdge, newNodeVM, null, this);
        //         //         this.connections.push(newEdgeVM);
        //         //     });
        //         // }
        //     });
        // }
    }

}