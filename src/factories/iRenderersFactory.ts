import { IRenderer } from "../renderers";
import { INodeViewModel, IEdgeViewModel } from "../viewModels";
import { IGraphRenderer } from "../renderers/iGraphRenderer";


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
     * @returns {IGraphRenderer} 
     * @memberof IRenderersFactory
     */
    createGraphRenderer(): IGraphRenderer;


    /**
     * Creates an instance of IRenderer<INodeViewModel>.
     * 
     * @returns {IRenderer<INodeViewModel>} 
     * @memberof IRenderersFactory
     */
    createNodeRenderer(): IRenderer<INodeViewModel>;


    /**
     * Creates an instance of IRenderer<IEdgeViewModel>.
     * 
     * @returns {IRenderer<IEdgeViewModel>} 
     * @memberof IRenderersFactory
     */
    createEdgeRenderer(): IRenderer<IEdgeViewModel>;

}