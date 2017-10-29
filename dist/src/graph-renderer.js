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
	var graphNode_1 = __webpack_require__(1);
	var graph_1 = __webpack_require__(5);
	var visualGraph_1 = __webpack_require__(7);
	var visualGraphNode_1 = __webpack_require__(10);
	var size_1 = __webpack_require__(11);
	var point_1 = __webpack_require__(12);
	var svgViewModelsFactory_1 = __webpack_require__(13);
	var svgRenderersFactory_1 = __webpack_require__(20);
	document.addEventListener("DOMContentLoaded", function (event) {
	    // Build the graph nodes
	    var graphNode1 = new graphNode_1.GraphNode();
	    var graphNode2 = new graphNode_1.GraphNode();
	    // Build the graph
	    var graph = new graph_1.Graph();
	    graph.addNode(graphNode1);
	    graph.addNode(graphNode2);
	    // Build visual graph nodes
	    var visualGraphNode1 = new visualGraphNode_1.VisualGraphNode();
	    visualGraphNode1.node = graphNode1;
	    visualGraphNode1.position = new point_1.Point(100, 100);
	    visualGraphNode1.size = new size_1.Size(50, 50);
	    var visualGraphNode2 = new visualGraphNode_1.VisualGraphNode();
	    visualGraphNode2.node = graphNode2;
	    visualGraphNode2.position = new point_1.Point(400, 300);
	    visualGraphNode2.size = new size_1.Size(50, 50);
	    // Build the visual graph
	    var visualGraph = new visualGraph_1.VisualGraph();
	    visualGraph.graph = graph;
	    visualGraph.addNode(visualGraphNode1);
	    visualGraph.addNode(visualGraphNode2);
	    // Get the graph's target element
	    var containerElement = document.getElementById('graph-container');
	    // Get the view-models factory
	    var viewModelsFactory = new svgViewModelsFactory_1.SVGViewModelsFactory();
	    // Create the graph's view-model
	    var graphVM = viewModelsFactory.createGraphViewModel(visualGraph);
	    // Get the renderers factory
	    var renderersFactory = new svgRenderersFactory_1.SVGRenderersFactory();
	    var graphRenderer = renderersFactory.createGraphRenderer();
	    graphRenderer.setContainerElement(containerElement);
	    graphRenderer.render(graphVM);
	});


