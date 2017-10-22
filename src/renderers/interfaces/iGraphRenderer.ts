import { VisualGraph } from "../../models/visualGraph";
import { VisualGraphNode } from "../../models/visualGraphNode";
import { IRenderer } from "./iRenderer";
import { IGraphViewModel } from "../../viewModels/interfaces/iGraphViewModel";


/**
 * This interface describes a graph renderer.
 * 
 * @export
 * @interface IGraphRenderer
 * @extends {IRenderer<IGraphViewModel<T, TNode>>}
 * @template T 
 * @template TNode 
 */
export interface IGraphRenderer<T extends VisualGraph, TNode extends VisualGraphNode> extends IRenderer<IGraphViewModel<T, TNode>> {

    /**
     * Sets the graph's container element.
     * 
     * @param {Element} containerElement 
     * @memberof IGraphRenderer
     */
    setContainerElement(containerElement: Element): void;

}