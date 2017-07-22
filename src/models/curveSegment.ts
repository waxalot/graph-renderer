import { Point } from "./point";


/**
 * A representation of a Bezier curve segment.
 * 
 * @export
 * @class CurveSegment
 */
export class CurveSegment {

    /**
     * The start point of the segment.
     * 
     * @type {Point}
     * @memberof CurveSegment
     */
    public startPos: Point;

    /**
     * The end point of the segment.
     * 
     * @type {Point}
     * @memberof CurveSegment
     */
    public endPos: Point;


    /**
     * The position of the first control point.
     * 
     * @type {Point}
     * @memberof CurveSegment
     */
    public ctrlPos1: Point;


    /**
     * The position of the second control point.
     * 
     * @type {Point}
     * @memberof CurveSegment
     */
    public ctrlPos2: Point;


    /**
     * Creates an instance of CurveSegment.
     *
     * @memberof CurveSegment
     */
    public constructor() {
        this.startPos = new Point();
        this.endPos = new Point();
        this.ctrlPos1 = new Point();
        this.ctrlPos2 = new Point();
    }

}