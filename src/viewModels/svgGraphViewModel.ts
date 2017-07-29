import { IGraphViewModel, SVGNodeViewModel, SVGViewModel, SVGEdgeViewModel, IEdgeRouter } from "./";
import { Graph, Size } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of a graph's view-model.
 * 
 * @export
 * @class SVGGraphViewModel
 * @extends {SVGViewModel}
 * @implements {IGraphViewModel}
 */
export class SVGGraphViewModel extends SVGViewModel<Graph> implements IGraphViewModel {

    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<SVGNodeViewModel>}
     * @memberof SVGGraphViewModel
     */
    public nodes: Array<SVGNodeViewModel>;


    /**
     * A collection of the graph's edge view-models.
     * 
     * @type {Array<SVGEdgeViewModel>}
     * @memberof SVGGraphViewModel
     */
    public connections: Array<SVGEdgeViewModel>;


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

        this.nodes = new Array<SVGNodeViewModel>();
        this.connections = new Array<SVGEdgeViewModel>();

        this.edgeRouter = edgeRouter;
    }


    /**
     * Initializes the graph view-model.
     * 
     * @param {Graph} graph 
     * @memberof SVGGraphViewModel
     */
    public init(graph: Graph) {
        if (!graph) {
            Utils.throwReferenceError('graph');
        }

        this.model = graph;

        this.initNodes();
    }


    /**
     * Initializes all graph nodes view-models.
     * 
     * @private
     * @memberof SVGGraphViewModel
     */
    private initNodes(): void {
        let graphNodes = this.model.getNodes();
        if (graphNodes && graphNodes.length > 0) {
            graphNodes.forEach((tempNode) => {

                // Create the graph node view-model
                let newNodeVM = new SVGNodeViewModel();
                newNodeVM.init(tempNode);
                this.nodes.push(newNodeVM);

                // Create the node's connection view-models
                let edges = tempNode.getConnections();
                if (edges && edges.length > 0) {
                    edges.forEach((tempEdge) => {
                        let newEdgeVM = new SVGEdgeViewModel();
                        newEdgeVM.setEdgeRouter(this.edgeRouter);
                        newEdgeVM.init(tempEdge, this);
                        this.connections.push(newEdgeVM);
                    });
                }
            });
        }
    }

}