import { IGraphItemViewModel } from "../../viewModels/interfaces/iGraphItemViewModel";
import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";
import { GraphItemRenderer } from "../graphItemRenderer";
import { IGraphItemRenderer } from "../interfaces/iGraphItemRenderer";
import { Utils } from "../../utils";
import { SVGUtils } from "./svgUtils";
import { ISVGGraphItemRenderer } from "./interfaces/iSVGGraphItemRenderer";
import { ISVGGraphItemViewModel } from "../../viewModels/svg/interfaces/iSVGGraphItemViewModel";


/**
 * The abstract base class for SVG based renderers.
 * 
 * @export
 * @abstract
 * @class SVGGraphItemRenderer
 * @extends {GraphItemRenderer<TViewModel>}
 * @implements {ISVGGraphItemRenderer}
 * @template TViewModel 
 */
export abstract class SVGGraphItemRenderer<TViewModel extends ISVGGraphItemViewModel<IVisualGraphItem>> extends GraphItemRenderer<TViewModel> implements ISVGGraphItemRenderer {

    /**
     * Creates a new SVG element.
     * 
     * @protected
     * @template TargetElementType 
     * @param {string} elementName 
     * @param {SVGViewModel} viewModel 
     * @returns {TargetElementType} 
     * @memberof SVGRenderer
     */
    protected createTargetElement<TargetElementType extends SVGElement>(elementName: string, viewModel: TViewModel): TargetElementType {
        if (!elementName) {
            Utils.throwReferenceError('elementName');
        } else if (!viewModel) {
            Utils.throwReferenceError('viewModel');
        }

        let svgElement;
        try {
            svgElement = <TargetElementType>document.createElementNS('http://www.w3.org/2000/svg', elementName);
            SVGUtils.setGuidAttribute(svgElement, viewModel);
        } catch (e) {
            svgElement = null;
        }
        return svgElement;
    }

}