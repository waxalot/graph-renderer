import { IRenderer } from "./";
import { IEdgeViewModel } from "../viewModels";
import { VisualGraphNode } from "../models/visualGraphNode";


/**
 * This interface describes an edge renderer.
 * 
 * @export
 * @interface IEdgeRenderer
 * @extends {IRenderer<IEdgeViewModel<T>>}
 * @template T 
 */
export interface IEdgeRenderer<T extends VisualGraphNode> extends IRenderer<IEdgeViewModel<T>> {
}