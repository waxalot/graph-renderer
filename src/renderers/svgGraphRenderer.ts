import { SVGNodeRenderer, IRenderer } from "./";
import { Utils } from "../utils";
import { IGraphViewModel } from "../viewModels";


/**
 * The SVG based implementation of a graph renderer.
 * 
 * @export
 * @class SVGGraphRenderer
 * @implements {IRenderer<IGraphViewModel>}
 */
export class SVGGraphRenderer implements IRenderer<IGraphViewModel> {
    
    private nodeRenderer: SVGNodeRenderer;


    /**
     * Creates an instance of SVGGraphRenderer.
     * @param {SVGNodeRenderer} nodeRenderer 
     * @memberof SVGGraphRenderer
     */
    public constructor(nodeRenderer: SVGNodeRenderer) {
        if (!nodeRenderer) {
            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
        }

        this.nodeRenderer = nodeRenderer;
    }


    /**
     * Renders the graph view-model.
     * 
     * @param {IGraphViewModel} viewModel 
     * @memberof SVGGraphRenderer
     */
    public render(viewModel: IGraphViewModel): void {
        
    }


    // /**
    //  * Creates a new SVG element.
    //  * 
    //  * @private
    //  * @returns {SVGSVGElement} 
    //  * @memberof SVGGraphRenderer
    //  */
    // private createTargetElement(): SVGSVGElement {
    //     let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //     svgElement.classList.add('graph');
    //     return svgElement;
    // }

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