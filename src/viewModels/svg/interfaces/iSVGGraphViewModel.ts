import { ISVGGraphNodeViewModel } from "./iSVGGraphNodeViewModel";
import { IGraphViewModel } from "../../interfaces/iGraphViewModel";


/**
 * This interface describes a SVG based graph view-model.
 * 
 * @export
 * @interface ISVGGraphViewModel
 * @extends {IGraphViewModel}
 */
export interface ISVGGraphViewModel extends IGraphViewModel {

    /**
     * The mouse down event handler.
     * 
     * @memberof ISVGGraphViewModel
     */
    mouseDownHandler: (e: MouseEvent) => void;

}