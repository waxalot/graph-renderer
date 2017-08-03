// import { VisualGraphItem, VisualGraphNode } from "./";


// /**
//  * The visual representation of an edge.
//  * 
//  * @export
//  * @class VisualGraphEdge
//  * @extends {VisualGraphItem}
//  */
// export class VisualGraphEdge extends VisualGraphItem {

//     /**
//      * The source node of the edge.
//      * 
//      * @public
//      * @type {VisualGraphNode}
//      * @memberof VisualGraphEdge
//      */
//     public sourceNode: VisualGraphNode;


//     /**
//      * The target node of the edge.
//      * 
//      * @public
//      * @type {VisualGraphNode}
//      * @memberof VisualGraphEdge
//      */
//     public targetNode: VisualGraphNode;


//     /**
//      * Creates an instance of VisualGraphEdge.
//      *
//      * @param {VisualGraphNode} sourceNode 
//      * @param {VisualGraphNode} targetNode 
//      * @memberof VisualGraphEdge
//      */
//     public constructor(sourceNode: VisualGraphNode, targetNode: VisualGraphNode) {
//         super();

//         if (!sourceNode) {
//             throw new ReferenceError('The argument "sourceNode" is null or undefined.');
//         } else if (!targetNode) {
//             throw new ReferenceError('The argument "targetNode" is null or undefined.');
//         }

//         this.sourceNode = sourceNode;
//         this.targetNode = targetNode;
//     }

// }