import { INodeViewModel, SVGEdgeViewModel, SVGViewModel } from "./";
import { GraphNode, Size, Point, VisualGraphNode } from "../models";
import { Utils } from "../utils";


/**
 * The SVG based representation of a node's view-model.
 * 
 * @export
 * @class SVGNodeViewModel
 * @extends {SVGViewModel}
 * @implements {INodeViewModel}
 */
export class SVGNodeViewModel<T extends VisualGraphNode> extends SVGViewModel<T> implements INodeViewModel<T> {

    /**
     * The graph node model.
     * 
     * @type {T}
     * @memberof SVGViewModel
     */
    public model: T;


    /**
     * Gets the node's size.
     * 
     * @readonly
     * @type {Size}
     * @memberof SVGNodeViewModel
     */
    get size(): Size {
        return this.model.size;
    }


    /**
     * Gets the node's width.
     * 
     * @readonly
     * @type {number}
     * @memberof SVGViewModel
     */
    get width(): number {
        return this.model.size.width;
    }

    /**
     * Sets the node's width.
     * 
     * @memberof SVGViewModel
     */
    set width(value: number) {
        this.model.size.width = value;
    }


    /**
     * Gets the node's height.
     * 
     * @readonly
     * @type {number}
     * @memberof SVGViewModel
     */
    get height(): number {
        return this.model.size.height;
    }

    /**
     * Sets the node's height.
     * 
     * @memberof SVGViewModel
     */
    set height(value: number) {
        this.model.size.height = value;
    }


    /**
     * Gets the node's position.
     * 
     * @type {Point}
     * @memberof SVGNodeViewModel
     */
    get position(): Point {
        return this.model.position;
    }

    /**
     * Sets the node's position.
     * 
     * @memberof SVGNodeViewModel
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
        this.triggerDataBinder('currentMoveX', this._currentMovePosition.x);
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
     * Creates an instance of SVGNodeViewModel.
     *
     * @memberof SVGNodeViewModel
     */
    public constructor() {
        super();

        this._currentMovePosition = new Point();
        this.currentTransformMatrix = new Array<number>();
    }

    protected initViewModel(): void {

    }


    public mouseDownHandler = (e: MouseEvent) => {
        let selectedElement = <SVGRectElement>e.srcElement;
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
        // selectedElement.onmouseout =
    }

}