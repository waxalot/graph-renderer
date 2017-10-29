import { expect } from 'chai';
import { GraphEvent } from '../../events/graphEvent';
import * as TypeMoq from 'typemoq';
import { IGraphEventListener } from '../../events/interfaces/iGraphEventListener';


describe('GraphEvent', () => {

    let graphEvent: GraphEvent<any, any>;

    beforeEach('Setup the event', () => {
        graphEvent = new GraphEvent();
    });


    describe('constructor', () => {

        it('should be creatable', () => {
            // Arrange
            // Act
            // Assert
            expect(graphEvent).to.be.not.null;
        });

    });

    describe('addEventListener', () => {

        it('should throw an error for invalid arguments', () => {
            // Arrange
            // Act // Assert
            expect(() => graphEvent.addEventListener(null))
                .to.throw(Error);
        });

        it('should be able to add an event listener', () => {
            // Arrange
            let eventListenerMock = TypeMoq.Mock.ofType<IGraphEventListener<any, any>>();

            // Act
            graphEvent.addEventListener(eventListenerMock.object);

            // Assert
            expect(graphEvent.count).to.be.equal(1);
        });

    });

    describe('invoke', () => {

        it('should be able to invoke added event listeners', () => {
            // Arrange
            let expectedSender = 'sender';
            let expectedArguments = 'args';

            let eventListenerMock1 = TypeMoq.Mock.ofType<IGraphEventListener<string, string>>();
            graphEvent.addEventListener(eventListenerMock1.object);

            let eventListenerMock2 = TypeMoq.Mock.ofType<IGraphEventListener<string, string>>();
            graphEvent.addEventListener(eventListenerMock2.object);

            // Act
            graphEvent.invoke(expectedSender, expectedArguments);

            // Assert
            eventListenerMock1.verify((eventListener) => eventListener(expectedSender, expectedArguments), TypeMoq.Times.atMostOnce());
            eventListenerMock2.verify((eventListener) => eventListener(expectedSender, expectedArguments), TypeMoq.Times.atMostOnce());
        });

    });

});