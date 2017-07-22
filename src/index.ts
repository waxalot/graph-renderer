import { IGraphRenderer } from "./interfaces/iGraphRenderer";
import { SVGGraphRenderer } from "./svgGraphRenderer";
import { Graph } from "./models/graph";
import { GraphNode } from "./models/graphNode";
import { Point } from "./models/point";


let graphContainer = document.getElementById('graph-container');

let graphNode1 = new GraphNode(new Point(10, 10));
let graphNode2 = new GraphNode(new Point(100, 100));

let graph = new Graph();
graph.addNode(graphNode1);
graph.addNode(graphNode2);
graph.addConnection(graphNode1, graphNode2);


let graphRenderer: IGraphRenderer = new SVGGraphRenderer(graphContainer);
graphRenderer.render(graph);