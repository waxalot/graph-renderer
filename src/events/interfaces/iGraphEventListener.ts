/**
 * This interface describes an event listener.
 * 
 * @export
 * @interface IGraphEventListener
 */
export interface IGraphEventListener<TSource, UValue> {

    (source: TSource, value: UValue): void;

}