/***/ }),
/* 1 */
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
	var graphItem_1 = __webpack_require__(2);
	var ItemList_1 = __webpack_require__(4);
	/**
	 * A representation of a graph node.
	 *
	 * @export
	 * @class GraphNode
	 * @extends {GraphItem}
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
	        _this.edges = new ItemList_1.ItemList();
	        return _this;
	    }
	    /**
	     * Adds the given edge to the node.
	     *
	     * @param {IGraphEdge} edge
	     * @memberof GraphNode
	     */
	    GraphNode.prototype.addEdge = function (edge) {
	        edge.from = this;
	        this.edges.add(edge);
	    };
	    return GraphNode;
	}(graphItem_1.GraphItem));
	exports.GraphNode = GraphNode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var guid_1 = __webpack_require__(3);
	/**
	 * The base class for all graph items.
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * This class implements a list of graph items.
	 *
	 * @export
	 * @class ItemList
	 * @implements {IItemList<T>}
	 * @template T
	 */
	var ItemList = /** @class */ (function () {
	    /**
	     * Creates an instance of ItemList.
	     *
	     * @memberof ItemList
	     */
	    function ItemList() {
	        var _this = this;
	        /**
	         * The forEach implementation for the list of items.
	         *
	         * @param {(item: T) => any} callback
	         * @returns {*}
	         * @memberof ItemList
	         */
	        this.forEach = function (callback) {
	            var itemsCount = _this.items.length;
	            var tempItem;
	            for (var i = 0; i < itemsCount; i++) {
	                tempItem = _this.items[i];
	                var result = callback(tempItem);
	                if (result || result === false) {
	                    return result;
	                }
	            }
	        };
	        this.items = new Array();
	    }
	    Object.defineProperty(ItemList.prototype, "count", {
	        /**
	         * The number of items.
	         *
	         * @type {number}
	         * @memberof ItemList
	         */
	        get: function () {
	            return this.items.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds the given item.
	     *
	     * @param {T} item
	     * @memberof ItemList
	     */
	    ItemList.prototype.add = function (item) {
	        this.items.push(item);
	    };
	    /**
	     * Returns the index of the given item.
	     *
	     * @param {T} item
	     * @returns {number}
	     * @memberof ItemList
	     */
	    ItemList.prototype.indexOf = function (item) {
	        return this.items.indexOf(item);
	    };
	    /**
	     * Removes the given item.
	     *
	     * @param {T} item
	     * @memberof ItemList
	     */
	    ItemList.prototype.remove = function (item) {
	        var itemIndex = this.items.indexOf(item);
	        if (itemIndex > -1) {
	            this.items.splice(itemIndex, 1);
	        }
	    };
	    /**
	     * Removes the item at the given index
	     *
	     * @param {number} index
	     * @memberof ItemList
	     */
	    ItemList.prototype.removeAt = function (index) {
	        if (index > -1 && index < this.items.length) {
	            this.items.splice(index, 1);
	        }
	    };
	    /**
	     * Finds an item by the given guid.
	     *
	     * @param {string} guid
	     * @returns {T}
	     * @memberof ItemList
	     */
	    ItemList.prototype.findByGuid = function (guid) {
	        // Search the list for the guid
	        var foundItem = this.forEach(function (tempItem) {
	            if (tempItem.guid === guid) {
	                return tempItem;
	            }
	        });
	        if (foundItem) {
	            return foundItem;
	        }
	        else {
	            return null;
	        }
	    };
	    return ItemList;
	}());
	exports.ItemList = ItemList;


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
	var utils_1 = __webpack_require__(6);
	var graphItem_1 = __webpack_require__(2);
	var ItemList_1 = __webpack_require__(4);
	/**
	 * A representation of a graph.
	 *
	 * @export
	 * @class Graph
	 */
	var Graph = /** @class */ (function (_super) {
	    __extends(Graph, _super);
	    /**
	     * Creates an instance of Graph.
	     *
	     * @memberof Graph
	     */
	    function Graph() {
	        var _this = _super.call(this) || this;
	        _this.nodes = new ItemList_1.ItemList();
	        return _this;
	    }
	    /**
	     * Adds the given node to the graph.
	     *
	     * @param {TNode} value
	     * @returns {IGraphNode<TNode>}
	     * @memberof Graph
	     */
	    Graph.prototype.addNode = function (node) {
	        if (!node) {
	            utils_1.Utils.throwReferenceError('node');
	        }
	        this.nodes.add(node);
	    };
	    return Graph;
	}(graphItem_1.GraphItem));
	exports.Graph = Graph;


/***/ }),
/* 6 */
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
/* 7 */
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
	var visualGraphItem_1 = __webpack_require__(8);
	var ItemList_1 = __webpack_require__(4);
	var utils_1 = __webpack_require__(6);
	/**
	 * The implementation of a visual graph.
	 *
	 * @export
	 * @class VisualGraph
	 */
	var VisualGraph = /** @class */ (function (_super) {
	    __extends(VisualGraph, _super);
	    /**
	     * Creates an instance of VisualGraph.
	     *
	     * @memberof VisualGraph
	     */
	    function VisualGraph() {
	        var _this = _super.call(this) || this;
	        _this.nodes = new ItemList_1.ItemList();
	        return _this;
	    }
	    /**
	     * Adds the given node to the graph.
	     *
	     * @param {IVisualGraphNode} node
	     * @memberof VisualGraph
	     */
	    VisualGraph.prototype.addNode = function (node) {
	        if (!node) {
	            utils_1.Utils.throwReferenceError('node');
	        }
	        this.nodes.add(node);
	    };
	    /**
	     * Handles the selection intent of a node.
	     *
	     * @param {boolean} ctrlKey
	     * @memberof VisualGraph
	     */
	    VisualGraph.prototype.handleGraphNodeSelection = function (node, ctrlKey) {
	        if (!node) {
	            return;
	        }
	        if (ctrlKey) {
	            node.isSelected = !node.isSelected;
	        }
	        else {
	            this.deselectAllNodes();
	            node.isSelected = true;
	        }
	    };
	    /**
	     * Deselects all graph nodes.
	     *
	     * @returns {void}
	     * @memberof VisualGraph
	     */
	    VisualGraph.prototype.deselectAllNodes = function () {
	        if (!this.nodes) {
	            return;
	        }
	        this.nodes.forEach(function (node) {
	            node.isSelected = false;
	        });
	    };
	    return VisualGraph;
	}(visualGraphItem_1.VisualGraphItem));
	exports.VisualGraph = VisualGraph;


/***/ }),
/* 8 */
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
	var graphItem_1 = __webpack_require__(2);
	var graphEvent_1 = __webpack_require__(9);
	/**
	 * This class implements a visual graph item.
	 *
	 * @export
	 * @class VisualGraphItem
	 * @implements {IVisualGraphItem}
	 */
	var VisualGraphItem = /** @class */ (function (_super) {
	    __extends(VisualGraphItem, _super);
	    /**
	     * Creates an instance of VisualGraphItem.
	     *
	     * @memberof VisualGraphItem
	     */
	    function VisualGraphItem() {
	        var _this = _super.call(this) || this;
	        _this._isSelected = false;
	        _this.selectionChangedEvent = new graphEvent_1.GraphEvent();
	        return _this;
	    }
	    Object.defineProperty(VisualGraphItem.prototype, "isSelected", {
	        /**
	         * Gets the selection state.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberof VisualGraphItem
	         */
	        get: function () {
	            return this._isSelected;
	        },
	        /**
	         * Sets the selection state.
	         *
	         * @memberof VisualGraphItem
	         */
	        set: function (value) {
	            var hasChanged = this._isSelected !== value;
	            this._isSelected = value;
	            if (hasChanged) {
	                this.onSelectionChanged(this._isSelected);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Triggers the selection changed event.
	     *
	     * @private
	     * @param {boolean} selected
	     * @memberof VisualGraphNode
	     */
	    VisualGraphItem.prototype.onSelectionChanged = function (selected) {
	        if (this.selectionChangedEvent) {
	            this.selectionChangedEvent.invoke(this, selected);
	        }
	    };
	    return VisualGraphItem;
	}(graphItem_1.GraphItem));
	exports.VisualGraphItem = VisualGraphItem;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(6);
	/**
	 * The representation of an event.
	 *
	 * @export
	 * @class GraphEvent
	 */
	var GraphEvent = /** @class */ (function () {
	    /**
	     * Creates an instance of GraphEvent.
	     *
	     * @memberof GraphEvent
	     */
	    function GraphEvent() {
	        this.eventListeners = new Array();
	    }
	    Object.defineProperty(GraphEvent.prototype, "count", {
	        /**
	         * Gets the number of added event listeners.
	         *
	         * @readonly
	         * @type {number}
	         * @memberof GraphEvent
	         */
	        get: function () {
	            if (this.eventListeners) {
	                return this.eventListeners.length;
	            }
	            else {
	                return 0;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds a listener to the event.
	     *
	     * @param {IGraphEventListener<TSource, UValue>} eventListener
	     * @returns
	     * @memberof GraphEvent
	     */
	    GraphEvent.prototype.addEventListener = function (listener) {
	        if (!listener) {
	            utils_1.Utils.throwReferenceError('listener');
	        }
	        this.eventListeners.push(listener);
	    };
	    /**
	     * Invokes the event.
	     *
	     * @param {TSource} sender
	     * @param {UValue} args
	     * @memberof GraphEvent
	     */
	    GraphEvent.prototype.invoke = function (sender, args) {
	        if (this.eventListeners && this.eventListeners.length > 0) {
	            var listenersCount = this.eventListeners.length;
	            for (var i = 0; i < listenersCount; i++) {
	                this.eventListeners[i](sender, args);
	            }
	        }
	    };
	    return GraphEvent;
	}());
	exports.GraphEvent = GraphEvent;


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
	var visualGraphItem_1 = __webpack_require__(8);
	var ItemList_1 = __webpack_require__(4);
	/**
	 * The implementation of a visual graph node.
	 *
	 * @export
	 * @class VisualGraphNode
	 * @extends {VisualGraphItem}
	 * @implements {IVisualGraphNode}
	 */
	var VisualGraphNode = /** @class */ (function (_super) {
	    __extends(VisualGraphNode, _super);
	    /**
	     * Creates an instance of VisualGraphNode.
	     *
	     * @memberof VisualGraphNode
	     */
	    function VisualGraphNode() {
	        var _this = _super.call(this) || this;
	        _this.edges = new ItemList_1.ItemList();
	        return _this;
	    }
	    return VisualGraphNode;
	}(visualGraphItem_1.VisualGraphItem));
	exports.VisualGraphNode = VisualGraphNode;


/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgGraphViewModel_1 = __webpack_require__(14);
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
	     * Creates the graph view-model.
	     *
	     * @param {IVisualGraph} graph
	     * @returns {IGraphViewModel}
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
	var svgGraphItemViewModel_1 = __webpack_require__(15);
	var point_1 = __webpack_require__(12);
	var svgUtils_1 = __webpack_require__(18);
	var svgGraphNodeViewModel_1 = __webpack_require__(19);
	/**
	 * The SVG based representation of a graph's view-model.
	 *
	 * @export
	 * @class SVGGraphViewModel
	 * @extends {SVGGraphItemViewModel<IVisualGraph>}
	 * @implements {ISVGGraphViewModel}
	 */
	var SVGGraphViewModel = /** @class */ (function (_super) {
	    __extends(SVGGraphViewModel, _super);
	    /**
	     * Creates an instance of SVGGraphViewModel.
	     *
	     * @param {IVisualGraph} model
	     * @memberof SVGGraphViewModel
	     */
	    function SVGGraphViewModel(model) {
	        var _this = _super.call(this, model) || this;
	        _this.mouseDownHandler = function (e) {
	            // Get the current selected graph element.
	            var selectedElement = e.srcElement;
	            var elementGuid = svgUtils_1.SVGUtils.getGuid(selectedElement);
	            if (elementGuid && elementGuid === _this.guid) {
	                // The graph was selected
	                _this.model.deselectAllNodes();
	                return;
	            }
	            _this.currentMoveX = e.clientX;
	            _this.currentMoveY = e.clientY;
	            // Set drag handler
	            // selectedElement.onmousemove = (e: MouseEvent) => {
	            //     let dx = e.clientX - this.currentMoveX;
	            //     let dy = e.clientY - this.currentMoveY;
	            //     this.currentTransformMatrix[4] += dx;
	            //     this.currentTransformMatrix[5] += dy;
	            //     let newMatrix = 'matrix(' + this.currentTransformMatrix.join(' ') + ')';
	            //     selectedElement.setAttributeNS(null, 'transform', newMatrix);
	            //     this.currentMoveX = e.clientX;
	            //     this.currentMoveY = e.clientY;
	            // };
	            // // Set drop handler
	            // selectedElement.onmouseup = (e: MouseEvent) => {
	            //     selectedElement.onmousemove = null;
	            //     selectedElement.onmouseout = null;
	            //     selectedElement.onmouseup = null;
	            // };
	            // // Set leave handler
	            // selectedElement.onmouseout = (e: MouseEvent) => {
	            //     selectedElement.onmousemove = null;
	            //     selectedElement.onmouseout = null;
	            //     selectedElement.onmouseup = null;
	            // }
	        };
	        _this.nodes = new Array();
	        _this._currentMovePosition = new point_1.Point();
	        _this.initViewModel();
	        return _this;
	    }
	    Object.defineProperty(SVGGraphViewModel.prototype, "currentMoveX", {
	        /**
	         * Gets the node's current move position x coordinate.
	         *
	         * @type {Point}
	         * @memberof SVGGraphViewModel
	         */
	        get: function () {
	            return this._currentMovePosition.x;
	        },
	        /**
	         * Sets the node's current move position x coordinate.
	         *
	         * @memberof SVGGraphViewModel
	         */
	        set: function (value) {
	            this._currentMovePosition.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGGraphViewModel.prototype, "currentMoveY", {
	        /**
	         * Gets the node's current move position y coordinate.
	         *
	         * @type {Point}
	         * @memberof SVGGraphViewModel
	         */
	        get: function () {
	            return this._currentMovePosition.y;
	        },
	        /**
	         * Sets the node's current move position y coordinate.
	         *
	         * @memberof SVGGraphViewModel
	         */
	        set: function (value) {
	            this._currentMovePosition.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	                var newNodeVM = new svgGraphNodeViewModel_1.SVGGraphNodeViewModel(_this.model, tempNode);
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
	}(svgGraphItemViewModel_1.SVGGraphItemViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


/***/ }),
/* 15 */
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
	var graphItemViewModel_1 = __webpack_require__(16);
	/**
	 * The base class of all SVG based graph item's view-models.
	 *
	 * @export
	 * @abstract
	 * @class SVGGraphItemViewModel
	 * @extends {GraphItemViewModel<TModel>}
	 * @implements {ISVGGraphItemViewModel<TModel>}
	 * @template TModel
	 */
	var SVGGraphItemViewModel = /** @class */ (function (_super) {
	    __extends(SVGGraphItemViewModel, _super);
	    function SVGGraphItemViewModel() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return SVGGraphItemViewModel;
	}(graphItemViewModel_1.GraphItemViewModel));
	exports.SVGGraphItemViewModel = SVGGraphItemViewModel;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(6);
	var viewModelEventAdapter_1 = __webpack_require__(17);
	/**
	 * The abstract base class for all graph item view-models.
	 *
	 * @export
	 * @abstract
	 * @class GraphItemViewModel
	 * @implements {IGraphItemViewModel}
	 * @template TModel
	 */
	var GraphItemViewModel = /** @class */ (function () {
	    /**
	     * Creates an instance of GraphItemViewModel.
	     *
	     * @param {TModel} model
	     * @memberof GraphItemViewModel
	     */
	    function GraphItemViewModel(model) {
	        if (!model) {
	            utils_1.Utils.throwReferenceError('model');
	        }
	        this.model = model;
	        this.selectionChangedEvent = new viewModelEventAdapter_1.ViewModelEventAdapter(this, this.model.selectionChangedEvent);
	    }
	    Object.defineProperty(GraphItemViewModel.prototype, "guid", {
	        /**
	         * Gets the model's identifier.
	         *
	         * @type {string}
	         * @memberof GraphItemViewModel
	         */
	        get: function () {
	            return this.model.guid;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GraphItemViewModel.prototype, "position", {
	        /**
	         * Gets the model's position.
	         *
	         * @readonly
	         * @type {Point}
	         * @memberof GraphItemViewModel
	         */
	        get: function () {
	            return this.model.position;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GraphItemViewModel.prototype, "size", {
	        /**
	         * Gets the model's size.
	         *
	         * @readonly
	         * @type {Size}
	         * @memberof GraphItemViewModel
	         */
	        get: function () {
	            return this.model.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return GraphItemViewModel;
	}());
	exports.GraphItemViewModel = GraphItemViewModel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(6);
	/**
	 * An adapter class which can connect model events to view-model events.
	 *
	 * @export
	 * @class ViewModelEventAdapter
	 */
	var ViewModelEventAdapter = /** @class */ (function () {
	    /**
	     * Creates an instance of ViewModelEventAdapter.
	     *
	     * @param {TViewModelSource} viewModel
	     * @param {IGraphEvent<TModelSource, TModelValue>} modelEvent
	     * @memberof ViewModelEventAdapter
	     */
	    function ViewModelEventAdapter(viewModel, modelEvent) {
	        if (!viewModel) {
	            utils_1.Utils.throwReferenceError('viewModel');
	        }
	        else if (!modelEvent) {
	            utils_1.Utils.throwReferenceError('modelEvent');
	        }
	        this.viewModel = viewModel;
	        this.modelEvent = modelEvent;
	    }
	    /**
	     * Adds a listener to the event.
	     *
	     * @param {IGraphEventListener<TViewModelSource, TModelValue>} listener
	     * @memberof ViewModelEventAdapter
	     */
	    ViewModelEventAdapter.prototype.addEventListener = function (listener) {
	        var _this = this;
	        // Create the new event listener, which delegates the invocation to the model event listener.
	        var viewModelEventListener = function (source, value) {
	            listener(_this.viewModel, value);
	        };
	        this.modelEvent.addEventListener(viewModelEventListener);
	    };
	    return ViewModelEventAdapter;
	}());
	exports.ViewModelEventAdapter = ViewModelEventAdapter;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(6);
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
	     * Sets the guid attribute.
	     *
	     * @static
	     * @param {SVGElement} targetElement
	     * @param {IGraphItemViewModel<IVisualGraphItem>} viewModel
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
	    /**
	     * Gets the element, which is related with the given guid.
	     *
	     * @static
	     * @param {Document} documentRef
	     * @param {string} guid
	     * @returns {(SVGElement | null)}
	     * @memberof SVGUtils
	     */
	    SVGUtils.getElementByGuid = function (documentRef, guid) {
	        if (!guid) {
	            return null;
	        }
	        var result = null;
	        result = documentRef.querySelector('[data-graph-guid=\"' + guid + '\"]');
	        return result;
	    };
	    /**
	     * Gets the guid from an element.
	     *
	     * @static
	     * @param {SVGElement} targetElement
	     * @returns {(string | null)}
	     * @memberof SVGUtils
	     */
	    SVGUtils.getGuid = function (targetElement) {
	        if (!targetElement) {
	            utils_1.Utils.throwReferenceError('targetElement');
	        }
	        if (targetElement.hasAttribute('data-graph-guid')) {
	            return targetElement.getAttribute('data-graph-guid');
	        }
	        else {
	            return null;
	        }
	    };
	    return SVGUtils;
	}());
	exports.SVGUtils = SVGUtils;


/***/ }),
/* 19 */
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
	var svgGraphItemViewModel_1 = __webpack_require__(15);
	var point_1 = __webpack_require__(12);
	/**
	 * The SVG based representation of a graph node's view-model.
	 *
	 * @export
	 * @class SVGGraphNodeViewModel
	 * @extends {SVGGraphItemViewModel<IVisualGraphNode>}
	 * @implements {IGraphNodeViewModel}
	 */
	var SVGGraphNodeViewModel = /** @class */ (function (_super) {
	    __extends(SVGGraphNodeViewModel, _super);
	    /**
	     * Creates an instance of SVGGraphNodeViewModel.
	     *
	     * @param {IVisualGraph} parentGraph
	     * @param {IVisualGraphNode} graphNode
	     * @memberof SVGGraphNodeViewModel
	     */
	    function SVGGraphNodeViewModel(parentGraph, graphNode) {
	        var _this = _super.call(this, graphNode) || this;
	        _this.mouseDownHandler = function (e) {
	            var selectedElement = e.srcElement;
	            if (!selectedElement) {
	                return;
	            }
	            if (_this.model && _this.parentGraph) {
	                _this.parentGraph.handleGraphNodeSelection(_this.model, e.ctrlKey);
	            }
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
	        _this.parentGraph = parentGraph;
	        _this._currentMovePosition = new point_1.Point();
	        _this.currentTransformMatrix = new Array();
	        return _this;
	    }
	    Object.defineProperty(SVGGraphNodeViewModel.prototype, "currentMoveX", {
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
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGGraphNodeViewModel.prototype, "currentMoveY", {
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
	    SVGGraphNodeViewModel.prototype.initViewModel = function () {
	    };
	    return SVGGraphNodeViewModel;
	}(svgGraphItemViewModel_1.SVGGraphItemViewModel));
	exports.SVGGraphNodeViewModel = SVGGraphNodeViewModel;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var svgGraphNodeRenderer_1 = __webpack_require__(21);
	var svgGraphRenderer_1 = __webpack_require__(24);
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
	     * @returns {IGraphRenderer}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createGraphRenderer = function () {
	        var nodeRenderer = this.createNodeRenderer();
	        return new svgGraphRenderer_1.SVGGraphRenderer(nodeRenderer);
	    };
	    /**
	     * Creates the node renderer.
	     *
	     * @returns {ISVGGraphNodeRenderer}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createNodeRenderer = function () {
	        return new svgGraphNodeRenderer_1.SVGGraphNodeRenderer();
	    };
	    return SVGRenderersFactory;
	}());
	exports.SVGRenderersFactory = SVGRenderersFactory;


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
	var svgGraphItemRenderer_1 = __webpack_require__(22);
	var utils_1 = __webpack_require__(6);
	var svgUtils_1 = __webpack_require__(18);
	/**
	 * The SVG based implementation of a graph node renderer.
	 *
	 * @export
	 * @class SVGGraphNodeRenderer
	 * @extends {SVGGraphItemRenderer<ISVGGraphNodeViewModel>}
	 * @implements {ISVGGraphNodeRenderer}
	 */
	var SVGGraphNodeRenderer = /** @class */ (function (_super) {
	    __extends(SVGGraphNodeRenderer, _super);
	    function SVGGraphNodeRenderer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * Sets the node's container element.
	     *
	     * @param {SVGSVGElement} containerElement
	     * @memberof SVGGraphNodeRenderer
	     */
	    SVGGraphNodeRenderer.prototype.setContainerElement = function (containerElement) {
	        if (!containerElement) {
	            utils_1.Utils.throwReferenceError('containerElement');
	        }
	        this.containerElement = containerElement;
	    };
	    /**
	     * Renders the graph node view-model.
	     *
	     * @param {ISVGGraphNodeViewModel} viewModel
	     * @memberof SVGGraphNodeRenderer
	     */
	    SVGGraphNodeRenderer.prototype.render = function (viewModel) {
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
	        // Set the size
	        if (viewModel.size) {
	            nodeTargetElement.setAttribute('width', viewModel.size.width.toFixed());
	            nodeTargetElement.setAttribute('height', viewModel.size.height.toFixed());
	        }
	        viewModel.selectionChangedEvent.addEventListener(this.selectionChangedListener);
	        this.containerElement.appendChild(nodeTargetElement);
	    };
	    SVGGraphNodeRenderer.prototype.selectionChangedListener = function (source, selected) {
	        if (!source) {
	            return;
	        }
	        // Find the target element by the guid.
	        var targetElement = svgUtils_1.SVGUtils.getElementByGuid(document, source.guid);
	        if (targetElement) {
	            targetElement.classList.toggle('graph-node-selected');
	        }
	    };
	    return SVGGraphNodeRenderer;
	}(svgGraphItemRenderer_1.SVGGraphItemRenderer));
	exports.SVGGraphNodeRenderer = SVGGraphNodeRenderer;


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
	var graphItemRenderer_1 = __webpack_require__(23);
	var utils_1 = __webpack_require__(6);
	var svgUtils_1 = __webpack_require__(18);
	/**
	 * The abstract base class for SVG based renderers.
	 *
	 * @export
	 * @abstract
	 * @class SVGGraphItemRenderer
	 * @extends {GraphItemRenderer<TViewModel>}
	 * @implements {ISVGGraphItemRenderer}
	 * @template TViewModel
	 */
	var SVGGraphItemRenderer = /** @class */ (function (_super) {
	    __extends(SVGGraphItemRenderer, _super);
	    function SVGGraphItemRenderer() {
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
	    SVGGraphItemRenderer.prototype.createTargetElement = function (elementName, viewModel) {
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
	    return SVGGraphItemRenderer;
	}(graphItemRenderer_1.GraphItemRenderer));
	exports.SVGGraphItemRenderer = SVGGraphItemRenderer;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The abstract base class for all graph item renderers.
	 *
	 * @export
	 * @abstract
	 * @class GraphItemRenderer
	 * @implements {IGraphItemRenderer<TViewModel>}
	 * @template TViewModel
	 */
	var GraphItemRenderer = /** @class */ (function () {
	    function GraphItemRenderer() {
	    }
	    return GraphItemRenderer;
	}());
	exports.GraphItemRenderer = GraphItemRenderer;


/***/ }),
/* 24 */
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
	var svgGraphItemRenderer_1 = __webpack_require__(22);
	var utils_1 = __webpack_require__(6);
	/**
	 * The SVG based implementation of a graph renderer.
	 *
	 * @export
	 * @class SVGGraphRenderer
	 * @extends {SVGGraphItemRenderer<ISVGGraphViewModel>}
	 * @implements {ISVGGraphRenderer}
	 */
	var SVGGraphRenderer = /** @class */ (function (_super) {
	    __extends(SVGGraphRenderer, _super);
	    //private edgeRenderer: SVGEdgeRenderer<VisualGraphNode>;
	    /**
	     * Creates an instance of SVGGraphRenderer.
	     *
	     * @param {SVGGraphNodeRenderer} nodeRenderer
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
	        // Set selection handler
	        graphTargetElement.onmousedown = viewModel.mouseDownHandler;
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
	}(svgGraphItemRenderer_1.SVGGraphItemRenderer));
	exports.SVGGraphRenderer = SVGGraphRenderer;


/***/ })
/******/ ]);