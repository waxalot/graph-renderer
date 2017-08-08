import { Utils } from "../utils";
import { IGraphViewModel, SVGGraphViewModel } from "../viewModels";
import { SVGUtils } from "./svgUtils";
import { IGraphRenderer, Renderer, SVGRenderer, SVGNodeRenderer, IRenderer } from "./";
import { VisualGraph, VisualGraphNode } from "../models";


/**
 * The SVG based implementation of a graph renderer.
 * 
 * @export
 * @class SVGGraphRenderer
 * @extends {SVGRenderer<T, SVGGraphViewModel<T, TNode>>}
 * @implements {IGraphRenderer<T, TNode>}
 * @template T 
 * @template TNode 
 */
export class SVGGraphRenderer<T extends VisualGraph, TNode extends VisualGraphNode> extends SVGRenderer<T, SVGGraphViewModel<T, TNode>> implements IGraphRenderer<T, TNode> {

    private containerElement: Element;
    private nodeRenderer: SVGNodeRenderer<VisualGraphNode>;
    //private edgeRenderer: SVGEdgeRenderer<VisualGraphNode>;


    /**
     * Creates an instance of SVGGraphRenderer.
     *
     * @param {SVGNodeRenderer<VisualGraphNode>} nodeRenderer 
     * @param {SVGEdgeRenderer<VisualGraphEdge>} edgeRenderer 
     * @memberof SVGGraphRenderer
     */
    public constructor(nodeRenderer: SVGNodeRenderer<VisualGraphNode>) {
        super();

        if (!nodeRenderer) {
            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
        }

        this.nodeRenderer = nodeRenderer;
        //this.edgeRenderer = edgeRenderer;
    }


    /**
     * Sets the graph's container element.
     * 
     * @param {Element} containerElement 
     * @memberof SVGGraphRenderer
     */
    public setContainerElement(containerElement: Element): void {
        if (!containerElement) {
            Utils.throwReferenceError('containerElement');
        }

        this.containerElement = containerElement;
    }


    /**
     * Renders the graph view-model.
     * 
     * @param {SVGGraphViewModel} viewModel 
     * @memberof SVGGraphRenderer
     */
    public render(viewModel: SVGGraphViewModel<T, TNode>): void {
        if (!this.containerElement) {
            throw new Error('No container element was set. Call setContainerElement() before!')
        }

        // Render the graph's target
        let graphTargetElement = this.createTargetElement<SVGSVGElement>('svg', viewModel);

        // Define the viewport coordinate system.
        graphTargetElement.setAttribute('width', '800');
        graphTargetElement.setAttribute('height', '600');
        // Define the user coordinate system.
        graphTargetElement.setAttribute('viewbox', '0 0 800, 600');

        graphTargetElement.classList.add('graph');
        this.containerElement.appendChild(graphTargetElement);

        // // Render all graph edges
        // if (viewModel.connections && viewModel.connections.length > 0) {
        //     viewModel.connections.forEach((edgeVM) => {
        //         this.edgeRenderer.setContainerElement(graphTargetElement);
        //         this.edgeRenderer.render(edgeVM);
        //     });
        // }

        // Render all graph nodes
        if (viewModel.nodes && viewModel.nodes.length > 0) {
            viewModel.nodes.forEach((nodeVM) => {
                this.nodeRenderer.setContainerElement(graphTargetElement);
                this.nodeRenderer.render(nodeVM);
            });
        }

    }


    // /**
    //  * Gets the target element.
    //  * 
    //  * @param {ViewModelType} viewModel 
    //  * @param {Element} [containerElement] 
    //  * @returns {TargetElementType} 
    //  * @memberof Renderer
    //  */
    // public getTargetElement(viewModel: ViewModelType, containerElement?: Element): TargetElementType {
    //     if (!viewModel) {
    //         Utils.throwReferenceError('viewModel');
    //     }

    //     let foundElement: TargetElementType;
    //     try {
    //         if (containerElement) {
    //             foundElement = <TargetElementType><any>containerElement.querySelector('[data-graph-guid="' + viewModel.guid + '"]');
    //         } else {
    //             foundElement = <TargetElementType><any>document.querySelector('[data-graph-guid="' + viewModel.guid + '"]');
    //         }
    //     } catch (e) {
    //         foundElement = null;
    //     }

    //     return foundElement;
    // }   

}