import { expect } from 'chai';
import * as TypeMoq from 'typemoq';
import { NodeList } from '../../models/nodeList';
import { IGraphNode } from '../../interfaces/iGraphNode';


describe('NodeList', () => {

    let nodeList: NodeList<string>;

    beforeEach('Setup test', () => {
        nodeList = new NodeList<string>();
    });


    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            // Act
            // Assert
            expect(nodeList).to.be.not.null;
        });

    });


    describe('add', () => {
        it('should be able to add nodes to the list', () => {
            // Arrange
            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();

            // Act
            nodeList.add(graphNodeMock.object);
            nodeList.add(graphNodeMock2.object);

            // Assert
            let numberOfNodes = nodeList.count;
            expect(numberOfNodes).to.be.equal(2);
        });
    });


    describe('remove', () => {
        it('should be able to remove a given node from the list', () => {
            // Arrange
            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            nodeList.add(graphNodeMock.object);

            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();
            nodeList.add(graphNodeMock2.object);

            // Act
            nodeList.remove(graphNodeMock2.object);

            // Assert
            let numberOfNodes = nodeList.count;
            expect(numberOfNodes).to.be.equal(1);
        });
    });


    describe('removeAt', () => {
        it('should be able to remove a node by a given node\'s index from the list', () => {
            // Arrange
            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock.setup((graphNode) => graphNode.value).returns(() => 'item1');
            nodeList.add(graphNodeMock.object);

            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock2.setup((graphNode) => graphNode.value).returns(() => 'item2');
            nodeList.add(graphNodeMock2.object);

            // Act
            nodeList.removeAt(1);

            // Assert
            let numberOfNodes = nodeList.count;
            expect(numberOfNodes).to.be.equal(1);

            let tempNode = nodeList.forEach((tempNode) => {
                expect(tempNode.value).to.be.equal('item1');
            });
        });
    });


    describe('findByGuid', () => {
        it('should be able to find a node by a given node\`s guid', () => {
            // Arrange
            let expectedGuid1 = 'A';
            let expectedGuid2 = 'B';
            let expectedGuid3 = 'C';

            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock.setup((graphNode) => graphNode.guid).returns(() => expectedGuid1);
            graphNodeMock.setup((graphNode) => graphNode.value).returns(() => 'item1');
            nodeList.add(graphNodeMock.object);

            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock2.setup((graphNode) => graphNode.guid).returns(() => expectedGuid2);
            graphNodeMock2.setup((graphNode) => graphNode.value).returns(() => 'item2');
            nodeList.add(graphNodeMock2.object);

            let graphNodeMock3 = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock3.setup((graphNode) => graphNode.guid).returns(() => expectedGuid3);
            graphNodeMock3.setup((graphNode) => graphNode.value).returns(() => 'item2');
            nodeList.add(graphNodeMock3.object);

            // Act
            let foundNode = nodeList.findByGuid(expectedGuid2);

            // Assert
            expect(foundNode.guid).to.be.equal(expectedGuid2);
        });
    });


    describe('forEach', () => {
        it('should be able to provide the contained nodes in an iteratable way.', () => {
            // Arrange
            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock.setup((graphNode) => graphNode.value).returns(() => 'item1');

            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();
            graphNodeMock2.setup((graphNode) => graphNode.value).returns(() => 'item2');

            nodeList.add(graphNodeMock.object);
            nodeList.add(graphNodeMock2.object);

            // Act
            let tempIndex = 1;
            nodeList.forEach((tempNode) => {
                // Assert
                expect(tempNode.value).to.be.equal('item' + tempIndex);
                tempIndex++;
            });
        });
    });


    describe('indexOf', () => {
        it('should be able to return the index of a given node', () => {
            // Arrange
            let graphNodeMock = TypeMoq.Mock.ofType<IGraphNode<string>>();
            let graphNodeMock2 = TypeMoq.Mock.ofType<IGraphNode<string>>();

            nodeList.add(graphNodeMock.object);
            nodeList.add(graphNodeMock2.object);

            // Act
            let nodeIndex = nodeList.indexOf(graphNodeMock2.object);

            // Assert
            expect(nodeIndex).to.be.equal(1);
        });
    });

});