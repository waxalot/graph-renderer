import { SVGViewModel, IEdgeViewModel, IEdgeRouter, SVGGraphViewModel, SVGNodeViewModel } from "./";
import { Point, VisualGraphNode, VisualGraph } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of an edge's view-model.
 * 
 * @export
 * @class SVGEdgeViewModel
 * @extends {SVGViewModel<T>}
 * @implements {IEdgeViewModel<T>}
 * @template T 
 */
export class SVGEdgeViewModel<TNode extends VisualGraphNode> extends SVGViewModel<TNode> implements IEdgeViewModel<TNode> {

    /**
     * The start node's view-model.
     * 
     * @type {SVGNodeViewModel<T>}
     * @memberof SVGEdgeViewModel
     */
    public startNodeViewModel: SVGNodeViewModel<TNode>;


    /**
     * The end node's view-model.
     * 
     * @type {SVGNodeViewModel<T>}
     * @memberof SVGEdgeViewModel
     */
    public endNodeViewModel: SVGNodeViewModel<TNode>;


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
     * @type {SVGGraphViewModel<VisualGraph>}
     * @memberof SVGEdgeViewModel
     */
    private graphViewModel: SVGGraphViewModel<VisualGraph, TNode>;


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
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGEdgeViewModel
     */
    protected initViewModel(): void {

        if (this.startNodeViewModel) {
            this.startNodeViewModel.dataBinder.subscribe(this.startNodeViewModel.getDataBindChangeMessage(), this.startNodeChangedCallback);
        }

        if (this.endNodeViewModel) {
            this.endNodeViewModel.dataBinder.subscribe(this.endNodeViewModel.getDataBindChangeMessage(), this.endNodeChangedCallback);
        }

        this.initPoints();
    }


    /**
     * The change callback for the edge's start node.
     * 
     * @private
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof SVGEdgeViewModel
     */
    private startNodeChangedCallback(propertyName: string, value: any, initiator: any): void {
        console.log('start node: ' + propertyName + ': ' + value);
    }


    /**
     * The change callback for the edge's end node.
     * 
     * @private
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof SVGEdgeViewModel
     */
    private endNodeChangedCallback(propertyName: string, value: any, initiator: any): void {
        console.log('end node: ' + propertyName + ': ' + value);
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