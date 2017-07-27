import { Guid, Point, Size, GraphModel } from "../models";
import { IViewModel } from "./";
import { Utils } from "../utils";


/**
 * The base class of all SVG based view-models.
 * 
 * @export
 * @abstract
 * @class SVGViewModel
 */
export abstract class SVGViewModel<ModelType extends GraphModel> implements IViewModel {

    /**
     * Indicates whether the view-model is selected.
     * 
     * @type {boolean}
     * @memberof SVGViewModel
     */
    public isSelected: boolean;


    /**
     * The view-model's guid.
     * 
     * @type {string}
     * @memberof SVGViewModel
     */
    public readonly guid: string;


    /**
     * Gets the node's size.
     * 
     * @type {Size}
     * @memberof SVGNodeViewModel
     */
    get size(): Size {
        return this.model.size;
    }

    /**
     * Sets the node's size.
     * 
     * @memberof SVGNodeViewModel
     */
    set size(value: Size) {
        this.model.size = value;
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


    protected model: ModelType;


    /**
     * Creates an instance of SVGViewModel.
     * @memberof SVGViewModel
     */
    public constructor() {
        this.guid = Guid.newGuid();

        this._currentMovePosition = new Point();
        this.currentTransformMatrix = new Array<number>();
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