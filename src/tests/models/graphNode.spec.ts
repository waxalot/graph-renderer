import { GraphNode } from "../../models";
import { expect } from 'chai';


describe('GraphNode', () => {

    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            let expectedValue: string = 'foobar';
            let graphNode: GraphNode<string>;

            // Act
            graphNode = new GraphNode<string>();
            
            // Assert
            expect(graphNode).to.be.not.null;
        });

    });

});