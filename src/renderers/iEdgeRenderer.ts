import { IRenderer } from "./";
import { IEdgeViewModel } from "../viewModels";
import { VisualGraphNode, IEdgeRouter } from "../models";


/**
 * This interface describes an edge renderer.
 * 
 * @export
 * @interface IEdgeRenderer
 * @extends {IRenderer<ViewModelType>}
 * @template T 
 * @template EdgeRouterType 
 * @template ViewModelType 
 */
export interface IEdgeRenderer<T extends VisualGraphNode, EdgeRouterType extends IEdgeRouter, ViewModelType extends IEdgeViewModel<T, EdgeRouterType>> extends IRenderer<ViewModelType> {
}