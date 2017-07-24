import { IGraphViewModel } from "../viewModels";
import { IRenderer } from "./";


/**
 * This interface describes a graph renderer.
 * 
 * @export
 * @interface IGraphRenderer
 * @extends {IRenderer<IGraphViewModel>}
 */
export interface IGraphRenderer extends IRenderer<IGraphViewModel> {

    /**
     * Sets the graph's container element.
     * 
     * @param {Element} containerElement 
     * @memberof IGraphRenderer
     */
    setContainerElement(containerElement: Element): void;

}