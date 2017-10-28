import { IGraphItemRenderer } from "../../interfaces/iGraphItemRenderer";
import { ISVGGraphItemViewModel } from "../../../viewModels/svg/interfaces/iSVGGraphItemViewModel";
import { IVisualGraphItem } from "../../../interfaces/iVisualGraphItem";


/**
 * This interface describes a SVG based graph item renderer.
 * 
 * @export
 * @interface ISVGGraphItemRenderer
 * @extends {IGraphItemRenderer<ISVGGraphItemViewModel<IVisualGraphItem>>}
 */
export interface ISVGGraphItemRenderer extends IGraphItemRenderer<ISVGGraphItemViewModel<IVisualGraphItem>> {

}