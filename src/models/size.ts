/**
 * A 2D size representation.
 * 
 * @export
 * @class Size
 */
export class Size {

    /**
     * The width.
     * 
     * @type {number}
     * @memberof Size
     */
    public width: number;


    /**
     * The height.
     * 
     * @type {number}
     * @memberof Size
     */
    public height: number;


    /**
     * Creates an instance of Size.
     *
     * @param {number} [width=0] 
     * @param {number} [height=0] 
     * @memberof Size
     */
    public constructor(width: number = 0, height: number = 0) {
        this.width = width;
        this.height = height;
    }

}