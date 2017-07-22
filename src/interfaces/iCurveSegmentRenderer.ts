import { CurveSegment } from "../models/curveSegment";


/**
 * This interface describes a Bezier curve segment renderer.
 * 
 * @export
 * @interface ICurveSegmentRenderer
 */
export interface ICurveSegmentRenderer {

    /**
     * Renders the curve segment.
     * 
     * @memberof ICurveSegmentRenderer
     */
    render(curveSegment: CurveSegment): void;

}