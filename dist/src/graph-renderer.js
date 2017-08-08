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
	var factories_1 = __webpack_require__(14);
	document.addEventListener("DOMContentLoaded", function (event) {
	    // Build nodes
	    var node1 = new models_1.VisualGraphNode();
	    node1.position = new models_1.Point(100, 100);
	    node1.size = new models_1.Size(50, 50);
	    var node2 = new models_1.VisualGraphNode();
	    node2.position = new models_1.Point(400, 300);
	    node2.size = new models_1.Size(50, 50);
	    // Build graph
	    var graph = new models_1.Graph();
	    var graphNode1 = graph.addNode(node1);
	    var graphNode2 = graph.addNode(node2);
	    graph.addDirectedEdge(graphNode1, graphNode2);
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
	__export(__webpack_require__(4));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(5));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(8));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));


/***/ }),
/* 2 */
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
	var NodeList = (function () {
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var point_1 = __webpack_require__(5);
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var _1 = __webpack_require__(1);
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
	        this.nodes = new _1.NodeList();
	    }
	    /**
	     * Adds a new node with the given value to the graph.
	     *
	     * @param {T} value
	     * @returns {IGraphNode<T>}
	     * @memberof Graph
	     */
	    Graph.prototype.addNode = function (value) {
	        var newNode = new _1.GraphNode();
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var guid_1 = __webpack_require__(8);
	/**
	 * The base class for all graph related models.
	 *
	 * @export
	 * @abstract
	 * @class GraphItem
	 */
	var GraphItem = (function () {
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
/* 8 */
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
	 * A representation of a graph node.
	 *
	 * @export
	 * @class GraphNode
	 * @extends {GraphItem}
	 * @template T
	 */
	var GraphNode = (function (_super) {
	    __extends(GraphNode, _super);
	    /**
	     * Creates an instance of GraphNode.
	     *
	     * @memberof GraphNode
	     */
	    function GraphNode() {
	        var _this = _super.call(this) || this;
	        _this.costs = new Array();
	        _this.neighbors = new _1.NodeList();
	        return _this;
	    }
	    return GraphNode;
	}(_1.GraphItem));
	exports.GraphNode = GraphNode;


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The visual representation of a graph.
	 *
	 * @export
	 * @class VisualGraph
	 */
	var VisualGraph = (function () {
	    /**
	     * Creates an instance of VisualGraph.
	     *
	     * @memberof VisualGraph
	     */
	    function VisualGraph() {
	        this.nodes = new Array();
	    }
	    return VisualGraph;
	}());
	exports.VisualGraph = VisualGraph;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The visual representation of a graph's node.
	 *
	 * @export
	 * @class VisualGraphNode
	 */
	var VisualGraphNode = (function () {
	    function VisualGraphNode() {
	    }
	    return VisualGraphNode;
	}());
	exports.VisualGraphNode = VisualGraphNode;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(15));
	__export(__webpack_require__(24));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var renderers_1 = __webpack_require__(16);
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
	     * @returns {IGraphRenderer<VisualGraph>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createGraphRenderer = function () {
	        var nodeRenderer = this.createNodeRenderer();
	        return new renderers_1.SVGGraphRenderer(nodeRenderer);
	    };
	    /**
	     * Creates the node renderer.
	     *
	     * @returns {SVGNodeRenderer<VisualGraphNode>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createNodeRenderer = function () {
	        return new renderers_1.SVGNodeRenderer();
	    };
	    /**
	     * Creates the orthogonal edge renderer.
	     *
	     * @returns {SVGOrthogonalEdgeRenderer<VisualGraphNode, OrthogonalEdgeRouter, SVGOrthogonalEdgeViewModel<VisualGraphNode, OrthogonalEdgeRouter>>}
	     * @memberof SVGRenderersFactory
	     */
	    SVGRenderersFactory.prototype.createOrthogonalEdgeRenderer = function () {
	        return new renderers_1.SVGOrthogonalEdgeRenderer();
	    };
	    return SVGRenderersFactory;
	}());
	exports.SVGRenderersFactory = SVGRenderersFactory;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));


