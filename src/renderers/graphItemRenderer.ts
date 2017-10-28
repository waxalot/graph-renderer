import { IGraphItemViewModel } from "../viewModels/interfaces/iGraphItemViewModel";
import { IGraphItemRenderer } from "./interfaces/iGraphItemRenderer";
import { IGraphItem } from "../interfaces/iGraphItem";
import { IVisualGraphItem } from "../interfaces/iVisualGraphItem";


/**
 * The abstract base class for all graph item renderers.
 * 
 * @export
 * @abstract
 * @class GraphItemRenderer
 * @implements {IGraphItemRenderer<TViewModel>}
 * @template TViewModel 
 */
export abstract class GraphItemRenderer<TViewModel extends IGraphItemViewModel<IVisualGraphItem>> implements IGraphItemRenderer<TViewModel> {

    /**
     * Renders the view-model.
     * 
     * @abstract
     * @param {TViewModel} viewModel 
     * @memberof GraphItemRenderer
     */
    public abstract render(viewModel: TViewModel): void;

}