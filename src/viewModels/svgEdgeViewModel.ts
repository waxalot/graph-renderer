import { SVGViewModel, IEdgeViewModel, IEdgeRouter, SVGGraphViewModel } from "./";
import { Edge, Point, GraphNode } from "../models";
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
     * The graph's view-model.
     * 
     * @private
     * @type {SVGGraphViewModel}
     * @memberof SVGEdgeViewModel
     */
    private graphViewModel: SVGGraphViewModel;

    /**
     * The edge router.
     * 
     * @private
     * @type {IEdgeRouter}
     * @memberof SVGEdgeViewModel
     */
    private edgeRouter: IEdgeRouter;


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
     * @param {SVGGraphViewModel} graphViewModel 
     * @memberof SVGEdgeViewModel
     */
    public init(edge: Edge, graphViewModel: SVGGraphViewModel): void {
        if (!edge) {
            Utils.throwReferenceError('edge');
        } else if (!graphViewModel) {
            Utils.throwReferenceError('graphViewModel');
        }

        this.model = edge;

        this.graphViewModel = graphViewModel;

        this.initPoints();
    }


    /**
     * Sets the edge router.
     * 
     * @param {IEdgeRouter} edgeRouter 
     * @memberof SVGEdgeViewModel
     */
    public setEdgeRouter(edgeRouter: IEdgeRouter): void {
        if (!edgeRouter) {
            Utils.throwReferenceError('edgeRouter');
        }

        this.edgeRouter = edgeRouter;
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

        let endPoint = new Point();
        endPoint.x = this.model.targetNode.position.x + this.model.targetNode.size.width * 0.5;
        endPoint.y = this.model.targetNode.position.y + this.model.targetNode.size.height * 0.5;

        if (!this.edgeRouter) {
            Utils.throwReferenceError('No edge router was set. Call setEdgeRouter() before!')
            return;
        }

        let intermediatePoints = this.edgeRouter.createEdgePoints(startPoint, endPoint, this.graphViewModel);

        // Add the start point
        this.points.push(startPoint);

        // Add all found intermediate points
        intermediatePoints.forEach((tempPoint) => {
            this.points.push(tempPoint);
        });

        // Add the end point
        this.points.push(endPoint);
    }

}