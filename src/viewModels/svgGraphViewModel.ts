import { IGraphViewModel, INodeViewModel, SVGNodeViewModel, SVGViewModel } from "./";
import { Graph, Size } from "../models/index";
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
     * the SVG graph's size.
     * 
     * @type {Size}
     * @memberof SVGGraphViewModel
     */
    public size: Size;

    private graph: Graph;
    private nodes: Array<INodeViewModel>;


    /**
     * Creates an instance of SVGGraphViewModel.
     *
     * @param {Graph} graph 
     * @memberof SVGGraphViewModel
     */
    public constructor(graph: Graph) {
        super();

        if (!graph) {
            Utils.throwReferenceError('graph');
        }

        this.nodes = new Array<INodeViewModel>();
        this.size = new Size();

        this.graph = graph;
    }


    /**
     * Returns an array with all graph nodes view-models.
     * 
     * @returns {Array<INodeViewModel>} 
     * @memberof SVGGraphViewModel
     */
    public getNodes(): Array<INodeViewModel> {
        // Check if the nodes need to be initialized
        let graphNodes = this.graph.getNodes();
        if (graphNodes && this.nodes.length !== graphNodes.length) {
            graphNodes.forEach((tempNode) => {
                this.nodes.push(new SVGNodeViewModel(tempNode));
            });
        }

        // Use concat to copy the array, so that the original array can't be changed.
        return new Array<INodeViewModel>().concat(this.nodes);
    }

}