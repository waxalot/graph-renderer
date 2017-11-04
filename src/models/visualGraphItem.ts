import { Size } from "./size";
import { Point } from "./point";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { GraphItem } from "./graphItem";
import { ObservableProperty } from "./observableProperty";


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
     * @type {ObservableProperty<Point>}
     * @memberof VisualGraphItem
     */
    public position: ObservableProperty<IVisualGraphItem, Point>;

    /**
     * The size.
     * 
     * @type {ObservableProperty<Size>}
     * @memberof VisualGraphItem
     */
    public size: ObservableProperty<IVisualGraphItem, Size>;

    /**
     * The selection state.
     * 
     * @type {ObservableProperty<boolean>}
     * @memberof VisualGraphItem
     */
    public isSelected: ObservableProperty<IVisualGraphItem, boolean>;


    /**
     * Creates an instance of VisualGraphItem.
     *
     * @memberof VisualGraphItem
     */
    public constructor() {
        super();

        this.position = new ObservableProperty<IVisualGraphItem, Point>(this);
        this.size = new ObservableProperty<IVisualGraphItem, Size>(this);
        this.isSelected = new ObservableProperty<IVisualGraphItem, boolean>(this);
    }

}