import { IVisualGraphItem } from "./iVisualGraphItem";
import { IGraphEdge } from "./iGraphEdge";


/**
 * The interface for a visual graph edge.
 * 
 * @export
 * @interface IVisualGraphEdge
 */
export interface IVisualGraphEdge extends IVisualGraphItem {

    /**
     * The related graph edge.
     * 
     * @type {IGraphEdge}
     * @memberof IVisualGraphEdge
     */
    edge: IGraphEdge;

}