import { IRenderer } from "../renderers";
import { IGraphViewModel, INodeViewModel } from "../viewModels";


/**
 * The abstract definition for renderers factories.
 * 
 * @export
 * @interface IRenderersFactory
 */
export interface IRenderersFactory {

    /**
     * Creates an instance of {IGraphRenderer}.
     * 
     * @returns {IRenderer<IGraphViewModel>} 
     * @memberof IRenderersFactory
     */
    createGraphRenderer(): IRenderer<IGraphViewModel>;


    /**
     * Creates an instance of {INodeRenderer}.
     * 
     * @returns {IRenderer<INodeViewModel>} 
     * @memberof IRenderersFactory
     */
    createNodeRenderer(): IRenderer<INodeViewModel>;

}