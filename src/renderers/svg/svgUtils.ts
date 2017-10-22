import { Utils } from "../../utils";
import { IViewModel } from "../../viewModels/interfaces/iViewModel";

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
     * @template T 
     * @param {Element} targetElement 
     * @param {IViewModel<T>} viewModel 
     * @memberof SVGUtils
     */
    public static setGuidAttribute<T>(targetElement: Element, viewModel: IViewModel<T>): void {
        if (!targetElement) {
            Utils.throwReferenceError('targetElement');
        } else if (!viewModel) {
            Utils.throwReferenceError('viewModel');
        }

        targetElement.setAttribute('data-graph-guid', viewModel.guid);
    }

}