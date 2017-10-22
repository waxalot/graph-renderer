import { VisualGraphNode } from "../../models/visualGraphNode";
import { IRenderer } from "./iRenderer";
import { INodeViewModel } from "../../viewModels/interfaces/iNodeViewModel";


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