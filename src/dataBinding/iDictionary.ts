/**
 * A generic dictionary interface.
 * 
 * @export
 * @interface IDictionary
 * @template T 
 */
export interface IDictionary<T> {
    [index: string]: T;
}