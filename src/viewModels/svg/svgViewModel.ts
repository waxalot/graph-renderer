import { IViewModel } from "../interfaces/iViewModel";
import { DataBinder } from "../../dataBinding/dataBinder";
import { Guid } from "../../models/guid";


/**
 * The base class of all SVG based view-models.
 * 
 * @export
 * @abstract
 * @class SVGViewModel
 * @implements {IViewModel<T>}
 * @template T 
 */
export abstract class SVGViewModel<T> implements IViewModel<T> {

    /**
     * The data binder.
     * 
     * @type {DataBinder}
     * @memberof SVGViewModel
     */
    public dataBinder: DataBinder;


    /**
     * The view-model's guid.
     * 
     * @type {string}
     * @memberof SVGViewModel
     */
    public readonly guid: string;


    /**
    * The data bind change message.
    * 
    * @protected
    * @type {string}
    * @memberof SVGViewModel
    */
    private dataBindChangeMessage: string;


    /**
     * Creates an instance of SVGViewModel.
     * @memberof SVGViewModel
     */
    public constructor() {
        this.guid = Guid.newGuid();

        this.dataBinder = new DataBinder(this.guid);
        this.dataBindChangeMessage = this.guid + ':change';
    }


    /**
     * Initializes the view-model instance.
     * 
     * @protected
     * @abstract
     * @memberof SVGViewModel
     */
    protected abstract initViewModel(): void;


    /**
     * Returns the data bind change message for this instance.
     * 
     * @public
     * @returns {string} 
     * @memberof SVGViewModel
     */
    public getDataBindChangeMessage(): string {
        return this.dataBindChangeMessage;
    }


    /**
     * Triggers the data binder for the given property.
     * 
     * @protected
     * @param {string} propertyName 
     * @param {*} value 
     * @memberof SVGViewModel
     */
    protected triggerDataBinder(propertyName: string, value: any) {
        this.dataBinder.publish(this.dataBindChangeMessage, propertyName, value, this);
    }

}