import { expect } from 'chai';
import { GraphNode } from '../../models/graphNode';


describe('GraphNode', () => {

    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            let graphNode: GraphNode;

            // Act
            graphNode = new GraphNode();

            // Assert
            expect(graphNode).to.be.not.null;
        });

    });

});