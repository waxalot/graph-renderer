import { Point } from "./point";
import { Size } from "./size";


/**
 * The visual representation of a graph's node.
 * 
 * @export
 * @class VisualGraphNode
 */
export class VisualGraphNode {

    /**
     * The node's position.
     * 
     * @type {Point}
     * @memberof VisualGraphNode
     */
    public position: Point;


    /**
     * The node's size.
     * 
     * @type {Size}
     * @memberof VisualGraphNode
     */
    public size: Size;

}