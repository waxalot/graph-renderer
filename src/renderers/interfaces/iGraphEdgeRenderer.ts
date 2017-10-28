import { IGraphEdgeViewModel } from "../../viewModels/interfaces/iGraphEdgeViewModel";
import { IGraphItemRenderer } from "./iGraphItemRenderer";


/**
 * This interface describes a graph edge renderer.
 * 
 * @export
 * @interface IGraphEdgeRenderer
 * @extends {IGraphItemRenderer<IGraphEdgeViewModel>}
 */
export interface IGraphEdgeRenderer extends IGraphItemRenderer<IGraphEdgeViewModel> {
}