import { IGraphItemViewModel } from "../../viewModels/interfaces/iGraphItemViewModel";
import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";


/**
 * This interface describes a graph item renderer.
 * 
 * @export
 * @interface IGraphItemRenderer
 * @template TViewModel
 */
export interface IGraphItemRenderer<TViewModel extends IGraphItemViewModel<IVisualGraphItem>> {

    /**
     * Renders the view-model.
     * 
     * @param {TViewModel} viewModel 
     * @memberof IGraphItemRenderer
     */
    render(viewModel: TViewModel): void;

}