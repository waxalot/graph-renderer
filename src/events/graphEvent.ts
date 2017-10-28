import { IGraphEventListener } from "./interfaces/iGraphEventListener";
import { IGraphEvent } from "./interfaces/iGraphEvent";


/**
 * The representation of an event.
 * 
 * @export
 * @class GraphEvent
 */
export class GraphEvent<TSource, UValue> implements IGraphEvent<TSource, UValue> {

    private eventListeners: Array<IGraphEventListener<TSource, UValue>>;


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
            return;
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