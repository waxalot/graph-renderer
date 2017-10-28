import { IVisualGraphNode } from "../../interfaces/iVisualGraphNode";
import { SVGGraphItemViewModel } from "./svgGraphItemViewModel";
import { IGraphEvent } from "../../events/interfaces/iGraphEvent";
import { Size } from "../../models/size";
import { Point } from "../../models/point";
import { IVisualGraph } from "../../interfaces/iVisualGraph";
import { GraphEvent } from "../../events/graphEvent";
import { ISVGGraphNodeViewModel } from "./interfaces/iSVGGraphNodeViewModel";
import { IGraphNodeViewModel } from "../interfaces/iGraphNodeViewModel";


/**
 * The SVG based representation of a graph node's view-model.
 * 
 * @export
 * @class SVGGraphNodeViewModel
 * @extends {SVGGraphItemViewModel<IVisualGraphNode>}
 * @implements {IGraphNodeViewModel}
 */
export class SVGGraphNodeViewModel extends SVGGraphItemViewModel<IVisualGraphNode> implements ISVGGraphNodeViewModel {

    /**
     * The selection changed event.
     * 
     * @type {IGraphEvent<IGraphNodeViewModel, boolean>}
     * @memberof SVGGraphNodeViewModel
     */
    public selectionChangedEvent: IGraphEvent<IGraphNodeViewModel, boolean>;


    /**
     * Gets the node's size.
     * 
     * @readonly
     * @type {Size}
     * @memberof SVGGraphNodeViewModel
     */
    get size(): Size {
        return this.model.size;
    }


    /**
     * Gets the node's position.
     * 
     * @type {Point}
     * @memberof SVGGraphNodeViewModel
     */
    get position(): Point {
        return this.model.position;
    }

    /**
     * Sets the node's position.
     * 
     * @memberof SVGGraphNodeViewModel
     */
    set position(value: Point) {
        this.model.position = value;
    }


    /**
     * The current transform matrix.
     * 
     * @type {Array<number>}
     * @memberof SVGViewModel
     */
    public currentTransformMatrix: Array<number>;

    private _currentMovePosition: Point;


    /**
     * Gets the node's current move position x coordinate.
     * 
     * @type {Point}
     * @memberof SVGViewModel
     */
    get currentMoveX(): number {
        return this._currentMovePosition.x;
    }

    /**
     * Sets the node's current move position x coordinate.
     * 
     * @memberof SVGViewModel
     */
    set currentMoveX(value: number) {
        this._currentMovePosition.x = value;
    }


    /**
     * Gets the node's current move position y coordinate.
     * 
     * @type {Point}
     * @memberof SVGViewModel
     */
    get currentMoveY(): number {
        return this._currentMovePosition.y;
    }

    /**
     * Sets the node's current move position y coordinate.
     * 
     * @memberof SVGViewModel
     */
    set currentMoveY(value: number) {
        this._currentMovePosition.y = value;
    }


    /**
     * The parent graph.
     * 
     * @private
     * @type {IVisualGraph}
     * @memberof SVGGraphNodeViewModel
     */
    private parentGraph: IVisualGraph;


    /**
     * Creates an instance of SVGGraphNodeViewModel.
     *
     * @param {IVisualGraph} parentGraph 
     * @param {IVisualGraphNode} graphNode 
     * @memberof SVGGraphNodeViewModel
     */
    public constructor(parentGraph: IVisualGraph, graphNode: IVisualGraphNode) {
        super(graphNode);

        this.parentGraph = parentGraph;

        this.selectionChangedEvent = new GraphEvent<SVGGraphNodeViewModel, boolean>();

        this.model.selectionChangedEvent.addEventListener(this.selectionChangedEventListener);

        this._currentMovePosition = new Point();
        this.currentTransformMatrix = new Array<number>();
    }


    /**
     * Triggers the selection changed event.
     * 
     * @param {boolean} selected 
     * @memberof SVGGraphNodeViewModel
     */
    public onSelectionChanged(selected: boolean): void {
        if (this.selectionChangedEvent) {
            this.selectionChangedEvent.invoke(this, selected);
        }
    }


    private selectionChangedEventListener = (node: IVisualGraphNode, selected: boolean): void => {
        this.onSelectionChanged(selected);
    }


    protected initViewModel(): void {
    }


    public mouseDownHandler = (e: MouseEvent) => {
        let selectedElement = <SVGRectElement>e.srcElement;

        if (!selectedElement) {
            return;
        }

        if (this.model && this.parentGraph) {
            this.parentGraph.handleGraphNodeSelection(this.model, e.ctrlKey);
        }

        this.currentMoveX = e.clientX;
        this.currentMoveY = e.clientY;

        let tempCurrentMatrix = selectedElement.getAttributeNS(null, 'transform').slice(7, -1).split(' ');
        let matrixEntriesCount = tempCurrentMatrix.length;
        for (let i = 0; i < matrixEntriesCount; i++) {
            this.currentTransformMatrix[i] = parseFloat(tempCurrentMatrix[i]);
        }

        // Set drag handler
        selectedElement.onmousemove = (e: MouseEvent) => {

            let dx = e.clientX - this.currentMoveX;
            let dy = e.clientY - this.currentMoveY;
            this.currentTransformMatrix[4] += dx;
            this.currentTransformMatrix[5] += dy;

            let newMatrix = 'matrix(' + this.currentTransformMatrix.join(' ') + ')';
            selectedElement.setAttributeNS(null, 'transform', newMatrix);

            this.currentMoveX = e.clientX;
            this.currentMoveY = e.clientY;
        };

        // Set drop handler
        selectedElement.onmouseup = (e: MouseEvent) => {

            selectedElement.onmousemove = null;
            selectedElement.onmouseout = null;
            selectedElement.onmouseup = null;
        };

        // Set leave handler
        selectedElement.onmouseout = (e: MouseEvent) => {

            selectedElement.onmousemove = null;
            selectedElement.onmouseout = null;
            selectedElement.onmouseup = null;
        }
    }

}