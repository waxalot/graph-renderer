import { IRenderer } from "./";
import { IEdgeViewModel } from "../viewModels";


/**
 * This interface describes an edge renderer.
 * 
 * @export
 * @interface IEdgeRenderer
 * @extends {IRenderer<IEdgeViewModel>}
 */
export interface IEdgeRenderer extends IRenderer<IEdgeViewModel> {
}