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
	var models_1 = __webpack_require__(1);
	var factories_1 = __webpack_require__(11);
	document.addEventListener("DOMContentLoaded", function (event) {
	    // Build graph
	    var node1 = new models_1.GraphNode(new models_1.Point(10, 10), new models_1.Size(10, 10));
	    var node2 = new models_1.GraphNode(new models_1.Point(100, 100), new models_1.Size(20, 20));
	    node1.addConnection(node2);
	    var graph = new models_1.Graph();
	    graph.addNode(node1);
	    graph.addNode(node2);
	    // Get the graph's target element
	    var containerElement = document.getElementById('graph-container');
	    // Get the view-models factory
	    var viewModelsFactory = new factories_1.SVGViewModelsFactory();
	    // Create the graph's view-model
	    var graphVM = viewModelsFactory.createGraphViewModel(graph);
	    // Get the renderers factory
	    var renderersFactory = new factories_1.SVGRenderersFactory();
	    var graphRenderer = renderersFactory.createGraphRenderer();
	    graphRenderer.render(graphVM);
	});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(2));
	__export(__webpack_require__(3));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(4));
	__export(__webpack_require__(8));
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A representation of a Bezier curve.
	 *
	 * @export
	 * @class Curve
	 */
	var Curve = (function () {
	    /**
	     * Creates an instance of Curve.
	     *
	     * @memberof Curve
	     */
	    function Curve() {
	        this.segments = new Array();
	    }
	    return Curve;
	}());
	exports.Curve = Curve;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var point_1 = __webpack_require__(4);
	/**
	 * A representation of a Bezier curve segment.
	 *
	 * @export
	 * @class CurveSegment
	 */
	var CurveSegment = (function () {
	    /**
	     * Creates an instance of CurveSegment.
	     *
	     * @memberof CurveSegment
	     */
	    function CurveSegment() {
	        this.startPos = new point_1.Point();
	        this.endPos = new point_1.Point();
	        this.ctrlPos1 = new point_1.Point();
	        this.ctrlPos2 = new point_1.Point();
	    }
	    return CurveSegment;
	}());
	exports.CurveSegment = CurveSegment;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A 2D point representation.
	 *
	 * @export
	 * @class Point
	 */
	var Point = (function () {
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
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A representation of a graph.
	 *
	 * @export
	 * @class Graph
	 */
	var Graph = (function () {
	    /**
	     * Creates an instance of Graph.
	     *
	     * @memberof Graph
	     */
	    function Graph() {
	        this.nodes = new Array();
	    }
	    /**
	     * Adds a given node to the graph.
	     *
	     * @param {GraphNode} node
	     * @memberof Graph
	     */
	    Graph.prototype.addNode = function (node) {
	        this.nodes.push(node);
	    };
	    /**
	     * Returns an array with all graph nodes.
	     *
	     * @returns {Array<GraphNode>}
	     * @memberof Graph
	     */
	    Graph.prototype.getNodes = function () {
	        // Use concat to copy the array, so that the original array can't be changed.
	        return new Array().concat(this.nodes);
	    };
	    return Graph;
	}());
	exports.Graph = Graph;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var _1 = __webpack_require__(1);
	var connection_1 = __webpack_require__(7);
	/**
	 * A representation of a graph node.
	 *
	 * @export
	 * @class GraphNode
	 */
	var GraphNode = (function () {
	    /**
	     * Creates an instance of GraphNode.
	     *
	     * @param {Point} position
	     * @param {Size} [size]
	     * @memberof GraphNode
	     */
	    function GraphNode(position, size) {
	        this.position = position;
	        this.size = size;
	        if (!this.size) {
	            this.size = new _1.Size();
	        }
	        this.connections = new Array();
	    }
	    /**
	     * Adds a new connection to the given node.
	     *
	     * @param {GraphNode} targetNode
	     * @memberof GraphNode
	     */
	    GraphNode.prototype.addConnection = function (targetNode) {
	        var newConnection = new connection_1.Connection(this, targetNode);
	        this.connections.push(newConnection);
	    };
	    return GraphNode;
	}());
	exports.GraphNode = GraphNode;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A representation of a connection between two nodes.
	 *
	 * @export
	 * @class Connection
	 */
	var Connection = (function () {
	    /**
	     * Creates an instance of Connection.
	     *
	     * @param {GraphNode} sourceNode
	     * @param {GraphNode} targetNode
	     * @memberof Connection
	     */
	    function Connection(sourceNode, targetNode) {
	        if (!sourceNode) {
	            throw new ReferenceError('The argument "sourceNode" is null or undefined.');
	        }
	        else if (!targetNode) {
	            throw new ReferenceError('The argument "targetNode" is null or undefined.');
	        }
	        this.sourceNode = sourceNode;
	        this.targetNode = targetNode;
	    }
	    return Connection;
	}());
	exports.Connection = Connection;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A 2D size representation.
	 *
	 * @export
	 * @class Size
	 */
	var Size = (function () {
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
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Guid = (function () {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(12));
	__export(__webpack_require__(16));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var renderers_1 = __webpack_require__(13);
	/**
	 * The SVG based representation of a renderers factory.
	 *
	 * @export
	 * @class SVGRenderersFactory
	 * @implements {IRenderersFactory}
	 */
	var SVGRenderersFactory = (function () {
	    function SVGRenderersFactory() {
	    }
	    /**
	     * Creates the graph renderer.
	     *
	     * @returns {IRenderer<IGraphViewModel>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createGraphRenderer = function () {
	        var nodeRenderer = this.createNodeRenderer();
	        return new renderers_1.SVGGraphRenderer(nodeRenderer);
	    };
	    /**
	     * Creates the node renderer.
	     *
	     * @returns {IRenderer<INodeViewModel>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createNodeRenderer = function () {
	        return new renderers_1.SVGNodeRenderer();
	    };
	    return SVGRenderersFactory;
	}());
	exports.SVGRenderersFactory = SVGRenderersFactory;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The SVG based implementation of a node renderer.
	 *
	 * @export
	 * @class SVGNodeRenderer
	 * @implements {IRenderer<INodeViewModel>}
	 */
	var SVGNodeRenderer = (function () {
	    function SVGNodeRenderer() {
	    }
	    /**
	     * Renders the node view-model.
	     *
	     * @param {INodeViewModel} viewModel
	     * @memberof SVGNodeRenderer
	     */
	    SVGNodeRenderer.prototype.render = function (viewModel) {
	        //    return document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	    };
	    return SVGNodeRenderer;
	}());
	exports.SVGNodeRenderer = SVGNodeRenderer;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The SVG based implementation of a graph renderer.
	 *
	 * @export
	 * @class SVGGraphRenderer
	 * @implements {IRenderer<IGraphViewModel>}
	 */
	var SVGGraphRenderer = (function () {
	    /**
	     * Creates an instance of SVGGraphRenderer.
	     * @param {SVGNodeRenderer} nodeRenderer
	     * @memberof SVGGraphRenderer
	     */
	    function SVGGraphRenderer(nodeRenderer) {
	        if (!nodeRenderer) {
	            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
	        }
	        this.nodeRenderer = nodeRenderer;
	    }
	    /**
	     * Renders the graph view-model.
	     *
	     * @param {IGraphViewModel} viewModel
	     * @memberof SVGGraphRenderer
	     */
	    SVGGraphRenderer.prototype.render = function (viewModel) {
	    };
	    return SVGGraphRenderer;
	}());
	exports.SVGGraphRenderer = SVGGraphRenderer;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var viewModels_1 = __webpack_require__(17);
	/**
	 * The SVG based representation of a view-models factory.
	 *
	 * @export
	 * @class SVGViewModelsFactory
	 * @implements {IViewModelsFactory}
	 */
	var SVGViewModelsFactory = (function () {
	    function SVGViewModelsFactory() {
	    }
	    /**
	     * Creates an instance of {IGraphViewModel}.
	     *
	     * @param {Graph} graph
	     * @returns {IGraphViewModel}
	     * @memberof SVGViewModelsFactory
	     */
	    SVGViewModelsFactory.prototype.createGraphViewModel = function (graph) {
	        return new viewModels_1.SVGGraphViewModel(graph);
	    };
	    return SVGViewModelsFactory;
	}());
	exports.SVGViewModelsFactory = SVGViewModelsFactory;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(21));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var models_1 = __webpack_require__(1);
	/**
	 * The base class of all SVG based view-models.
	 *
	 * @export
	 * @abstract
	 * @class SVGViewModel
	 */
	var SVGViewModel = (function () {
	    /**
	     * Creates an instance of SVGViewModel.
	     * @memberof SVGViewModel
	     */
	    function SVGViewModel() {
	        this.guid = models_1.Guid.newGuid();
	    }
	    return SVGViewModel;
	}());
	exports.SVGViewModel = SVGViewModel;


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
	var _1 = __webpack_require__(17);
	var index_1 = __webpack_require__(1);
	var utils_1 = __webpack_require__(20);
	/**
	 * The SVG based representation of a graph's view-model.
	 *
	 * @export
	 * @class SVGGraphViewModel
	 * @extends {SVGViewModel}
	 * @implements {IGraphViewModel}
	 */
	var SVGGraphViewModel = (function (_super) {
	    __extends(SVGGraphViewModel, _super);
	    /**
	     * Creates an instance of SVGGraphViewModel.
	     *
	     * @param {Graph} graph
	     * @memberof SVGGraphViewModel
	     */
	    function SVGGraphViewModel(graph) {
	        var _this = _super.call(this) || this;
	        if (!graph) {
	            utils_1.Utils.throwReferenceError('graph');
	        }
	        _this.nodes = new Array();
	        _this.size = new index_1.Size();
	        _this.graph = graph;
	        return _this;
	    }
	    /**
	     * Returns an array with all graph nodes view-models.
	     *
	     * @returns {Array<INodeViewModel>}
	     * @memberof SVGGraphViewModel
	     */
	    SVGGraphViewModel.prototype.getNodes = function () {
	        var _this = this;
	        // Check if the nodes need to be initialized
	        var graphNodes = this.graph.getNodes();
	        if (graphNodes && this.nodes.length !== graphNodes.length) {
	            graphNodes.forEach(function (tempNode) {
	                _this.nodes.push(new _1.SVGNodeViewModel(tempNode));
	            });
	        }
	        // Use concat to copy the array, so that the original array can't be changed.
	        return new Array().concat(this.nodes);
	    };
	    return SVGGraphViewModel;
	}(_1.SVGViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A collection of util methods.
	 *
	 * @export
	 * @class Utils
	 */
	var Utils = (function () {
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
	var _1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(20);
	/**
	 * The SVG based representation of a node's view-model.
	 *
	 * @export
	 * @class SVGNodeViewModel
	 * @extends {SVGViewModel}
	 * @implements {INodeViewModel}
	 */
	var SVGNodeViewModel = (function (_super) {
	    __extends(SVGNodeViewModel, _super);
	    /**
	     * Creates an instance of SVGNodeViewModel.
	     *
	     * @param {GraphNode} node
	     * @memberof SVGNodeViewModel
	     */
	    function SVGNodeViewModel(node) {
	        var _this = _super.call(this) || this;
	        if (!node) {
	            utils_1.Utils.throwReferenceError('node');
	        }
	        _this.node = node;
	        return _this;
	    }
	    Object.defineProperty(SVGNodeViewModel.prototype, "size", {
	        /**
	         * Gets the node's size.
	         *
	         * @type {Size}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.node.size;
	        },
	        /**
	         * Sets the node's size.
	         *
	         * @memberof SVGNodeViewModel
	         */
	        set: function (value) {
	            this.node.size = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SVGNodeViewModel;
	}(_1.SVGViewModel));
	exports.SVGNodeViewModel = SVGNodeViewModel;


/***/ })
/******/ ]);