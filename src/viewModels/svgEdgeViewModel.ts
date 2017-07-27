import { SVGViewModel, IEdgeViewModel } from "./";
import { Edge, Point } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of an edge's view-model.
 * 
 * @export
 * @class SVGEdgeViewModel
 * @extends {SVGViewModel}
 * @implements {IEdgeViewModel}
 */
export class SVGEdgeViewModel extends SVGViewModel implements IEdgeViewModel {

    /**
     * Gets the edge's start point.
     * 
     * @type {Point}
     * @memberof SVGEdgeViewModel
     */
    get startPoint(): Point {
        return this.edge.sourceNode.position;
    }

    /**
     * Sets the edge's start point.
     * 
     * @memberof SVGEdgeViewModel
     */
    set startPoint(value: Point) {
        this.edge.sourceNode.position = value;
    }


    /**
     * Gets the edge's end point.
     * 
     * @type {Point}
     * @memberof SVGEdgeViewModel
     */
    get endPoint(): Point {
        return this.edge.targetNode.position;
    }

    /**
     * Sets the edge's end point.
     * 
     * @memberof SVGEdgeViewModel
     */
    set endPoint(value: Point) {
        this.edge.targetNode.position = value;
    }


    private edge: Edge;


    /**
     * Creates an instance of SVGEdgeViewModel.
     *
     * @memberof SVGEdgeViewModel
     */
    public constructor() {
        super();
    }


    /**
     * Initializes the edge view-model.
     * 
     * @param {Edge} edge 
     * @memberof SVGEdgeViewModel
     */
    public init(edge: Edge): void {
        if (!edge) {
            Utils.throwReferenceError('edge');
        }

        this.edge = edge;
    }

}