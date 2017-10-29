import { GraphNode } from "./models/graphNode";
import { Graph } from "./models/graph";
import { VisualGraph } from "./models/visualGraph";
import { VisualGraphNode } from "./models/visualGraphNode";
import { Size } from "./models/size";
import { Point } from "./models/point";
import { IViewModelsFactory } from "./factories/interfaces/iViewModelsFactory";
import { SVGViewModelsFactory } from "./factories/svg/svgViewModelsFactory";
import { SVGRenderersFactory } from "./factories/svg/svgRenderersFactory";
import { IRenderersFactory } from "./factories/interfaces/iRenderersFactory";


document.addEventListener("DOMContentLoaded", function (event) {

    // Build the graph nodes
    let graphNode1 = new GraphNode();
    let graphNode2 = new GraphNode();

    // Build the graph
    let graph = new Graph();
    graph.addNode(graphNode1);
    graph.addNode(graphNode2);

    // Build visual graph nodes
    let visualGraphNode1 = new VisualGraphNode();
    visualGraphNode1.node = graphNode1;
    visualGraphNode1.position = new Point(100, 100);
    visualGraphNode1.size = new Size(50, 50);

    let visualGraphNode2 = new VisualGraphNode();
    visualGraphNode2.node = graphNode2;
    visualGraphNode2.position = new Point(400, 300);
    visualGraphNode2.size = new Size(50, 50);

    // Build the visual graph
    let visualGraph = new VisualGraph();
    visualGraph.graph = graph;
    visualGraph.addNode(visualGraphNode1);
    visualGraph.addNode(visualGraphNode2);

    
    // Get the graph's target element
    let containerElement = document.getElementById('graph-container');

    // Get the view-models factory
    let viewModelsFactory: IViewModelsFactory = new SVGViewModelsFactory();

    // Create the graph's view-model
    let graphVM = viewModelsFactory.createGraphViewModel(visualGraph);

    // Get the renderers factory
    let renderersFactory: IRenderersFactory = new SVGRenderersFactory();
    let graphRenderer = renderersFactory.createGraphRenderer();
    graphRenderer.setContainerElement(containerElement);
    graphRenderer.render(graphVM);

});