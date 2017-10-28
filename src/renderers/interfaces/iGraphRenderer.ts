import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";
import { IGraphItemRenderer } from "./iGraphItemRenderer";
import { IGraphNodeViewModel } from "../../viewModels/interfaces/iGraphNodeViewModel";


/**
 * This interface describes a graph renderer.
 * 
 * @export
 * @interface IGraphRenderer
 * @extends {IGraphItemRenderer<IGraphViewModel>}
 */
export interface IGraphRenderer extends IGraphItemRenderer<IGraphViewModel> {

    /**
     * Sets the container element.
     * 
     * @param {Element} containerElement 
     * @memberof IGraphRenderer
     */
    setContainerElement(containerElement: Element): void;

}