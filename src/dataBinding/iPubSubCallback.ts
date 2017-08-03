/**
 * This interface describes a PubSub callback handler.
 * 
 * @export
 * @interface IPubSubCallback
 */
export interface IPubSubCallback {

    (propertyName: string, value: any, initiator: any): void;

}