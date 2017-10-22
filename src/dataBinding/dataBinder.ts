import { DataBindPubSub } from "./dataBindPubSub";
import { IPubSubCallback } from "./interfaces/iPubSubCallback";


/**
 * The view-model to DOM data binder.
 * 
 * @export
 * @class DataBinder
 */
export class DataBinder {

    private pubSub: DataBindPubSub;
    private dataAttribute: string;
    private message: string;


    /**
     * Creates an instance of DataBinder.
     * @memberof DataBinder
     */
    public constructor(guid: string) {
        this.pubSub = new DataBindPubSub();

        this.dataAttribute = 'data-bind-' + guid;
        this.message = guid + ':change';

        if (document.addEventListener) {
            document.addEventListener("change", (evt) => {
                console.log(evt);
            }, false);
        }
    }


    /**
     * Publishes the given message.
     * 
     * @param {string} message 
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof DataBinder
     */
    public publish(message: string, propertyName: string, value: any, initiator: any) {
        this.pubSub.publish(message, propertyName, value, initiator);
    }


    /**
     * Subscribes the given callback to the given message.
     * 
     * @param {string} message 
     * @param {IPubSubCallback} callback 
     * @memberof DataBinder
     */
    public subscribe(message: string, callback: IPubSubCallback) {
        this.pubSub.subscribe(message, callback);
    }


    /**
     * Initializes the data binder.
     * 
     * @private
     * @memberof DataBinder
     */
    private init(): void {
        // Subscribe to the change of all bound elements
        this.pubSub.subscribe(this.message, this.messageHandler);
    }


    /**
     * The pubSub message handler.
     * 
     * @private
     * @memberof DataBinder
     */
    private messageHandler = (evtMsg: string, propertyName: string, newValue: string) => {
        let elements = document.querySelectorAll('[' + this.dataAttribute + '=' + propertyName + ']');
        let tagName: string;

        let tempElement: Element;
        let elementsCounts = elements.length;
        for (let i = 0; i < elementsCounts; i++) {
            tempElement = elements[i];
            tempElement.setAttribute(propertyName, newValue);
        }
    }

}