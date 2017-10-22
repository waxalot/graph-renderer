import { IPubSubCallback } from "./interfaces/iPubSubCallback";


/**
 * The PubSub implementation for the data binder.
 * 
 * @export
 * @class DataBindPubSub
 */
export class DataBindPubSub {

    private callbacks: Map<string, Array<IPubSubCallback>>;


    /**
     * Creates an instance of DataBindPubSub.
     *
     * @memberof DataBindPubSub
     */
    public constructor() {
        this.callbacks = new Map<string, Array<IPubSubCallback>>();
    }


    /**
     * Subscribes a callback related to the given message.
     * 
     * @param {string} message 
     * @param {IPubSubCallback} callback 
     * @memberof DataBindPubSub
     */
    public subscribe(message: string, callback: IPubSubCallback) {
        if (!this.callbacks.has(message)) {
            this.callbacks.set(message, new Array<IPubSubCallback>());
        }

        this.callbacks.get(message).push(callback);
    }


    /**
     * Publishes the arguments related to the given message.
     * 
     * @param {string} message 
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof DataBindPubSub
     */
    public publish(message: string, propertyName: string, value: any, initiator: any) {
        if (this.callbacks.has(message)) {
            let callbacksCount = this.callbacks.get(message).length;
            for (let i = 0; i < callbacksCount; i++) {
                this.callbacks.get(message)[i](propertyName, value, initiator);
            }
        }
    }

}