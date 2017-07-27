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
	var edge_1 = __webpack_require__(7);
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
	     * Adds a new edge to the given node.
	     *
	     * @param {GraphNode} targetNode
	     * @memberof GraphNode
	     */
	    GraphNode.prototype.addConnection = function (targetNode) {
	        var newEdge = new edge_1.Edge(this, targetNode);
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
	}());
	exports.GraphNode = GraphNode;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * A representation of an edge between two nodes.
	 *
	 * @export
	 * @class Edge
	 */
	var Edge = (function () {
	    /**
	     * Creates an instance of Edge.
	     *
	     * @param {GraphNode} sourceNode
	     * @param {GraphNode} targetNode
	     * @memberof Edge
	     */
	    function Edge(sourceNode, targetNode) {
	        if (!sourceNode) {
	            throw new ReferenceError('The argument "sourceNode" is null or undefined.');
	        }
	        else if (!targetNode) {
	            throw new ReferenceError('The argument "targetNode" is null or undefined.');
	        }
	        this.sourceNode = sourceNode;
	        this.targetNode = targetNode;
	    }
	    return Edge;
	}());
	exports.Edge = Edge;


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
	__export(__webpack_require__(21));


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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));


/***/ }),
/* 14 */
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
	var renderer_1 = __webpack_require__(14);
	var svgUtils_1 = __webpack_require__(16);
	var utils_1 = __webpack_require__(17);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(17);
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
/* 17 */
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
/* 18 */
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
	var utils_1 = __webpack_require__(17);
	var svgRenderer_1 = __webpack_require__(15);
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
	var utils_1 = __webpack_require__(17);
	var _1 = __webpack_require__(13);
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
	var _1 = __webpack_require__(13);
	var utils_1 = __webpack_require__(17);
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
	        // Render the edge's target
	        var edgeTargetElement = this.createTargetElement('path', viewModel);
	        edgeTargetElement.classList.add('graph-edge');
	        this.containerElement.appendChild(edgeTargetElement);
	    };
	    return SVGEdgeRenderer;
	}(_1.SVGRenderer));
	exports.SVGEdgeRenderer = SVGEdgeRenderer;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var viewModels_1 = __webpack_require__(22);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));


/***/ }),
/* 23 */
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
	var _1 = __webpack_require__(22);
	var utils_1 = __webpack_require__(17);
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
	    Object.defineProperty(SVGGraphViewModel.prototype, "size", {
	        /**
	         * Gets the graph's size.
	         *
	         * @type {Size}
	         * @memberof SVGGraphViewModel
	         */
	        get: function () {
	            return this.graph.size;
	        },
	        /**
	         * Sets the graph's size.
	         *
	         * @memberof SVGGraphViewModel
	         */
	        set: function (value) {
	            this.graph.size = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        this.graph = graph;
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
	        var graphNodes = this.graph.getNodes();
	        if (graphNodes && graphNodes.length > 0) {
	            graphNodes.forEach(function (tempNode) {
	                var newNodeVM = new _1.SVGNodeViewModel();
	                newNodeVM.init(tempNode);
	                _this.nodes.push(newNodeVM);
	            });
	        }
	    };
	    return SVGGraphViewModel;
	}(_1.SVGViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


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
	var _1 = __webpack_require__(22);
	var utils_1 = __webpack_require__(17);
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
	        var _this = _super.call(this) || this;
	        _this.connections = new Array();
	        return _this;
	    }
	    Object.defineProperty(SVGNodeViewModel.prototype, "position", {
	        /**
	         * Gets the node's position.
	         *
	         * @type {Point}
	         * @memberof SVGNodeViewModel
	         */
	        get: function () {
	            return this.node.position;
	        },
	        /**
	         * Sets the node's position.
	         *
	         * @memberof SVGNodeViewModel
	         */
	        set: function (value) {
	            this.node.position = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        this.node = node;
	        this.initEdges();
	    };
	    /**
	     * Initializes all edge view-models.
	     *
	     * @private
	     * @memberof SVGNodeViewModel
	     */
	    SVGNodeViewModel.prototype.initEdges = function () {
	        var _this = this;
	        var edges = this.node.getConnections();
	        if (edges && edges.length > 0) {
	            edges.forEach(function (tempEdge) {
	                var newEdgeVM = new _1.SVGEdgeViewModel();
	                newEdgeVM.init(tempEdge);
	                _this.connections.push(newEdgeVM);
	            });
	        }
	    };
	    return SVGNodeViewModel;
	}(_1.SVGViewModel));
	exports.SVGNodeViewModel = SVGNodeViewModel;


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
	var _1 = __webpack_require__(22);
	var utils_1 = __webpack_require__(17);
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
	        return _super.call(this) || this;
	    }
	    Object.defineProperty(SVGEdgeViewModel.prototype, "startPoint", {
	        /**
	         * Gets the edge's start point.
	         *
	         * @type {Point}
	         * @memberof SVGEdgeViewModel
	         */
	        get: function () {
	            return this.edge.sourceNode.position;
	        },
	        /**
	         * Sets the edge's start point.
	         *
	         * @memberof SVGEdgeViewModel
	         */
	        set: function (value) {
	            this.edge.sourceNode.position = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SVGEdgeViewModel.prototype, "endPoint", {
	        /**
	         * Gets the edge's end point.
	         *
	         * @type {Point}
	         * @memberof SVGEdgeViewModel
	         */
	        get: function () {
	            return this.edge.targetNode.position;
	        },
	        /**
	         * Sets the edge's end point.
	         *
	         * @memberof SVGEdgeViewModel
	         */
	        set: function (value) {
	            this.edge.targetNode.position = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        this.edge = edge;
	    };
	    return SVGEdgeViewModel;
	}(_1.SVGViewModel));
	exports.SVGEdgeViewModel = SVGEdgeViewModel;


/***/ })
/******/ ]);