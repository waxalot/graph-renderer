/**
 * A custom event target interface for the data binder.
 * 
 * @export
 * @interface IDataBindEventTarget
 * @extends {EventTarget}
 */
export interface IDataBindEventTarget extends EventTarget {

    /**
     * The event target's value.
     * 
     * @type {string}
     * @memberof IDataBindEventTarget
     */
    value: string;


    /**
     * Gets the event target's attribute.
     * 
     * @param {string} name 
     * @returns {string} 
     * @memberof IDataBindEventTarget
     */
    getAttribute(name: string): string;

}