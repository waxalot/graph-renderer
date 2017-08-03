import { IRenderer } from "./iRenderer";
import { Renderer } from "./renderer";
import { SVGViewModel } from "../viewModels";
import { SVGUtils } from "./svgUtils";
import { Utils } from "../utils";


/**
 * The abstract base class for SVG based renderers.
 * 
 * @export
 * @abstract
 * @class SVGRenderer
 * @extends {Renderer<ViewModelType>}
 * @implements {IRenderer<ViewModelType>}
 * @template T 
 * @template ViewModelType 
 */
export abstract class SVGRenderer<T, ViewModelType extends SVGViewModel<T>> extends Renderer<ViewModelType> implements IRenderer<ViewModelType> {

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
    protected createTargetElement<TargetElementType extends SVGElement>(elementName: string, viewModel: SVGViewModel<T>): TargetElementType {
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