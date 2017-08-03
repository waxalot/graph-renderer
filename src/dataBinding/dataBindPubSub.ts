import { IDictionary, IPubSubCallback } from "./";


/**
 * The PubSub implementation for the data binder.
 * 
 * @export
 * @class DataBindPubSub
 */
export class DataBindPubSub {

    private callbacks: IDictionary<Array<IPubSubCallback>>;


    /**
     * Creates an instance of DataBindPubSub.
     *
     * @memberof DataBindPubSub
     */
    public constructor() {
        this.callbacks = {};
    }


    /**
     * Subscribes a callback related to the given message.
     * 
     * @param {string} message 
     * @param {IPubSubCallback} callback 
     * @memberof DataBindPubSub
     */
    public subscribe(message: string, callback: IPubSubCallback) {
        if (!this.callbacks[message]) {
            this.callbacks[message] = new Array<IPubSubCallback>();
        }

        this.callbacks[message].push(callback);
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
        if (this.callbacks[message]) {
            let callbacksCount = this.callbacks[message].length;
            for (let i = 0; i < callbacksCount; i++) {
                this.callbacks[message][i](propertyName, value, initiator);
            }
        }
    }

}