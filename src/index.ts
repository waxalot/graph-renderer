import { VisualGraphNode } from "./models/visualGraphNode";
import { Point } from "./models/point";
import { Size } from "./models/size";
import { Graph } from "./models/graph";
import { IViewModelsFactory } from "./factories/interfaces/iViewModelsFactory";
import { SVGViewModelsFactory } from "./factories/svg/svgViewModelsFactory";
import { SVGRenderersFactory } from "./factories/svg/svgRenderersFactory";
import { IRenderersFactory } from "./factories/interfaces/iRenderersFactory";
import { VisualGraph } from "./models/visualGraph";
import { IGraphRenderer } from "./renderers/interfaces/iGraphRenderer";


document.addEventListener("DOMContentLoaded", function (event) {

    // Build nodes
    let node1 = new VisualGraphNode();
    node1.position = new Point(100, 100);
    node1.size = new Size(50, 50);

    let node2 = new VisualGraphNode();
    node2.position = new Point(400, 300);
    node2.size = new Size(50, 50);

    // Build graph
    let graph = new Graph<VisualGraphNode>();
    let graphNode1 = graph.addNode(node1);
    let graphNode2 = graph.addNode(node2);
    graph.addDirectedEdge(graphNode1, graphNode2);

    // Get the graph's target element
    let containerElement = document.getElementById('graph-container');

    // Get the view-models factory
    let viewModelsFactory: IViewModelsFactory = new SVGViewModelsFactory();

    // Create the graph's view-model
    let graphVM = viewModelsFactory.createGraphViewModel(graph);

    // Get the renderers factory
    let renderersFactory: IRenderersFactory = new SVGRenderersFactory();
    let graphRenderer: IGraphRenderer<VisualGraph, VisualGraphNode> = renderersFactory.createGraphRenderer();
    graphRenderer.setContainerElement(containerElement);
    graphRenderer.render(graphVM);

});