import { Guid } from "./guid";


/**
 * The base class for all graph related models.
 * 
 * @export
 * @abstract
 * @class GraphItem
 */
export abstract class GraphItem {

    /**
     * The graph item's identifier.
     * 
     * @public
     * @type {string}
     * @memberof GraphItem
     */
    public readonly guid: string;


    /**
     * Creates an instance of GraphItem.
     *
     * @memberof GraphItem
     */
    public constructor() {
        this.guid = Guid.newGuid();
    }

}