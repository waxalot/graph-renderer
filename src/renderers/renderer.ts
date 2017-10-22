import { IRenderer } from "./interfaces/iRenderer";


/**
 * The abstract base class for renderers.
 * 
 * @export
 * @abstract
 * @class Renderer
 * @implements {IRenderer<ViewModelType>}
 * @template ViewModelType 
 */
export abstract class Renderer<ViewModelType> implements IRenderer<ViewModelType> {

    /**
     * Renders the view-model.
     * 
     * @abstract
     * @param {ViewModelType} viewModel 
     * @memberof Renderer
     */
    public abstract render(viewModel: ViewModelType): void;

}