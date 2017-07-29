import { Graph, GraphNode, Point, Size } from "./models";
import { IRenderersFactory, SVGRenderersFactory, IViewModelsFactory, SVGViewModelsFactory } from "./factories";
import { IGraphViewModel, IEdgeRouter, RectangularEdgeRouter } from "./viewModels";
import { IRenderer } from "./renderers";
import { IGraphRenderer } from "./renderers/iGraphRenderer";


document.addEventListener("DOMContentLoaded", function (event) {

    // Build graph
    let node1 = new GraphNode(new Point(100, 100), new Size(50, 50));
    let node2 = new GraphNode(new Point(400, 300), new Size(50, 50));

    node1.addConnection(node2);

    let graph = new Graph();
    graph.addNode(node1);
    graph.addNode(node2);

    // Get the graph's target element
    let containerElement = document.getElementById('graph-container');

    // Get the view-models factory
    let viewModelsFactory: IViewModelsFactory = new SVGViewModelsFactory();

    // Create the used edge router
    let edgeRouter: IEdgeRouter = new RectangularEdgeRouter();

    // Create the graph's view-model
    let graphVM = viewModelsFactory.createGraphViewModel(graph, edgeRouter);

    // Get the renderers factory
    let renderersFactory: IRenderersFactory = new SVGRenderersFactory();
    let graphRenderer: IGraphRenderer = renderersFactory.createGraphRenderer();
    graphRenderer.setContainerElement(containerElement);
    graphRenderer.render(graphVM);

});