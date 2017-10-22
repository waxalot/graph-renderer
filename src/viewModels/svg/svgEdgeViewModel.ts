import { VisualGraphNode } from "../../models/visualGraphNode";
import { IEdgeRouter } from "../../interfaces/iEdgeRouter";
import { SVGViewModel } from "./svgViewModel";
import { IEdgeViewModel } from "../interfaces/iEdgeViewModel";
import { SVGNodeViewModel } from "./svgNodeViewModel";
import { IGraphViewModel } from "../interfaces/iGraphViewModel";
import { VisualGraph } from "../../models/visualGraph";


/**
 * The SVG based representation of an edge's view-model.
 * 
 * @export
 * @class SVGEdgeViewModel
 * @extends {SVGViewModel<T>}
 * @implements {IEdgeViewModel<T>}
 * @template T 
 */
export class SVGEdgeViewModel<TNode extends VisualGraphNode, EdgeRouterType extends IEdgeRouter> extends SVGViewModel<TNode> implements IEdgeViewModel<TNode, EdgeRouterType> {

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
     * The edge router.
     * 
     * @public
     * @type {EdgeRouterType}
     * @memberof SVGEdgeViewModel
     */
    public edgeRouter: EdgeRouterType;


    /**
     * The graph's view-model.
     * 
     * @type {IGraphViewModel<VisualGraph, TNode>}
     * @memberof SVGEdgeViewModel
     */
    public graphViewModel: IGraphViewModel<VisualGraph, TNode>;


    /**
     * Creates an instance of SVGEdgeViewModel.
     *
     * @param {EdgeRouterType} edgeRouter 
     * @param {SVGNodeViewModel<TNode>} startNodeViewModel 
     * @param {SVGNodeViewModel<TNode>} endNodeViewModel 
     * @param {IGraphViewModel<VisualGraph, TNode>} graphViewModel 
     * @memberof SVGEdgeViewModel
     */
    public constructor(edgeRouter: EdgeRouterType, startNodeViewModel: SVGNodeViewModel<TNode>, endNodeViewModel: SVGNodeViewModel<TNode>, graphViewModel: IGraphViewModel<VisualGraph, TNode>) {
        super();

        this.edgeRouter = edgeRouter;
        this.startNodeViewModel = startNodeViewModel;
        this.endNodeViewModel = endNodeViewModel;
        this.graphViewModel = graphViewModel;
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

}