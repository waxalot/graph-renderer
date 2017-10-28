import { IGraphRenderer } from "../../renderers/interfaces/iGraphRenderer";
import { IGraphNodeRenderer } from "../../renderers/interfaces/iGraphNodeRenderer";


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
     * Creates an instance of {IGraphNodeRenderer}.
     * 
     * @returns {IGraphNodeRenderer} 
     * @memberof IRenderersFactory
     */
    createNodeRenderer(): IGraphNodeRenderer;


    // /**
    //  * Creates an instance of {IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>}.
    //  * 
    //  * @returns {IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>} 
    //  * @memberof IRenderersFactory
    //  */
    // createOrthogonalEdgeRenderer(): IEdgeRenderer<VisualGraphNode, IOrthogonalEdgeRouter, IEdgeViewModel<VisualGraphNode, IOrthogonalEdgeRouter>>;

}