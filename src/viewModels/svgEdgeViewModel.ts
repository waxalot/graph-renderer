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
export class SVGEdgeViewModel extends SVGViewModel<Edge> implements IEdgeViewModel {

    /**
     * Gets the edge's start point.
     * 
     * @type {Point}
     * @memberof SVGEdgeViewModel
     */
    get startPoint(): Point {
        this._startPoint.x = this.model.sourceNode.position.x + this.model.sourceNode.size.width * 0.5;
        this._startPoint.y = this.model.sourceNode.position.y + this.model.sourceNode.size.height * 0.5;

        return this._startPoint;
    }

    /**
     * Sets the edge's start point.
     * 
     * @memberof SVGEdgeViewModel
     */
    set startPoint(value: Point) {
        this._startPoint = value;

        this.model.sourceNode.position.x = this._startPoint.x - this.model.sourceNode.size.width * 0.5;
        this.model.sourceNode.position.y = this._startPoint.y - this.model.sourceNode.size.height * 0.5;
    }


    /**
     * Gets the edge's end point.
     * 
     * @type {Point}
     * @memberof SVGEdgeViewModel
     */
    get endPoint(): Point {
        this._endPoint.x = this.model.targetNode.position.x + this.model.targetNode.size.width * 0.5;
        this._endPoint.y = this.model.targetNode.position.y + this.model.targetNode.size.height * 0.5;

        return this._endPoint;
    }

    /**
     * Sets the edge's end point.
     * 
     * @memberof SVGEdgeViewModel
     */
    set endPoint(value: Point) {
        this._endPoint = value;

        this.model.targetNode.position.x = this._endPoint.x - this.model.targetNode.size.width * 0.5;
        this.model.targetNode.position.y = this._endPoint.y - this.model.targetNode.size.height * 0.5;
    }


    private _startPoint: Point;
    private _endPoint: Point;


    /**
     * Creates an instance of SVGEdgeViewModel.
     *
     * @memberof SVGEdgeViewModel
     */
    public constructor() {
        super();

        this._startPoint = new Point();
        this._endPoint = new Point();
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

        this.model = edge;
    }

}