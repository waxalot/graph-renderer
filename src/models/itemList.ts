import { GraphItem } from "./graphItem";
import { IItemList } from "../interfaces/iItemList";
import { IGraphItem } from "../interfaces/iGraphItem";


/**
 * This class implements a list of graph items.
 * 
 * @export
 * @class ItemList
 * @implements {IItemList<T>}
 * @template T 
 */
export class ItemList<T extends IGraphItem> implements IItemList<T> {

    /**
     * The list of items.
     * 
     * @private
     * @type {Array<T>}
     * @memberof ItemList
     */
    private items: Array<T>;


    /**
     * The number of items.
     * 
     * @type {number}
     * @memberof ItemList
     */
    get count(): number {
        return this.items.length;
    }


    /**
     * Creates an instance of ItemList.
     *
     * @memberof ItemList
     */
    public constructor() {
        this.items = new Array<T>();
    }


    /**
     * Adds the given item.
     * 
     * @param {T} item 
     * @memberof ItemList
     */
    public add(item: T): void {
        this.items.push(item);
    }


    /**
     * Returns the index of the given item.
     * 
     * @param {T} item 
     * @returns {number} 
     * @memberof ItemList
     */
    public indexOf(item: T): number {
        return this.items.indexOf(item);
    }


    /**
     * Removes the given item.
     * 
     * @param {T} item 
     * @memberof ItemList
     */
    public remove(item: T): void {
        let itemIndex = this.items.indexOf(item);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
    }


    /**
     * Removes the item at the given index
     * 
     * @param {number} index 
     * @memberof ItemList
     */
    public removeAt(index: number): void {
        if (index > -1 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }


    /**
     * Finds an item by the given guid.
     * 
     * @param {string} guid 
     * @returns {T} 
     * @memberof ItemList
     */
    public findByGuid(guid: string): T {
        // Search the list for the guid
        let foundItem = this.forEach((tempItem) => {
            if (tempItem.guid === guid) {
                return tempItem;
            }
        });

        if (foundItem) {
            return foundItem;
        } else {
            return null;
        }
    }


    /**
     * The forEach implementation for the list of items.
     * 
     * @param {(item: T) => any} callback 
     * @returns {*} 
     * @memberof ItemList
     */
    public forEach = (callback: (item: T) => any): any => {
        let itemsCount = this.items.length;
        let tempItem: T;
        for (let i = 0; i < itemsCount; i++) {
            tempItem = this.items[i] as T;
            let result = callback(tempItem);
            if (result || result === false) {
                return result;
            }
        }
    }

}