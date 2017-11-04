import { IGraphEvent } from "../events/interfaces/iGraphEvent";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";
import { ChangedEventValuePair } from "./changedEventValues";
import { GraphEvent } from "../events/graphEvent";
import { Utils } from "../utils";

/**
 * This class describes an observable property.
 * 
 * @export
 * @class ObservableProperty
 * @template TSource 
 * @template TValue 
 */
export class ObservableProperty<TSource, TValue> {

    /**
     * The value has changed event.
     * 
     * @type {IGraphEvent<ChangedEventValuePair<TValue>>}
     * @memberof ObservableProperty
     */
    public valueChangedEvent: IGraphEvent<TSource, ChangedEventValuePair<TValue>>;

    /**
     * Gets the value.
     * 
     * @readonly
     * @type {TValue}
     * @memberof ObservableProperty
     */
    get value(): TValue {
        return this.values.oldValue;
    }

    /**
     * Sets the value.
     * 
     * @memberof ObservableProperty
     */
    set value(value: TValue) {
        this.values.newValue = value;

        let hasChanged = this.values.areEqual();

        if (hasChanged) {
            this.onValueChanged();

            this.values.oldValue = this.values.newValue;
        }
    }

    /**
     * The property values.
     * 
     * @private
     * @type {ChangedEventValuePair<TValue>}
     * @memberof ObservableProperty
     */
    private values: ChangedEventValuePair<TValue>;

    /**
     * The property's owner instance.
     * 
     * @private
     * @type {TSource}
     * @memberof ObservableProperty
     */
    private propertyOwner: TSource;

    
    /**
     * Creates an instance of ObservableProperty.
     * 
     * @param {TSource} propertyOwner 
     * @memberof ObservableProperty
     */
    public constructor(propertyOwner: TSource) {
        if (!propertyOwner) {
            Utils.throwReferenceError('propertyOwner');
        }

        this.propertyOwner = propertyOwner;

        this.valueChangedEvent = new GraphEvent<TSource, ChangedEventValuePair<TValue>>();
        this.values = new ChangedEventValuePair<TValue>();
    }


    /**
     * Triggers the value has changed event.
     * 
     * @private
     * @memberof ObservableProperty
     */
    private onValueChanged(): void {
        if (this.valueChangedEvent) {
            this.valueChangedEvent.invoke(this.propertyOwner, this.values);
        }
    }

}