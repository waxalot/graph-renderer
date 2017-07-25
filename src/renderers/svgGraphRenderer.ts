import { SVGNodeRenderer, IRenderer } from "./";
import { Utils } from "../utils";
import { IGraphViewModel, SVGGraphViewModel } from "../viewModels";
import { IGraphRenderer } from "./iGraphRenderer";
import { SVGUtils } from "./svgUtils";
import { Renderer } from "./renderer";
import { SVGRenderer } from "./svgRenderer";


/**
 * The SVG based implementation of a graph renderer.
 * 
 * @export
 * @class SVGGraphRenderer
 * @implements {IGraphRenderer}
 */
export class SVGGraphRenderer extends SVGRenderer<SVGGraphViewModel> implements IGraphRenderer {

    private containerElement: Element;
    private nodeRenderer: SVGNodeRenderer;


    /**
     * Creates an instance of SVGGraphRenderer.
     * @param {SVGNodeRenderer} nodeRenderer 
     * @memberof SVGGraphRenderer
     */
    public constructor(nodeRenderer: SVGNodeRenderer) {
        super();

        if (!nodeRenderer) {
            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
        }

        this.nodeRenderer = nodeRenderer;
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
    public render(viewModel: SVGGraphViewModel): void {
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

    // /**
    //  * Updates the target element.
    //  * 
    //  * @param {SVGSVGElement} targetElement 
    //  * @param {IGraphViewModel} viewModel 
    //  * @memberof SVGGraphRenderer
    //  */
    // public update(targetElement: SVGSVGElement, viewModel: IGraphViewModel): void {
    //     if (!viewModel) {
    //         Utils.throwReferenceError('viewModel');
    //     }


    //     // // Render the graph
    //     // let svgElement = graphVM.targetContainerElement.querySelector('svg');
    //     // if (!svgElement) {
    //     //     svgElement = this.createTargetElement();
    //     //     graphVM.targetElement = svgElement;
    //     //     graphVM.targetContainerElement.appendChild(svgElement);
    //     // }

    //     // // Render all nodes
    //     // let tempNodes = graphVM.getNodes();
    //     // if (tempNodes && tempNodes.length > 0) {
    //     //     tempNodes.forEach((nodeVM) => {
    //     //         this.nodeRenderer.render(nodeVM);
    //     //     });
    //     // }
    // }

}