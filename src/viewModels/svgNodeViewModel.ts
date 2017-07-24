import { INodeViewModel, SVGViewModel } from "./";
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


    private node: GraphNode;


    /**
     * Creates an instance of SVGNodeViewModel.
     *
     * @memberof SVGNodeViewModel
     */
    public constructor() {
        super();
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
    }

}