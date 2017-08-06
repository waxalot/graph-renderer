import { IGraphNode } from "./index";


/**
 * This interface describes a collection of graph nodes.
 * 
 * @export
 * @interface INodeList
 * @template T 
 */
export interface INodeList<T> {

    /**
     * Return the number of list entries.
     * 
     * @type {number}
     * @memberof INodeList
     */
    count: number;


    /**
     * Adds the given node to the node list.
     * 
     * @param {IGraphNode<T>} node 
     * @memberof INodeList
     */
    add(node: IGraphNode<T>): void;


    /**
     * Returns the index of the given node.
     * 
     * @param {IGraphNode<T>} node 
     * @returns {number} 
     * @memberof NodeList
     */
    indexOf(node: IGraphNode<T>): number;


    /**
     * Removes a given node from the node list.
     * 
     * @param {IGraphNode} node 
     * @memberof NodeList
     */
    remove(node: IGraphNode<T>): void;


    /**
     * Removes the node at the given index.
     * 
     * @param {number} index 
     * @memberof NodeList
     */
    removeAt(index: number): void;


    /**
     * Finds a node by the given guid.
     * 
     * @param {string} guid 
     * @returns {IGraphNode} 
     * @memberof NodeList
     */
    findByGuid(guid: string): IGraphNode<T>;


    /**
     * The forEach implementation for the list of nodes.
     * 
     * @param {(node: IGraphNode<T>) => any} callback 
     * @returns {*} 
     * @memberof INodeList
     */
    forEach(callback: (node: IGraphNode<T>) => any): any;

}