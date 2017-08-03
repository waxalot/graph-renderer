import { IGraphViewModel } from "../viewModels";
import { IRenderer } from "./";
import { VisualGraph } from "../models";


/**
 * This interface describes a graph renderer.
 * 
 * @export
 * @interface IGraphRenderer
 * @extends {IRenderer<IGraphViewModel<T>>}
 * @template T 
 */
export interface IGraphRenderer<T extends VisualGraph> extends IRenderer<IGraphViewModel<T>> {

    /**
     * Sets the graph's container element.
     * 
     * @param {Element} containerElement 
     * @memberof IGraphRenderer
     */
    setContainerElement(containerElement: Element): void;

}