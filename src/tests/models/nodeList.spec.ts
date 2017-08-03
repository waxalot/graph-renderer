import { NodeList, IGraphNode, GraphNode } from "../../models";
import { expect } from 'chai';
import * as TypeMoq from 'typemoq';


describe('NodeList', () => {

    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            let nodeList: NodeList<string>;

            // Act
            nodeList = new NodeList<string>();

            // Assert
            expect(nodeList).to.be.not.null;
        });

    });


    describe('forEach', () => {
        it('should be able to provide the contained nodes in an iteratable way.', () => {
            // Arrange
            let nodeList = new NodeList<string>();

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

});