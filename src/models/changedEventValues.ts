/**
 * This class describes the values of a changed event.
 * 
 * @export
 * @class ChangedEventValues
 * @template T 
 */
export class ChangedEventValuePair<T> {

    /**
     * The old value.
     * 
     * @type {T}
     * @memberof ChangedEventValuePair
     */
    public oldValue: T;

    /**
     * The new value.
     * 
     * @type {T}
     * @memberof ChangedEventValuePair
     */
    public newValue: T;

    /**
     * Determines whether the values are equal.
     * 
     * @returns {boolean} 
     * @memberof ChangedEventValuePair
     */
    public areEqual(): boolean {
        // JSON.stringify() will be maybe changed for a better performance.
        return JSON.stringify(this.oldValue) === JSON.stringify(this.newValue);
    }

}