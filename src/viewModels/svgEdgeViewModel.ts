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
     * An array with all (start, end, intermediate) points.
     * 
     * @type {Array<Point>}
     * @memberof SVGEdgeViewModel
     */
    public points: Array<Point>;


    /**
     * Creates an instance of SVGEdgeViewModel.
     *
     * @memberof SVGEdgeViewModel
     */
    public constructor() {
        super();

        this.points = new Array<Point>();
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

        this.initPoints();
    }


    /**
     * Initializes the points array.
     * 
     * @private
     * @memberof SVGEdgeViewModel
     */
    private initPoints() {

        let startPoint = new Point();
        startPoint.x = this.model.sourceNode.position.x + this.model.sourceNode.size.width * 0.5;
        startPoint.y = this.model.sourceNode.position.y + this.model.sourceNode.size.height * 0.5;
        this.points.push(startPoint);

        let endPoint = new Point();
        endPoint.x = this.model.targetNode.position.x + this.model.targetNode.size.width * 0.5;
        endPoint.y = this.model.targetNode.position.y + this.model.targetNode.size.height * 0.5;
        this.points.push(endPoint);

    }

}