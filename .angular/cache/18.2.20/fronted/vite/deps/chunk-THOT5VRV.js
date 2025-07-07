import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-TP5GELBR.js";
import {
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-XCCWPIQ4.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-B5AFSGLI.js";
import {
  fromEvent,
  merge
} from "./chunk-YAPLD6I3.js";
import {
  Subscription,
  __async,
  auditTime,
  from,
  take
} from "./chunk-6R3LY43K.js";

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    cachedWidth = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : {
    x: 0,
    y: 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = {
    top: 0,
    left: 0
  };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0) scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-common/dist/es/util.js
var isWindowAvailable = function() {
  return typeof window !== "undefined";
};

// node_modules/@progress/kendo-common/dist/es/support.js
var agentRxs = {
  wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
  fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
  android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)(\.(\d+(\.\d+)?))?/,
  iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
  ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
  meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
  webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
  blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
  playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
  windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
  tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
  sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
  ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
};
var osRxs = {
  ios: /^i(phone|pad|pod)$/i,
  android: /^android|fire$/i,
  blackberry: /^blackberry|playbook/i,
  windows: /windows/,
  wp: /wp/,
  flat: /sailfish|ffos|tizen/i,
  meego: /meego/
};
var desktopBrowserRxs = {
  edge: /(edge)[ \/]([\w.]+)/i,
  webkit: /(chrome)[ \/]([\w.]+)/i,
  safari: /(webkit)[ \/]([\w.]+)/i,
  opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
  msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
  mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
var mobileBrowserRxs = {
  omini: /Opera\sMini/i,
  omobile: /Opera\sMobi/i,
  firefox: /Firefox|Fennec/i,
  mobilesafari: /version\/.*safari/i,
  ie: /MSIE|Windows\sPhone/i,
  chrome: /chrome|crios/i,
  webkit: /webkit/i
};
var testRx = function(agent, rxs, dflt) {
  for (var rx in rxs) {
    if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
      return rx;
    }
  }
  return dflt !== void 0 ? dflt : agent;
};
var detectMobileOS = function(ua) {
  var minorVersion;
  var match = [];
  for (var agent in agentRxs) {
    if (agentRxs.hasOwnProperty(agent)) {
      match = ua.match(agentRxs[agent]);
      if (!match) {
        continue;
      }
      if (agent === "windows" && "plugins" in window.navigator) {
        return null;
      }
      var os = {};
      os.device = agent;
      os.browser = testRx(ua, mobileBrowserRxs, "default");
      os.name = testRx(agent, osRxs);
      os[os.name] = true;
      os.majorVersion = match[2];
      os.minorVersion = match[3] ? match[3].replace("_", ".") : ".0";
      minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
      os.flatVersion = os.majorVersion + minorVersion + new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0");
      os.cordova = typeof window.PhoneGap !== void 0 || typeof window.cordova !== void 0;
      os.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || os.cordova;
      return os;
    }
  }
  return null;
};
var detectDesktopBrowser = function(ua) {
  var browserInfo = null;
  var match = [];
  for (var agent in desktopBrowserRxs) {
    if (desktopBrowserRxs.hasOwnProperty(agent)) {
      match = ua.match(desktopBrowserRxs[agent]);
      if (match) {
        browserInfo = {};
        browserInfo[agent] = true;
        browserInfo[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browserInfo.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browserInfo;
};
var userAgent = isWindowAvailable() && window.navigator ? window.navigator.userAgent : null;
var browser = userAgent ? detectDesktopBrowser(userAgent) : null;
var mobileOS = userAgent ? detectMobileOS(userAgent) : null;
var touch = isWindowAvailable() && "ontouchstart" in window;
var msPointers = browser && !browser.chrome && window.MSPointerEvent;
var pointers = browser && !browser.chrome && window.PointerEvent;
var touchEnabled = mobileOS && (touch || msPointers || pointers);

// node_modules/@progress/kendo-common/dist/es/accessors/field-list.js
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
function fieldList(field) {
  var fields = [];
  field.replace(FIELD_REGEX, function(_match, index, indexAccessor, fieldName) {
    fields.push(index !== void 0 ? index : indexAccessor || fieldName);
  });
  return fields;
}

// node_modules/@progress/kendo-common/dist/es/accessors/getter.js
var getterCache = {};
getterCache["undefined"] = function(obj) {
  return obj;
};
function getter(field) {
  if (getterCache[field]) {
    return getterCache[field];
  }
  var fields = fieldList(field);
  getterCache[field] = function(obj) {
    var result = obj;
    for (var idx = 0; idx < fields.length && result; idx++) {
      result = result[fields[idx]];
    }
    return result;
  };
  return getterCache[field];
}

// node_modules/@progress/kendo-common/dist/es/accessors/setter.js
var setterCache = {};
setterCache["undefined"] = function(obj) {
  return obj;
};
var defaultValue = function(nextField, options) {
  return options && options.arrays && !isNaN(Number(nextField)) ? [] : {};
};
function setter(field) {
  if (setterCache[field]) {
    return setterCache[field];
  }
  var fields = fieldList(field);
  setterCache[field] = function(obj, value, options) {
    var root = obj;
    var depth = fields.length - 1;
    for (var idx = 0; idx < depth && root; idx++) {
      root = root[fields[idx]] = root[fields[idx]] || defaultValue(fields[idx + 1], options);
    }
    root[fields[depth]] = value;
  };
  return setterCache[field];
}

// node_modules/@progress/kendo-common/dist/es/parse-style.js
var reComment = /\/\*[\s\S]*?\*\//g;
var reDeclaration = /([^\s:;]+?)\s*:\s*((?:(?:url\(\s*(?:(?:[^"')\\]|\\.)*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^;"'])*?)\s*)(?=;|$)/gi;
var reDoubleQuoted = /&quot;|&#34;|&#x22;/gi;
var reSingleQuoted = /&apos;|&#39;|&#x27;/gi;
var doubleQuote = '"';
var singleQuote = "'";
var empty = "";
function replaceQuoteEntities(str) {
  return str.replace(reDoubleQuoted, doubleQuote).replace(reSingleQuoted, singleQuote);
}
function parseInlineStyles(styleString) {
  var styleObject = {};
  var input = replaceQuoteEntities((styleString || empty).replace(reComment, empty));
  var match = reDeclaration.exec(input), property, value;
  while (match !== null) {
    property = match[1].trim();
    value = match[2].trim();
    styleObject[property] = value;
    match = reDeclaration.exec(input);
  }
  return styleObject;
}

// node_modules/@progress/kendo-draggable/dist/es/main.js
var proxy = function(a, b) {
  return function(e) {
    return b(a(e));
  };
};
var bind = function(el, event, callback) {
  return el.addEventListener && el.addEventListener(event, callback);
};
var unbind = function(el, event, callback) {
  return el && el.removeEventListener && el.removeEventListener(event, callback);
};
var noop = function() {
};
var preventDefault = function(e) {
  return e.preventDefault();
};
var touchRegExp = /touch/;
var IGNORE_MOUSE_TIMEOUT = 2e3;
function normalizeEvent(e) {
  if (e.type.match(touchRegExp)) {
    return {
      pageX: e.changedTouches[0].pageX,
      pageY: e.changedTouches[0].pageY,
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY,
      type: e.type,
      originalEvent: e,
      isTouch: true
    };
  }
  return {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    originalEvent: e
  };
}
var Draggable = function Draggable2(ref) {
  var this$1 = this;
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._ignoreMouse = false;
  this._mouseOnly = mouseOnly;
  this._touchstart = function(e) {
    if (e.touches.length === 1) {
      this$1._pressHandler(e);
    }
  };
  this._touchmove = function(e) {
    if (e.touches.length === 1) {
      this$1._dragHandler(e);
    }
  };
  this._touchend = function(e) {
    if (e.touches.length === 0 && e.changedTouches.length === 1) {
      this$1._releaseHandler(e);
      this$1._ignoreMouse = true;
      setTimeout(this$1._restoreMouse, IGNORE_MOUSE_TIMEOUT);
    }
  };
  this._restoreMouse = function() {
    this$1._ignoreMouse = false;
  };
  this._mousedown = function(e) {
    var which = e.which;
    if (which && which > 1 || this$1._ignoreMouse) {
      return;
    }
    bind(this$1.document, "mousemove", this$1._mousemove);
    bind(this$1.document, "mouseup", this$1._mouseup);
    this$1._pressHandler(e);
  };
  this._mousemove = function(e) {
    this$1._dragHandler(e);
  };
  this._mouseup = function(e) {
    unbind(this$1.document, "mousemove", this$1._mousemove);
    unbind(this$1.document, "mouseup", this$1._mouseup);
    this$1._releaseHandler(e);
  };
  this._pointerdown = function(e) {
    if (e.isPrimary && e.button === 0) {
      bind(this$1.document, "pointermove", this$1._pointermove);
      bind(this$1.document, "pointerup", this$1._pointerup);
      bind(this$1.document, "pointercancel", this$1._pointerup);
      bind(this$1.document, "contextmenu", preventDefault);
      this$1._pressHandler(e);
    }
  };
  this._pointermove = function(e) {
    if (e.isPrimary) {
      this$1._dragHandler(e);
    }
  };
  this._pointerup = function(e) {
    if (e.isPrimary) {
      unbind(this$1.document, "pointermove", this$1._pointermove);
      unbind(this$1.document, "pointerup", this$1._pointerup);
      unbind(this$1.document, "pointercancel", this$1._pointerup);
      unbind(this$1.document, "contextmenu", preventDefault);
      this$1._releaseHandler(e);
    }
  };
};
var prototypeAccessors = {
  document: {
    configurable: true
  }
};
Draggable.supportPointerEvent = function supportPointerEvent() {
  return typeof window !== "undefined" && window.PointerEvent;
};
prototypeAccessors.document.get = function() {
  return this._element ? this._element.ownerDocument : document;
};
Draggable.prototype.cancelDrag = function cancelDrag() {
  unbind(this.document, "pointermove", this._pointermove);
  unbind(this.document, "pointerup", this._pointerup);
  unbind(this.document, "pointercancel", this._pointerup);
};
Draggable.prototype.bindTo = function bindTo(element) {
  if (element === this._element) {
    return;
  }
  if (this._element) {
    this._unbindFromCurrent();
  }
  this._element = element;
  this._bindToCurrent();
};
Draggable.prototype._bindToCurrent = function _bindToCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    bind(element, "pointerdown", this._pointerdown);
    return;
  }
  bind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    bind(element, "touchstart", this._touchstart);
    bind(element, "touchmove", this._touchmove);
    bind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._unbindFromCurrent = function _unbindFromCurrent() {
  var element = this._element;
  if (this._usePointers()) {
    unbind(element, "pointerdown", this._pointerdown);
    unbind(this.document, "pointermove", this._pointermove);
    unbind(this.document, "pointerup", this._pointerup);
    unbind(this.document, "contextmenu", preventDefault);
    unbind(this.document, "pointercancel", this._pointerup);
    return;
  }
  unbind(element, "mousedown", this._mousedown);
  if (!this._mouseOnly) {
    unbind(element, "touchstart", this._touchstart);
    unbind(element, "touchmove", this._touchmove);
    unbind(element, "touchend", this._touchend);
  }
};
Draggable.prototype._usePointers = function _usePointers() {
  return !this._mouseOnly && Draggable.supportPointerEvent();
};
Draggable.prototype.update = function update(ref) {
  var press = ref.press;
  if (press === void 0) press = noop;
  var drag = ref.drag;
  if (drag === void 0) drag = noop;
  var release = ref.release;
  if (release === void 0) release = noop;
  var mouseOnly = ref.mouseOnly;
  if (mouseOnly === void 0) mouseOnly = false;
  this._pressHandler = proxy(normalizeEvent, press);
  this._dragHandler = proxy(normalizeEvent, drag);
  this._releaseHandler = proxy(normalizeEvent, release);
  this._mouseOnly = mouseOnly;
};
Draggable.prototype.destroy = function destroy() {
  this._unbindFromCurrent();
  this._element = null;
};
Object.defineProperties(Draggable.prototype, prototypeAccessors);
Draggable.default = Draggable;

// node_modules/@progress/kendo-angular-common/fesm2022/progress-kendo-angular-common.mjs
var _c0 = ["banner"];
var _c1 = ["kendoWatermarkOverlay", ""];
var _c2 = () => ({
  display: "flex",
  alignSelf: "center",
  marginRight: "8px"
});
var _c3 = () => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "24px"
});
function WatermarkOverlayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 0)(2, "span", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 3);
    ɵɵelement(4, "path", 4);
    ɵɵelementEnd()();
    ɵɵnamespaceHTML();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, " We couldn't verify your ");
    ɵɵelementStart(7, "a", 5);
    ɵɵtext(8, "license key");
    ɵɵelementEnd();
    ɵɵtext(9, " for Kendo UI for Angular. Please see the browser console for details and resolution steps. ");
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 2)(11, "button", 6);
    ɵɵlistener("click", function WatermarkOverlayComponent_div_0_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeBanner());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(12, "svg", 3);
    ɵɵelement(13, "path", 7);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.bannerStyles);
    ɵɵadvance(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(5, _c2));
    ɵɵadvance(5);
    ɵɵproperty("href", ctx_r1.licenseKeyUrl, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(6, _c3));
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.buttonStyles);
  }
}
var isDocumentAvailable = () => typeof document !== "undefined";
var isChanged = (propertyName, changes, skipFirstChange = true) => typeof changes[propertyName] !== "undefined" && (!changes[propertyName].isFirstChange() || !skipFirstChange) && changes[propertyName].previousValue !== changes[propertyName].currentValue;
var anyChanged = (propertyNames, changes, skipFirstChange = true) => propertyNames.some((name) => isChanged(name, changes, skipFirstChange));
var hasObservers = (emitter) => emitter && emitter.observers.length > 0;
var guid = () => {
  let id = "";
  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    let charValue;
    if (i === 12) {
      charValue = 4;
    } else if (i === 16) {
      charValue = random & 3 | 8;
    } else {
      charValue = random;
    }
    id += charValue.toString(16);
  }
  return id;
};
var isSafari = (userAgent2) => {
  return detectDesktopBrowser(userAgent2).safari || detectMobileOS(userAgent2) && detectMobileOS(userAgent2).browser === "mobilesafari";
};
var isFirefox = (userAgent2) => {
  const desktopBrowser = detectDesktopBrowser(userAgent2);
  const mobileOS2 = detectMobileOS(userAgent2);
  return desktopBrowser && desktopBrowser.mozilla || mobileOS2 && mobileOS2.browser === "firefox";
};
var isPresent = (value) => value !== null && value !== void 0;
var isObjectPresent = (value) => {
  return isObject(value) && Object.keys(value).length > 0;
};
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent(value) && !Array.isArray(value) && typeof value === "object";
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var parseCSSClassNames = (value) => {
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName.length) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var setHTMLAttributes = (attributes, renderer, element, zone) => {
  zone ? zone.onStable.pipe(take(1)).subscribe(() => {
    applyAttributes(attributes, renderer, element);
  }) : applyAttributes(attributes, renderer, element);
};
var removeHTMLAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute) {
      renderer.removeAttribute(element, attribute);
    }
  }
};
var parseAttributes = (target, source) => {
  const targetObj = target;
  Object.keys(source).forEach((key) => {
    delete targetObj[key];
  });
  return targetObj;
};
var applyAttributes = (attributes, renderer, element) => {
  for (const attribute in attributes) {
    if (attribute && isPresent(attributes[attribute])) {
      renderer.setAttribute(element, attribute, attributes[attribute]);
    }
  }
};
var isControlRequired = (control) => {
  if (!control?.validator) {
    return false;
  }
  return control.validator(control)?.hasOwnProperty("required");
};
var areObjectsEqual = (firstObject, secondObject) => {
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }
  const equalSettings = Object.entries(firstObject).filter(([key, value]) => value === secondObject[key.toString()]);
  return equalSettings.length === Object.keys(firstObject).length;
};
var DraggableDirective = class _DraggableDirective {
  element;
  ngZone;
  enableDrag = true;
  kendoPress = new EventEmitter();
  kendoDrag = new EventEmitter();
  kendoRelease = new EventEmitter();
  draggable;
  constructor(element, ngZone) {
    this.element = element;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.toggleDraggable();
  }
  ngOnChanges(changes) {
    if (isChanged("enableDrag", changes)) {
      this.toggleDraggable();
    }
  }
  ngOnDestroy() {
    this.destroyDraggable();
  }
  toggleDraggable() {
    if (isDocumentAvailable()) {
      this.destroyDraggable();
      if (this.enableDrag) {
        this.draggable = new Draggable({
          drag: (e) => this.kendoDrag.next(e),
          press: (e) => this.kendoPress.next(e),
          release: (e) => this.kendoRelease.next(e)
        });
        this.ngZone.runOutsideAngular(() => this.draggable?.bindTo(this.element.nativeElement));
      }
    }
  }
  destroyDraggable() {
    if (this.draggable) {
      this.draggable.destroy();
      this.draggable = void 0;
    }
  }
  static ɵfac = function DraggableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DraggableDirective,
    selectors: [["", "kendoDraggable", ""]],
    inputs: {
      enableDrag: "enableDrag"
    },
    outputs: {
      kendoPress: "kendoPress",
      kendoDrag: "kendoDrag",
      kendoRelease: "kendoRelease"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDraggable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    enableDrag: [{
      type: Input
    }],
    kendoPress: [{
      type: Output
    }],
    kendoDrag: [{
      type: Output
    }],
    kendoRelease: [{
      type: Output
    }]
  });
})();
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
  }
  return void 0;
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var contains = (parent, node, matchSelf = false) => {
  const outside = !closest(node, (child) => child === parent);
  if (outside) {
    return false;
  }
  const el = closest(node, (child) => child === node);
  return el && (matchSelf || el !== parent);
};
var findElement = (node, predicate, matchSelf = true) => {
  if (!node) {
    return;
  }
  if (matchSelf && predicate(node)) {
    return node;
  }
  node = node.firstChild;
  while (node) {
    if (node.nodeType === 1) {
      const element = findElement(node, predicate);
      if (element) {
        return element;
      }
    }
    node = node.nextSibling;
  }
};
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var isFocusable = (element) => {
  if (!element.tagName) {
    return false;
  }
  const tagName = element.tagName.toLowerCase();
  const hasTabIndex = Boolean(element.getAttribute("tabIndex"));
  const focusable = !element.disabled && focusableRegex.test(tagName);
  return focusable || hasTabIndex;
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const hasSize = rect.width > 0 && rect.height > 0;
  const hasPosition = rect.x !== 0 && rect.y !== 0;
  return (hasSize || hasPosition) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusableWithTabKey = (element, checkVisibility = true) => {
  if (!isFocusable(element)) {
    return false;
  }
  const tabIndex = element.getAttribute("tabIndex");
  const visible = !checkVisibility || isVisible(element);
  return visible && tabIndex !== "-1";
};
var findFocusableChild = (element, checkVisibility = true) => {
  return findElement(element, (node) => isFocusableWithTabKey(node, checkVisibility), false);
};
var EventsOutsideAngularDirective = class _EventsOutsideAngularDirective {
  element;
  ngZone;
  renderer;
  events = {};
  scope;
  subscriptions;
  constructor(element, ngZone, renderer) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (!this.element || !this.element.nativeElement) {
      return;
    }
    const events = this.events;
    this.subscriptions = [];
    this.ngZone.runOutsideAngular(() => {
      for (const name in events) {
        if (Object.hasOwnProperty.call(events, name)) {
          this.subscriptions?.push(this.renderer.listen(this.element.nativeElement, name, this.scope ? events[name].bind(this.scope) : events[name]));
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      for (let idx = 0; idx < this.subscriptions.length; idx++) {
        this.subscriptions[idx]();
      }
      this.subscriptions = null;
    }
  }
  static ɵfac = function EventsOutsideAngularDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsOutsideAngularDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EventsOutsideAngularDirective,
    selectors: [["", "kendoEventsOutsideAngular", ""]],
    inputs: {
      events: [0, "kendoEventsOutsideAngular", "events"],
      scope: "scope"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsOutsideAngularDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoEventsOutsideAngular]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    events: [{
      type: Input,
      args: ["kendoEventsOutsideAngular"]
    }],
    scope: [{
      type: Input
    }]
  });
})();
var ResizeService = class {
  resizeBatchService;
  resize = new EventEmitter();
  acceptedSize = false;
  lastWidth;
  lastHeight;
  state = 0;
  parentElement;
  constructor(resizeBatchService) {
    this.resizeBatchService = resizeBatchService;
  }
  acceptSize(size = this.measure()) {
    this.lastWidth = size.width;
    this.lastHeight = size.height;
    this.acceptedSize = true;
  }
  checkChanges() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.state === 0) {
      this.state = 1;
      this.resizeBatchService.schedule(this, this.init);
    }
  }
  destroy() {
    this.resizeBatchService.cancel(this);
  }
  checkSize() {
    if (!this.parentElement) {
      return false;
    }
    const {
      width,
      height
    } = this.measure();
    const sameSize = width === this.lastWidth && height === this.lastHeight;
    if (sameSize) {
      return false;
    }
    this.lastWidth = width;
    this.lastHeight = height;
    this.acceptedSize = false;
    this.resize.emit({
      width,
      height
    });
    return true;
  }
  initSize() {
    const size = this.measure();
    this.lastWidth = size.width;
    this.lastHeight = size.height;
  }
  measure() {
    let width = 0;
    let height = 0;
    if (this.parentElement) {
      height = this.parentElement.offsetHeight;
      width = this.parentElement.offsetWidth;
    }
    return {
      height,
      width
    };
  }
};
var div = (style2) => {
  const el = document.createElement("div");
  el.style.cssText = style2;
  return el;
};
var computedProp = (elem, prop) => getComputedStyle(elem, null).getPropertyValue(prop);
var WRAP_STYLE = "position: absolute; display: block; left: 0; top: 0; right: 0; bottom: 0; z-index: -1;overflow: hidden; visibility: hidden;";
var EXPAND_CHILD_STYLE = "position: absolute; left: 0; top: 0; transition: 0s;";
var SHRINK_CHILD_STYLE = EXPAND_CHILD_STYLE + "width: 200%; height: 200%;";
var ResizeCompatService = class extends ResizeService {
  element;
  ngZone;
  expand;
  expandChild;
  shrink;
  subscription;
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  checkChanges() {
    if (this.state === 2) {
      if (!this.resizeBatchService.isScheduled(this)) {
        this.resizeBatchService.schedule(this, this.checkSize);
      }
      return;
    }
    super.checkChanges();
  }
  destroy() {
    super.destroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.expand) {
      const element = this.element?.nativeElement;
      element.removeChild(this.expand);
      element.removeChild(this.shrink);
      this.expand.removeChild(this.expandChild);
      this.expand = this.expandChild = this.shrink = this.element = null;
    }
  }
  checkSize() {
    if (super.checkSize()) {
      this.reset();
      return true;
    }
    return false;
  }
  init() {
    const parentElement = this.parentElement = this.element?.nativeElement.parentElement;
    if (computedProp(parentElement, "position") === "static") {
      parentElement.style.position = "relative";
    }
    this.state = 2;
    this.render();
    this.reset();
    this.initSize();
    this.subscribe();
  }
  render() {
    const element = this.element?.nativeElement;
    element.style.cssText = WRAP_STYLE;
    element.setAttribute("dir", "ltr");
    this.expand = div(WRAP_STYLE);
    this.expandChild = div(EXPAND_CHILD_STYLE);
    this.expand.appendChild(this.expandChild);
    element.appendChild(this.expand);
    this.shrink = div(WRAP_STYLE);
    const shrinkChild = div(SHRINK_CHILD_STYLE);
    this.shrink.appendChild(shrinkChild);
    element.appendChild(this.shrink);
  }
  reset() {
    const expandChild = this.expandChild;
    expandChild.style.width = "100000px";
    expandChild.style.height = "100000px";
    const expand = this.expand;
    expand.scrollLeft = 1e5;
    expand.scrollTop = 1e5;
    const shrink = this.shrink;
    shrink.scrollLeft = 1e5;
    shrink.scrollTop = 1e5;
  }
  subscribe() {
    this.ngZone.runOutsideAngular(() => {
      this.subscription = merge(fromEvent(this.shrink, "scroll"), fromEvent(this.expand, "scroll")).subscribe(() => {
        this.checkSize();
      });
    });
  }
};
var HAS_OBSERVER = typeof ResizeObserver !== "undefined";
var ResizeObserverService = class extends ResizeService {
  element;
  ngZone;
  resizeObserver;
  static supported() {
    return HAS_OBSERVER;
  }
  constructor(resizeBatchService, element, ngZone) {
    super(resizeBatchService);
    this.element = element;
    this.ngZone = ngZone;
  }
  destroy() {
    super.destroy();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.parentElement = null;
  }
  init() {
    this.parentElement = this.element.nativeElement.parentElement;
    this.initSize();
    this.state = 2;
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkSize();
      });
      this.resizeObserver.observe(this.parentElement);
    });
  }
};
var ResizeBatchService = class _ResizeBatchService {
  ngZone;
  scheduled = [];
  resolvedPromise = Promise.resolve(null);
  subscription;
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.flush = this.flush.bind(this);
  }
  schedule(instance, method) {
    this.scheduled.push({
      instance,
      method
    });
    if (!this.subscription) {
      this.ngZone.runOutsideAngular(() => {
        this.subscription = from(this.resolvedPromise).subscribe(this.flush);
      });
    }
  }
  isScheduled(instance) {
    return Boolean(this.scheduled.find((item) => item.instance === instance));
  }
  cancel(instance) {
    const scheduled = this.scheduled;
    const count = scheduled.length;
    for (let idx = 0; idx < count; idx++) {
      if (scheduled[idx].instance === instance) {
        scheduled.splice(idx, 1);
        if (!scheduled.length) {
          this.unsubscribe();
        }
        return;
      }
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  flush() {
    this.scheduled.forEach((item) => {
      item.method.call(item.instance);
    });
    this.scheduled = [];
    this.unsubscribe();
  }
  static ɵfac = function ResizeBatchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeBatchService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeBatchService,
    factory: _ResizeBatchService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeBatchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var DEFAULT_RATE_LIMIT = 10;
var ResizeSensorComponent = class _ResizeSensorComponent {
  /**
   * The maximum number of resize events to emit per second.
   *
   * Defaults to 10.
   */
  rateLimit = DEFAULT_RATE_LIMIT;
  /**
   * Fires when the parent DOM element has been resized.
   */
  resize = new EventEmitter();
  subscription;
  resizeService;
  constructor(resizeBatchService, element, ngZone) {
    const serviceType = ResizeObserverService.supported() ? ResizeObserverService : ResizeCompatService;
    this.resizeService = new serviceType(resizeBatchService, element, ngZone);
    const throttleTime = 1e3 / (this.rateLimit || DEFAULT_RATE_LIMIT);
    this.subscription = this.resizeService.resize.pipe(auditTime(throttleTime)).subscribe(({
      width,
      height
    }) => {
      if (!this.resizeService.acceptedSize) {
        this.resize.emit({
          width,
          height
        });
      }
    });
  }
  ngAfterViewChecked() {
    this.resizeService.checkChanges();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.resizeService.destroy();
  }
  acceptSize(size) {
    this.resizeService.acceptSize(size);
  }
  static ɵfac = function ResizeSensorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeSensorComponent)(ɵɵdirectiveInject(ResizeBatchService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ResizeSensorComponent,
    selectors: [["kendo-resize-sensor"]],
    inputs: {
      rateLimit: "rateLimit"
    },
    outputs: {
      resize: "resize"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ResizeSensorComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeSensorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-resize-sensor",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ResizeBatchService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    rateLimit: [{
      type: Input
    }],
    resize: [{
      type: Output
    }]
  });
})();
var KendoInput = class {
};
var Keys;
(function(Keys2) {
  Keys2[Keys2["Alt"] = 18] = "Alt";
  Keys2[Keys2["ArrowDown"] = 40] = "ArrowDown";
  Keys2[Keys2["ArrowLeft"] = 37] = "ArrowLeft";
  Keys2[Keys2["ArrowRight"] = 39] = "ArrowRight";
  Keys2[Keys2["ArrowUp"] = 38] = "ArrowUp";
  Keys2[Keys2["Backspace"] = 8] = "Backspace";
  Keys2[Keys2["Control"] = 17] = "Control";
  Keys2[Keys2["Delete"] = 46] = "Delete";
  Keys2[Keys2["Digit0"] = 48] = "Digit0";
  Keys2[Keys2["Digit1"] = 49] = "Digit1";
  Keys2[Keys2["Digit2"] = 50] = "Digit2";
  Keys2[Keys2["Digit3"] = 51] = "Digit3";
  Keys2[Keys2["Digit4"] = 52] = "Digit4";
  Keys2[Keys2["Digit5"] = 53] = "Digit5";
  Keys2[Keys2["Digit6"] = 54] = "Digit6";
  Keys2[Keys2["Digit7"] = 55] = "Digit7";
  Keys2[Keys2["Digit8"] = 56] = "Digit8";
  Keys2[Keys2["Digit9"] = 57] = "Digit9";
  Keys2[Keys2["End"] = 35] = "End";
  Keys2[Keys2["Enter"] = 13] = "Enter";
  Keys2[Keys2["Escape"] = 27] = "Escape";
  Keys2[Keys2["F1"] = 112] = "F1";
  Keys2[Keys2["F2"] = 113] = "F2";
  Keys2[Keys2["F10"] = 121] = "F10";
  Keys2[Keys2["Home"] = 36] = "Home";
  Keys2[Keys2["Insert"] = 45] = "Insert";
  Keys2[Keys2["KeyA"] = 65] = "KeyA";
  Keys2[Keys2["KeyB"] = 66] = "KeyB";
  Keys2[Keys2["KeyC"] = 67] = "KeyC";
  Keys2[Keys2["KeyD"] = 68] = "KeyD";
  Keys2[Keys2["KeyE"] = 69] = "KeyE";
  Keys2[Keys2["KeyF"] = 70] = "KeyF";
  Keys2[Keys2["KeyG"] = 71] = "KeyG";
  Keys2[Keys2["KeyH"] = 72] = "KeyH";
  Keys2[Keys2["KeyI"] = 73] = "KeyI";
  Keys2[Keys2["KeyJ"] = 74] = "KeyJ";
  Keys2[Keys2["KeyK"] = 75] = "KeyK";
  Keys2[Keys2["KeyL"] = 76] = "KeyL";
  Keys2[Keys2["KeyM"] = 77] = "KeyM";
  Keys2[Keys2["KeyN"] = 78] = "KeyN";
  Keys2[Keys2["KeyO"] = 79] = "KeyO";
  Keys2[Keys2["KeyP"] = 80] = "KeyP";
  Keys2[Keys2["KeyQ"] = 81] = "KeyQ";
  Keys2[Keys2["KeyR"] = 82] = "KeyR";
  Keys2[Keys2["KeyS"] = 83] = "KeyS";
  Keys2[Keys2["KeyT"] = 84] = "KeyT";
  Keys2[Keys2["KeyU"] = 85] = "KeyU";
  Keys2[Keys2["KeyV"] = 86] = "KeyV";
  Keys2[Keys2["KeyW"] = 87] = "KeyW";
  Keys2[Keys2["KeyX"] = 88] = "KeyX";
  Keys2[Keys2["KeyY"] = 89] = "KeyY";
  Keys2[Keys2["KeyZ"] = 90] = "KeyZ";
  Keys2[Keys2["NumpadDecimal"] = 110] = "NumpadDecimal";
  Keys2[Keys2["PageDown"] = 34] = "PageDown";
  Keys2[Keys2["PageUp"] = 33] = "PageUp";
  Keys2[Keys2["Shift"] = 16] = "Shift";
  Keys2[Keys2["Space"] = 32] = "Space";
  Keys2[Keys2["Tab"] = 9] = "Tab";
})(Keys || (Keys = {}));
var focusableSelector = ['a[href]:not([tabindex^="-"]):not([disabled])', 'area[href]:not([tabindex^="-"]):not([disabled])', 'input:not([tabindex^="-"]):not([disabled])', 'select:not([tabindex^="-"]):not([disabled])', 'textarea:not([tabindex^="-"]):not([disabled])', 'button:not([tabindex^="-"]):not([disabled])', 'iframe:not([tabindex^="-"]):not([disabled])', 'object:not([tabindex^="-"]):not([disabled])', 'embed:not([tabindex^="-"]):not([disabled])', '*[tabindex]:not([tabindex^="-"]):not([disabled])', '*[contenteditable]:not([tabindex^="-"]):not([disabled]):not([contenteditable="false"])'].join(",");
var watermarkStyles = `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    zIndex: 101;
    pointerEvents: none;
    backgroundImage: url('data:image/png;base64,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');
`;
var bannerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "16px",
  right: "16px",
  padding: "12px",
  borderRadius: "4px",
  boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  backgroundColor: "#FFC000",
  color: "#1E1E1E",
  zIndex: 2e4
};
var buttonStyles = {
  display: "inline-flex",
  position: "relative",
  border: "none",
  borderRadius: "4px",
  padding: "5px",
  backgroundColor: "transparent",
  transition: "color 0.2s ease-in-out",
  outline: "none",
  cursor: "pointer"
};
var licenseKeyUrl = "https://www.telerik.com/kendo-angular-ui/components/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-banner";
var bannerPresentOnPage = false;
var WatermarkOverlayComponent = class _WatermarkOverlayComponent {
  watermarkStyle = watermarkStyles;
  banner;
  isOpen = true;
  bannerMounted = false;
  bannerStyles = bannerStyles;
  buttonStyles = buttonStyles;
  licenseKeyUrl = licenseKeyUrl;
  ngOnInit() {
    if (!bannerPresentOnPage) {
      this.bannerMounted = true;
      bannerPresentOnPage = true;
    }
  }
  ngAfterViewInit() {
    if (this.isBannerRendered) {
      document.body.appendChild(this.banner.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.isBannerRendered) {
      document.body.removeChild(this.banner.nativeElement);
    }
  }
  closeBanner() {
    this.isOpen = false;
  }
  get isBannerRendered() {
    return isDocumentAvailable() && this.banner && this.banner.nativeElement;
  }
  static ɵfac = function WatermarkOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WatermarkOverlayComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _WatermarkOverlayComponent,
    selectors: [["div", "kendoWatermarkOverlay", ""]],
    viewQuery: function WatermarkOverlayComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.banner = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function WatermarkOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx.watermarkStyle);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c1,
    decls: 1,
    vars: 1,
    consts: [["banner", ""], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z", "fill", "#1E1E1E"], [3, "href"], ["title", "Close", 3, "click", "ngStyle"], ["d", "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z", "fill", "#1E1E1E"]],
    template: function WatermarkOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, WatermarkOverlayComponent_div_0_Template, 14, 7, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isOpen && ctx.bannerMounted);
      }
    },
    dependencies: [NgIf, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WatermarkOverlayComponent, [{
    type: Component,
    args: [{
      selector: "div[kendoWatermarkOverlay]",
      template: `
        <div #banner *ngIf="isOpen && bannerMounted" [ngStyle]="bannerStyles">
            <span [ngStyle]="{ display: 'flex', alignSelf: 'center', marginRight: '8px' }">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z" fill="#1E1E1E"/>
                </svg>
            </span>

            <span>
                We couldn't verify your <a [href]="licenseKeyUrl">license key</a> for Kendo UI for Angular. Please see the browser
                console for details and resolution steps.
            </span>

            <div [ngStyle]="{ display: 'flex', alignItems: 'center', marginLeft: '24px' }">
                <button title='Close' [ngStyle]="buttonStyles" (click)="closeBanner()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z" fill="#1E1E1E"/>
                    </svg>
                </button>
            </div>
        </div>
    `,
      standalone: true,
      imports: [NgIf, NgStyle]
    }]
  }], null, {
    watermarkStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    banner: [{
      type: ViewChild,
      args: ["banner"]
    }]
  });
})();
var allowed = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"];
function shouldShowValidationUI(isPackageValid) {
  const skip = allowed.some((hostname) => globalThis.document?.location.hostname.endsWith(hostname));
  return !skip && !isPackageValid;
}
var PrefixTemplateDirective = class _PrefixTemplateDirective {
  templateRef;
  /**
   * Sets the `showSeparator` attribute of the `prefixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PrefixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PrefixTemplateDirective,
    selectors: [["", "kendoPrefixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPrefixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SuffixTemplateDirective = class _SuffixTemplateDirective {
  templateRef;
  /**
   * Sets the `showSeparator` attribute of the `suffixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SuffixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuffixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SuffixTemplateDirective,
    selectors: [["", "kendoSuffixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSuffixTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var SeparatorComponent = class _SeparatorComponent {
  /**
   * Specifies the orientation of the separator. Applicable for the adornments of the [`TextAreaComponent`](slug:api_inputs_textareacomponent).
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * @hidden
   */
  get vertical() {
    return this.orientation === "vertical";
  }
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
  /**
   * @hidden
   */
  hostClass = true;
  static ɵfac = function SeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeparatorComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeparatorComponent,
    selectors: [["kendo-separator"]],
    hostVars: 6,
    hostBindings: function SeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
      }
    },
    inputs: {
      orientation: "orientation"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeparatorComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-separator",
      template: ``,
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for the event.
   * The source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if you or any subscriber prevented the default action.
   *
   * @returns `true` if the default action was prevented, otherwise, `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var canCreateElement = () => isDocumentAvailable() && document.createElement;
var propName = "--kendo-scrollbar-width";
var scrollbarWidth2 = () => {
  let scrollbarWidth3 = 0;
  if (canCreateElement()) {
    const div2 = document.createElement("div");
    div2.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div2.innerHTML = "&nbsp;";
    document.body.appendChild(div2);
    scrollbarWidth3 = div2.offsetWidth - div2.scrollWidth;
    document.body.removeChild(div2);
  }
  return scrollbarWidth3;
};
var ScrollbarWidthService = class _ScrollbarWidthService {
  changes = new EventEmitter();
  constructor() {
    if (typeof window !== "undefined" && isDocumentAvailable()) {
      document.body.style.setProperty(propName, `${scrollbarWidth2()}px`);
    }
  }
  static ɵfac = function ScrollbarWidthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollbarWidthService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollbarWidthService,
    factory: _ScrollbarWidthService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollbarWidthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var MultiTabStop = class {
  escape;
};
var tags = ["kendo-splitbutton", "kendo-combobox", "kendo-multicolumncombobox", "kendo-datepicker", "kendo-timepicker", "kendo-datetimepicker"];
var ToggleButtonTabStopDirective = class _ToggleButtonTabStopDirective {
  hostEl;
  renderer;
  zone;
  hostComponent;
  /**
   * @hidden
   *
   * Allows setting the interactive state of the toggle button.
   *
   * @default true
   */
  active;
  /**
   * Defines the value of the `aria-label` attribute of the toggle button when active.
   *
   * @default "toggle popup"
   */
  toggleButtonAriaLabel = "toggle popup";
  button;
  sub = new Subscription();
  focusButton;
  isSplitButton;
  observer;
  /**
   * @hidden
   */
  constructor(hostEl, renderer, zone, hostComponent) {
    this.hostEl = hostEl;
    this.renderer = renderer;
    this.zone = zone;
    this.hostComponent = hostComponent;
    if (isDevMode() && tags.indexOf(hostEl.nativeElement.tagName.toLowerCase()) === -1) {
      console.warn(`The kendoToggleButtonTabStop directive can be applied to the following components only: ${tags}`);
    }
  }
  ngOnInit() {
    this.active = true;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.isSplitButton = this.hostEl.nativeElement.classList.contains("k-split-button");
    if (this.active) {
      this.activateButton();
    }
    if (!(this.hostComponent?.escape instanceof EventEmitter)) {
      return;
    }
    this.sub = this.hostComponent?.escape.subscribe(() => {
      this.returnFocusToToggleButton();
    });
    this.sub.add(this.hostComponent.close.subscribe((e) => {
      if (!e.isDefaultPrevented() && this.focusButton) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => this.focusButton = false);
        });
        const mainFocusableElement = this.hostEl.nativeElement.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
        const optionsListContainer = document.getElementById(`${mainFocusableElement.getAttribute("aria-controls")}`);
        const inList = !!optionsListContainer && optionsListContainer.contains(document.activeElement);
        const inWrapper = this.hostEl.nativeElement.contains(document.activeElement);
        const focusInComponent = inList || inWrapper;
        if (focusInComponent) {
          this.returnFocusToToggleButton();
        }
      }
    }));
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (changes["active"]) {
      changes["active"].currentValue ? this.activateButton() : this.deactivateButton();
    }
    if (changes["toggleButtonAriaLabel"]) {
      this.button && this.renderer.setAttribute(this.button, "aria-label", changes["toggleButtonAriaLabel"].currentValue);
    }
  }
  ngOnDestroy() {
    this.removeListeners();
    this.sub.unsubscribe();
  }
  activateButton() {
    const el = this.hostEl.nativeElement;
    const tabindex = el.querySelector('button:not([tabindex^="-"]), input:not([tabindex^="-"])')?.getAttribute("tabindex");
    this.button = el.querySelector(".k-input-button, .k-split-button-arrow");
    this.button && this.renderer.setAttribute(this.button, "tabindex", tabindex);
    this.button && this.renderer.setAttribute(this.button, "aria-label", this.toggleButtonAriaLabel);
    this.button && this.renderer.removeAttribute(this.button, "aria-hidden");
    if (!this.observer) {
      this.initializeObserver(el);
    }
    this.removeListeners();
    this.addListeners();
  }
  deactivateButton() {
    this.button && this.renderer.setAttribute(this.button, "tabindex", "-1");
    this.button && this.renderer.setAttribute(this.button, "aria-hidden", "true");
    this.button && this.renderer.removeAttribute(this.button, "aria-label");
    this.removeListeners();
    this.observer && this.observer.disconnect();
    this.observer = null;
  }
  onFocus = () => {
    this.renderer.setStyle(this.button, "box-shadow", "inset 0 0 0 1px rgba(0, 0, 0, 0.08)");
  };
  onBlur = () => {
    this.renderer.removeStyle(this.button, "box-shadow");
  };
  onClick = (e) => {
    const splitButtonToggleEnter = e instanceof KeyboardEvent && e.keyCode === Keys.Enter;
    const isClick = e instanceof PointerEvent;
    (splitButtonToggleEnter || isClick) && (this.focusButton = true);
  };
  onKeyDown = (e) => {
    if (e.keyCode === Keys.ArrowDown && e.altKey) {
      e.stopImmediatePropagation();
      this.focusButton = true;
      this.button.click();
    }
  };
  addListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.addEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.addEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.addEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.addEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.addEventListener("keydown", this.onKeyDown, true));
    }
  }
  removeListeners() {
    if (this.button) {
      this.zone.runOutsideAngular(() => this.button.removeEventListener("focus", this.onFocus));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("blur", this.onBlur));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("click", this.onClick));
      this.isSplitButton && this.zone.runOutsideAngular(() => this.button.removeEventListener("keyup", this.onClick));
      this.zone.runOutsideAngular(() => this.button.removeEventListener("keydown", this.onKeyDown));
    }
  }
  focusToggleButton() {
    this.focusButton && this.zone.runOutsideAngular(() => this.button.focus());
    this.focusButton = false;
  }
  returnFocusToToggleButton() {
    if (this.isSplitButton) {
      this.zone.onStable.pipe(take(1)).subscribe(() => {
        this.focusToggleButton();
      });
    } else {
      this.focusToggleButton();
    }
  }
  // Keeps the `aria-controls` and `aria-expanded` attributes of the main focusable element of the component
  // and the toggle button element in sync.
  initializeObserver(element) {
    const mainFocusableElement = element.querySelector(".k-split-button > .k-button:first-child, .k-input-inner");
    const initialExpanded = mainFocusableElement.getAttribute("aria-expanded");
    const initialControls = mainFocusableElement.getAttribute("aria-controls");
    this.button && this.renderer.setAttribute(this.button, "aria-expanded", initialExpanded);
    this.button && initialControls && this.renderer.setAttribute(this.button, "aria-controls", initialControls);
    this.zone.runOutsideAngular(() => {
      const mutationConfig = {
        attributes: true
      };
      const callback = (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.attributeName === "aria-expanded") {
            this.renderer.setAttribute(this.button, "aria-expanded", mainFocusableElement.getAttribute("aria-expanded"));
          } else if (mutation.attributeName === "aria-controls") {
            const controlsRef = mainFocusableElement.getAttribute("aria-controls");
            !this.isSplitButton && controlsRef ? this.renderer.setAttribute(this.button, "aria-controls", controlsRef) : this.renderer.removeAttribute(this.button, "aria-controls");
          }
        }
      };
      this.observer = new MutationObserver(callback);
      this.observer.observe(mainFocusableElement, mutationConfig);
    });
  }
  static ɵfac = function ToggleButtonTabStopDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonTabStopDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(MultiTabStop));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ToggleButtonTabStopDirective,
    selectors: [["", "kendoToggleButtonTabStop", ""]],
    inputs: {
      active: [0, "kendoToggleButtonTabStop", "active"],
      toggleButtonAriaLabel: "toggleButtonAriaLabel"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonTabStopDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoToggleButtonTabStop]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: MultiTabStop
    }];
  }, {
    active: [{
      type: Input,
      args: ["kendoToggleButtonTabStop"]
    }],
    toggleButtonAriaLabel: [{
      type: Input
    }]
  });
})();
var TemplateContextDirective = class _TemplateContextDirective {
  set templateContext(context2) {
    if (this.insertedViewRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
      this.insertedViewRef = void 0;
    }
    if (context2.templateRef) {
      this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context2.templateRef, context2);
    }
  }
  insertedViewRef;
  viewContainerRef;
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  static ɵfac = function TemplateContextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateContextDirective)(ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TemplateContextDirective,
    selectors: [["", "templateContext", ""]],
    inputs: {
      templateContext: "templateContext"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateContextDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[templateContext]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }];
  }, {
    templateContext: [{
      type: Input
    }]
  });
})();
var KENDO_ADORNMENTS = [PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_COMMON = [...KENDO_ADORNMENTS, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, ToggleButtonTabStopDirective, WatermarkOverlayComponent];
var KENDO_RESIZESENSOR = [ResizeSensorComponent];
var KENDO_TOGGLEBUTTONTABSTOP = [ToggleButtonTabStopDirective];

// node_modules/@progress/kendo-licensing/dist/index.mjs
function _0x4d92(_0x2376d0, _0x167ebe) {
  const _0x21589c = _0x2158();
  return _0x4d92 = function(_0x4d924c, _0xdb8786) {
    _0x4d924c = _0x4d924c - 307;
    let _0x348bac = _0x21589c[_0x4d924c];
    if (_0x4d92["gUKDvc"] === void 0) {
      var _0x2cc6dd = function(_0x42ee6a) {
        const _0x548ea6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x58dc42 = "", _0x21f63f = "";
        for (let _0x8f4917 = 0, _0x144803, _0x409a79, _0x1a70dc = 0; _0x409a79 = _0x42ee6a["charAt"](_0x1a70dc++); ~_0x409a79 && (_0x144803 = _0x8f4917 % 4 ? _0x144803 * 64 + _0x409a79 : _0x409a79, _0x8f4917++ % 4) ? _0x58dc42 += String["fromCharCode"](255 & _0x144803 >> (-2 * _0x8f4917 & 6)) : 0) {
          _0x409a79 = _0x548ea6["indexOf"](_0x409a79);
        }
        for (let _0x1803122 = 0, _0x1c0fba2 = _0x58dc42["length"]; _0x1803122 < _0x1c0fba2; _0x1803122++) {
          _0x21f63f += "%" + ("00" + _0x58dc42["charCodeAt"](_0x1803122)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x21f63f);
      };
      _0x4d92["LtQmWo"] = _0x2cc6dd, _0x2376d0 = arguments, _0x4d92["gUKDvc"] = !![];
    }
    const _0x5c3af7 = _0x21589c[0], _0x7aa830 = _0x4d924c + _0x5c3af7, _0x26f2ee = _0x2376d0[_0x7aa830];
    return !_0x26f2ee ? (_0x348bac = _0x4d92["LtQmWo"](_0x348bac), _0x2376d0[_0x7aa830] = _0x348bac) : _0x348bac = _0x26f2ee, _0x348bac;
  }, _0x4d92(_0x2376d0, _0x167ebe);
}
var _0x5377ad = _0x4d92;
(function(_0xe2a671, _0x55c171) {
  const _0x113beb = _0x4d92, _0x147a01 = _0xe2a671();
  while (!![]) {
    try {
      const _0x15d0c2 = -parseInt(_0x113beb(367)) / 1 + parseInt(_0x113beb(321)) / 2 + parseInt(_0x113beb(364)) / 3 + -parseInt(_0x113beb(433)) / 4 * (-parseInt(_0x113beb(322)) / 5) + -parseInt(_0x113beb(473)) / 6 * (parseInt(_0x113beb(435)) / 7) + parseInt(_0x113beb(312)) / 8 + -parseInt(_0x113beb(442)) / 9;
      if (_0x15d0c2 === _0x55c171) break;
      else _0x147a01["push"](_0x147a01["shift"]());
    } catch (_0x5c1246) {
      _0x147a01["push"](_0x147a01["shift"]());
    }
  }
})(_0x2158, 333496);
var GRACE_SUBSCRIPTION_DAYS = 10;
var JWT_LICENSE_EVIDENCE_TYPE = _0x5377ad(437);
var LOG_HEADER = _0x5377ad(467);
var PUBLIC_KEY = _0x5377ad(324);
var logHeader = (_0x19a3db, _0x5e126e) => "[" + _0x19a3db + "]" + ("[" + LOG_HEADER + "]") + (_0x5e126e ? " " + _0x5e126e + ":" : "");
function toNumericDate(_0x262b54) {
  const _0x23775a = _0x5377ad;
  return Math[_0x23775a(449)](_0x262b54[_0x23775a(475)]() / 1e3);
}
function addDays(_0x499b40, _0x3323fe) {
  const _0x59e15e = _0x5377ad, _0x25f936 = new Date(_0x499b40 * 1e3);
  return _0x25f936[_0x59e15e(347)](_0x25f936[_0x59e15e(401)]() + _0x3323fe), toNumericDate(_0x25f936);
}
function getCurrentDate() {
  return toNumericDate(/* @__PURE__ */ new Date());
}
function daysSinceToday(_0x52b8e4) {
  const _0x74e18e = _0x5377ad, _0x250c28 = getCurrentDate() - toNumericDate(_0x52b8e4), _0x180f40 = Math[_0x74e18e(449)](_0x250c28 / (24 * 60 * 60));
  return _0x180f40;
}
function decodeString(_0xbd2aeb) {
  const _0x1d0c29 = _0x5377ad;
  if (typeof atob === _0x1d0c29(410)) {
    if (_0x1d0c29(372) === _0x1d0c29(372)) return atob(_0xbd2aeb);
    else {
      const _0x27851d = _0x45eb19 ^ _0x3e027d;
      return _0x3a5992 = _0x3730b8, _0x27851d;
    }
  }
  if (typeof Buffer === _0x1d0c29(410)) {
    if (_0x1d0c29(465) !== _0x1d0c29(426)) return Buffer[_0x1d0c29(331)](_0xbd2aeb, _0x1d0c29(438))[_0x1d0c29(317)](_0x1d0c29(461));
    else {
      var _0x2c92b2, _0x222fc0;
      return _0x5982dc[_0x1d0c29(316)] === _0x234d23[_0x1d0c29(427)] || ((_0x2c92b2 = _0x6250bd[_0x1d0c29(310)]) === null || _0x2c92b2 === void 0 ? void 0 : _0x2c92b2[_0x1d0c29(382)](_0x48ef7f[_0x1d0c29(427)])) || ((_0x222fc0 = _0x5264b6[_0x1d0c29(344)]) === null || _0x222fc0 === void 0 ? void 0 : _0x222fc0[_0x1d0c29(382)](_0x318dc8[_0x1d0c29(427)]));
    }
  }
  throw new Error(_0x1d0c29(451));
}
function decodeBase64(_0x3ac1da) {
  const _0x530df7 = _0x5377ad, _0x589f8e = decodeString(_0x3ac1da), _0x4bc848 = new Uint8Array(_0x589f8e[_0x530df7(434)]);
  for (let _0x4c6a4b = 0; _0x4c6a4b < _0x589f8e[_0x530df7(434)]; _0x4c6a4b++) {
    if (_0x530df7(395) === _0x530df7(386)) {
      const _0x54c0ea = _0x2a8377(_0x4e61ea), _0xfafbab = new _0x4dd5c5(_0x54c0ea[_0x530df7(434)]);
      for (let _0x1f8ca1 = 0; _0x1f8ca1 < _0x54c0ea[_0x530df7(434)]; _0x1f8ca1++) {
        _0xfafbab[_0x1f8ca1] = _0x54c0ea[_0x530df7(369)](_0x1f8ca1);
      }
      return _0xfafbab;
    } else _0x4bc848[_0x4c6a4b] = _0x589f8e[_0x530df7(369)](_0x4c6a4b);
  }
  return _0x4bc848;
}
function decodeBase64Url(_0x348eeb) {
  const _0x12e0f2 = _0x5377ad, _0x532041 = _0x348eeb[_0x12e0f2(385)](/-/g, "+")[_0x12e0f2(385)](/_/g, "/");
  return decodeBase64(_0x532041);
}
function decodeLicenseEvidence(_0x633c41) {
  const _0x50e9cc = _0x5377ad, _0x93a1df = _0x633c41[_0x50e9cc(390)](".")[1], _0x5b1686 = String[_0x50e9cc(329)](...decodeBase64Url(_0x93a1df));
  return JSON[_0x50e9cc(425)](_0x5b1686);
}
function toDate(_0x3d4a04) {
  return new Date(_0x3d4a04 * 1e3);
}
function isExpired(_0x26de76, _0x52401c) {
  const _0x258672 = _0x5377ad, _0xe88086 = toDate(_0x52401c), _0x2c5704 = new Date(_0xe88086[_0x258672(388)](), _0xe88086[_0x258672(459)](), _0xe88086[_0x258672(401)]() + 1), _0x16aeb6 = _0x2c5704[_0x258672(475)]() / 1e3;
  return _0x26de76 > _0x16aeb6;
}
function findPackageLicense(_0x2af745, _0x1707d0) {
  const _0x466839 = _0x5377ad, _0x438d3d = _0x1707d0[_0x466839(340)]((_0x3893c9) => _0x3893c9[_0x466839(436)] !== _0x466839(466))[_0x466839(340)]((_0x1a0a20) => {
    const _0x711b08 = _0x466839;
    if (_0x711b08(353) !== _0x711b08(408)) {
      var _0x92a8a2, _0xb380a2;
      return _0x2af745[_0x711b08(316)] === _0x1a0a20[_0x711b08(427)] || ((_0x92a8a2 = _0x2af745[_0x711b08(310)]) === null || _0x92a8a2 === void 0 ? void 0 : _0x92a8a2[_0x711b08(382)](_0x1a0a20[_0x711b08(427)])) || ((_0xb380a2 = _0x2af745[_0x711b08(344)]) === null || _0xb380a2 === void 0 ? void 0 : _0xb380a2[_0x711b08(382)](_0x1a0a20[_0x711b08(427)]));
    } else {
      this[_0x711b08(366)] = _0x12519a, this[_0x711b08(404)] = _0x711b08(373), this[_0x711b08(427)] = _0x711b08(357);
      const _0x45eff4 = _0x318be5 ? _0x711b08(336) + _0xe92a75 : "";
      this[_0x711b08(387)] = _0x711b08(319) + _0x313547[_0x711b08(330)]() + _0x711b08(418) + ("" + _0x293c36 + _0x45eff4 + _0x711b08(342) + _0x52e88f[_0x711b08(330)]() + ".\n") + _0x711b08(441);
    }
  })[_0x466839(411)]((_0x5e36be, _0x19c2ff) => _0x19c2ff[_0x466839(314)] - _0x5e36be[_0x466839(314)]), _0x848be1 = () => _0x438d3d[_0x466839(398)]((_0x29e0e7) => _0x29e0e7[_0x466839(436)] === _0x466839(424) && !isExpired(getCurrentDate(), _0x29e0e7[_0x466839(314)])), _0x3f6ae6 = () => _0x438d3d[_0x466839(398)]((_0x3e838) => _0x3e838[_0x466839(436)] === _0x466839(381) && !isExpired(_0x2af745[_0x466839(318)], _0x3e838[_0x466839(314)])), _0x3804b1 = () => _0x438d3d[_0x466839(398)]((_0x2c6ada) => _0x2c6ada[_0x466839(436)] === _0x466839(424) && !isExpired(addDays(getCurrentDate(), GRACE_SUBSCRIPTION_DAYS), _0x2c6ada[_0x466839(314)])), _0x479e3f = () => _0x438d3d[_0x466839(398)]((_0x12e382) => _0x12e382[_0x466839(436)] === _0x466839(455) && !isExpired(getCurrentDate(), _0x12e382[_0x466839(314)])), _0x5e8922 = () => _0x438d3d[_0x466839(398)]((_0x1b5747) => _0x1b5747[_0x466839(436)] === _0x466839(381)), _0x1d2bd3 = () => _0x438d3d[_0x466839(398)]((_0x2f332d) => _0x2f332d[_0x466839(436)] === _0x466839(424)), _0xfc80b0 = () => _0x438d3d[_0x466839(398)]((_0x4d8e50) => _0x4d8e50[_0x466839(436)] === _0x466839(455));
  return _0x848be1() || _0x3f6ae6() || _0x3804b1() || _0x479e3f() || _0x1d2bd3() || _0x5e8922() || _0xfc80b0();
}
function findRuntimeLicense(_0x269f65, _0x2b5475) {
  const _0x585101 = _0x5377ad;
  var _0x24f98d, _0x5d309d;
  let _0x47771f = [];
  if (((_0x24f98d = _0x269f65[_0x585101(348)]) === null || _0x24f98d === void 0 ? void 0 : _0x24f98d[_0x585101(434)]) > 0) _0x585101(339) === _0x585101(360) ? _0x5502ca = !![] : _0x47771f = _0x269f65[_0x585101(348)][_0x585101(471)]((_0x399b26) => decodeLicenseEvidence(_0x399b26));
  else {
    if (((_0x5d309d = _0x269f65[_0x585101(469)]) === null || _0x5d309d === void 0 ? void 0 : _0x5d309d[_0x585101(434)]) > 0) {
      if (_0x585101(412) === _0x585101(412)) _0x47771f = _0x269f65[_0x585101(469)][_0x585101(471)]((_0x3d8610) => ({
        "type": _0x3d8610[_0x585101(455)] ? _0x585101(455) : _0x585101(381),
        "code": _0x3d8610[_0x585101(427)],
        "expiration": _0x3d8610[_0x585101(474)],
        "licenseId": null,
        "userId": _0x269f65[_0x585101(460)]
      }));
      else {
        const _0x2edea2 = _0x3990e2[_0x585101(425)](_0x19e0bf[_0x585101(351)]);
        _0x4ca1a4[_0x585101(469)] = [..._0x2edea2[_0x585101(469)], ..._0x43a9f3[_0x585101(469)]], _0x5d6ebe[_0x585101(348)] = [..._0x2edea2[_0x585101(348)], ..._0x1643dc[_0x585101(348)]];
      }
    }
  }
  return findPackageLicense(_0x2b5475, _0x47771f);
}
var getProductCode = (_0x32a22f) => _0x32a22f[_0x5377ad(316)] || _0x32a22f[_0x5377ad(344)][0];
var NoLicenseFoundRuntimeError = class {
  constructor(_0x4a1e2b) {
    const _0x104893 = _0x5377ad;
    this[_0x104893(366)] = _0x4a1e2b, this[_0x104893(404)] = _0x104893(373), this[_0x104893(427)] = _0x104893(309), this[_0x104893(387)] = _0x104893(379) + _0x104893(429);
  }
};
var ProductNotLicensedRuntimeError = class {
  constructor(_0xe45df6, _0x1e76c6) {
    const _0x30716e = _0x5377ad;
    this[_0x30716e(366)] = _0xe45df6, this[_0x30716e(404)] = _0x30716e(373), this[_0x30716e(427)] = _0x30716e(332), this[_0x30716e(387)] = _0xe45df6 + _0x30716e(452) + (_0x30716e(397) + _0xe45df6 + _0x30716e(400) + _0x1e76c6);
  }
};
var ExpiredTrialLicenseRuntimeError = class {
  constructor(_0x1dba59, _0x5069fa) {
    const _0x33d26b = _0x5377ad;
    this[_0x33d26b(366)] = _0x1dba59, this[_0x33d26b(404)] = _0x33d26b(373), this[_0x33d26b(427)] = _0x33d26b(419), this[_0x33d26b(387)] = _0x33d26b(420) + _0x5069fa + _0x33d26b(431) + (_0x33d26b(407) + _0x1dba59 + _0x33d26b(450)) + _0x33d26b(359);
  }
};
var ExpiredLicenseRuntimeError = class {
  constructor(_0x2be9b9, _0x51dbe9, _0x21245b, _0x18aee9) {
    const _0x363371 = _0x5377ad;
    this[_0x363371(366)] = _0x2be9b9, this[_0x363371(404)] = _0x363371(373), this[_0x363371(427)] = _0x363371(357);
    const _0x3a5b3a = _0x21245b ? _0x363371(336) + _0x21245b : "";
    this[_0x363371(387)] = _0x363371(319) + _0x51dbe9[_0x363371(330)]() + _0x363371(418) + ("" + _0x2be9b9 + _0x3a5b3a + _0x363371(342) + _0x18aee9[_0x363371(330)]() + ".\n") + _0x363371(441);
  }
};
var TrialLicenseRuntimeInfo = class {
  constructor(_0x4fe8f5, _0x523b4c) {
    const _0x188f36 = _0x5377ad;
    this[_0x188f36(366)] = _0x4fe8f5, this[_0x188f36(404)] = _0x188f36(352), this[_0x188f36(387)] = _0x188f36(362) + -_0x523b4c + _0x188f36(389) + _0x188f36(445);
  }
};
function importRsaKey(_0x451839) {
  const _0x50b41e = _0x5377ad, _0x2933d5 = _0x50b41e(335), _0x44716c = _0x50b41e(380), _0x3e5cb9 = _0x451839[_0x50b41e(385)](_0x2933d5, "")[_0x50b41e(385)](_0x44716c, "")[_0x50b41e(385)](/\n/gm, ""), _0x534f99 = decodeBase64(_0x3e5cb9);
  return crypto[_0x50b41e(394)][_0x50b41e(422)](_0x50b41e(405), _0x534f99, {
    "name": _0x50b41e(440),
    "hash": _0x50b41e(457)
  }, !![], [_0x50b41e(458)]);
}
function verifyLicenseEvidence(_0x34c356, _0x2c9e2d) {
  return __async(this, null, function* () {
    const _0x180d15 = _0x5377ad;
    if (typeof crypto !== _0x180d15(454) || typeof crypto[_0x180d15(394)] !== _0x180d15(454) || typeof TextEncoder !== _0x180d15(410) || typeof TextDecoder !== _0x180d15(410)) {
      if (_0x180d15(439) !== _0x180d15(396)) return;
      else {
        const _0x3f3659 = _0x34a581(_0x1582e2(_0x7bf33b[_0x180d15(314)]));
        _0x34c51f(_0x5506c5(), _0x25c113[_0x180d15(314)]) ? _0x28a253 = new _0x14430e(_0x3f997d[_0x180d15(366)], _0x3f3659) : (_0x36c8f5 = new _0x837e95(_0x56f6a2[_0x180d15(366)], _0x3f3659), _0x12c799 = !![]);
      }
    }
    const _0x4b923b = crypto[_0x180d15(394)], [_0x945bd5, _0x1a6c89, _0x4acf1c] = _0x34c356[_0x180d15(390)]("."), _0x53b8d4 = decodeBase64Url(_0x4acf1c), _0x2d65ab = new TextEncoder(), _0x3c573a = new TextDecoder(), _0x390a5b = _0x2d65ab[_0x180d15(327)](_0x945bd5 + "." + _0x1a6c89), _0x350a5a = _0x3c573a[_0x180d15(421)](decodeBase64Url(_0x945bd5)), _0x56b72c = JSON[_0x180d15(425)](_0x350a5a)[_0x180d15(376)] === JWT_LICENSE_EVIDENCE_TYPE;
    if (!_0x56b72c) {
      if (_0x180d15(392) !== _0x180d15(323)) throw new Error(_0x180d15(472));
      else {
        if (_0x1099c9[_0x180d15(456)](_0x46bd71[_0x180d15(453)])) return _0x4bcdc1[_0x180d15(354)](_0x3030b0[_0x180d15(453)]);
        const {
          isLicenseValid: _0x3a9fa0,
          message: _0x373847
        } = _0x3e7f38(_0x5b5d09), _0x5317c2 = _0x34b005(_0x12e66f);
        return _0x373847 && !_0x5d7ae8[_0x180d15(456)](_0x5317c2) && (_0x57b5ff(_0x373847, _0x5ee0c0), _0xc5232[_0x180d15(463)](_0x5317c2)), _0x5b533c[_0x180d15(399)](_0x36008[_0x180d15(453)], _0x3a9fa0), _0x3a9fa0;
      }
    }
    const _0x3bbfad = yield importRsaKey(_0x2c9e2d), _0x5783e2 = yield _0x4b923b[_0x180d15(458)](_0x3bbfad[_0x180d15(326)], _0x3bbfad, _0x53b8d4, _0x390a5b);
    if (!_0x5783e2) {
      if (_0x180d15(446) === _0x180d15(446)) throw new Error(_0x180d15(308));
      else _0x51af4d[_0x180d15(358)](_0x142c10);
    }
  });
}
var context = {
  data: "  {}  "
};
var publicKey = PUBLIC_KEY;
var cache = /* @__PURE__ */ new Map();
var touchedProducts = /* @__PURE__ */ new Set();
function _0x2158() {
  const _0x16f6f4 = ["yLD1B3O", "vvrMAgy", "igfUzcbPCYbUB3qGDMfSAwqGzM9Yia", "veTmmJaZ", "ww91CIb0CMLHBcbOyxmGzxHWAxjLzca", "zgvJB2rL", "Aw1WB3j0s2v5", "yNn4yva", "C3vIC2nYAxb0Aw9U", "CgfYC2u", "z3HvvK4", "y29Kzq", "vunJAum", "icbuBYbKB3DUBg9HzcbHigXPy2vUC2uGA2v5igzPBguSihzPC2L0igH0DhbZoI8VChjNCMvZCY5JBY8ZuhDrtuTA", "CwruBuC", "igrHEsHZksbHz28UcG", "z3jVDxa", "ndm2me5RzLP1Cq", "BgvUz3rO", "mJyXntjsuvP3z3y", "DhLWzq", "vgvSzxjPAYbmAwnLBNnLiev2AwrLBMnL", "yMfZzty0", "EMnSvNO", "uLnbu1nblvblq1mXlxyXxZu", "icbszw5LDYb5B3vYigXPy2vUC2uGyxqGAhr0Chm6lY9WCMDYzxnZlMnVlZnqEdLTnuy", "mtC2nZeZmKjqDgnnqW", "DgLTzxn0yw1W", "DMvYC2LVBG", "icbuBYbHy3f1AxjLigeGy29TBwvYy2LHBcbSAwnLBNnLlcb2AxnPDcbODhrWCZOVl3bYz3jLC3mUy28Vm1b5seLVsa", "zKLjz2m", "ywXS", "ANntr0K", "zMXVB3i", "lcb3zsbOB3bLihLVDsbLBMPVEwvKihLVDxiGDhjPywWGCgvYAw9KlGO", "yxrVyIbPCYb1BMrLzMLUzwq", "igLZig5VDcbSAxn0zwqGAw4GEw91CIbJDxjYzw50igXPy2vUC2uGzMLSzs4k", "BMfTzq", "B2jQzwn0", "DhjPywW", "AgfZ", "u0Hblti1nG", "DMvYAwz5", "z2v0tw9UDgG", "DxnLCKLK", "DxrMoa", "DK9jzgS", "ywrK", "DgHLBG", "rhn4Dei", "DxnHz2u", "vgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZAw5N", "BgLJzw5ZAw5Nrg9JC1vYBa", "ChjVzhvJDhm", "y2f0y2G", "BwfW", "vw5RBM93BIbSAwnLBNnLigv2AwrLBMnLihr5Cgu", "nZy4AgTZu1Lz", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "z2v0vgLTzq", "z3jVDxbfBMq", "sw52ywXPzcbSAwnLBNnLigv2AwrLBMnL", "veTmmJaX", "CMvKAxn0CMLIDxrLzej5", "q2jNAw0", "nda5mda5nKfotKXIsq", "rM1rwMq", "zxHWAxjHDgLVBG", "BvHUwgu", "ChjVzhvJDenVzgu", "Dg9tDhjPBMC", "ChvIBgLZAerHDgu", "ww91CIbJDxjYzw50igXPy2vUC2uGAgfZigv4CgLYzwqGB24G", "C3bSAwnL", "ndmXmdq2EfzhsxPw", "mJe1twHgtfPP", "vw13Egm", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuLjqKLQqu5cz2TXAgTPrZL3mejbuuvgqufpq0froefnsuLcq2Dlq0frrueYBw5vvK1TA3rOmNGRtI9prhn6rWPprKLzqKW2tK9pmvHxuMOXD2TTzwnlDuX6AuPeAez6mfDrBxLpALKZnfLTzZLWthvcqtLru1DYCLP1DLb3ndbocM0Wwc9hqM10DezTue52y2eZv21kmM9lttDqCeXPvvu5zJDpDJvxzuLyBNGRk3rZl0Xdl09cn0z0wITmAvjNsJCkmg1ABLbLvg9NzezYqvnMmhPtuuP2ngPTwdG0meXqytzUB21xzvvNsvzhueXmvKKXneDPyJHeBcTUt2nRCunoyWPRqvvvAZrjqKy2n0r1zLj0oxPrEvj4zZK5ExnHA3ziwdjtrgjKr3zjqMr4v3H2AgHTCKjVzwL4mhvtvNrhmMDTcMPKDLnXBfbkvMr2twjRmvHLmITtvwXKsLbYEeGXvNjuwwvsvxq0ExfxEhKXnM5gsLveAJLLEfOYmdjynfriA1uksLfjrefrquikls0Tls1ftKqGufvcteLdieTfws0Tls0T", "zg5zEhC", "ywXNB3jPDgHT", "zw5JB2rL", "DMP0B1i", "zNjVBunOyxjdB2rL", "Dg9mB2nHBgveyxrLu3rYAw5N", "zNjVBq", "veTmmJaY", "EfDuzMm", "AM9PBG", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0", "ihzLCNnPB24G", "AKziDK0", "zMjfs3O", "Bxbuzfi", "zMLSDgvY", "DvPPt1C", "lIbuAguGChjVzhvJDcb3yxmGChvIBgLZAgvKig9Uia", "CgfYC2vjBNq", "ChjVzhvJDenVzgvZ", "Dw5KzwzPBMvK", "qvHeswW", "C2v0rgf0zq", "BgLJzw5Zzxm", "D3HsBNO", "C3rYAw5NAwz5", "zgf0yq", "su5gtW", "rhbnz00", "z2v0", "DhjPBq", "AvnVCxe", "veTmmJa0", "D2fYBG", "icbuBYbJB250Aw51zsb1C2LUzYbVDxiGChjVzhvJDcWGy29UC2LKzxiGDxbNCMfKAw5NihrVigeGy29TBwvYy2LHBcbSAwnLBNnLoIbODhrWCZOVl3bYz3jLC3mUy28Vm0m5BxiXtq", "D1jAsgu", "q2rwuhe", "ww91CIbuCMLHBcbSAwnLBNnLihDPBgWGzxHWAxjLigLUia", "ALPoyKG", "mti5nZmZnuXku1DAvW", "D3LevfG", "ChjVzhvJDe5HBwu", "mtK4mdq4B0jiEuX4", "s3jLC3G", "y2HHCKnVzgvbDa", "DejjvLu", "sKzkuvK", "y0j1C3G", "v0fstG", "AxnbCNjHEq", "teLcC1C", "DhLW", "tuXVBxq", "y2XLyxi", "tM8GvgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZzsbMB3vUzc4k", "ls0Tls1ftKqGufvcteLdieTfws0Tls0T", "CgvYCgv0DwfS", "Aw5JBhvKzxm", "ChvZAa", "yMvTALi", "CMvWBgfJzq", "BvDPyMS", "BwvZC2fNzq", "z2v0rNvSBfLLyxi", "igrHEsHZks4k", "C3bSAxq", "Du5ezeO", "qK9PzKK", "AfvhwNy", "C3vIDgXL", "rfLjseq", "shLIEfC", "icbmzwfYBIbTB3jLigfIB3v0ia", "zMLUza", "C2v0", "igXPy2vUC2LUzYbHDca", "z2v0rgf0zq", "C2XPy2u", "q2LXqNG", "C2v2zxjPDhK", "C3bRAq", "C2nYAxb0s2v5", "icbuAgfUAYb5B3uGzM9YihrYEwLUzYbVDxqG", "r053tvC", "rgLMAMG", "zNvUy3rPB24", "C29YDa", "C2PbDNm", "v0rkz0m", "De93vhK", "D0j1wK0"];
  _0x2158 = function() {
    return _0x16f6f4;
  };
  return _0x2158();
}
var validateEvidencesCache = !![];
var validateEvidences = (_0x423ec4) => {
  const _0x3b6518 = _0x5377ad;
  var _0x212c56, _0x44fc41;
  return ((_0x212c56 = _0x423ec4[_0x3b6518(348)]) === null || _0x212c56 === void 0 ? void 0 : _0x212c56[_0x3b6518(434)]) > 0 && (_0x3b6518(328) !== _0x3b6518(361) ? Promise[_0x3b6518(447)]((_0x44fc41 = _0x423ec4[_0x3b6518(348)]) === null || _0x44fc41 === void 0 ? void 0 : _0x44fc41[_0x3b6518(471)]((_0x9b7a66) => verifyLicenseEvidence(_0x9b7a66, publicKey)))[_0x3b6518(464)](() => {
    const _0x373be9 = _0x3b6518;
    _0x373be9(371) !== _0x373be9(371) ? ((void 0)[_0x373be9(366)] = _0xa0e9fa, (void 0)[_0x373be9(404)] = _0x373be9(352), (void 0)[_0x373be9(387)] = _0x373be9(362) + -_0x3c322c + _0x373be9(389) + _0x373be9(445)) : validateEvidencesCache = !![];
  })[_0x3b6518(470)](() => {
    const _0xaf8377 = _0x3b6518;
    _0xaf8377(325) === _0xaf8377(384) ? (_0x279ee5(_0x40a78e, _0x376352), _0x1de0d9[_0xaf8377(463)](_0x9e336f)) : (validateEvidencesCache = ![], cache[_0xaf8377(378)]());
  }) : _0x4919fc = _0x176fb4[_0x3b6518(348)][_0x3b6518(471)]((_0x45317c) => _0x23b881(_0x45317c))), validateEvidencesCache;
};
function getLicenseStatus(_0x31ef35) {
  const _0x3fc971 = _0x5377ad, _0x4d8683 = JSON[_0x3fc971(425)](context[_0x3fc971(351)]), _0x294092 = !_0x4d8683[_0x3fc971(406)] && !_0x4d8683[_0x3fc971(443)], _0x2f7d80 = _0x4d8683[_0x3fc971(406)] && typeof KendoLicensing === _0x3fc971(345);
  let _0x1bea30, _0x533f0a = ![], _0x3b9651;
  if (_0x294092 || _0x2f7d80 || !validateEvidences(_0x4d8683)) _0x3fc971(346) !== _0x3fc971(346) ? _0x172134 = new _0xd45048(_0x20f331[_0x3fc971(366)], _0x5b103b[_0x3fc971(468)]) : _0x1bea30 = new NoLicenseFoundRuntimeError(_0x31ef35[_0x3fc971(366)]);
  else {
    if (_0x3fc971(338) === _0x3fc971(338)) {
      _0x3b9651 = findRuntimeLicense(_0x4d8683, _0x31ef35);
      if (!_0x3b9651) _0x3fc971(333) !== _0x3fc971(391) ? _0x1bea30 = new ProductNotLicensedRuntimeError(_0x31ef35[_0x3fc971(366)], _0x31ef35[_0x3fc971(468)]) : _0xa096c8 = new _0x98da4d(_0x16eef4[_0x3fc971(366)], _0x1785ac);
      else {
        if (_0x3b9651[_0x3fc971(436)] === _0x3fc971(455)) {
          if (_0x3fc971(363) === _0x3fc971(363)) {
            const _0x3cc7d0 = daysSinceToday(toDate(_0x3b9651[_0x3fc971(314)]));
            if (isExpired(getCurrentDate(), _0x3b9651[_0x3fc971(314)])) _0x3fc971(341) === _0x3fc971(341) ? _0x1bea30 = new ExpiredTrialLicenseRuntimeError(_0x31ef35[_0x3fc971(366)], _0x3cc7d0) : _0x35f50f = _0x1bc909[_0x3fc971(469)][_0x3fc971(471)]((_0x4b3376) => ({
              "type": _0x4b3376[_0x3fc971(455)] ? _0x3fc971(455) : _0x3fc971(381),
              "code": _0x4b3376[_0x3fc971(427)],
              "expiration": _0x4b3376[_0x3fc971(474)],
              "licenseId": null,
              "userId": _0x50a162[_0x3fc971(460)]
            }));
            else {
              if (_0x3fc971(413) !== _0x3fc971(375)) _0x1bea30 = new TrialLicenseRuntimeInfo(_0x31ef35[_0x3fc971(366)], _0x3cc7d0), _0x533f0a = !![];
              else {
                const _0x5a33b4 = _0x43aa00(_0x26c514), _0x3e53a3 = new _0x160981(_0x5a33b4[_0x3fc971(388)](), _0x5a33b4[_0x3fc971(459)](), _0x5a33b4[_0x3fc971(401)]() + 1), _0x242b25 = _0x3e53a3[_0x3fc971(475)]() / 1e3;
                return _0x30d191 > _0x242b25;
              }
            }
          } else throw new _0x448cfd(_0x3fc971(472));
        } else {
          if (_0x3b9651[_0x3fc971(436)] === _0x3fc971(381) || _0x3b9651[_0x3fc971(436)] === _0x3fc971(424)) {
            if (_0x3fc971(393) !== _0x3fc971(403)) {
              let _0x1cd684 = _0x3b9651[_0x3fc971(314)];
              if (_0x3b9651[_0x3fc971(436)] === _0x3fc971(424)) {
                if (_0x3fc971(365) !== _0x3fc971(349)) _0x1cd684 = addDays(_0x1cd684, GRACE_SUBSCRIPTION_DAYS);
                else return _0x305a7e[_0x3fc971(331)](_0x1d74f2, _0x3fc971(438))[_0x3fc971(317)](_0x3fc971(461));
              }
              if (isExpired(_0x31ef35[_0x3fc971(318)], _0x1cd684)) {
                if (_0x3fc971(313) !== _0x3fc971(313)) {
                  const _0x487ad4 = [], _0x528b30 = _0x24185b[_0x3fc971(355)]();
                  for (let _0x4883da = 0; _0x4883da < _0x528b30[_0x3fc971(434)]; _0x4883da += 2) {
                    const _0x106451 = _0x528b30[_0x3fc971(402)](_0x4883da, _0x4883da + 2);
                    _0x487ad4[_0x3fc971(383)](_0x11ba44[_0x3fc971(343)](_0x106451, 21));
                  }
                  let _0x25fd56 = 66;
                  const _0x2f89b8 = _0x487ad4[_0x3fc971(471)]((_0x1f4045) => {
                    const _0x56a8a4 = _0x1f4045 ^ _0x25fd56;
                    return _0x25fd56 = _0x1f4045, _0x56a8a4;
                  })[_0x3fc971(471)]((_0x200f87) => _0x4ea915[_0x3fc971(329)](_0x200f87))[_0x3fc971(334)]("");
                  return _0x2f89b8;
                } else _0x1bea30 = new ExpiredLicenseRuntimeError(_0x31ef35[_0x3fc971(366)], toDate(_0x3b9651[_0x3fc971(314)]), _0x31ef35[_0x3fc971(444)], toDate(_0x31ef35[_0x3fc971(318)]));
              } else {
                if (_0x3fc971(370) === _0x3fc971(428)) {
                  const _0x3a7eb4 = _0x3ac30b[_0x3fc971(385)](/-/g, "+")[_0x3fc971(385)](/_/g, "/");
                  return _0x248bcc(_0x3a7eb4);
                } else _0x533f0a = !![];
              }
            } else {
              const _0x1ea10b = new _0x180312(_0x1c0fba * 1e3);
              return _0x1ea10b[_0x3fc971(347)](_0x1ea10b[_0x3fc971(401)]() + _0x5d9b8e), _0x3c33b4(_0x1ea10b);
            }
          }
        }
      }
    } else _0x37cadf[_0x3fc971(432)](_0x30e463);
  }
  const _0x2be742 = _0x3b9651, _0x4572f6 = (_0x2be742 === null || _0x2be742 === void 0 ? void 0 : _0x2be742[_0x3fc971(314)]) ? toDate(_0x2be742[_0x3fc971(314)]) : void 0;
  return {
    "isLicenseValid": _0x533f0a,
    "licenseType": _0x3b9651 === null || _0x3b9651 === void 0 ? void 0 : _0x3b9651[_0x3fc971(436)],
    "licenseProductCode": _0x2be742 === null || _0x2be742 === void 0 ? void 0 : _0x2be742[_0x3fc971(427)],
    "expiration": _0x4572f6,
    "message": _0x1bea30
  };
}
function validatePackage(_0x3789f6) {
  const _0x47500d = _0x5377ad;
  if (cache[_0x47500d(456)](_0x3789f6[_0x47500d(453)])) {
    if (_0x47500d(462) !== _0x47500d(462)) return;
    else return cache[_0x47500d(354)](_0x3789f6[_0x47500d(453)]);
  }
  const {
    isLicenseValid: _0x1b4e32,
    message: _0x16ddd4
  } = getLicenseStatus(_0x3789f6), _0x5daece = getProductCode(_0x3789f6);
  if (_0x16ddd4 && !touchedProducts[_0x47500d(456)](_0x5daece)) {
    if (_0x47500d(377) !== _0x47500d(368)) onMessage(_0x16ddd4, _0x3789f6), touchedProducts[_0x47500d(463)](_0x5daece);
    else {
      const _0xdb6299 = _0x36910c[_0x47500d(390)](".")[1], _0x88635f = _0x2f9af6[_0x47500d(329)](..._0x41151f(_0xdb6299));
      return _0x15476e[_0x47500d(425)](_0x88635f);
    }
  }
  return cache[_0x47500d(399)](_0x3789f6[_0x47500d(453)], _0x1b4e32), _0x1b4e32;
}
function onMessage(_0x5de1b0, _0x1d21d7) {
  const _0x445b5c = _0x5377ad;
  if (typeof console === _0x445b5c(454)) {
    if (_0x445b5c(356) === _0x445b5c(356)) {
      const _0x407782 = logHeader(_0x5de1b0[_0x445b5c(404)]) + (" " + _0x1d21d7[_0x445b5c(366)]), _0x3bf320 = typeof console[_0x445b5c(432)] === _0x445b5c(410);
      if (_0x3bf320) _0x445b5c(337) !== _0x445b5c(337) ? (this[_0x445b5c(366)] = _0x37433e, this[_0x445b5c(404)] = _0x445b5c(373), this[_0x445b5c(427)] = _0x445b5c(332), this[_0x445b5c(387)] = _0x274a5f + _0x445b5c(452) + (_0x445b5c(397) + _0x5d4d36 + _0x445b5c(400) + _0x2f4cfe)) : console[_0x445b5c(432)](_0x407782);
      else {
        if (_0x445b5c(448) === _0x445b5c(416)) {
          const _0x3d2253 = _0x273768() - _0xe80df2(_0x275bda), _0x490f91 = _0x4f2d04[_0x445b5c(449)](_0x3d2253 / (24 * 60 * 60));
          return _0x490f91;
        } else console[_0x445b5c(358)](_0x407782);
      }
      console[_0x445b5c(358)](_0x5de1b0[_0x445b5c(387)]);
      if (_0x3bf320) {
        if (_0x445b5c(414) !== _0x445b5c(414)) {
          const _0xf2f404 = _0x53c0d4[_0x445b5c(340)]((_0x6031df) => _0x6031df[_0x445b5c(436)] !== _0x445b5c(466))[_0x445b5c(340)]((_0x40cae7) => {
            const _0x5044e8 = _0x445b5c;
            var _0x53253b, _0x5d01ab;
            return _0x9d0913[_0x5044e8(316)] === _0x40cae7[_0x5044e8(427)] || ((_0x53253b = _0x3c168c[_0x5044e8(310)]) === null || _0x53253b === void 0 ? void 0 : _0x53253b[_0x5044e8(382)](_0x40cae7[_0x5044e8(427)])) || ((_0x5d01ab = _0x37b044[_0x5044e8(344)]) === null || _0x5d01ab === void 0 ? void 0 : _0x5d01ab[_0x5044e8(382)](_0x40cae7[_0x5044e8(427)]));
          })[_0x445b5c(411)]((_0xca9efc, _0x4d29e9) => _0x4d29e9[_0x445b5c(314)] - _0xca9efc[_0x445b5c(314)]), _0x4bca7e = () => _0xf2f404[_0x445b5c(398)]((_0x438abb) => _0x438abb[_0x445b5c(436)] === _0x445b5c(424) && !_0x3f97ba(_0xcf232a(), _0x438abb[_0x445b5c(314)])), _0x386c78 = () => _0xf2f404[_0x445b5c(398)]((_0x1feb3c) => _0x1feb3c[_0x445b5c(436)] === _0x445b5c(381) && !_0xd396bd(_0x190c4f[_0x445b5c(318)], _0x1feb3c[_0x445b5c(314)])), _0xd4a853 = () => _0xf2f404[_0x445b5c(398)]((_0xb2d211) => _0xb2d211[_0x445b5c(436)] === _0x445b5c(424) && !_0x3285c4(_0x23f671(_0x2184e9(), _0x557385), _0xb2d211[_0x445b5c(314)])), _0x2e35f5 = () => _0xf2f404[_0x445b5c(398)]((_0x10e521) => _0x10e521[_0x445b5c(436)] === _0x445b5c(455) && !_0x1a54ab(_0x1357a4(), _0x10e521[_0x445b5c(314)])), _0x7529e0 = () => _0xf2f404[_0x445b5c(398)]((_0x29a4a2) => _0x29a4a2[_0x445b5c(436)] === _0x445b5c(381)), _0x22710f = () => _0xf2f404[_0x445b5c(398)]((_0x3440d9) => _0x3440d9[_0x445b5c(436)] === _0x445b5c(424)), _0x3d8aef = () => _0xf2f404[_0x445b5c(398)]((_0x87c16a) => _0x87c16a[_0x445b5c(436)] === _0x445b5c(455));
          return _0x4bca7e() || _0x386c78() || _0xd4a853() || _0x2e35f5() || _0x22710f() || _0x7529e0() || _0x3d8aef();
        } else console[_0x445b5c(307)]();
      }
    } else _0xcdaef8[_0x445b5c(320)](3, 0, "");
  }
}

// node_modules/@progress/kendo-angular-popup/fesm2022/progress-kendo-angular-popup.mjs
var _c02 = ["container"];
var _c12 = ["*"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable2 = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable2()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable2()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class _DOMService {
  _dummy;
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable2() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable2()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
  static ɵfac = function DOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DOMService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DOMService,
    factory: _DOMService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class _AlignService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
  static ɵfac = function AlignService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AlignService,
    factory: _AlignService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class _PositionService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
  static ɵfac = function PositionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PositionService,
    factory: _PositionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService2 = class _ResizeService {
  _dom;
  _zone;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
  static ɵfac = function ResizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeService,
    factory: _ResizeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService2, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class _ScrollableService {
  _dom;
  _zone;
  element;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
  static ɵfac = function ScrollableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollableService,
    factory: _ScrollableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class _AnimationService {
  animationBuilder;
  start = new EventEmitter();
  end = new EventEmitter();
  flip;
  player;
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
  static ɵfac = function AnimationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationService)(ɵɵinject(AnimationBuilder));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationService,
    factory: _AnimationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1751462878,
  version: "19.2.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class _PopupComponent {
  container;
  _alignService;
  domService;
  _positionService;
  _resizeService;
  _scrollableService;
  animationService;
  _renderer;
  _zone;
  /**
   * Controls the Popup animation. By default, the opening and closing animations are enabled ([see example]({% slug animations_popup %})).
   * @default true
   */
  animate = true;
  /**
   * Sets the element to use as an anchor. The Popup opens next to this element. ([See example]({% slug alignmentpositioning_popup %}#toc-aligning-to-components)).
   */
  anchor;
  /**
   * Sets the anchor pivot point ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   * @default '{ horizontal: "left", vertical: "bottom" }'
   */
  anchorAlign = {
    horizontal: "left",
    vertical: "bottom"
  };
  /**
   * Sets the collision behavior of the Popup ([see example]({% slug viewportboundarydetection_popup %})).
   * @default '{ horizontal: "fit", vertical: "flip" }'
   */
  collision = {
    horizontal: "fit",
    vertical: "flip"
  };
  /**
   * Sets the pivot point of the Popup ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   * @default '{ horizontal: "left", vertical: "top" }'
   */
  popupAlign = {
    horizontal: "left",
    vertical: "top"
  };
  /**
   * Controls whether the component copies the `anchor` font styles.
   * @default false
   */
  copyAnchorStyles = false;
  /**
   * Sets a list of CSS classes to add to the internal animated element ([see example]({% slug appearance_popup %})).
   *
   * > To style the content of the Popup, use this property binding.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  popupClass;
  /**
   * Sets the position mode of the component. By default, the Popup uses fixed positioning. To use absolute positioning, set this option to `absolute`.
   *
   * To support mobile browsers with the zoom option, use the `absolute` positioning of the Popup.
   * @default 'fixed'
   */
  positionMode = "fixed";
  /**
   * Sets the absolute position of the element ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-absolute-points)).
   * The Popup opens next to this point. The Popup pivot point is defined by the `popupAlign` option. The boundary detection uses the window viewport.
   * @default '{ left: -10000, top: 0 }'
   */
  offset = DEFAULT_OFFSET;
  /**
   * Sets the margin value in pixels. Adds blank space between the Popup and the anchor ([see example]({% slug alignmentpositioning_popup %}#toc-adding-a-margin)).
   */
  margin;
  /**
   * Fires when the anchor scrolls outside the screen boundaries. ([See example]({% slug closing_popup %}#toc-after-leaving-the-viewport)).
   */
  anchorViewportLeave = new EventEmitter();
  /**
   * Fires after the component closes.
   */
  close = new EventEmitter();
  /**
   * Fires after the component opens and the opening animation ends.
   */
  open = new EventEmitter();
  /**
   * Fires after the component is opened and the Popup is positioned.
   */
  positionChange = new EventEmitter();
  /**
   * @hidden
   */
  contentContainer;
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  content;
  /**
   * @hidden
   */
  renderDefaultClass = true;
  resolvedPromise = Promise.resolve(null);
  _currentOffset;
  animationSubscriptions;
  repositionSubscription;
  initialCheck = true;
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    validatePackage(packageMetadata);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
  static ɵfac = function PopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService2), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopupComponent,
    selectors: [["kendo-popup"]],
    viewQuery: function PopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 7);
        ɵɵviewQuery(ResizeSensorComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      anchor: "anchor",
      anchorAlign: "anchorAlign",
      collision: "collision",
      popupAlign: "popupAlign",
      copyAnchorStyles: "copyAnchorStyles",
      popupClass: "popupClass",
      positionMode: "positionMode",
      offset: "offset",
      margin: "margin"
    },
    outputs: {
      anchorViewportLeave: "anchorViewportLeave",
      close: "close",
      open: "open",
      positionChange: "positionChange"
    },
    exportAs: ["kendo-popup"],
    standalone: true,
    features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c12,
    decls: 6,
    vars: 6,
    consts: [["container", ""], [1, "k-child-animation-container"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngIf"], [3, "resize", "rateLimit"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
        ɵɵprojection(3);
        ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        ɵɵelementStart(5, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-popup", ctx.renderDefaultClass);
        ɵɵproperty("ngClass", ctx.popupClass);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
        ɵɵadvance();
        ɵɵproperty("rateLimit", 100);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService2, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div [class.k-popup]="renderDefaultClass" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService2
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class _PopupService {
  applicationRef;
  componentFactoryResolver;
  injector;
  container;
  /**
   * Gets the root view container for injecting the component.
   *
   * @returns {ComponentRef<any>} The root view container reference.
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Gets the HTML element of the root component container.
   *
   * @returns {HTMLElement} The root container HTML element.
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Popup component. The Popup mounts in the DOM under the root application component.
   *
   * @param {PopupSettings} options - The options for the Popup.
   * @returns {ComponentRef<PopupComponent>} A reference to the Popup object.
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        try {
          removeElement(popupElement);
        } catch {
        }
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef The component reference.
   * @returns {HTMLElement} The root HTML element of the component.
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by type.
   *
   * @param {*} componentClass The component class.
   * @returns {ComponentFactory<any>} The component factory instance.
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` class.
   *
   * @param {*} componentClass The component class.
   * @param {*} nodes The nodes to project.
   * @param {ViewContainerRef} container The container to use.
   * @returns {ComponentRef<any>} The created component reference.
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the input options onto the component instance.
   *
   * @param {ComponentRef<any>} component The component reference.
   * @param {*} options The options to project.
   * @returns {ComponentRef<any>} The updated component reference.
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and nodes to append from the `content` option.
   *
   * @param {*} content The content to use.
   * @returns {any} The component and nodes for projection.
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
  static ɵfac = function PopupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PopupService,
    factory: _PopupService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class _PopupModule {
  static ɵfac = function PopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PopupModule,
    imports: [ResizeSensorComponent, PopupComponent],
    exports: [PopupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PopupService, ResizeBatchService],
    imports: [KENDO_RESIZESENSOR, KENDO_POPUP]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [...KENDO_RESIZESENSOR, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  mobileOS,
  pointers,
  touchEnabled,
  getter,
  setter,
  parseInlineStyles,
  Draggable,
  isDocumentAvailable,
  isChanged,
  anyChanged,
  hasObservers,
  guid,
  isSafari,
  isFirefox,
  isPresent,
  isObjectPresent,
  parseCSSClassNames,
  setHTMLAttributes,
  removeHTMLAttributes,
  parseAttributes,
  isControlRequired,
  areObjectsEqual,
  DraggableDirective,
  closestInScope,
  closest,
  contains,
  findFocusableChild,
  EventsOutsideAngularDirective,
  ResizeBatchService,
  ResizeSensorComponent,
  KendoInput,
  Keys,
  focusableSelector,
  WatermarkOverlayComponent,
  shouldShowValidationUI,
  PrefixTemplateDirective,
  SuffixTemplateDirective,
  SeparatorComponent,
  PreventableEvent,
  MultiTabStop,
  ToggleButtonTabStopDirective,
  TemplateContextDirective,
  KENDO_ADORNMENTS,
  KENDO_TOGGLEBUTTONTABSTOP,
  validatePackage,
  document_default,
  windowViewport,
  offset_default,
  scrollPosition,
  position_with_scroll_default,
  SCALE,
  PopupComponent,
  POPUP_CONTAINER,
  PopupService,
  KENDO_POPUP,
  PopupModule
};
//# sourceMappingURL=chunk-THOT5VRV.js.map
