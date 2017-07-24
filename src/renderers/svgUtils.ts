import { Utils } from "../utils";
import { SVGViewModel } from "../viewModels/svgViewModel";


/**
 * A collection of SVG related util methods.
 * 
 * @export
 * @class SVGUtils
 */
export class SVGUtils {

    /**
     * Sets the Guid attribute.
     * 
     * @static
     * @param {Element} targetElement 
     * @param {SVGViewModel} viewModel 
     * @memberof SVGUtils
     */
    public static setGuidAttribute(targetElement: Element, viewModel: SVGViewModel): void {
        if (!targetElement) {
            Utils.throwReferenceError('targetElement');
        } else if (!viewModel) {
            Utils.throwReferenceError('viewModel');
        }

        targetElement.setAttribute('data-graph-guid', viewModel.guid);
    }

}