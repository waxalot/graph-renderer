import { IGraphNodeRenderer } from "../../interfaces/iGraphNodeRenderer";


/**
 * This interface describes a SVG based graph node renderer.
 * 
 * @export
 * @interface ISVGGraphNodeRenderer
 * @extends {IGraphNodeRenderer}
 */
export interface ISVGGraphNodeRenderer extends IGraphNodeRenderer {

    /**
     * Sets the container element.
     * 
     * @param {Element} containerElement 
     * @memberof IGraphRenderer
     */
    setContainerElement(containerElement: Element): void;

}