import { Guid } from "../models";


/**
 * The base class of all SVG based view-models.
 * 
 * @export
 * @abstract
 * @class SVGViewModel
 */
export abstract class SVGViewModel {

    /**
     * The view-model's guid.
     * 
     * @type {string}
     * @memberof SVGViewModel
     */
    public readonly guid: string;


    /**
     * Creates an instance of SVGViewModel.
     * @memberof SVGViewModel
     */
    public constructor() {
        this.guid = Guid.newGuid();
    }

}