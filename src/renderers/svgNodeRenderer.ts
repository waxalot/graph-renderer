import { INodeViewModel } from "../viewModels";
import { IRenderer } from "./";


/**
 * The SVG based implementation of a node renderer.
 * 
 * @export
 * @class SVGNodeRenderer
 * @implements {IRenderer<INodeViewModel>}
 */
export class SVGNodeRenderer implements IRenderer<INodeViewModel> {

    /**
     * Renders the node view-model.
     * 
     * @param {INodeViewModel} viewModel 
     * @memberof SVGNodeRenderer
     */
    render(viewModel: INodeViewModel): void {
        //    return document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    }

}