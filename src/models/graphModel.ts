import { Size } from "./size";


/**
 * The base class for all graph related models.
 * 
 * @export
 * @abstract
 * @class GraphModel
 */
export abstract class GraphModel {

    /**
     * The model's size.
     * 
     * @type {Size}
     * @memberof GraphModel
     */
    public size: Size;


    /**
     * Creates an instance of GraphModel.
     *
     * @param {Size} [size] 
     * @memberof GraphModel
     */
    public constructor(size?: Size) {
        this.size = size;
        if (!this.size) {
            this.size = new Size();
        }
    }

}