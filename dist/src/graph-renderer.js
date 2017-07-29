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
	var factories_1 = __webpack_require__(12);
	document.addEventListener("DOMContentLoaded", function (event) {
	    // Build graph
	    var node1 = new models_1.GraphNode(new models_1.Point(100, 100), new models_1.Size(50, 50));
	    var node2 = new models_1.GraphNode(new models_1.Point(400, 300), new models_1.Size(50, 50));
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
	    graphRenderer.setContainerElement(containerElement);
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
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(6));
	__export(__webpack_require__(3));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var size_1 = __webpack_require__(3);
	/**
	 * The base class for all graph related models.
	 *
	 * @export
	 * @abstract
	 * @class GraphModel
	 */
	var GraphModel = (function () {
	    /**
	     * Creates an instance of GraphModel.
	     *
	     * @param {Size} [size]
	     * @memberof GraphModel
	     */
	    function GraphModel(size) {
	        this.size = size;
	        if (!this.size) {
	            this.size = new size_1.Size();
	        }
	    }
	    return GraphModel;
	}());
	exports.GraphModel = GraphModel;


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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var point_1 = __webpack_require__(6);
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
/* 6 */
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
	var _1 = __webpack_require__(1);
	/**
	 * A representation of a graph.
	 *
	 * @export
	 * @class Graph
	 */
	var Graph = (function (_super) {
	    __extends(Graph, _super);
	    /**
	     * Creates an instance of Graph.
	     *
	     * @memberof Graph
	     */
	    function Graph() {
	        var _this = _super.call(this) || this;
	        _this.nodes = new Array();
	        return _this;
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
	}(_1.GraphModel));
	exports.Graph = Graph;


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
	var _1 = __webpack_require__(1);
	/**
	 * A representation of a graph node.
	 *
	 * @export
	 * @class GraphNode
	 */
	var GraphNode = (function (_super) {
	    __extends(GraphNode, _super);
	    /**
	     * Creates an instance of GraphNode.
	     *
	     * @param {Point} position
	     * @param {Size} [size]
	     * @memberof GraphNode
	     */
	    function GraphNode(position, size) {
	        var _this = _super.call(this, size) || this;
	        _this.position = position;
	        _this.connections = new Array();
	        return _this;
	    }
	    /**
	     * Adds a new edge to the given node.
	     *
	     * @param {GraphNode} targetNode
	     * @memberof GraphNode
	     */
	    GraphNode.prototype.addConnection = function (targetNode) {
	        var newEdge = new _1.Edge(this, targetNode);
	        this.connections.push(newEdge);
	    };
	    /**
	     * Returns an array with all node connections.
	     *
	     * @returns {Array<Edge>}
	     * @memberof GraphNode
	     */
	    GraphNode.prototype.getConnections = function () {
	        // Use concat to copy the array, so that the original array can't be changed.
	        return new Array().concat(this.connections);
	    };
	    return GraphNode;
	}(_1.GraphModel));
	exports.GraphNode = GraphNode;


/***/ }),
/* 9 */
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
	var _1 = __webpack_require__(1);
	/**
	 * A representation of an edge between two nodes.
	 *
	 * @export
	 * @class Edge
	 */
	var Edge = (function (_super) {
	    __extends(Edge, _super);
	    /**
	     * Creates an instance of Edge.
	     *
	     * @param {GraphNode} sourceNode
	     * @param {GraphNode} targetNode
	     * @memberof Edge
	     */
	    function Edge(sourceNode, targetNode) {
	        var _this = _super.call(this) || this;
	        if (!sourceNode) {
	            throw new ReferenceError('The argument "sourceNode" is null or undefined.');
	        }
	        else if (!targetNode) {
	            throw new ReferenceError('The argument "targetNode" is null or undefined.');
	        }
	        _this.sourceNode = sourceNode;
	        _this.targetNode = targetNode;
	        return _this;
	    }
	    return Edge;
	}(_1.GraphModel));
	exports.Edge = Edge;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(13));
	__export(__webpack_require__(22));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var renderers_1 = __webpack_require__(14);
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
	     * @returns {IGraphRenderer}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createGraphRenderer = function () {
	        var nodeRenderer = this.createNodeRenderer();
	        var edgeRenderer = this.createEdgeRenderer();
	        return new renderers_1.SVGGraphRenderer(nodeRenderer, edgeRenderer);
	    };
	    /**
	     * Creates the node renderer.
	     *
	     * @returns {SVGNodeRenderer}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createNodeRenderer = function () {
	        return new renderers_1.SVGNodeRenderer();
	    };
	    /**
	     * Creates the edge renderer.
	     *
	     * @returns {SVGEdgeRenderer}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createEdgeRenderer = function () {
	        return new renderers_1.SVGEdgeRenderer();
	    };
	    return SVGRenderersFactory;
	}());
	exports.SVGRenderersFactory = SVGRenderersFactory;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));


/***/ }),
/* 15 */
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
	var Renderer = (function () {
	    function Renderer() {
	    }
	    return Renderer;
	}());
	exports.Renderer = Renderer;


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
	var renderer_1 = __webpack_require__(15);
	var svgUtils_1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(18);
	/**
	 * The abstract base class for SVG based renderers.
	 *
	 * @export
	 * @abstract
	 * @class SVGRenderer
	 * @extends {Renderer<ViewModelType>}
	 * @implements {IRenderer<ViewModelType>}
	 * @template ViewModelType
	 */
	var SVGRenderer = (function (_super) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(18);
	/**
	 * A collection of SVG related util methods.
	 *
	 * @export
	 * @class SVGUtils
	 */
	var SVGUtils = (function () {
	    function SVGUtils() {
	    }
	    /**
	     * Sets the Guid attribute.
	     *
	     * @static
	     * @param {Element} targetElement
	     * @param {SVGViewModel} viewModel
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
/* 18 */
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
	var utils_1 = __webpack_require__(18);
	var svgRenderer_1 = __webpack_require__(16);
	/**
	 * The SVG based implementation of a node renderer.
	 *
	 * @export
	 * @class SVGNodeRenderer
	 * @implements {INodeRenderer}
	 */
	var SVGNodeRenderer = (function (_super) {
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
	     * @param {SVGNodeViewModel} viewModel
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
	        // Set the size
	        if (viewModel.size) {
	            nodeTargetElement.setAttribute('width', viewModel.size.width.toFixed());
	            nodeTargetElement.setAttribute('height', viewModel.size.height.toFixed());
	        }
	        this.containerElement.appendChild(nodeTargetElement);
	    };
	    return SVGNodeRenderer;
	}(svgRenderer_1.SVGRenderer));
	exports.SVGNodeRenderer = SVGNodeRenderer;


/***/ }),
/* 20 */
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
	var utils_1 = __webpack_require__(18);
	var _1 = __webpack_require__(14);
	/**
	 * The SVG based implementation of a graph renderer.
	 *
	 * @export
	 * @class SVGGraphRenderer
	 * @implements {IGraphRenderer}
	 */
	var SVGGraphRenderer = (function (_super) {
	    __extends(SVGGraphRenderer, _super);
	    /**
	     * Creates an instance of SVGGraphRenderer.
	     *
	     * @param {SVGNodeRenderer} nodeRenderer
	     * @param {SVGEdgeRenderer} edgeRenderer
	     * @memberof SVGGraphRenderer
	     */
	    function SVGGraphRenderer(nodeRenderer, edgeRenderer) {
	        var _this = _super.call(this) || this;
	        if (!nodeRenderer) {
	            throw new ReferenceError('The argument "nodeRenderer" is null or undefined.');
	        }
	        else if (!edgeRenderer) {
	            throw new ReferenceError('The argument "edgeRenderer" is null or undefined.');
	        }
	        _this.nodeRenderer = nodeRenderer;
	        _this.edgeRenderer = edgeRenderer;
	        return _this;
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
	        // Define the viewport coordinate system.
	        graphTargetElement.setAttribute('width', '800');
	        graphTargetElement.setAttribute('height', '600');
	        // Define the user coordinate system.
	        graphTargetElement.setAttribute('viewbox', '0 0 800, 600');
	        graphTargetElement.classList.add('graph');
	        this.containerElement.appendChild(graphTargetElement);
	        // Render all graph edges
	        if (viewModel.connections && viewModel.connections.length > 0) {
	            viewModel.connections.forEach(function (edgeVM) {
	                _this.edgeRenderer.setContainerElement(graphTargetElement);
	                _this.edgeRenderer.render(edgeVM);
	            });
	        }
	        // Render all graph nodes
	        if (viewModel.nodes && viewModel.nodes.length > 0) {
	            viewModel.nodes.forEach(function (nodeVM) {
	                _this.nodeRenderer.setContainerElement(graphTargetElement);
	                _this.nodeRenderer.render(nodeVM);
	            });
	        }
	    };
	    return SVGGraphRenderer;
	}(_1.SVGRenderer));
	exports.SVGGraphRenderer = SVGGraphRenderer;


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
	var _1 = __webpack_require__(14);
	var utils_1 = __webpack_require__(18);
	/**
	 * The SVG based implementation of an edge renderer.
	 *
	 * @export
	 * @class SVGEdgeRenderer
	 * @implements {IEdgeRenderer}
	 */
	var SVGEdgeRenderer = (function (_super) {
	    __extends(SVGEdgeRenderer, _super);
	    function SVGEdgeRenderer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * Sets the edge's container element.
	     *
	     * @param {SVGSVGElement} containerElement
	     * @memberof SVGEdgeRenderer
	     */
	    SVGEdgeRenderer.prototype.setContainerElement = function (containerElement) {
	        if (!containerElement) {
	            utils_1.Utils.throwReferenceError('containerElement');
	        }
	        this.containerElement = containerElement;
	    };
	    /**
	     * Renders the edge view-model.
	     *
	     * @param {SVGEdgeViewModel} viewModel
	     * @memberof SVGEdgeRenderer
	     */
	    SVGEdgeRenderer.prototype.render = function (viewModel) {
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
	    return SVGEdgeRenderer;
	}(_1.SVGRenderer));
	exports.SVGEdgeRenderer = SVGEdgeRenderer;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var viewModels_1 = __webpack_require__(23);
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
	        var graphVM = new viewModels_1.SVGGraphViewModel();
	        graphVM.init(graph);
	        return graphVM;
	    };
	    return SVGViewModelsFactory;
	}());
	exports.SVGViewModelsFactory = SVGViewModelsFactory;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));


