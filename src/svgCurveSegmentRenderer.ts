import { CurveSegment } from "./models/curveSegment";
import { ICurveSegmentRenderer } from "./interfaces/iCurveSegmentRenderer";


/**
 * The SVG based implementation of a curve segment renderer.
 * 
 * @export
 * @class SVGCurveSegmentRenderer
 */
export class SVGCurveSegmentRenderer implements ICurveSegmentRenderer {

    private svgElement: SVGSVGElement;
    private pathElement: SVGPathElement;
    private startPosSVGPoint: SVGPoint;
    private endPosSVGPoint: any;
    private ctrlPos1SVGPoint: any;
    private ctrlPos2SVGPoint: any;


    /**
     * Creates an instance of SVGCurveSegmentRenderer.
     *
     * @param {SVGSVGElement} svgElement 
     * @memberof SVGCurveSegmentRenderer
     */
    public constructor(svgElement: SVGSVGElement) {
        if (!svgElement) {
            throw new ReferenceError('The argument "svgElement" is null or undefined.');
        }

        this.svgElement = svgElement;

        this.startPosSVGPoint = this.svgElement.createSVGPoint();
        this.endPosSVGPoint = this.svgElement.createSVGPoint();
        this.ctrlPos1SVGPoint = this.svgElement.createSVGPoint();
        this.ctrlPos2SVGPoint = this.svgElement.createSVGPoint();
    }


    /**
     * Renders the curve segment.
     * 
     * @param {CurveSegment} curveSegment 
     * @memberof SVGCurveSegmentRenderer
     */
    public render(curveSegment: CurveSegment): void {

        if (!this.pathElement) {
            this.pathElement = this.createPathElement();
        }

        // startPos
        this.startPosSVGPoint.x = curveSegment.startPos.x;
        this.startPosSVGPoint.y = curveSegment.startPos.y;
        this.startPosSVGPoint = this.startPosSVGPoint.matrixTransform(this.svgElement.getScreenCTM().inverse());

        // endPos
        this.endPosSVGPoint.x = curveSegment.endPos.x;
        this.endPosSVGPoint.y = curveSegment.endPos.y;
        this.endPosSVGPoint = this.endPosSVGPoint.matrixTransform(this.svgElement.getScreenCTM().inverse());

        // deltas
        var dxStartEnd = this.endPosSVGPoint.x - this.startPosSVGPoint.x;
        var dyStartEnd = this.endPosSVGPoint.y - this.startPosSVGPoint.y;

        // control point1
        this.ctrlPos1SVGPoint.x = this.startPosSVGPoint.x + dxStartEnd * 0.75;
        this.ctrlPos1SVGPoint.y = this.startPosSVGPoint.y;

        // control point2
        this.ctrlPos2SVGPoint.x = this.endPosSVGPoint.x - dxStartEnd * 0.75;
        this.ctrlPos2SVGPoint.y = this.endPosSVGPoint.y;

        // curve
        var d = "M" + this.startPosSVGPoint.x + "," + this.startPosSVGPoint.y +
            " C" + this.ctrlPos1SVGPoint.x + "," + this.ctrlPos1SVGPoint.y + " " + this.ctrlPos2SVGPoint.x + "," + this.ctrlPos2SVGPoint.y +
            " " + this.endPosSVGPoint.x + "," + this.endPosSVGPoint.y;

        this.pathElement.setAttribute("d", d);
    }


    /**
     * Creates a new SVG path element.
     * 
     * @private
     * @returns {SVGPathElement} 
     * @memberof SVGCurveSegmentRenderer
     */
    private createPathElement(): SVGPathElement {
        return document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }

}