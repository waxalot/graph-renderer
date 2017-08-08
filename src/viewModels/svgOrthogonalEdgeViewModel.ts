import { VisualGraphNode, Point, VisualGraph, IOrthogonalEdgeRouter } from "../models";
import { IOrthogonalEdgeViewModel, SVGEdgeViewModel, SVGNodeViewModel, IGraphViewModel } from "./";
import { Utils } from "../utils";


/**
 * The SVG based representation of an edge's view-model for an orthogonal edge.
 * 
 * @export
 * @class SVGOrthogonalEdgeViewModel
 * @extends {SVGEdgeViewModel<TNode, EdgeRouterType>}
 * @implements {IOrthogonalEdgeViewModel<TNode, EdgeRouterType>}
 * @template TNode 
 * @template EdgeRouterType 
 */
export class SVGOrthogonalEdgeViewModel<TNode extends VisualGraphNode, EdgeRouterType extends IOrthogonalEdgeRouter> extends SVGEdgeViewModel<TNode, EdgeRouterType> implements IOrthogonalEdgeViewModel<TNode, EdgeRouterType> {

    /**
     * An array with all (start, end, intermediate) points.
     * 
     * @type {Array<Point>}
     * @memberof SVGEdgeViewModel
     */
    public points: Array<Point>;


    /**
     * Creates an instance of SVGOrthogonalEdgeViewModel.
     *
     * @param {EdgeRouterType} edgeRouter 
     * @param {SVGNodeViewModel<TNode>} startNodeViewModel 
     * @param {SVGNodeViewModel<TNode>} endNodeViewModel 
     * @param {IGraphViewModel<VisualGraph, TNode>} graphViewModel 
     * @memberof SVGOrthogonalEdgeViewModel
     */
    public constructor(edgeRouter: EdgeRouterType, startNodeViewModel: SVGNodeViewModel<TNode>, endNodeViewModel: SVGNodeViewModel<TNode>, graphViewModel: IGraphViewModel<VisualGraph, TNode>) {
        super(edgeRouter, startNodeViewModel, endNodeViewModel, graphViewModel);

        this.points = new Array<Point>();
    }


    /**
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGEdgeViewModel
     */
    protected initViewModel(): void {
        super.initViewModel();

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
        startPoint.x = this.startNodeViewModel.position.x + this.startNodeViewModel.size.width * 0.5;
        startPoint.y = this.startNodeViewModel.position.y + this.startNodeViewModel.height * 0.5;

        let endPoint = new Point();
        endPoint.x = this.endNodeViewModel.position.x + this.endNodeViewModel.size.width * 0.5;
        endPoint.y = this.endNodeViewModel.position.y + this.endNodeViewModel.size.height * 0.5;

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