/***/ }),
/* 24 */
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
	        var _this = this;
	        this.mouseDownHandler = function (e) {
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
	            // selectedElement.onmouseout =
	        };
	        this.guid = models_1.Guid.newGuid();
	        this._currentMovePosition = new models_1.Point();
	        this.currentTransformMatrix = new Array();
	    }
	    Object.defineProperty(SVGViewModel.prototype, "size", {
	        /**
	         * Gets the node's size.
	         *
	         * @type {Size}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.model.size;
	        },
	        /**
	         * Sets the node's size.
	         *
	         * @memberof SVGNodeViewModel
	         */
	        set: function (value) {
	            this.model.size = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGViewModel.prototype, "currentMoveX", {
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
	    Object.defineProperty(SVGViewModel.prototype, "currentMoveY", {
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
	    return SVGViewModel;
	}());
	exports.SVGViewModel = SVGViewModel;


/***/ }),
/* 25 */
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
	var _1 = __webpack_require__(23);
	var utils_1 = __webpack_require__(18);
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
	     * @memberof SVGGraphViewModel
	     */
	    function SVGGraphViewModel() {
	        var _this = _super.call(this) || this;
	        _this.nodes = new Array();
	        _this.connections = new Array();
	        return _this;
	    }
	    /**
	     * Initializes the graph view-model.
	     *
	     * @param {Graph} graph
	     * @memberof SVGGraphViewModel
	     */
	    SVGGraphViewModel.prototype.init = function (graph) {
	        if (!graph) {
	            utils_1.Utils.throwReferenceError('graph');
	        }
	        this.model = graph;
	        this.initNodes();
	    };
	    /**
	     * Initializes all graph nodes view-models.
	     *
	     * @private
	     * @memberof SVGGraphViewModel
	     */
	    SVGGraphViewModel.prototype.initNodes = function () {
	        var _this = this;
	        var graphNodes = this.model.getNodes();
	        if (graphNodes && graphNodes.length > 0) {
	            graphNodes.forEach(function (tempNode) {
	                // Create the graph node view-model
	                var newNodeVM = new _1.SVGNodeViewModel();
	                newNodeVM.init(tempNode);
	                _this.nodes.push(newNodeVM);
	                // Create the node's connection view-models
	                var edges = tempNode.getConnections();
	                if (edges && edges.length > 0) {
	                    edges.forEach(function (tempEdge) {
	                        var newEdgeVM = new _1.SVGEdgeViewModel();
	                        newEdgeVM.init(tempEdge);
	                        _this.connections.push(newEdgeVM);
	                    });
	                }
	            });
	        }
	    };
	    return SVGGraphViewModel;
	}(_1.SVGViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


/***/ }),
/* 26 */
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
	var _1 = __webpack_require__(23);
	var utils_1 = __webpack_require__(18);
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
	     * @memberof SVGNodeViewModel
	     */
	    function SVGNodeViewModel() {
	        return _super.call(this) || this;
	    }
	    Object.defineProperty(SVGNodeViewModel.prototype, "position", {
	        /**
	         * Gets the node's position.
	         *
	         * @type {Point}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.model.position;
	        },
	        /**
	         * Sets the node's position.
	         *
	         * @memberof SVGNodeViewModel
	         */
	        set: function (value) {
	            this.model.position = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Initializes the node view-model.
	     *
	     * @param {GraphNode} node
	     * @memberof SVGNodeViewModel
	     */
	    SVGNodeViewModel.prototype.init = function (node) {
	        if (!node) {
	            utils_1.Utils.throwReferenceError('node');
	        }
	        this.model = node;
	    };
	    return SVGNodeViewModel;
	}(_1.SVGViewModel));
	exports.SVGNodeViewModel = SVGNodeViewModel;


/***/ }),
/* 27 */
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
	var _1 = __webpack_require__(23);
	var models_1 = __webpack_require__(1);
	var utils_1 = __webpack_require__(18);
	/**
	 * The SVG based representation of an edge's view-model.
	 *
	 * @export
	 * @class SVGEdgeViewModel
	 * @extends {SVGViewModel}
	 * @implements {IEdgeViewModel}
	 */
	var SVGEdgeViewModel = (function (_super) {
	    __extends(SVGEdgeViewModel, _super);
	    /**
	     * Creates an instance of SVGEdgeViewModel.
	     *
	     * @memberof SVGEdgeViewModel
	     */
	    function SVGEdgeViewModel() {
	        var _this = _super.call(this) || this;
	        _this.points = new Array();
	        return _this;
	    }
	    /**
	     * Initializes the edge view-model.
	     *
	     * @param {Edge} edge
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.init = function (edge) {
	        if (!edge) {
	            utils_1.Utils.throwReferenceError('edge');
	        }
	        this.model = edge;
	        this.initPoints();
	    };
	    /**
	     * Initializes the points array.
	     *
	     * @private
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.initPoints = function () {
	        var startPoint = new models_1.Point();
	        startPoint.x = this.model.sourceNode.position.x + this.model.sourceNode.size.width * 0.5;
	        startPoint.y = this.model.sourceNode.position.y + this.model.sourceNode.size.height * 0.5;
	        this.points.push(startPoint);
	        var endPoint = new models_1.Point();
	        endPoint.x = this.model.targetNode.position.x + this.model.targetNode.size.width * 0.5;
	        endPoint.y = this.model.targetNode.position.y + this.model.targetNode.size.height * 0.5;
	        var intermediatePoint = this.getRectangularIntermediatePoint(startPoint, endPoint);
	        if (intermediatePoint) {
	            this.points.push(intermediatePoint);
	        }
	        this.points.push(endPoint);
	    };
	    /**
	     * Creates a rectangular intermediate point for two given points.
	     *
	     * @private
	     * @param {Point} point1
	     * @param {Point} point2
	     * @returns {Point}
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.getRectangularIntermediatePoint = function (point1, point2) {
	        var result = new models_1.Point();
	        result.x = point1.x + (point2.x - point1.x);
	        result.y = point1.y;
	        return result;
	    };
	    return SVGEdgeViewModel;
	}(_1.SVGViewModel));
	exports.SVGEdgeViewModel = SVGEdgeViewModel;


/***/ })
/******/ ]);