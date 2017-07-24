import { IGraphViewModel, SVGNodeViewModel, SVGViewModel } from "./";
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
export class SVGGraphViewModel extends SVGViewModel implements IGraphViewModel {

    /**
     * Gets the graph's size.
     * 
     * @type {Size}
     * @memberof SVGGraphViewModel
     */
    public get size(): Size {
        return this.graph.size;
    }

    /**
     * Sets the graph's size.
     * 
     * @memberof SVGGraphViewModel
     */
    public set size(value: Size) {
        this.graph.size = value;
    }


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<SVGNodeViewModel>}
     * @memberof SVGGraphViewModel
     */
    public nodes: Array<SVGNodeViewModel>;

    private graph: Graph;
    

    /**
     * Creates an instance of SVGGraphViewModel.
     *
     * @memberof SVGGraphViewModel
     */
    public constructor() {
        super();

        this.nodes = new Array<SVGNodeViewModel>();
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

        this.graph = graph;

        this.initNodes();
    }


    /**
     * Initializes all graph nodes view-models.
     * 
     * @private
     * @memberof SVGGraphViewModel
     */
    private initNodes(): void {
        let graphNodes = this.graph.getNodes();
        if (graphNodes && graphNodes.length > 0) {
            graphNodes.forEach((tempNode) => {
                let newNodeVM = new SVGNodeViewModel();
                newNodeVM.init(tempNode);
                this.nodes.push(newNodeVM);
            });
        }
    }

}