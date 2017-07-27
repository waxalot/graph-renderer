import { IViewModel, IEdgeViewModel, INodeViewModel } from "./";
import { Size } from "../models";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel}
 */
export interface IGraphViewModel extends IViewModel {

    /**
     * The graph's size.
     * 
     * @returns {Size} 
     * @memberof IGraphViewModel
     */
    size: Size;


    /**
     * A collection of the graph's node view-models.
     * 
     * @type {Array<INodeViewModel>}
     * @memberof IGraphViewModel
     */
    nodes: Array<INodeViewModel>;


    /**
    * A collection of the graph's edge view-models.
    * 
    * @type {Array<IEdgeViewModel>}
    * @memberof IGraphViewModel
    */
    connections: Array<IEdgeViewModel>;

}