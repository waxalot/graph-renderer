import { IViewModel } from "../viewModels";


/**
 * This interface describes a renderer.
 * 
 * @export
 * @interface IRenderer
 * @template ViewModelType 
 */
export interface IRenderer<ViewModelType> {

    /**
     * Renders the view-model.
     * 
     * @param {ViewModelType} viewModel 
     * @memberof IRenderer
     */
    render(viewModel: ViewModelType): void;

}