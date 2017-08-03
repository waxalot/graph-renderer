import { INodeViewModel } from "../viewModels";
import { IRenderer } from "./";
import { VisualGraphNode } from "../models";


/**
 * This interface describes a node renderer.
 * 
 * @export
 * @interface INodeRenderer
 * @extends {IRenderer<INodeViewModel<T>>}
 * @template T 
 */
export interface INodeRenderer<T extends VisualGraphNode> extends IRenderer<INodeViewModel<T>> {
}