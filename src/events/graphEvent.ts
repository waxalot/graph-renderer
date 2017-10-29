import { IGraphEventListener } from "./interfaces/iGraphEventListener";
import { IGraphEvent } from "./interfaces/iGraphEvent";
import { Utils } from "../utils";


/**
 * The representation of an event.
 * 
 * @export
 * @class GraphEvent
 */
export class GraphEvent<TSource, UValue> implements IGraphEvent<TSource, UValue> {

    private eventListeners: Array<IGraphEventListener<TSource, UValue>>;


    /**
     * Gets the number of added event listeners.
     * 
     * @readonly
     * @type {number}
     * @memberof GraphEvent
     */
    get count(): number {
        if (this.eventListeners) {
            return this.eventListeners.length;
        } else {
            return 0;
        }
    }


    /**
     * Creates an instance of GraphEvent.
     *
     * @memberof GraphEvent
     */
    public constructor() {
        this.eventListeners = new Array<IGraphEventListener<TSource, UValue>>();
    }


    /**
     * Adds a listener to the event.
     * 
     * @param {IGraphEventListener<TSource, UValue>} eventListener 
     * @returns 
     * @memberof GraphEvent
     */
    public addEventListener(listener: IGraphEventListener<TSource, UValue>) {
        if (!listener) {
            Utils.throwReferenceError('listener');
        }

        this.eventListeners.push(listener);
    }


    /**
     * Invokes the event.
     * 
     * @param {TSource} sender 
     * @param {UValue} args 
     * @memberof GraphEvent
     */
    public invoke(sender: TSource, args: UValue) {
        if (this.eventListeners && this.eventListeners.length > 0) {
            let listenersCount = this.eventListeners.length;
            for (let i = 0; i < listenersCount; i++) {
                this.eventListeners[i](sender, args);
            }
        }
    }

}