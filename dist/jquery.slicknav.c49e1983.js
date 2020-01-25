// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/jquery.slicknav.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
;

(function ($, document, window) {
  var // default settings object.
  defaults = {
    label: 'MENU',
    duplicate: true,
    duration: 200,
    easingOpen: 'swing',
    easingClose: 'swing',
    closedSymbol: '&#9658;',
    openedSymbol: '&#9660;',
    prependTo: 'body',
    parentTag: 'a',
    closeOnClick: false,
    allowParentLinks: false,
    nestedParentLinks: true,
    showChildren: false,
    removeIds: false,
    removeClasses: false,
    brand: '',
    init: function init() {},
    beforeOpen: function beforeOpen() {},
    beforeClose: function beforeClose() {},
    afterOpen: function afterOpen() {},
    afterClose: function afterClose() {}
  },
      mobileMenu = 'slicknav',
      prefix = 'slicknav';

  function Plugin(element, options) {
    this.element = element; // jQuery has an extend method which merges the contents of two or
    // more objects, storing the result in the first object. The first object
    // is generally empty as we don't want to alter the default options for
    // future instances of the plugin

    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = mobileMenu;
    this.init();
  }

  Plugin.prototype.init = function () {
    var $this = this,
        menu = $(this.element),
        settings = this.settings,
        iconClass,
        menuBar; // clone menu if needed

    if (settings.duplicate) {
      $this.mobileNav = menu.clone(); //remove ids from clone to prevent css issues

      $this.mobileNav.removeAttr('id');
      $this.mobileNav.find('*').each(function (i, e) {
        $(e).removeAttr('id');
      });
    } else {
      $this.mobileNav = menu; // remove ids if set

      $this.mobileNav.removeAttr('id');
      $this.mobileNav.find('*').each(function (i, e) {
        $(e).removeAttr('id');
      });
    } // remove classes if set


    if (settings.removeClasses) {
      $this.mobileNav.removeAttr('class');
      $this.mobileNav.find('*').each(function (i, e) {
        $(e).removeAttr('class');
      });
    } // styling class for the button


    iconClass = prefix + '_icon';

    if (settings.label === '') {
      iconClass += ' ' + prefix + '_no-text';
    }

    if (settings.parentTag == 'a') {
      settings.parentTag = 'a href="#"';
    } // create menu bar


    $this.mobileNav.attr('class', prefix + '_nav');
    menuBar = $('<div class="' + prefix + '_menu"></div>');

    if (settings.brand !== '') {
      var brand = $('<div class="' + prefix + '_brand">' + settings.brand + '</div>');
      $(menuBar).append(brand);
    }

    $this.btn = $(['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">', '<span class="' + prefix + '_menutxt">' + settings.label + '</span>', '<span class="' + iconClass + '">', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '<span class="' + prefix + '_icon-bar"></span>', '</span>', '</' + settings.parentTag + '>'].join(''));
    $(menuBar).append($this.btn);
    $(settings.prependTo).prepend(menuBar);
    menuBar.append($this.mobileNav); // iterate over structure adding additional structure

    var items = $this.mobileNav.find('li');
    $(items).each(function () {
      var item = $(this),
          data = {};
      data.children = item.children('ul').attr('role', 'menu');
      item.data('menu', data); // if a list item has a nested menu

      if (data.children.length > 0) {
        // select all text before the child menu
        // check for anchors
        var a = item.contents(),
            containsAnchor = false,
            nodes = [];
        $(a).each(function () {
          if (!$(this).is('ul')) {
            nodes.push(this);
          } else {
            return false;
          }

          if ($(this).is("a")) {
            containsAnchor = true;
          }
        });
        var wrapElement = $('<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'); // wrap item text with tag and add classes unless we are separating parent links

        if (!settings.allowParentLinks || settings.nestedParentLinks || !containsAnchor) {
          var $wrap = $(nodes).wrapAll(wrapElement).parent();
          $wrap.addClass(prefix + '_row');
        } else $(nodes).wrapAll('<span class="' + prefix + '_parent-link ' + prefix + '_row"/>').parent();

        if (!settings.showChildren) {
          item.addClass(prefix + '_collapsed');
        } else {
          item.addClass(prefix + '_open');
        }

        item.addClass(prefix + '_parent'); // create parent arrow. wrap with link if parent links and separating

        var arrowElement = $('<span class="' + prefix + '_arrow">' + (settings.showChildren ? settings.openedSymbol : settings.closedSymbol) + '</span>');
        if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor) arrowElement = arrowElement.wrap(wrapElement).parent(); //append arrow

        $(nodes).last().after(arrowElement);
      } else if (item.children().length === 0) {
        item.addClass(prefix + '_txtnode');
      } // accessibility for links


      item.children('a').attr('role', 'menuitem').click(function (event) {
        //Ensure that it's not a parent
        if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix + '_parent')) {
          //Emulate menu close if set
          $($this.btn).click();
        }
      }); //also close on click if parent links are set

      if (settings.closeOnClick && settings.allowParentLinks) {
        item.children('a').children('a').click(function (event) {
          //Emulate menu close
          $($this.btn).click();
        });
        item.find('.' + prefix + '_parent-link a:not(.' + prefix + '_item)').click(function (event) {
          //Emulate menu close
          $($this.btn).click();
        });
      }
    }); // structure is in place, now hide appropriate items

    $(items).each(function () {
      var data = $(this).data('menu');

      if (!settings.showChildren) {
        $this._visibilityToggle(data.children, null, false, null, true);
      }
    }); // finally toggle entire menu

    $this._visibilityToggle($this.mobileNav, null, false, 'init', true); // accessibility for menu button


    $this.mobileNav.attr('role', 'menu'); // outline prevention when using mouse

    $(document).mousedown(function () {
      $this._outlines(false);
    });
    $(document).keyup(function () {
      $this._outlines(true);
    }); // menu button click

    $($this.btn).click(function (e) {
      e.preventDefault();

      $this._menuToggle();
    }); // click on menu parent

    $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
      e.preventDefault();

      $this._itemClick($(this));
    }); // check for enter key on menu button and menu parents

    $($this.btn).keydown(function (e) {
      var ev = e || event;

      if (ev.keyCode == 13) {
        e.preventDefault();

        $this._menuToggle();
      }
    });
    $this.mobileNav.on('keydown', '.' + prefix + '_item', function (e) {
      var ev = e || event;

      if (ev.keyCode == 13) {
        e.preventDefault();

        $this._itemClick($(e.target));
      }
    }); // allow links clickable within parent tags if set

    if (settings.allowParentLinks && settings.nestedParentLinks) {
      $('.' + prefix + '_item a').click(function (e) {
        e.stopImmediatePropagation();
      });
    }
  }; //toggle menu


  Plugin.prototype._menuToggle = function (el) {
    var $this = this;
    var btn = $this.btn;
    var mobileNav = $this.mobileNav;

    if (btn.hasClass(prefix + '_collapsed')) {
      btn.removeClass(prefix + '_collapsed');
      btn.addClass(prefix + '_open');
    } else {
      btn.removeClass(prefix + '_open');
      btn.addClass(prefix + '_collapsed');
    }

    btn.addClass(prefix + '_animating');

    $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
  }; // toggle clicked items


  Plugin.prototype._itemClick = function (el) {
    var $this = this;
    var settings = $this.settings;
    var data = el.data('menu');

    if (!data) {
      data = {};
      data.arrow = el.children('.' + prefix + '_arrow');
      data.ul = el.next('ul');
      data.parent = el.parent(); //Separated parent link structure

      if (data.parent.hasClass(prefix + '_parent-link')) {
        data.parent = el.parent().parent();
        data.ul = el.parent().next('ul');
      }

      el.data('menu', data);
    }

    if (data.parent.hasClass(prefix + '_collapsed')) {
      data.arrow.html(settings.openedSymbol);
      data.parent.removeClass(prefix + '_collapsed');
      data.parent.addClass(prefix + '_open');
      data.parent.addClass(prefix + '_animating');

      $this._visibilityToggle(data.ul, data.parent, true, el);
    } else {
      data.arrow.html(settings.closedSymbol);
      data.parent.addClass(prefix + '_collapsed');
      data.parent.removeClass(prefix + '_open');
      data.parent.addClass(prefix + '_animating');

      $this._visibilityToggle(data.ul, data.parent, true, el);
    }
  }; // toggle actual visibility and accessibility tags


  Plugin.prototype._visibilityToggle = function (el, parent, animate, trigger, init) {
    var $this = this;
    var settings = $this.settings;

    var items = $this._getActionItems(el);

    var duration = 0;

    if (animate) {
      duration = settings.duration;
    }

    if (el.hasClass(prefix + '_hidden')) {
      el.removeClass(prefix + '_hidden'); //Fire beforeOpen callback

      if (!init) {
        settings.beforeOpen(trigger);
      }

      el.slideDown(duration, settings.easingOpen, function () {
        $(trigger).removeClass(prefix + '_animating');
        $(parent).removeClass(prefix + '_animating'); //Fire afterOpen callback

        if (!init) {
          settings.afterOpen(trigger);
        }
      });
      el.attr('aria-hidden', 'false');
      items.attr('tabindex', '0');

      $this._setVisAttr(el, false);
    } else {
      el.addClass(prefix + '_hidden'); //Fire init or beforeClose callback

      if (!init) {
        settings.beforeClose(trigger);
      }

      el.slideUp(duration, this.settings.easingClose, function () {
        el.attr('aria-hidden', 'true');
        items.attr('tabindex', '-1');

        $this._setVisAttr(el, true);

        el.hide(); //jQuery 1.7 bug fix

        $(trigger).removeClass(prefix + '_animating');
        $(parent).removeClass(prefix + '_animating'); //Fire init or afterClose callback

        if (!init) {
          settings.afterClose(trigger);
        } else if (trigger == 'init') {
          settings.init();
        }
      });
    }
  }; // set attributes of element and children based on visibility


  Plugin.prototype._setVisAttr = function (el, hidden) {
    var $this = this; // select all parents that aren't hidden

    var nonHidden = el.children('li').children('ul').not('.' + prefix + '_hidden'); // iterate over all items setting appropriate tags

    if (!hidden) {
      nonHidden.each(function () {
        var ul = $(this);
        ul.attr('aria-hidden', 'false');

        var items = $this._getActionItems(ul);

        items.attr('tabindex', '0');

        $this._setVisAttr(ul, hidden);
      });
    } else {
      nonHidden.each(function () {
        var ul = $(this);
        ul.attr('aria-hidden', 'true');

        var items = $this._getActionItems(ul);

        items.attr('tabindex', '-1');

        $this._setVisAttr(ul, hidden);
      });
    }
  }; // get all 1st level items that are clickable


  Plugin.prototype._getActionItems = function (el) {
    var data = el.data("menu");

    if (!data) {
      data = {};
      var items = el.children('li');
      var anchors = items.find('a');
      data.links = anchors.add(items.find('.' + prefix + '_item'));
      el.data('menu', data);
    }

    return data.links;
  };

  Plugin.prototype._outlines = function (state) {
    if (!state) {
      $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', 'none');
    } else {
      $('.' + prefix + '_item, .' + prefix + '_btn').css('outline', '');
    }
  };

  Plugin.prototype.toggle = function () {
    var $this = this;

    $this._menuToggle();
  };

  Plugin.prototype.open = function () {
    var $this = this;

    if ($this.btn.hasClass(prefix + '_collapsed')) {
      $this._menuToggle();
    }
  };

  Plugin.prototype.close = function () {
    var $this = this;

    if ($this.btn.hasClass(prefix + '_open')) {
      $this._menuToggle();
    }
  };

  $.fn[mobileMenu] = function (options) {
    var args = arguments; // Is the first parameter an object (options), or was omitted, instantiate a new instance

    if (options === undefined || _typeof(options) === 'object') {
      return this.each(function () {
        // Only allow the plugin to be instantiated once due to methods
        if (!$.data(this, 'plugin_' + mobileMenu)) {
          // if it has no instance, create a new one, pass options to our plugin constructor,
          // and store the plugin instance in the elements jQuery data object.
          $.data(this, 'plugin_' + mobileMenu, new Plugin(this, options));
        }
      }); // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      // Cache the method call to make it possible to return a value
      var returns;
      this.each(function () {
        var instance = $.data(this, 'plugin_' + mobileMenu); // Tests that there's already a plugin-instance and checks that the requested public method exists

        if (instance instanceof Plugin && typeof instance[options] === 'function') {
          // Call the method of our plugin instance, and pass it the supplied arguments.
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      }); // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.

      return returns !== undefined ? returns : this;
    }
  };
})(jQuery, document, window);
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60821" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/jquery.slicknav.js"], null)
//# sourceMappingURL=/jquery.slicknav.c49e1983.js.map