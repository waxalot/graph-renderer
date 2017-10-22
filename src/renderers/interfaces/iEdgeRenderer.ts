import { VisualGraphNode } from "../../models/visualGraphNode";
import { IEdgeRouter } from "../../interfaces/iEdgeRouter";
import { IEdgeViewModel } from "../../viewModels/interfaces/iEdgeViewModel";
import { IRenderer } from "./iRenderer";


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