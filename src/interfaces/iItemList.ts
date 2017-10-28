import { IGraphEdge } from "./iGraphEdge";
import { IGraphItem } from "./iGraphItem";


/**
 * This interface describes a list of graph items.
 * 
 * @export
 * @interface IItemList
 * @template T 
 */
export interface IItemList<T extends IGraphItem> {

    /**
     * The number of items.
     * 
     * @type {number}
     * @memberof IItemList
     */
    count: number;


    /**
     * Adds the given item.
     * 
     * @param {T} item 
     * @memberof IItemList
     */
    add(item: T): void;


    /**
     * Returns the index of the given item.
     * 
     * @param {T} item 
     * @returns {number} 
     * @memberof IItemList
     */
    indexOf(item: T): number;


    /**
     * Removes the given item.
     * 
     * @param {T} item 
     * @memberof IItemList
     */
    remove(item: T): void;


    /**
     * Removes the item at the given index
     * 
     * @param {number} index 
     * @memberof IItemList
     */
    removeAt(index: number): void;


    /**
     * Finds an item by the given guid.
     * 
     * @param {string} guid 
     * @returns {T} 
     * @memberof IItemList
     */
    findByGuid(guid: string): T;


    /**
     * The forEach implementation for the list of items.
     * 
     * @param {(item: T) => any} callback 
     * @returns {*} 
     * @memberof IItemList
     */
    forEach(callback: (item: T) => any): any;

}