/**
 * A 2D point representation.
 * 
 * @export
 * @class Point
 */
export class Point {

    /**
     * The x coordinate.
     * 
     * @type {number}
     * @memberof Point
     */
    public x: number;


    /**
     * The y coordinate.
     * 
     * @type {number}
     * @memberof Point
     */
    public y: number;


    /**
     * Creates an instance of Point.
     *
     * @param {number} [x=0] 
     * @param {number} [y=0] 
     * @memberof Point
     */
    public constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

}