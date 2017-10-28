import { IGraphItemRenderer } from "./iGraphItemRenderer";
import { IGraphNodeViewModel } from "../../viewModels/interfaces/iGraphNodeViewModel";


/**
 * This interface describes a graph node renderer.
 * 
 * @export
 * @interface IGraphNodeRenderer
 * @extends {IGraphItemRenderer<IGraphNodeViewModel>}
 */
export interface IGraphNodeRenderer extends IGraphItemRenderer<IGraphNodeViewModel> {
}