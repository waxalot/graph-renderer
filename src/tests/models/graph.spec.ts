import { Graph, IGraphNode, INodeList } from "../../models";
import { expect } from 'chai';
import * as TypeMoq from 'typemoq';


describe('Graph', () => {

    let graph: Graph<string>;

    beforeEach('Setup test', () => {
        graph = new Graph<string>();
    });


    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            // Act
            // Assert
            expect(graph).to.be.not.null;
        });

        it('should have an existing nodelist', () => {
            // Arrange
            // Act
            // Assert
            expect(graph.nodes).to.be.not.null;
        });

    });


    describe('addNode', () => {

        it('should be able to add a new node by a given node\'s value', () => {
            // Arrange
            let nodeListMock = TypeMoq.Mock.ofType<INodeList<string>>();
            graph.nodes = nodeListMock.object;

            let expectedValue = 'foobar';

            // Act
            graph.addNode(expectedValue);

            // Assert
            nodeListMock.verify((nodeList: INodeList<string>) => nodeList.add(TypeMoq.It.is<IGraphNode<string>>((tempNode: IGraphNode<string>) => tempNode.value === expectedValue)), TypeMoq.Times.once());
        });

        it('should return the new added node', () => {
            // Arrange
            let nodeListMock = TypeMoq.Mock.ofType<INodeList<string>>();
            graph.nodes = nodeListMock.object;

            let expectedValue = 'foobar';

            // Act
            let newNode = graph.addNode(expectedValue);

            // Assert
            expect(newNode.value).to.be.equal(expectedValue);
        });

    });


    describe('contains', () => {

        it('should be able to determine whether the graph contains a node with the given guid', () => {
            // Arrange
            let nodeListMock = TypeMoq.Mock.ofType<INodeList<string>>();
            graph.nodes = nodeListMock.object;

            let expectedGuid = 'foobar';

            // Act
            let nodeFound = graph.contains(expectedGuid);

            // Assert
            nodeListMock.verify((nodeList: INodeList<string>) => nodeList.findByGuid(expectedGuid), TypeMoq.Times.once());
        });

    });


    describe('remove', () => {

        it('should be able to remove a known node', () => {
            // Arrange
            let expectedNodeGuid = 'foobar';

            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock.setup((graphNode) => graphNode.guid).returns(() => expectedNodeGuid);

            let nodeListMock = TypeMoq.Mock.ofType<INodeList<string>>();
            nodeListMock.setup((nodeList: INodeList<string>) => nodeList.findByGuid(expectedNodeGuid)).returns(() => graphNodeMock.object);
            graph.nodes = nodeListMock.object;

            // Act
            graph.remove(expectedNodeGuid)

            // Assert
            nodeListMock.verify((nodeList: INodeList<string>) => nodeList.remove(TypeMoq.It.is<IGraphNode<string>>((tempNode: IGraphNode<string>) => tempNode.guid === expectedNodeGuid)), TypeMoq.Times.once());
        });

    });

});