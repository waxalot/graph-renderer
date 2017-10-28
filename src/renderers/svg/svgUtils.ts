import { Utils } from "../../utils";
import { IGraphItemViewModel } from "../../viewModels/interfaces/iGraphItemViewModel";
import { IVisualGraphItem } from "../../interfaces/iVisualGraphItem";

/**
 * A collection of SVG related util methods.
 * 
 * @export
 * @class SVGUtils
 */
export class SVGUtils {

    /**
     * Sets the guid attribute.
     * 
     * @static
     * @param {SVGElement} targetElement 
     * @param {IGraphItemViewModel<IVisualGraphItem>} viewModel 
     * @memberof SVGUtils
     */
    public static setGuidAttribute(targetElement: SVGElement, viewModel: IGraphItemViewModel<IVisualGraphItem>): void {
        if (!targetElement) {
            Utils.throwReferenceError('targetElement');
        } else if (!viewModel) {
            Utils.throwReferenceError('viewModel');
        }

        targetElement.setAttribute('data-graph-guid', viewModel.guid);
    }


    /**
     * Gets the element, which is related with the given guid.
     * 
     * @static
     * @param {Document} documentRef 
     * @param {string} guid 
     * @returns {(SVGElement | null)} 
     * @memberof SVGUtils
     */
    public static getElementByGuid(documentRef: Document, guid: string): SVGElement | null {
        if (!guid) {
            return null;
        }

        let result: SVGElement = null;

        result = documentRef.querySelector('[data-graph-guid=\"' + guid + '\"]') as SVGElement;

        return result;
    }


    /**
     * Gets the guid from an element.
     * 
     * @static
     * @param {SVGElement} targetElement 
     * @returns {(string | null)} 
     * @memberof SVGUtils
     */
    public static getGuid(targetElement: SVGElement): string | null {
        if (!targetElement) {
            Utils.throwReferenceError('targetElement');
        }

        if (targetElement.hasAttribute('data-graph-guid')) {
            return targetElement.getAttribute('data-graph-guid');
        } else {
            return null;
        }
    }

}