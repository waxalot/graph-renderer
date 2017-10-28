import { IVisualGraphEdge } from "../../interfaces/iVisualGraphEdge";
import { SVGGraphItemViewModel } from "./svgGraphItemViewModel";
import { IGraphEdgeViewModel } from "../interfaces/iGraphEdgeViewModel";
import { ISVGGraphEdgeViewModel } from "./interfaces/iSVGGraphEdgeViewModel";


/**
 * The SVG based representation of a graph edge's view-model.
 * 
 * @export
 * @class SVGGraphEdgeViewModel
 * @extends {SVGGraphItemViewModel<IVisualGraphEdge>}
 * @implements {ISVGGraphEdgeViewModel}
 */
export class SVGGraphEdgeViewModel extends SVGGraphItemViewModel<IVisualGraphEdge> implements ISVGGraphEdgeViewModel {

    /**
     * Initializes the view-model.
     * 
     * @protected
     * @memberof SVGGraphEdgeViewModel
     */
    protected initViewModel(): void {
    }


    /**
     * The change callback for the edge's start node.
     * 
     * @private
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof SVGGraphEdgeViewModel
     */
    private startNodeChangedCallback(propertyName: string, value: any, initiator: any): void {
        console.log('start node: ' + propertyName + ': ' + value);
    }


    /**
     * The change callback for the edge's end node.
     * 
     * @private
     * @param {string} propertyName 
     * @param {*} value 
     * @param {*} initiator 
     * @memberof SVGGraphEdgeViewModel
     */
    private endNodeChangedCallback(propertyName: string, value: any, initiator: any): void {
        console.log('end node: ' + propertyName + ': ' + value);
    }

}