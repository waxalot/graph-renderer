import { IViewModel, IEdgeViewModel, INodeViewModel } from "./";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel}
 */
export interface IGraphViewModel extends IViewModel {

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