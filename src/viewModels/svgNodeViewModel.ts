import { INodeViewModel, SVGViewModel, SVGEdgeViewModel } from "./";
import { GraphNode, Size, Point } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of a node's view-model.
 * 
 * @export
 * @class SVGNodeViewModel
 * @extends {SVGViewModel}
 * @implements {INodeViewModel}
 */
export class SVGNodeViewModel extends SVGViewModel implements INodeViewModel {

    /**
     * Gets the node's position.
     * 
     * @type {Point}
     * @memberof SVGNodeViewModel
     */
    get position(): Point {
        return this.node.position;
    }

    /**
     * Sets the node's position.
     * 
     * @memberof SVGNodeViewModel
     */
    set position(value: Point) {
        this.node.position = value;
    }


    /**
     * Gets the node's size.
     * 
     * @type {Size}
     * @memberof SVGNodeViewModel
     */
    get size(): Size {
        return this.node.size;
    }

    /**
     * Sets the node's size.
     * 
     * @memberof SVGNodeViewModel
     */
    set size(value: Size) {
        this.node.size = value;
    }


    /**
     * A collection of the node's edge view-models.
     * 
     * @type {Array<SVGEdgeViewModel>}
     * @memberof SVGNodeViewModel
     */
    public connections: Array<SVGEdgeViewModel>;


    private node: GraphNode;


    /**
     * Creates an instance of SVGNodeViewModel.
     *
     * @memberof SVGNodeViewModel
     */
    public constructor() {
        super();

        this.connections = new Array<SVGEdgeViewModel>();
    }


    /**
     * Initializes the node view-model.
     * 
     * @param {GraphNode} node 
     * @memberof SVGNodeViewModel
     */
    public init(node: GraphNode): void {
        if (!node) {
            Utils.throwReferenceError('node');
        }

        this.node = node;

        this.initEdges();
    }


    /**
     * Initializes all edge view-models.
     * 
     * @private
     * @memberof SVGNodeViewModel
     */
    private initEdges(): void {
        let edges = this.node.getConnections();
        if (edges && edges.length > 0) {
            edges.forEach((tempEdge) => {
                let newEdgeVM = new SVGEdgeViewModel();
                newEdgeVM.init(tempEdge);
                this.connections.push(newEdgeVM);
            });
        }
    }

}