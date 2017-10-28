import { Size } from "./size";
import { Point } from "./point";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { GraphItem } from "./graphItem";
import { IGraphEvent } from "../events/interfaces/iGraphEvent";
import { GraphEvent } from "../events/graphEvent";


/**
 * This class implements a visual graph item.
 * 
 * @export
 * @class VisualGraphItem
 * @implements {IVisualGraphItem}
 */
export class VisualGraphItem extends GraphItem implements IVisualGraphItem {

    /**
     * The position.
     * 
     * @type {Point}
     * @memberof VisualGraphItem
     */
    public position: Point;


    /**
     * The size.
     * 
     * @type {Size}
     * @memberof VisualGraphItem
     */
    public size: Size;


    /**
     * The selection changed event.
     * 
     * @type {IGraphEvent<IVisualGraphItem, boolean>}
     * @memberof VisualGraphItem
     */
    public selectionChangedEvent: IGraphEvent<IVisualGraphItem, boolean>;

    /**
     * The selection state.
     * 
     * @private
     * @type {boolean}
     * @memberof VisualGraphItem
     */
    private selected: boolean;

    /**
     * Gets the selection state.
     * 
     * @readonly
     * @type {boolean}
     * @memberof VisualGraphItem
     */
    get isSelected(): boolean {
        return this.isSelected;
    }

    /**
     * Sets the selection state.
     * 
     * @memberof VisualGraphItem
     */
    set isSelected(value: boolean) {
        let hasChanged = this.isSelected !== value;

        this.isSelected = value;
        if (hasChanged) {
            this.onSelectionChanged(this.isSelected);
        }
    }


    /**
     * Triggers the selection changed event.
     * 
     * @private
     * @param {boolean} selected 
     * @memberof VisualGraphNode
     */
    private onSelectionChanged(selected: boolean): void {
        if (this.selectionChangedEvent) {
            this.selectionChangedEvent.invoke(this, selected);
        }
    }


    /**
     * Creates an instance of VisualGraphItem.
     *
     * @memberof VisualGraphItem
     */
    public constructor() {
        super();

        this.selectionChangedEvent = new GraphEvent<IVisualGraphItem, boolean>();
    }

}