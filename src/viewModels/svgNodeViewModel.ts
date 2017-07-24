import { INodeViewModel, SVGViewModel } from "./";
import { GraphNode, Size } from "../models";
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
     * @param {GraphNode} node 
     * @memberof SVGNodeViewModel
     */
    public constructor(node: GraphNode) {
        super();

        if (!node) {
            Utils.throwReferenceError('node');
        }

        this.node = node;
    }

}