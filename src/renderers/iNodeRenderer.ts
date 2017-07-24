import { INodeViewModel } from "../viewModels";
import { IRenderer } from "./";


/**
 * This interface describes a node renderer.
 * 
 * @export
 * @interface INodeRenderer
 * @extends {IRenderer<INodeViewModel>}
 */
export interface INodeRenderer extends IRenderer<INodeViewModel> {
}