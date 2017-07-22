import { CurveSegment } from "./curveSegment";


/**
 * A representation of a Bezier curve.
 * 
 * @export
 * @class Curve
 */
export class Curve {

    /**
     * The curve segments.
     * 
     * @type {Array<CurveSegment>}
     * @memberof Curve
     */
    public segments: Array<CurveSegment>;


    /**
     * Creates an instance of Curve.
     *
     * @memberof Curve
     */
    public constructor() {
        this.segments = new Array<CurveSegment>();
    }

}