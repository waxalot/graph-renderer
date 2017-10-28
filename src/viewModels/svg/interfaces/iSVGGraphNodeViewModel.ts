import { IGraphNodeViewModel } from "../../interfaces/iGraphNodeViewModel";


/**
 * This interface describes a SVG based graph node view-model.
 * 
 * @export
 * @interface ISVGGraphNodeViewModel
 * @extends {IGraphNodeViewModel}
 */
export interface ISVGGraphNodeViewModel extends IGraphNodeViewModel {

    /**
     * The mouse down event handler.
     * 
     * @memberof ISVGGraphNodeViewModel
     */
    mouseDownHandler: (e: MouseEvent) => void;

}