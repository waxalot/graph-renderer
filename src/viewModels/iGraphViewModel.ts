import { INodeViewModel, IViewModel } from "./";


/**
 * This interface describes a graph view-model.
 * 
 * @export
 * @interface IGraphViewModel
 * @extends {IViewModel}
 */
export interface IGraphViewModel extends IViewModel {

    /**
     * Gets all graph nodes view-models.
     * 
     * @returns {Array<INodeViewModel>} 
     * @memberof IGraphViewModel
     */
    getNodes(): Array<INodeViewModel>;

}