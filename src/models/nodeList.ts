import { IGraphNode, VisualGraphNode, INodeList } from "./";


/**
 * This class represents a collection of graph nodes.
 * 
 * @export
 * @class NodeList
 * @implements {INodeList<T>}
 * @template T 
 */
export class NodeList<T> implements INodeList<T> {

    /**
     * The list of nodes.
     * 
     * @private
     * @type {Array<IGraphNode<T>>}
     * @memberof NodeList
     */
    private list: Array<IGraphNode<T>>;


    /**
     * Returns the number of list entries.
     * 
     * @returns {number} 
     * @memberof NodeList
     */
    get count(): number {
        return this.list.length;
    }


    /**
     * Creates an instance of NodeList.
     *
     * @memberof NodeList
     */
    public constructor() {
        this.list = new Array<IGraphNode<T>>();
    }


    /**
     * The forEach implementation for the list of nodes.
     * 
     * @memberof NodeList
     */
    public forEach = (callback: (node: IGraphNode<T>) => any): any => {
        let nodesCount = this.list.length;
        for (let i = 0; i < nodesCount; i++) {
            let result = callback(this.list[i]);
            if (result || result === false) {
                return result;
            }
        }
    }


    /**
     * Adds the given node to the node list.
     * 
     * @param {IGraphNode} node 
     * @memberof NodeList
     */
    public add(node: IGraphNode<T>): void {
        this.list.push(node);
    }


    /**
     * Removes a given node from the node list.
     * 
     * @param {IGraphNode} node 
     * @memberof NodeList
     */
    public remove(node: IGraphNode<T>): void {
        let nodeIndex = this.list.indexOf(node);
        if (nodeIndex > -1) {
            this.list.splice(nodeIndex, 1);
        }
    }


    /**
     * Removes the node at the given index.
     * 
     * @param {number} index 
     * @memberof NodeList
     */
    public removeAt(index: number): void {
        if (index > -1 && index < this.list.length) {
            this.list.splice(index, 1);
        }
    }


    /**
     * Finds a node by the given guid.
     * 
     * @param {string} guid 
     * @returns {IGraphNode} 
     * @memberof NodeList
     */
    public findByGuid(guid: string): IGraphNode<T> {
        // Search the list for the value
        let result = this.forEach((tempNode) => {
            if (tempNode.guid === guid) {
                return tempNode;
            }
        });

        if (result) {
            return result;
        } else {
            return null;
        }
    }


    /**
     * Returns the index of the given node.
     * 
     * @param {IGraphNode<T>} node 
     * @returns {number} 
     * @memberof NodeList
     */
    public indexOf(node: IGraphNode<T>): number {
        return this.list.indexOf(node);
    }

}