/***/ }),
/* 17 */
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
	var renderer_1 = __webpack_require__(17);
	var svgUtils_1 = __webpack_require__(19);
	var utils_1 = __webpack_require__(20);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var utils_1 = __webpack_require__(20);
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
	var utils_1 = __webpack_require__(20);
	var svgRenderer_1 = __webpack_require__(18);
	/**
	 * The SVG based implementation of a node renderer.
	 *
	 * @export
	 * @class SVGNodeRenderer
	 * @extends {SVGRenderer<T>}
	 * @implements {INodeRenderer<SVGNodeViewModel<T>>}
	 * @template T
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
	var utils_1 = __webpack_require__(20);
	var _1 = __webpack_require__(16);
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
	var SVGGraphRenderer = (function (_super) {
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
	        // Define the viewport coordinate system.
	        graphTargetElement.setAttribute('width', '800');
	        graphTargetElement.setAttribute('height', '600');
	        // Define the user coordinate system.
	        graphTargetElement.setAttribute('viewbox', '0 0 800, 600');
	        graphTargetElement.classList.add('graph');
	        this.containerElement.appendChild(graphTargetElement);
	        // // Render all graph edges
	        // if (viewModel.connections && viewModel.connections.length > 0) {
	        //     viewModel.connections.forEach((edgeVM) => {
	        //         this.edgeRenderer.setContainerElement(graphTargetElement);
	        //         this.edgeRenderer.render(edgeVM);
	        //     });
	        // }
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
/* 23 */
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
	var _1 = __webpack_require__(16);
	var utils_1 = __webpack_require__(20);
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
	var SVGOrthogonalEdgeRenderer = (function (_super) {
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
	}(_1.SVGRenderer));
	exports.SVGOrthogonalEdgeRenderer = SVGOrthogonalEdgeRenderer;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var viewModels_1 = __webpack_require__(25);
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
	     * Creates an instance of {IGraphViewModel<VisualGraph, TNode>}.
	     *
	     * @template TNode
	     * @param {Graph<TNode>} graph
	     * @returns {IGraphViewModel<VisualGraph, TNode>}
	     * @memberof SVGViewModelsFactory
	     */
	    SVGViewModelsFactory.prototype.createGraphViewModel = function (graph) {
	        var graphVM = new viewModels_1.SVGGraphViewModel(graph);
	        return graphVM;
	    };
	    return SVGViewModelsFactory;
	}());
	exports.SVGViewModelsFactory = SVGViewModelsFactory;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(26));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var models_1 = __webpack_require__(1);
	var dataBinding_1 = __webpack_require__(27);
	/**
	 * The base class of all SVG based view-models.
	 *
	 * @export
	 * @abstract
	 * @class SVGViewModel
	 * @implements {IViewModel<T>}
	 * @template T
	 */
	var SVGViewModel = (function () {
	    /**
	     * Creates an instance of SVGViewModel.
	     * @memberof SVGViewModel
	     */
	    function SVGViewModel() {
	        this.guid = models_1.Guid.newGuid();
	        this.dataBinder = new dataBinding_1.DataBinder(this.guid);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var _1 = __webpack_require__(27);
	/**
	 * The view-model to DOM data binder.
	 *
	 * @export
	 * @class DataBinder
	 */
	var DataBinder = (function () {
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
	        this.pubSub = new _1.DataBindPubSub();
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
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * The PubSub implementation for the data binder.
	 *
	 * @export
	 * @class DataBindPubSub
	 */
	var DataBindPubSub = (function () {
	    /**
	     * Creates an instance of DataBindPubSub.
	     *
	     * @memberof DataBindPubSub
	     */
	    function DataBindPubSub() {
	        this.callbacks = {};
	    }
	    /**
	     * Subscribes a callback related to the given message.
	     *
	     * @param {string} message
	     * @param {IPubSubCallback} callback
	     * @memberof DataBindPubSub
	     */
	    DataBindPubSub.prototype.subscribe = function (message, callback) {
	        if (!this.callbacks[message]) {
	            this.callbacks[message] = new Array();
	        }
	        this.callbacks[message].push(callback);
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
	        if (this.callbacks[message]) {
	            var callbacksCount = this.callbacks[message].length;
	            for (var i = 0; i < callbacksCount; i++) {
	                this.callbacks[message][i](propertyName, value, initiator);
	            }
	        }
	    };
	    return DataBindPubSub;
	}());
	exports.DataBindPubSub = DataBindPubSub;


/***/ }),
/* 30 */
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
	var _1 = __webpack_require__(25);
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
	                var newNodeVM = new _1.SVGNodeViewModel(tempNode);
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
	}(_1.SVGViewModel));
	exports.SVGGraphViewModel = SVGGraphViewModel;


/***/ }),
/* 31 */
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
	var _1 = __webpack_require__(25);
	var models_1 = __webpack_require__(1);
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
	            // selectedElement.onmouseout =
	        };
	        _this.model = graphNode;
	        _this._currentMovePosition = new models_1.Point();
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
	}(_1.SVGViewModel));
	exports.SVGNodeViewModel = SVGNodeViewModel;


