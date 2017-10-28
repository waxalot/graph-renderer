// import { VisualGraphNode } from "../../models/visualGraphNode";
// import { IOrthogonalEdgeRouter } from "../../interfaces/iOrthogonalEdgeRouter";
// import { SVGOrthogonalEdgeViewModel } from "../../viewModels/svg/svgOrthogonalEdgeViewModel";
// import { IOrthogonalEdgeRenderer } from "../interfaces/iOrthogonalEdgeRenderer";
// import { SVGRenderer } from "./svgRenderer";
// import { Utils } from "../../utils";


// /**
//  * The SVG based implementation of an edge renderer for an orthogonal edge.
//  * 
//  * @export
//  * @class SVGOrthogonalEdgeRenderer
//  * @extends {SVGRenderer<T, SVGEdgeViewModel<T, EdgeRouterType>>}
//  * @implements {IOrthogonalEdgeRenderer<T, EdgeRouterType, ViewModelType>}
//  * @template T 
//  * @template EdgeRouterType 
//  * @template ViewModelType 
//  */
// export class SVGOrthogonalEdgeRenderer<T extends VisualGraphNode, EdgeRouterType extends IOrthogonalEdgeRouter, ViewModelType extends SVGOrthogonalEdgeViewModel<T, EdgeRouterType>> extends SVGRenderer<T, SVGOrthogonalEdgeViewModel<T, EdgeRouterType>> implements IOrthogonalEdgeRenderer<T, EdgeRouterType, ViewModelType> {

//     /**
//      * Renders the edge view-model.
//      * 
//      * @param {SVGEdgeViewModel} viewModel 
//      * @memberof SVGEdgeRenderer
//      */
//     public render(viewModel: SVGOrthogonalEdgeViewModel<T, EdgeRouterType>): void {
//         if (!this.containerElement) {
//             throw new Error('No container element was set. Call setContainerElement() before!')
//         }

//         // Render the edge's target element.
//         let edgeTargetElement = this.createTargetElement<SVGPolylineElement>('polyline', viewModel);
//         edgeTargetElement.classList.add('graph-edge');

//         let pointsAttrValue = '';
//         viewModel.points.forEach((tempPoint) => {
//             pointsAttrValue += tempPoint.x.toFixed() + ',' + tempPoint.y.toFixed();
//             pointsAttrValue += ' ';
//         });

//         edgeTargetElement.setAttribute('points', pointsAttrValue);

//         this.containerElement.appendChild(edgeTargetElement);
//     }


//     /**
//      * The edge's container element.
//      * 
//      * @private
//      * @type {SVGSVGElement}
//      * @memberof SVGEdgeRenderer
//      */
//     private containerElement: SVGSVGElement;


//     /**
//      * Sets the edge's container element.
//      * 
//      * @param {SVGSVGElement} containerElement 
//      * @memberof SVGEdgeRenderer
//      */
//     public setContainerElement(containerElement: SVGSVGElement): void {
//         if (!containerElement) {
//             Utils.throwReferenceError('containerElement');
//         }

//         this.containerElement = containerElement;
//     }

// }