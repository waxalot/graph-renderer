import { SVGGraphItemViewModel } from "./svgGraphItemViewModel";
import { IGraphViewModel } from "../interfaces/iGraphViewModel";
import { IVisualGraph } from "../../interfaces/iVisualGraph";
import { Point } from "../../models/point";
import { SVGUtils } from "../../renderers/svg/svgUtils";
import { ISVGGraphViewModel } from "./interfaces/iSVGGraphViewModel";
import { ISVGGraphNodeViewModel } from "./interfaces/iSVGGraphNodeViewModel";
import { SVGGraphNodeViewModel } from "./svgGraphNodeViewModel";


/**
 * The SVG based representation of a graph's view-model.
 * 
 * @export
 * @class SVGGraphViewModel
 * @extends {SVGGraphItemViewModel<IVisualGraph>}
 * @implements {ISVGGraphViewModel}
 */
export class SVGGraphViewModel extends SVGGraphItemViewModel<IVisualGraph> implements ISVGGraphViewModel {

    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<ISVGGraphNodeViewModel>}
     * @memberof SVGGraphViewModel
     */
    public nodes: Array<ISVGGraphNodeViewModel>;


    private _currentMovePosition: Point;

    /**
     * Gets the node's current move position x coordinate.
     * 
     * @type {Point}
     * @memberof SVGGraphViewModel
     */
    get currentMoveX(): number {
        return this._currentMovePosition.x;
    }

    /**
     * Sets the node's current move position x coordinate.
     * 
     * @memberof SVGGraphViewModel
     */
    set currentMoveX(value: number) {
        this._currentMovePosition.x = value;
    }

    /**
     * Gets the node's current move position y coordinate.
     * 
     * @type {Point}
     * @memberof SVGGraphViewModel
     */
    get currentMoveY(): number {
        return this._currentMovePosition.y;
    }

    /**
     * Sets the node's current move position y coordinate.
     * 
     * @memberof SVGGraphViewModel
     */
    set currentMoveY(value: number) {
        this._currentMovePosition.y = value;
    }


    /**
     * Creates an instance of SVGGraphViewModel.
     *
     * @param {IVisualGraph} model 
     * @memberof SVGGraphViewModel
     */
    public constructor(model: IVisualGraph) {
        super(model);

        this.nodes = new Array<ISVGGraphNodeViewModel>();
        this._currentMovePosition = new Point();

        this.initViewModel();
    }


    public mouseDownHandler = (e: MouseEvent) => {

        // Get the current selected graph element.
        let selectedElement = <SVGElement>e.srcElement;

        let elementGuid = SVGUtils.getGuid(selectedElement);
        if (elementGuid && elementGuid === this.guid) {
            // The graph was selected

        } else {

        }

        this.currentMoveX = e.clientX;
        this.currentMoveY = e.clientY;

        // Set drag handler
        // selectedElement.onmousemove = (e: MouseEvent) => {

        //     let dx = e.clientX - this.currentMoveX;
        //     let dy = e.clientY - this.currentMoveY;
        //     this.currentTransformMatrix[4] += dx;
        //     this.currentTransformMatrix[5] += dy;

        //     let newMatrix = 'matrix(' + this.currentTransformMatrix.join(' ') + ')';
        //     selectedElement.setAttributeNS(null, 'transform', newMatrix);

        //     this.currentMoveX = e.clientX;
        //     this.currentMoveY = e.clientY;
        // };

        // // Set drop handler
        // selectedElement.onmouseup = (e: MouseEvent) => {

        //     selectedElement.onmousemove = null;
        //     selectedElement.onmouseout = null;
        //     selectedElement.onmouseup = null;
        // };

        // // Set leave handler
        // selectedElement.onmouseout = (e: MouseEvent) => {

        //     selectedElement.onmousemove = null;
        //     selectedElement.onmouseout = null;
        //     selectedElement.onmouseup = null;
        // }
    }


    /**
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGGraphViewModel
     */
    protected initViewModel(): void {
        // Create nodes view-models
        this.initNodes();
    }


    /**
     * Initializes all nodes view-models.
     * 
     * @private
     * @memberof SVGGraphViewModel
     */
    private initNodes(): void {

        // Create all required nodes view-models by traversing the model graph.
        let graphNodes = this.model.nodes;
        if (graphNodes && graphNodes.count > 0) {

            graphNodes.forEach((tempNode) => {

                // Create the graph node view-model
                let newNodeVM = new SVGGraphNodeViewModel(this.model, tempNode);
                this.nodes.push(newNodeVM);
            });

        }

        // if (graphNodes && graphNodes.length > 0) {
        //     graphNodes.forEach((tempNode) => {

        //         // // Create the graph node view-model
        //         // let newNodeVM = new SVGNodeViewModel();
        //         // newNodeVM.init(tempNode);
        //         // this.nodes.push(newNodeVM);

        //         // // Create the node's connection view-models
        //         // let edges = tempNode.getConnections();
        //         // if (edges && edges.length > 0) {
        //         //     edges.forEach((tempEdge) => {
        //         //         let newEdgeVM = new SVGEdgeViewModel();
        //         //         newEdgeVM.setEdgeRouter(this.edgeRouter);
        //         //         newEdgeVM.init(tempEdge, newNodeVM, null, this);
        //         //         this.connections.push(newEdgeVM);
        //         //     });
        //         // }
        //     });
        // }
    }

}