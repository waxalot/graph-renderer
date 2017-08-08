import { IEdgeRenderer } from "./";
import { VisualGraphNode, IOrthogonalEdgeRouter } from "../models";
import { IOrthogonalEdgeViewModel } from "../viewModels";


/**
 * This interface describes an edge renderer for an orthogonal edge.
 * 
 * @export
 * @interface IOrthogonalEdgeRenderer
 * @extends {IEdgeRenderer<T, EdgeRouterType, ViewModelType>}
 * @template T 
 * @template EdgeRouterType 
 * @template ViewModelType 
 */
export interface IOrthogonalEdgeRenderer<T extends VisualGraphNode, EdgeRouterType extends IOrthogonalEdgeRouter, ViewModelType extends IOrthogonalEdgeViewModel<T, EdgeRouterType>> extends IEdgeRenderer<T, EdgeRouterType, ViewModelType> {
}