/***/ }),
/* 32 */
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
	var _1 = __webpack_require__(25);
	/**
	 * The SVG based representation of an edge's view-model.
	 *
	 * @export
	 * @class SVGEdgeViewModel
	 * @extends {SVGViewModel<T>}
	 * @implements {IEdgeViewModel<T>}
	 * @template T
	 */
	var SVGEdgeViewModel = (function (_super) {
	    __extends(SVGEdgeViewModel, _super);
	    /**
	     * Creates an instance of SVGEdgeViewModel.
	     *
	     * @param {EdgeRouterType} edgeRouter
	     * @param {SVGNodeViewModel<TNode>} startNodeViewModel
	     * @param {SVGNodeViewModel<TNode>} endNodeViewModel
	     * @param {IGraphViewModel<VisualGraph, TNode>} graphViewModel
	     * @memberof SVGEdgeViewModel
	     */
	    function SVGEdgeViewModel(edgeRouter, startNodeViewModel, endNodeViewModel, graphViewModel) {
	        var _this = _super.call(this) || this;
	        _this.edgeRouter = edgeRouter;
	        _this.startNodeViewModel = startNodeViewModel;
	        _this.endNodeViewModel = endNodeViewModel;
	        _this.graphViewModel = graphViewModel;
	        return _this;
	    }
	    /**
	     * Initializes the view-model.
	     *
	     * @protected
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.initViewModel = function () {
	        if (this.startNodeViewModel) {
	            this.startNodeViewModel.dataBinder.subscribe(this.startNodeViewModel.getDataBindChangeMessage(), this.startNodeChangedCallback);
	        }
	        if (this.endNodeViewModel) {
	            this.endNodeViewModel.dataBinder.subscribe(this.endNodeViewModel.getDataBindChangeMessage(), this.endNodeChangedCallback);
	        }
	    };
	    /**
	     * The change callback for the edge's start node.
	     *
	     * @private
	     * @param {string} propertyName
	     * @param {*} value
	     * @param {*} initiator
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.startNodeChangedCallback = function (propertyName, value, initiator) {
	        console.log('start node: ' + propertyName + ': ' + value);
	    };
	    /**
	     * The change callback for the edge's end node.
	     *
	     * @private
	     * @param {string} propertyName
	     * @param {*} value
	     * @param {*} initiator
	     * @memberof SVGEdgeViewModel
	     */
	    SVGEdgeViewModel.prototype.endNodeChangedCallback = function (propertyName, value, initiator) {
	        console.log('end node: ' + propertyName + ': ' + value);
	    };
	    return SVGEdgeViewModel;
	}(_1.SVGViewModel));
	exports.SVGEdgeViewModel = SVGEdgeViewModel;


/***/ }),
/* 33 */
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
	var models_1 = __webpack_require__(1);
	var _1 = __webpack_require__(25);
	var utils_1 = __webpack_require__(20);
	/**
	 * The SVG based representation of an edge's view-model for an orthogonal edge.
	 *
	 * @export
	 * @class SVGOrthogonalEdgeViewModel
	 * @extends {SVGEdgeViewModel<TNode, EdgeRouterType>}
	 * @implements {IOrthogonalEdgeViewModel<TNode, EdgeRouterType>}
	 * @template TNode
	 * @template EdgeRouterType
	 */
	var SVGOrthogonalEdgeViewModel = (function (_super) {
	    __extends(SVGOrthogonalEdgeViewModel, _super);
	    /**
	     * Creates an instance of SVGOrthogonalEdgeViewModel.
	     *
	     * @param {EdgeRouterType} edgeRouter
	     * @param {SVGNodeViewModel<TNode>} startNodeViewModel
	     * @param {SVGNodeViewModel<TNode>} endNodeViewModel
	     * @param {IGraphViewModel<VisualGraph, TNode>} graphViewModel
	     * @memberof SVGOrthogonalEdgeViewModel
	     */
	    function SVGOrthogonalEdgeViewModel(edgeRouter, startNodeViewModel, endNodeViewModel, graphViewModel) {
	        var _this = _super.call(this, edgeRouter, startNodeViewModel, endNodeViewModel, graphViewModel) || this;
	        _this.points = new Array();
	        return _this;
	    }
	    /**
	     * Initializes the view-model.
	     *
	     * @protected
	     * @memberof SVGEdgeViewModel
	     */
	    SVGOrthogonalEdgeViewModel.prototype.initViewModel = function () {
	        _super.prototype.initViewModel.call(this);
	        this.initPoints();
	    };
	    /**
	     * Initializes the points array.
	     *
	     * @private
	     * @memberof SVGEdgeViewModel
	     */
	    SVGOrthogonalEdgeViewModel.prototype.initPoints = function () {
	        var _this = this;
	        var startPoint = new models_1.Point();
	        startPoint.x = this.startNodeViewModel.position.x + this.startNodeViewModel.size.width * 0.5;
	        startPoint.y = this.startNodeViewModel.position.y + this.startNodeViewModel.height * 0.5;
	        var endPoint = new models_1.Point();
	        endPoint.x = this.endNodeViewModel.position.x + this.endNodeViewModel.size.width * 0.5;
	        endPoint.y = this.endNodeViewModel.position.y + this.endNodeViewModel.size.height * 0.5;
	        if (!this.edgeRouter) {
	            utils_1.Utils.throwReferenceError('No edge router was set. Call setEdgeRouter() before!');
	            return;
	        }
	        var intermediatePoints = this.edgeRouter.createEdgePoints(startPoint, endPoint, this.graphViewModel);
	        // Add the start point
	        this.points.push(startPoint);
	        // Add all found intermediate points
	        intermediatePoints.forEach(function (tempPoint) {
	            _this.points.push(tempPoint);
	        });
	        // Add the end point
	        this.points.push(endPoint);
	    };
	    return SVGOrthogonalEdgeViewModel;
	}(_1.SVGEdgeViewModel));
	exports.SVGOrthogonalEdgeViewModel = SVGOrthogonalEdgeViewModel;


/***/ })
/******/ ]);