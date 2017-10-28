import { expect } from 'chai';
import * as TypeMoq from 'typemoq';
import { Graph } from '../../models/graph';
import { IItemList } from '../../interfaces/iItemList';
import { IGraphItem } from '../../interfaces/iGraphItem';
import { IGraphNode } from '../../interfaces/iGraphNode';


describe('Graph', () => {

    let graph: Graph;

    beforeEach('Setup test', () => {
        graph = new Graph();
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
            let expectedValue = 'foobar';

            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode>();
            graphNodeMock.setup((graphNode) => graphNode.value).returns(() => expectedValue);

            let nodeListMock = TypeMoq.Mock.ofType<IItemList<IGraphNode>>();
            graph.nodes = nodeListMock.object;

            // Act
            graph.addNode(graphNodeMock.object);

            // Assert
            nodeListMock.verify((nodeList: IItemList<IGraphNode>) => nodeList.add(TypeMoq.It.is<IGraphNode>((tempNode) => tempNode.value === expectedValue)), TypeMoq.Times.once());
        });

    });


    describe('contains', () => {

        // it('should be able to determine whether the graph contains a node with the given guid', () => {
        //     // Arrange
        //     let nodeListMock = TypeMoq.Mock.ofType<IItemList<IGraphNode>>();
        //     graph.nodes = nodeListMock.object;

        //     let expectedGuid = 'foobar';

        //     // Act
        //     let nodeFound = graph.contains(expectedGuid);

        //     // Assert
        //     nodeListMock.verify((nodeList: INodeList<string>) => nodeList.findByGuid(expectedGuid), TypeMoq.Times.once());
        // });

    });


    describe('remove', () => {

        // it('should be able to remove a known node', () => {
        //     // Arrange
        //     let expectedNodeGuid = 'foobar';

        //     let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
        //     graphNodeMock.setup((graphNode) => graphNode.guid).returns(() => expectedNodeGuid);

        //     let nodeListMock = TypeMoq.Mock.ofType<INodeList<string>>();
        //     nodeListMock.setup((nodeList: INodeList<string>) => nodeList.findByGuid(expectedNodeGuid)).returns(() => graphNodeMock.object);
        //     graph.nodes = nodeListMock.object;

        //     // Act
        //     graph.remove(expectedNodeGuid)

        //     // Assert
        //     nodeListMock.verify((nodeList: INodeList<string>) => nodeList.remove(TypeMoq.It.is<IGraphNode<string>>((tempNode: IGraphNode<string>) => tempNode.guid === expectedNodeGuid)), TypeMoq.Times.once());
        // });

    });

});