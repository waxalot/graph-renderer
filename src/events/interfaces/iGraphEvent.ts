import { IGraphEventListener } from "./iGraphEventListener";


/**
 * This interface describes an event.
 * 
 * @export
 * @interface IGraphEvent
 */
export interface IGraphEvent<TSource, UValue> {

    /**
     * Adds a listener to the event.
     * 
     * @param {IGraphEventListener<TSource, UValue>} eventListener 
     * @returns 
     * @memberof IGraphEvent
     */
    addEventListener(listener: IGraphEventListener<TSource, UValue>): void;


    /**
     * Invokes the event.
     * 
     * @param {TSource} source 
     * @param {UValue} args 
     * @memberof IGraphEvent
     */
    invoke(source: TSource, args: UValue): void;

}