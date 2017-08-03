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
export class SVGGraphViewModel<T extends VisualGraph> extends SVGViewModel<T> implements IGraphViewModel<T> {

    /**
     * The graph model.
     * 
     * @type {T}
     * @memberof SVGGraphViewModel
     */
    public model: T;


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<SVGNodeViewModel<VisualGraphNode>>}
     * @memberof SVGGraphViewModel
     */
    public nodes: Array<SVGNodeViewModel<VisualGraphNode>>;


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
     * @param {IEdgeRouter} edgeRouter 
     * @memberof SVGGraphViewModel
     */
    public constructor(edgeRouter: IEdgeRouter) {
        super();

        this.nodes = new Array<SVGNodeViewModel<VisualGraphNode>>();
        this.connections = new Array<SVGEdgeViewModel<VisualGraphNode>>();

        this.edgeRouter = edgeRouter;
    }


    /**
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGGraphViewModel
     */
    protected initViewModel(): void {
        this.initNodes();
    }


    /**
     * Initializes all graph nodes view-models.
     * 
     * @private
     * @memberof SVGGraphViewModel
     */
    private initNodes(): void {
        // let graphNodes = this.model.nodes;
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