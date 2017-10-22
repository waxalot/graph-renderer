import { INodeList } from "../interfaces/iNodeList";
import { IGraphNode } from "../interfaces/iGraphNode";
import { GraphNode } from "./graphNode";
import { NodeList } from './nodeList';


/**
 * A representation of a graph.
 * 
 * @export
 * @class Graph
 */
export class Graph<T> {

    /**
     * A collection of all graph nodes.
     * 
     * @private
     * @type {INodeList<T>}
     * @memberof Graph
     */
    public nodes: INodeList<T>;


    /**
     * Creates an instance of Graph.
     *
     * @memberof Graph
     */
    public constructor() {
        this.nodes = new NodeList();
    }


    /**
     * Adds a new node with the given value to the graph.
     * 
     * @param {T} value 
     * @returns {IGraphNode<T>} 
     * @memberof Graph
     */
    public addNode(value: T): IGraphNode<T> {
        let newNode = new GraphNode<T>();
        newNode.value = value;

        this.nodes.add(newNode);

        return newNode;
    }


    /**
     * Adds a directed edge to the graph.
     * 
     * @param {IGraphNode<T>} from 
     * @param {IGraphNode<T>} to 
     * @param {number} [cost] 
     * @memberof Graph
     */
    public addDirectedEdge(from: IGraphNode<T>, to: IGraphNode<T>, cost?: number): void {
        from.neighbors.add(to);
        from.costs.push(cost);
    }


    /**
     * Adds an undirected edge to the graph.
     * 
     * @param {IGraphNode<T>} from 
     * @param {IGraphNode<T>} to 
     * @param {number} [cost=0] 
     * @memberof Graph
     */
    public addUndirectedEdge(from: IGraphNode<T>, to: IGraphNode<T>, cost: number = 0): void {
        from.neighbors.add(to);
        from.costs.push(cost);

        to.neighbors.add(from);
        from.costs.push(cost);
    }


    /**
     * Determines whether the graph contains a node with the given guid.
     * 
     * @param {strig} guid
     * @returns {boolean} 
     * @memberof Graph
     */
    public contains(guid: string): boolean {
        return this.nodes.findByGuid(guid) != null;
    }


    /**
     * Removes the node with the given guid from the graph.
     * 
     * @param {string} guid 
     * @returns {boolean} 
     * @memberof Graph
     */
    public remove(guid: string): boolean {
        // First remove the node from the nodeset
        let nodeToRemove = this.nodes.findByGuid(guid);
        if (!nodeToRemove) {
            // Node was not found
            return false;
        }

        this.nodes.remove(nodeToRemove);

        // Try to remove all edges to this node
        let tempNode: IGraphNode<any>;
        this.nodes.forEach((tempNode) => {
            let index = tempNode.neighbors.indexOf(nodeToRemove);
            if (index > -1) {
                // Remove the reference to the node and associated cost
                tempNode.neighbors.removeAt(index);
                tempNode.costs.splice(index, 1);
            }
        });

        return true;
    }

}