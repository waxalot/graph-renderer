/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var visualGraphNode_1 = __webpack_require__(1);
	var point_1 = __webpack_require__(2);
	var size_1 = __webpack_require__(3);
	var graph_1 = __webpack_require__(4);
	var svgViewModelsFactory_1 = __webpack_require__(9);
	var svgRenderersFactory_1 = __webpack_require__(15);
	document.addEventListener("DOMContentLoaded", function (event) {
	    // Build nodes
	    var node1 = new visualGraphNode_1.VisualGraphNode();
	    node1.position = new point_1.Point(100, 100);
	    node1.size = new size_1.Size(50, 50);
	    var node2 = new visualGraphNode_1.VisualGraphNode();
	    node2.position = new point_1.Point(400, 300);
	    node2.size = new size_1.Size(50, 50);
	    // Build graph
	    var graph = new graph_1.Graph();
	    var graphNode1 = graph.addNode(node1);
	    var graphNode2 = graph.addNode(node2);
	    graph.addDirectedEdge(graphNode1, graphNode2);
	    // Get the graph's target element
	    var containerElement = document.getElementById('graph-container');
	    // Get the view-models factory
	    var viewModelsFactory = new svgViewModelsFactory_1.SVGViewModelsFactory();
	    // Create the graph's view-model
	    var graphVM = viewModelsFactory.createGraphViewModel(graph);
	    // Get the renderers factory
	    var renderersFactory = new svgRenderersFactory_1.SVGRenderersFactory();
	    var graphRenderer = renderersFactory.createGraphRenderer();
	    graphRenderer.setContainerElement(containerElement);
	    graphRenderer.render(graphVM);
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The visual representation of a graph's node.
	 *
	 * @export
	 * @class VisualGraphNode
	 */
	var VisualGraphNode = /** @class */ (function () {
	    function VisualGraphNode() {
	    }
	    return VisualGraphNode;
	}());
	exports.VisualGraphNode = VisualGraphNode;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A 2D point representation.
	 *
	 * @export
	 * @class Point
	 */
	var Point = /** @class */ (function () {
	    /**
	     * Creates an instance of Point.
	     *
	     * @param {number} [x=0]
	     * @param {number} [y=0]
	     * @memberof Point
	     */
	    function Point(x, y) {
	        if (x === void 0) { x = 0; }
	        if (y === void 0) { y = 0; }
	        this.x = x;
	        this.y = y;
	    }
	    return Point;
	}());
	exports.Point = Point;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A 2D size representation.
	 *
	 * @export
	 * @class Size
	 */
	var Size = /** @class */ (function () {
	    /**
	     * Creates an instance of Size.
	     *
	     * @param {number} [width=0]
	     * @param {number} [height=0]
	     * @memberof Size
	     */
	    function Size(width, height) {
	        if (width === void 0) { width = 0; }
	        if (height === void 0) { height = 0; }
	        this.width = width;
	        this.height = height;
	    }
	    return Size;
	}());
	exports.Size = Size;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var graphNode_1 = __webpack_require__(5);
	var nodeList_1 = __webpack_require__(8);
	/**
	 * A representation of a graph.
	 *
	 * @export
	 * @class Graph
	 */
	var Graph = /** @class */ (function () {
	    /**
	     * Creates an instance of Graph.
	     *
	     * @memberof Graph
	     */
	    function Graph() {
	        this.nodes = new nodeList_1.NodeList();
	    }
	    /**
	     * Adds a new node with the given value to the graph.
	     *
	     * @param {T} value
	     * @returns {IGraphNode<T>}
	     * @memberof Graph
	     */
	    Graph.prototype.addNode = function (value) {
	        var newNode = new graphNode_1.GraphNode();
	        newNode.value = value;
	        this.nodes.add(newNode);
	        return newNode;
	    };
	    /**
	     * Adds a directed edge to the graph.
	     *
	     * @param {IGraphNode<T>} from
	     * @param {IGraphNode<T>} to
	     * @param {number} [cost]
	     * @memberof Graph
	     */
	    Graph.prototype.addDirectedEdge = function (from, to, cost) {
	        from.neighbors.add(to);
	        from.costs.push(cost);
	    };
	    /**
	     * Adds an undirected edge to the graph.
	     *
	     * @param {IGraphNode<T>} from
	     * @param {IGraphNode<T>} to
	     * @param {number} [cost=0]
	     * @memberof Graph
	     */
	    Graph.prototype.addUndirectedEdge = function (from, to, cost) {
	        if (cost === void 0) { cost = 0; }
	        from.neighbors.add(to);
	        from.costs.push(cost);
	        to.neighbors.add(from);
	        from.costs.push(cost);
	    };
	    /**
	     * Determines whether the graph contains a node with the given guid.
	     *
	     * @param {strig} guid
	     * @returns {boolean}
	     * @memberof Graph
	     */
	    Graph.prototype.contains = function (guid) {
	        return this.nodes.findByGuid(guid) != null;
	    };
	    /**
	     * Removes the node with the given guid from the graph.
	     *
	     * @param {string} guid
	     * @returns {boolean}
	     * @memberof Graph
	     */
	    Graph.prototype.remove = function (guid) {
	        // First remove the node from the nodeset
	        var nodeToRemove = this.nodes.findByGuid(guid);
	        if (!nodeToRemove) {
	            // Node was not found
	            return false;
	        }
	        this.nodes.remove(nodeToRemove);
	        // Try to remove all edges to this node
	        var tempNode;
	        this.nodes.forEach(function (tempNode) {
	            var index = tempNode.neighbors.indexOf(nodeToRemove);
	            if (index > -1) {
	                // Remove the reference to the node and associated cost
	                tempNode.neighbors.removeAt(index);
	                tempNode.costs.splice(index, 1);
	            }
	        });
	        return true;
	    };
	    return Graph;
	}());
	exports.Graph = Graph;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var graphItem_1 = __webpack_require__(6);
	var nodeList_1 = __webpack_require__(8);
	/**
	 * A representation of a graph node.
	 *
	 * @export
	 * @class GraphNode
	 * @extends {GraphItem}
	 * @template T
	 */
	var GraphNode = /** @class */ (function (_super) {
	    __extends(GraphNode, _super);
	    /**
	     * Creates an instance of GraphNode.
	     *
	     * @memberof GraphNode
	     */
	    function GraphNode() {
	        var _this = _super.call(this) || this;
	        _this.costs = new Array();
	        _this.neighbors = new nodeList_1.NodeList();
	        return _this;
	    }
	    return GraphNode;
	}(graphItem_1.GraphItem));
	exports.GraphNode = GraphNode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var guid_1 = __webpack_require__(7);
	/**
	 * The base class for all graph related models.
	 *
	 * @export
	 * @abstract
	 * @class GraphItem
	 */
	var GraphItem = /** @class */ (function () {
	    /**
	     * Creates an instance of GraphItem.
	     *
	     * @memberof GraphItem
	     */
	    function GraphItem() {
	        this.guid = guid_1.Guid.newGuid();
	    }
	    return GraphItem;
	}());
	exports.GraphItem = GraphItem;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Guid = /** @class */ (function () {
	    function Guid() {
	    }
	    /**
	     * Creates a new Guid.
	     *
	     * @static
	     * @returns {string}
	     * @memberof Guid
	     */
	    Guid.newGuid = function () {
	        return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' +
	            Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
	    };
	    Guid.s4 = function () {
	        return Math.floor((1 + Math.random()) * 0x10000)
	            .toString(16)
	            .substring(1);
	    };
	    return Guid;
	}());
	exports.Guid = Guid;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * This class represents a collection of graph nodes.
	 *
	 * @export
	 * @class NodeList
	 * @implements {INodeList<T>}
	 * @template T
	 */
	var NodeList = /** @class */ (function () {
	    /**
	     * Creates an instance of NodeList.
	     *
	     * @memberof NodeList
	     */
	    function NodeList() {
	        var _this = this;
	        /**
	         * The forEach implementation for the list of nodes.
	         *
	         * @memberof NodeList
	         */
	        this.forEach = function (callback) {
	            var nodesCount = _this.list.length;
	            for (var i = 0; i < nodesCount; i++) {
	                var result = callback(_this.list[i]);
	                if (result || result === false) {
	                    return result;
	                }
	            }
	        };
	        this.list = new Array();
	    }
	    Object.defineProperty(NodeList.prototype, "count", {
	        /**
	         * Returns the number of list entries.
	         *
	         * @returns {number}
	         * @memberof NodeList
	         */
	        get: function () {
	            return this.list.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds the given node to the node list.
	     *
	     * @param {IGraphNode} node
	     * @memberof NodeList
	     */
	    NodeList.prototype.add = function (node) {
	        this.list.push(node);
	    };
	    /**
	     * Removes a given node from the node list.
	     *
	     * @param {IGraphNode} node
	     * @memberof NodeList
	     */
	    NodeList.prototype.remove = function (node) {
	        var nodeIndex = this.list.indexOf(node);
	        if (nodeIndex > -1) {
	            this.list.splice(nodeIndex, 1);
	        }
	    };
	    /**
	     * Removes the node at the given index.
	     *
	     * @param {number} index
	     * @memberof NodeList
	     */
	    NodeList.prototype.removeAt = function (index) {
	        if (index > -1 && index < this.list.length) {
	            this.list.splice(index, 1);
	        }
	    };
	    /**
	     * Finds a node by the given guid.
	     *
	     * @param {string} guid
	     * @returns {IGraphNode}
	     * @memberof NodeList
	     */
	    NodeList.prototype.findByGuid = function (guid) {
	        // Search the list for the value
	        var result = this.forEach(function (tempNode) {
	            if (tempNode.guid === guid) {
	                return tempNode;
	            }
	        });
	        if (result) {
	            return result;
	        }
	        else {
	            return null;
	        }
	    };
	    /**
	     * Returns the index of the given node.
	     *
	     * @param {IGraphNode<T>} node
	     * @returns {number}
	     * @memberof NodeList
	     */
	    NodeList.prototype.indexOf = function (node) {
	        return this.list.indexOf(node);
	    };
	    return NodeList;
	}());
	exports.NodeList = NodeList;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgGraphViewModel_1 = __webpack_require__(10);
	/**
	 * The SVG based representation of a view-models factory.
	 *
	 * @export
	 * @class SVGViewModelsFactory
	 * @implements {IViewModelsFactory}
	 */
	var SVGViewModelsFactory = /** @class */ (function () {
	    function SVGViewModelsFactory() {
	    }
	    /**
	     * Creates an instance of {IGraphViewModel<VisualGraph, TNode>}.
	     *
	     * @template TNode
	     * @param {Graph<TNode>} graph
	     * @returns {IGraphViewModel<VisualGraph, TNode>}
	     * @memberof SVGViewModelsFactory
	     */
	    SVGViewModelsFactory.prototype.createGraphViewModel = function (graph) {
	        var graphVM = new svgGraphViewModel_1.SVGGraphViewModel(graph);
	        return graphVM;
	    };
	    return SVGViewModelsFactory;
	}());
	exports.SVGViewModelsFactory = SVGViewModelsFactory;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgViewModel_1 = __webpack_require__(11);
	var svgNodeViewModel_1 = __webpack_require__(14);
	/**
	 * The SVG based representation of a graph's view-model.
	 *
	 * @export
	 * @class SVGGraphViewModel
	 * @extends {SVGViewModel}
	 * @implements {IGraphViewModel}
	 */
	var SVGGraphViewModel = /** @class */ (function (_super) {
	    __extends(SVGGraphViewModel, _super);
	    /**
	     * Creates an instance of SVGGraphViewModel.
	     *
	     * @param {Graph<TNode>} graph
	     * @param {IEdgeRouter} edgeRouter
	     * @memberof SVGGraphViewModel
	     */
	    function SVGGraphViewModel(graph) {
	        var _this = _super.call(this) || this;
	        _this.model = graph;
	        _this.nodes = new Array();
	        _this.initViewModel();
	        return _this;
	    }
	    /**
	     * Initializes the view-model.
	     *
	     * @protected
	     * @memberof SVGGraphViewModel
	     */
	    SVGGraphViewModel.prototype.initViewModel = function () {
	        // Create nodes view-models
	        this.initNodes();
	    };
	    /**
	     * Initializes all nodes view-models.
	     *
	     * @private
	     * @memberof SVGGraphViewModel
	     */
	    SVGGraphViewModel.prototype.initNodes = function () {
	        var _this = this;
	        // Create all required nodes view-models by traversing the model graph.
	        var graphNodes = this.model.nodes;
	        if (graphNodes && graphNodes.count > 0) {
	            graphNodes.forEach(function (tempNode) {
	                // Create the graph node view-model
	                var newNodeVM = new svgNodeViewModel_1.SVGNodeViewModel(tempNode);
	                _this.nodes.push(newNodeVM);
	            });
	        }
	        // if (graphNodes && graphNodes.length > 0) {
	        //     graphNodes.forEach((tempNode) => {
	        //         // // Create the graph node view-model
	        //         // let newNodeVM = new SVGNodeViewModel();
	        //         // newNodeVM.init(tempNode);
	        //         // this.nodes.push(newNodeVM);
	        //         // // Create the node's connection view-models
	        //         // let edges = tempNode.getConnections();
	        //         // if (edges && edges.length > 0) {
	        //         //     edges.forEach((tempEdge) => {
	        //         //         let newEdgeVM = new SVGEdgeViewModel();
	        //         //         newEdgeVM.setEdgeRouter(this.edgeRouter);
	        //         //         newEdgeVM.init(tempEdge, newNodeVM, null, this);
	        //         //         this.connections.push(newEdgeVM);
	        //         //     });
	        //         // }
	        //     });
	        // }
	    };
	    return SVGGraphViewModel;
	}(svgViewModel_1.SVGViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var dataBinder_1 = __webpack_require__(12);
	var guid_1 = __webpack_require__(7);
	/**
	 * The base class of all SVG based view-models.
	 *
	 * @export
	 * @abstract
	 * @class SVGViewModel
	 * @implements {IViewModel<T>}
	 * @template T
	 */
	var SVGViewModel = /** @class */ (function () {
	    /**
	     * Creates an instance of SVGViewModel.
	     * @memberof SVGViewModel
	     */
	    function SVGViewModel() {
	        this.guid = guid_1.Guid.newGuid();
	        this.dataBinder = new dataBinder_1.DataBinder(this.guid);
	        this.dataBindChangeMessage = this.guid + ':change';
	    }
	    /**
	     * Returns the data bind change message for this instance.
	     *
	     * @public
	     * @returns {string}
	     * @memberof SVGViewModel
	     */
	    SVGViewModel.prototype.getDataBindChangeMessage = function () {
	        return this.dataBindChangeMessage;
	    };
	    /**
	     * Triggers the data binder for the given property.
	     *
	     * @protected
	     * @param {string} propertyName
	     * @param {*} value
	     * @memberof SVGViewModel
	     */
	    SVGViewModel.prototype.triggerDataBinder = function (propertyName, value) {
	        this.dataBinder.publish(this.dataBindChangeMessage, propertyName, value, this);
	    };
	    return SVGViewModel;
	}());
	exports.SVGViewModel = SVGViewModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var dataBindPubSub_1 = __webpack_require__(13);
	/**
	 * The view-model to DOM data binder.
	 *
	 * @export
	 * @class DataBinder
	 */
	var DataBinder = /** @class */ (function () {
	    /**
	     * Creates an instance of DataBinder.
	     * @memberof DataBinder
	     */
	    function DataBinder(guid) {
	        var _this = this;
	        /**
	         * The pubSub message handler.
	         *
	         * @private
	         * @memberof DataBinder
	         */
	        this.messageHandler = function (evtMsg, propertyName, newValue) {
	            var elements = document.querySelectorAll('[' + _this.dataAttribute + '=' + propertyName + ']');
	            var tagName;
	            var tempElement;
	            var elementsCounts = elements.length;
	            for (var i = 0; i < elementsCounts; i++) {
	                tempElement = elements[i];
	                tempElement.setAttribute(propertyName, newValue);
	            }
	        };
	        this.pubSub = new dataBindPubSub_1.DataBindPubSub();
	        this.dataAttribute = 'data-bind-' + guid;
	        this.message = guid + ':change';
	        if (document.addEventListener) {
	            document.addEventListener("change", function (evt) {
	                console.log(evt);
	            }, false);
	        }
	    }
	    /**
	     * Publishes the given message.
	     *
	     * @param {string} message
	     * @param {string} propertyName
	     * @param {*} value
	     * @param {*} initiator
	     * @memberof DataBinder
	     */
	    DataBinder.prototype.publish = function (message, propertyName, value, initiator) {
	        this.pubSub.publish(message, propertyName, value, initiator);
	    };
	    /**
	     * Subscribes the given callback to the given message.
	     *
	     * @param {string} message
	     * @param {IPubSubCallback} callback
	     * @memberof DataBinder
	     */
	    DataBinder.prototype.subscribe = function (message, callback) {
	        this.pubSub.subscribe(message, callback);
	    };
	    /**
	     * Initializes the data binder.
	     *
	     * @private
	     * @memberof DataBinder
	     */
	    DataBinder.prototype.init = function () {
	        // Subscribe to the change of all bound elements
	        this.pubSub.subscribe(this.message, this.messageHandler);
	    };
	    return DataBinder;
	}());
	exports.DataBinder = DataBinder;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PubSub implementation for the data binder.
	 *
	 * @export
	 * @class DataBindPubSub
	 */
	var DataBindPubSub = /** @class */ (function () {
	    /**
	     * Creates an instance of DataBindPubSub.
	     *
	     * @memberof DataBindPubSub
	     */
	    function DataBindPubSub() {
	        this.callbacks = new Map();
	    }
	    /**
	     * Subscribes a callback related to the given message.
	     *
	     * @param {string} message
	     * @param {IPubSubCallback} callback
	     * @memberof DataBindPubSub
	     */
	    DataBindPubSub.prototype.subscribe = function (message, callback) {
	        if (!this.callbacks.has(message)) {
	            this.callbacks.set(message, new Array());
	        }
	        this.callbacks.get(message).push(callback);
	    };
	    /**
	     * Publishes the arguments related to the given message.
	     *
	     * @param {string} message
	     * @param {string} propertyName
	     * @param {*} value
	     * @param {*} initiator
	     * @memberof DataBindPubSub
	     */
	    DataBindPubSub.prototype.publish = function (message, propertyName, value, initiator) {
	        if (this.callbacks.has(message)) {
	            var callbacksCount = this.callbacks.get(message).length;
	            for (var i = 0; i < callbacksCount; i++) {
	                this.callbacks.get(message)[i](propertyName, value, initiator);
	            }
	        }
	    };
	    return DataBindPubSub;
	}());
	exports.DataBindPubSub = DataBindPubSub;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgViewModel_1 = __webpack_require__(11);
	var point_1 = __webpack_require__(2);
	/**
	 * The SVG based representation of a node's view-model.
	 *
	 * @export
	 * @class SVGNodeViewModel
	 * @extends {SVGViewModel}
	 * @implements {INodeViewModel}
	 */
	var SVGNodeViewModel = /** @class */ (function (_super) {
	    __extends(SVGNodeViewModel, _super);
	    /**
	     * Creates an instance of SVGNodeViewModel.
	     *
	     * @memberof SVGNodeViewModel
	     */
	    function SVGNodeViewModel(graphNode) {
	        var _this = _super.call(this) || this;
	        _this.mouseDownHandler = function (e) {
	            var selectedElement = e.srcElement;
	            _this.currentMoveX = e.clientX;
	            _this.currentMoveY = e.clientY;
	            var tempCurrentMatrix = selectedElement.getAttributeNS(null, 'transform').slice(7, -1).split(' ');
	            var matrixEntriesCount = tempCurrentMatrix.length;
	            for (var i = 0; i < matrixEntriesCount; i++) {
	                _this.currentTransformMatrix[i] = parseFloat(tempCurrentMatrix[i]);
	            }
	            // Set drag handler
	            selectedElement.onmousemove = function (e) {
	                var dx = e.clientX - _this.currentMoveX;
	                var dy = e.clientY - _this.currentMoveY;
	                _this.currentTransformMatrix[4] += dx;
	                _this.currentTransformMatrix[5] += dy;
	                var newMatrix = 'matrix(' + _this.currentTransformMatrix.join(' ') + ')';
	                selectedElement.setAttributeNS(null, 'transform', newMatrix);
	                _this.currentMoveX = e.clientX;
	                _this.currentMoveY = e.clientY;
	            };
	            // Set drop handler
	            selectedElement.onmouseup = function (e) {
	                selectedElement.onmousemove = null;
	                selectedElement.onmouseout = null;
	                selectedElement.onmouseup = null;
	            };
	            // Set leave handler
	            selectedElement.onmouseout = function (e) {
	                selectedElement.onmousemove = null;
	                selectedElement.onmouseout = null;
	                selectedElement.onmouseup = null;
	            };
	        };
	        _this.model = graphNode;
	        _this._currentMovePosition = new point_1.Point();
	        _this.currentTransformMatrix = new Array();
	        return _this;
	    }
	    Object.defineProperty(SVGNodeViewModel.prototype, "size", {
	        /**
	         * Gets the node's size.
	         *
	         * @readonly
	         * @type {Size}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.model.value.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGNodeViewModel.prototype, "width", {
	        /**
	         * Gets the node's width.
	         *
	         * @readonly
	         * @type {number}
	         * @memberof SVGViewModel
	         */
	        get: function () {
	            return this.model.value.size.width;
	        },
	        /**
	         * Sets the node's width.
	         *
	         * @memberof SVGViewModel
	         */
	        set: function (value) {
	            this.model.value.size.width = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGNodeViewModel.prototype, "height", {
	        /**
	         * Gets the node's height.
	         *
	         * @readonly
	         * @type {number}
	         * @memberof SVGViewModel
	         */
	        get: function () {
	            return this.model.value.size.height;
	        },
	        /**
	         * Sets the node's height.
	         *
	         * @memberof SVGViewModel
	         */
	        set: function (value) {
	            this.model.value.size.height = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGNodeViewModel.prototype, "position", {
	        /**
	         * Gets the node's position.
	         *
	         * @type {Point}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.model.value.position;
	        },
	        /**
	         * Sets the node's position.
	         *
	         * @memberof SVGNodeViewModel
	         */
	        set: function (value) {
	            this.model.value.position = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGNodeViewModel.prototype, "currentMoveX", {
	        /**
	         * Gets the node's current move position x coordinate.
	         *
	         * @type {Point}
	         * @memberof SVGViewModel
	         */
	        get: function () {
	            return this._currentMovePosition.x;
	        },
	        /**
	         * Sets the node's current move position x coordinate.
	         *
	         * @memberof SVGViewModel
	         */
	        set: function (value) {
	            this._currentMovePosition.x = value;
	            this.triggerDataBinder('currentMoveX', this._currentMovePosition.x);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGNodeViewModel.prototype, "currentMoveY", {
	        /**
	         * Gets the node's current move position y coordinate.
	         *
	         * @type {Point}
	         * @memberof SVGViewModel
	         */
	        get: function () {
	            return this._currentMovePosition.y;
	        },
	        /**
	         * Sets the node's current move position y coordinate.
	         *
	         * @memberof SVGViewModel
	         */
	        set: function (value) {
	            this._currentMovePosition.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SVGNodeViewModel.prototype.initViewModel = function () {
	    };
	    return SVGNodeViewModel;
	}(svgViewModel_1.SVGViewModel));
	exports.SVGNodeViewModel = SVGNodeViewModel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgGraphRenderer_1 = __webpack_require__(16);
	var svgNodeRenderer_1 = __webpack_require__(21);
	var svgOrthogonalEdgeRenderer_1 = __webpack_require__(22);
	/**
	 * The SVG based representation of a renderers factory.
	 *
	 * @export
	 * @class SVGRenderersFactory
	 * @implements {IRenderersFactory}
	 */
	var SVGRenderersFactory = /** @class */ (function () {
	    function SVGRenderersFactory() {
	    }
	    /**
	     * Creates the graph renderer.
	     *
	     * @returns {IGraphRenderer<VisualGraph>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createGraphRenderer = function () {
	        var nodeRenderer = this.createNodeRenderer();
	        return new svgGraphRenderer_1.SVGGraphRenderer(nodeRenderer);
	    };
	    /**
	     * Creates the node renderer.
	     *
	     * @returns {SVGNodeRenderer<VisualGraphNode>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createNodeRenderer = function () {
	        return new svgNodeRenderer_1.SVGNodeRenderer();
	    };
	    /**
	     * Creates the orthogonal edge renderer.
	     *
	     * @returns {SVGOrthogonalEdgeRenderer<VisualGraphNode, OrthogonalEdgeRouter, SVGOrthogonalEdgeViewModel<VisualGraphNode, OrthogonalEdgeRouter>>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createOrthogonalEdgeRenderer = function () {
	        return new svgOrthogonalEdgeRenderer_1.SVGOrthogonalEdgeRenderer();
	    };
	    return SVGRenderersFactory;
	}());
	exports.SVGRenderersFactory = SVGRenderersFactory;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgRenderer_1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(19);
	/**
	 * The SVG based implementation of a graph renderer.
	 *
	 * @export
	 * @class SVGGraphRenderer
	 * @extends {SVGRenderer<T, SVGGraphViewModel<T, TNode>>}
	 * @implements {IGraphRenderer<T, TNode>}
	 * @template T
	 * @template TNode
	 */
	var SVGGraphRenderer = /** @class */ (function (_super) {
	    __extends(SVGGraphRenderer, _super);
	    //private edgeRenderer: SVGEdgeRenderer<VisualGraphNode>;
	    /**
	     * Creates an instance of SVGGraphRenderer.
	     *
	     * @param {SVGNodeRenderer<VisualGraphNode>} nodeRenderer
	     * @param {SVGEdgeRenderer<VisualGraphEdge>} edgeRenderer
	     * @memberof SVGGraphRenderer
	     */
	    function SVGGraphRenderer(nodeRenderer) {
	        var _this = _super.call(this) || this;
	        if (!nodeRenderer) {
	            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
	        }
	        _this.nodeRenderer = nodeRenderer;
	        return _this;
	        //this.edgeRenderer = edgeRenderer;
	    }
	    /**
	     * Sets the graph's container element.
	     *
	     * @param {Element} containerElement
	     * @memberof SVGGraphRenderer
	     */
	    SVGGraphRenderer.prototype.setContainerElement = function (containerElement) {
	        if (!containerElement) {
	            utils_1.Utils.throwReferenceError('containerElement');
	        }
	        this.containerElement = containerElement;
	    };
	    /**
	     * Renders the graph view-model.
	     *
	     * @param {SVGGraphViewModel} viewModel
	     * @memberof SVGGraphRenderer
	     */
	    SVGGraphRenderer.prototype.render = function (viewModel) {
	        var _this = this;
	        if (!this.containerElement) {
	            throw new Error('No container element was set. Call setContainerElement() before!');
	        }
	        // Render the graph's target
	        var graphTargetElement = this.createTargetElement('svg', viewModel);
	        graphTargetElement.classList.add('graph');
	        // Define the viewport coordinate system.
	        graphTargetElement.setAttribute('width', '800');
	        graphTargetElement.setAttribute('height', '600');
	        // Define the user coordinate system.
	        graphTargetElement.setAttribute('viewbox', '0 0 800, 600');
	        // Render all graph nodes
	        if (viewModel.nodes && viewModel.nodes.length > 0) {
	            viewModel.nodes.forEach(function (nodeVM) {
	                _this.nodeRenderer.setContainerElement(graphTargetElement);
	                _this.nodeRenderer.render(nodeVM);
	            });
	        }
	        // // Render all graph edges
	        // if (viewModel.connections && viewModel.connections.length > 0) {
	        //     viewModel.connections.forEach((edgeVM) => {
	        //         this.edgeRenderer.setContainerElement(graphTargetElement);
	        //         this.edgeRenderer.render(edgeVM);
	        //     });
	        // }
	        this.containerElement.appendChild(graphTargetElement);
	    };
	    return SVGGraphRenderer;
	}(svgRenderer_1.SVGRenderer));
	exports.SVGGraphRenderer = SVGGraphRenderer;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgUtils_1 = __webpack_require__(18);
	var renderer_1 = __webpack_require__(20);
	var utils_1 = __webpack_require__(19);
	/**
	 * The abstract base class for SVG based renderers.
	 *
	 * @export
	 * @abstract
	 * @class SVGRenderer
	 * @extends {Renderer<ViewModelType>}
	 * @implements {IRenderer<ViewModelType>}
	 * @template T
	 * @template ViewModelType
	 */
	var SVGRenderer = /** @class */ (function (_super) {
	    __extends(SVGRenderer, _super);
	    function SVGRenderer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * Creates a new SVG element.
	     *
	     * @protected
	     * @template TargetElementType
	     * @param {string} elementName
	     * @param {SVGViewModel} viewModel
	     * @returns {TargetElementType}
	     * @memberof SVGRenderer
	     */
	    SVGRenderer.prototype.createTargetElement = function (elementName, viewModel) {
	        if (!elementName) {
	            utils_1.Utils.throwReferenceError('elementName');
	        }
	        else if (!viewModel) {
	            utils_1.Utils.throwReferenceError('viewModel');
	        }
	        var svgElement;
	        try {
	            svgElement = document.createElementNS('http://www.w3.org/2000/svg', elementName);
	            svgUtils_1.SVGUtils.setGuidAttribute(svgElement, viewModel);
	        }
	        catch (e) {
	            svgElement = null;
	        }
	        return svgElement;
	    };
	    return SVGRenderer;
	}(renderer_1.Renderer));
	exports.SVGRenderer = SVGRenderer;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(19);
	/**
	 * A collection of SVG related util methods.
	 *
	 * @export
	 * @class SVGUtils
	 */
	var SVGUtils = /** @class */ (function () {
	    function SVGUtils() {
	    }
	    /**
	     * Sets the Guid attribute.
	     *
	     * @static
	     * @template T
	     * @param {Element} targetElement
	     * @param {IViewModel<T>} viewModel
	     * @memberof SVGUtils
	     */
	    SVGUtils.setGuidAttribute = function (targetElement, viewModel) {
	        if (!targetElement) {
	            utils_1.Utils.throwReferenceError('targetElement');
	        }
	        else if (!viewModel) {
	            utils_1.Utils.throwReferenceError('viewModel');
	        }
	        targetElement.setAttribute('data-graph-guid', viewModel.guid);
	    };
	    return SVGUtils;
	}());
	exports.SVGUtils = SVGUtils;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A collection of util methods.
	 *
	 * @export
	 * @class Utils
	 */
	var Utils = /** @class */ (function () {
	    function Utils() {
	    }
	    /**
	     * Throws a new reference error.
	     *
	     * @static
	     * @param {string} argumentName
	     * @memberof Utils
	     */
	    Utils.throwReferenceError = function (argumentName) {
	        throw new ReferenceError('The argument "' + argumentName + '" was null or undefined.');
	    };
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The abstract base class for renderers.
	 *
	 * @export
	 * @abstract
	 * @class Renderer
	 * @implements {IRenderer<ViewModelType>}
	 * @template ViewModelType
	 */
	var Renderer = /** @class */ (function () {
	    function Renderer() {
	    }
	    return Renderer;
	}());
	exports.Renderer = Renderer;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(19);
	var svgRenderer_1 = __webpack_require__(17);
	/**
	 * The SVG based implementation of a node renderer.
	 *
	 * @export
	 * @class SVGNodeRenderer
	 * @extends {SVGRenderer<T>}
	 * @implements {INodeRenderer<SVGNodeViewModel<T>>}
	 * @template T
	 */
	var SVGNodeRenderer = /** @class */ (function (_super) {
	    __extends(SVGNodeRenderer, _super);
	    function SVGNodeRenderer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * Sets the node's container element.
	     *
	     * @param {SVGSVGElement} containerElement
	     * @memberof SVGNodeRenderer
	     */
	    SVGNodeRenderer.prototype.setContainerElement = function (containerElement) {
	        if (!containerElement) {
	            utils_1.Utils.throwReferenceError('containerElement');
	        }
	        this.containerElement = containerElement;
	    };
	    /**
	     * Renders the node view-model.
	     *
	     * @param {SVGNodeViewModel<T>} viewModel
	     * @memberof SVGNodeRenderer
	     */
	    SVGNodeRenderer.prototype.render = function (viewModel) {
	        if (!this.containerElement) {
	            throw new Error('No container element was set. Call setContainerElement() before!');
	        }
	        // Render the node's target
	        var nodeTargetElement = this.createTargetElement('rect', viewModel);
	        nodeTargetElement.classList.add('graph-node');
	        nodeTargetElement.classList.add('graph-draggable');
	        // Set selection handler
	        nodeTargetElement.onmousedown = viewModel.mouseDownHandler;
	        // Set the initial transform matrix (identity matrix)
	        nodeTargetElement.setAttribute('transform', 'matrix(1 0 0 1 0 0)');
	        // Set the position
	        if (viewModel.position) {
	            nodeTargetElement.setAttribute('x', viewModel.position.x.toFixed());
	            nodeTargetElement.setAttribute('y', viewModel.position.y.toFixed());
	        }
	        if (viewModel.width) {
	            var attributeName = 'width';
	            nodeTargetElement.setAttribute(attributeName, viewModel.width.toFixed());
	            // Data bind to the view-model's width property
	            var vmPropertyName = 'width';
	            nodeTargetElement.setAttribute('data-bind-' + viewModel.guid + '-' + attributeName, vmPropertyName);
	        }
	        if (viewModel.height) {
	            var attributeName = 'height';
	            nodeTargetElement.setAttribute(attributeName, viewModel.height.toFixed());
	            // Data bind to the view-model's height property
	            var vmPropertyName = 'height';
	            nodeTargetElement.setAttribute('data-bind-' + viewModel.guid + '-' + attributeName, vmPropertyName);
	        }
	        this.containerElement.appendChild(nodeTargetElement);
	    };
	    return SVGNodeRenderer;
	}(svgRenderer_1.SVGRenderer));
	exports.SVGNodeRenderer = SVGNodeRenderer;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgRenderer_1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(19);
	/**
	 * The SVG based implementation of an edge renderer for an orthogonal edge.
	 *
	 * @export
	 * @class SVGOrthogonalEdgeRenderer
	 * @extends {SVGRenderer<T, SVGEdgeViewModel<T, EdgeRouterType>>}
	 * @implements {IOrthogonalEdgeRenderer<T, EdgeRouterType, ViewModelType>}
	 * @template T
	 * @template EdgeRouterType
	 * @template ViewModelType
	 */
	var SVGOrthogonalEdgeRenderer = /** @class */ (function (_super) {
	    __extends(SVGOrthogonalEdgeRenderer, _super);
	    function SVGOrthogonalEdgeRenderer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * Renders the edge view-model.
	     *
	     * @param {SVGEdgeViewModel} viewModel
	     * @memberof SVGEdgeRenderer
	     */
	    SVGOrthogonalEdgeRenderer.prototype.render = function (viewModel) {
	        if (!this.containerElement) {
	            throw new Error('No container element was set. Call setContainerElement() before!');
	        }
	        // Render the edge's target element.
	        var edgeTargetElement = this.createTargetElement('polyline', viewModel);
	        edgeTargetElement.classList.add('graph-edge');
	        var pointsAttrValue = '';
	        viewModel.points.forEach(function (tempPoint) {
	            pointsAttrValue += tempPoint.x.toFixed() + ',' + tempPoint.y.toFixed();
	            pointsAttrValue += ' ';
	        });
	        edgeTargetElement.setAttribute('points', pointsAttrValue);
	        this.containerElement.appendChild(edgeTargetElement);
	    };
	    /**
	     * Sets the edge's container element.
	     *
	     * @param {SVGSVGElement} containerElement
	     * @memberof SVGEdgeRenderer
	     */
	    SVGOrthogonalEdgeRenderer.prototype.setContainerElement = function (containerElement) {
	        if (!containerElement) {
	            utils_1.Utils.throwReferenceError('containerElement');
	        }
	        this.containerElement = containerElement;
	    };
	    return SVGOrthogonalEdgeRenderer;
	}(svgRenderer_1.SVGRenderer));
	exports.SVGOrthogonalEdgeRenderer = SVGOrthogonalEdgeRenderer;


/***/ })
/******/ ]);