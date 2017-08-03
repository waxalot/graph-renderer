import { GraphNode } from "./";


/**
 * This class represents a collection of graph nodes.
 * 
 * @export
 * @class NodeList
 */
export class NodeList<T> {

    private currentIndex: number = 0;


    /**
     * The list of nodes.
     * 
     * @private
     * @type {Array<GraphNode<T>>}
     * @memberof NodeList
     */
    private list: Array<GraphNode<T>>;


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
        this.list = new Array<GraphNode<T>>();
    }


    /**
     * Adds the given node to the node list.
     * 
     * @param {GraphNode} node 
     * @memberof NodeList
     */
    public add(node: GraphNode<T>): void {
        this.list.push(node);
    }


    /**
     * Removes a given node from the node list.
     * 
     * @param {GraphNode} node 
     * @memberof NodeList
     */
    public remove(node: GraphNode<T>): void {
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
     * @returns {GraphNode} 
     * @memberof NodeList
     */
    public findByGuid(guid: string): GraphNode<T> {
        // Search the list for the value
        this.list.forEach((item) => {
            if (item.guid === guid) {
                return item;
            }
        });

        // If we reached here, we didn't find a matching item
        return null;
    }


    /**
     * Returns the next node in the list.
     * 
     * @param {*} [value] 
     * @returns {{ done: boolean, value?: GraphNode }} 
     * @memberof NodeList
     */
    public next(value?: any): { done: boolean, value?: GraphNode<T> } {
        if (this.currentIndex < this.list.length) {
            return {
                done: false,
                value: this.list[this.currentIndex++]
            };
        } else {
            return {
                done: true
            };
        }
    }


    /**
     * Returns the index of the given node.
     * 
     * @param {GraphNode<T>} node 
     * @returns {number} 
     * @memberof NodeList
     */
    public indexOf(node: GraphNode<T>): number {
        return this.list.indexOf(node);
    }

}