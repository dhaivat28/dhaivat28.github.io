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
})({"assets/js/nivo-lightbox.js":[function(require,module,exports) {
/*
 * Nivo Lightbox v1.3.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
;

(function ($, window, document, undefined) {
  var pluginName = 'nivoLightbox',
      defaults = {
    effect: 'fade',
    theme: 'default',
    keyboardNav: true,
    clickImgToClose: false,
    clickOverlayToClose: true,
    onInit: function onInit() {},
    beforeShowLightbox: function beforeShowLightbox() {},
    afterShowLightbox: function afterShowLightbox(lightbox) {},
    beforeHideLightbox: function beforeHideLightbox() {},
    afterHideLightbox: function afterHideLightbox() {},
    beforePrev: function beforePrev(element) {},
    onPrev: function onPrev(element) {},
    beforeNext: function beforeNext(element) {},
    onNext: function onNext(element) {},
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  };

  function NivoLightbox(element, options) {
    this.el = element;
    this.$el = $(this.el);
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  NivoLightbox.prototype = {
    init: function init() {
      var $this = this; // Need this so we don't use CSS transitions in mobile

      if (!$('html').hasClass('nivo-lightbox-notouch')) $('html').addClass('nivo-lightbox-notouch');
      if ('ontouchstart' in document) $('html').removeClass('nivo-lightbox-notouch'); // Setup the click

      this.$el.on('click', function (e) {
        $this.showLightbox(e);
      }); // keyboardNav

      if (this.options.keyboardNav) {
        $('body').off('keyup').on('keyup', function (e) {
          var code = e.keyCode ? e.keyCode : e.which; // Escape

          if (code == 27) $this.destructLightbox(); // Left

          if (code == 37) $('.nivo-lightbox-prev').trigger('click'); // Right

          if (code == 39) $('.nivo-lightbox-next').trigger('click');
        });
      }

      this.options.onInit.call(this);
    },
    showLightbox: function showLightbox(e) {
      var $this = this,
          currentLink = this.$el; // Check content

      var check = this.checkContent(currentLink);
      if (!check) return;
      e.preventDefault();
      this.options.beforeShowLightbox.call(this);
      var lightbox = this.constructLightbox();
      if (!lightbox) return;
      var content = lightbox.find('.nivo-lightbox-content');
      if (!content) return;
      $('body').addClass('nivo-lightbox-body-effect-' + this.options.effect);
      this.processContent(content, currentLink); // Nav

      if (this.$el.attr('data-lightbox-gallery')) {
        var galleryItems = $('[data-lightbox-gallery="' + this.$el.attr('data-lightbox-gallery') + '"]');
        $('.nivo-lightbox-nav').show(); // Prev

        $('.nivo-lightbox-prev').off('click').on('click', function (e) {
          e.preventDefault();
          var index = galleryItems.index(currentLink);
          currentLink = galleryItems.eq(index - 1);
          if (!$(currentLink).length) currentLink = galleryItems.last();
          $.when($this.options.beforePrev.call(this, [currentLink])).done(function () {
            $this.processContent(content, currentLink);
            $this.options.onPrev.call(this, [currentLink]);
          });
        }); // Next

        $('.nivo-lightbox-next').off('click').on('click', function (e) {
          e.preventDefault();
          var index = galleryItems.index(currentLink);
          currentLink = galleryItems.eq(index + 1);
          if (!$(currentLink).length) currentLink = galleryItems.first();
          $.when($this.options.beforeNext.call(this, [currentLink])).done(function () {
            $this.processContent(content, currentLink);
            $this.options.onNext.call(this, [currentLink]);
          });
        });
      }

      setTimeout(function () {
        lightbox.addClass('nivo-lightbox-open');
        $this.options.afterShowLightbox.call(this, [lightbox]);
      }, 1); // For CSS transitions
    },
    checkContent: function checkContent(link) {
      var $this = this,
          href = link.attr('href'),
          video = href.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);

      if (href.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        return true;
      } // Video (Youtube/Vimeo)
      else if (video) {
          return true;
        } // AJAX
        else if (link.attr('data-lightbox-type') == 'ajax') {
            return true;
          } // Inline HTML
          else if (href.substring(0, 1) == '#' && link.attr('data-lightbox-type') == 'inline') {
              return true;
            } // iFrame (default)
            else if (link.attr('data-lightbox-type') == 'iframe') {
                return true;
              }

      return false;
    },
    processContent: function processContent(content, link) {
      var $this = this,
          href = link.attr('href'),
          video = href.match(/(youtube|youtube-nocookie|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
      content.html('').addClass('nivo-lightbox-loading'); // Is HiDPI?

      if (this.isHidpi() && link.attr('data-lightbox-hidpi')) {
        href = link.attr('data-lightbox-hidpi');
      } // Image


      if (href.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        var img = $('<img>', {
          src: href,
          'class': 'nivo-lightbox-image-display'
        });
        img.one('load', function () {
          var wrap = $('<div class="nivo-lightbox-image" />');
          wrap.append(img);
          content.html(wrap).removeClass('nivo-lightbox-loading'); // Vertically center images

          wrap.css({
            'line-height': $('.nivo-lightbox-content').height() + 'px',
            'height': $('.nivo-lightbox-content').height() + 'px' // For Firefox

          });
          $(window).resize(function () {
            wrap.css({
              'line-height': $('.nivo-lightbox-content').height() + 'px',
              'height': $('.nivo-lightbox-content').height() + 'px' // For Firefox

            });
          });
        }).each(function () {
          if (this.complete) $(this).load();
        });
        img.error(function () {
          var wrap = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
          content.html(wrap).removeClass('nivo-lightbox-loading');
        });
      } // Video (Youtube/Vimeo)
      else if (video) {
          var src = '',
              classTerm = 'nivo-lightbox-video';

          if (video[1] == 'youtube') {
            src = '//www.youtube.com/embed/' + video[4];
            classTerm = 'nivo-lightbox-youtube';
          }

          if (video[1] == 'youtube-nocookie') {
            src = href; //https://www.youtube-nocookie.com/embed/...

            classTerm = 'nivo-lightbox-youtube';
          }

          if (video[1] == 'youtu') {
            src = '//www.youtube.com/embed/' + video[3];
            classTerm = 'nivo-lightbox-youtube';
          }

          if (video[1] == 'vimeo') {
            src = '//player.vimeo.com/video/' + video[3];
            classTerm = 'nivo-lightbox-vimeo';
          }

          if (src) {
            var iframeVideo = $('<iframe>', {
              src: src,
              'class': classTerm,
              frameborder: 0,
              vspace: 0,
              hspace: 0,
              scrolling: 'auto'
            });
            content.html(iframeVideo);
            iframeVideo.load(function () {
              content.removeClass('nivo-lightbox-loading');
            });
          }
        } // AJAX
        else if (link.attr('data-lightbox-type') == 'ajax') {
            $.ajax({
              url: href,
              cache: false,
              success: function success(data) {
                var wrap = $('<div class="nivo-lightbox-ajax" />');
                wrap.append(data);
                content.html(wrap).removeClass('nivo-lightbox-loading'); // Vertically center html

                if (wrap.outerHeight() < content.height()) {
                  wrap.css({
                    'position': 'relative',
                    'top': '50%',
                    'margin-top': -(wrap.outerHeight() / 2) + 'px'
                  });
                }

                $(window).resize(function () {
                  if (wrap.outerHeight() < content.height()) {
                    wrap.css({
                      'position': 'relative',
                      'top': '50%',
                      'margin-top': -(wrap.outerHeight() / 2) + 'px'
                    });
                  }
                });
              },
              error: function error() {
                var wrap = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
                content.html(wrap).removeClass('nivo-lightbox-loading');
              }
            });
          } // Inline HTML
          else if (href.substring(0, 1) == '#' && link.attr('data-lightbox-type') == 'inline') {
              if ($(href).length) {
                var wrap = $('<div class="nivo-lightbox-inline" />');
                wrap.append($(href).clone().show());
                content.html(wrap).removeClass('nivo-lightbox-loading'); // Vertically center html

                if (wrap.outerHeight() < content.height()) {
                  wrap.css({
                    'position': 'relative',
                    'top': '50%',
                    'margin-top': -(wrap.outerHeight() / 2) + 'px'
                  });
                }

                $(window).resize(function () {
                  if (wrap.outerHeight() < content.height()) {
                    wrap.css({
                      'position': 'relative',
                      'top': '50%',
                      'margin-top': -(wrap.outerHeight() / 2) + 'px'
                    });
                  }
                });
              } else {
                var wrapError = $('<div class="nivo-lightbox-error"><p>' + $this.options.errorMessage + '</p></div>');
                content.html(wrapError).removeClass('nivo-lightbox-loading');
              }
            } // iFrame (default)
            else if (link.attr('data-lightbox-type') == 'iframe') {
                var iframe = $('<iframe>', {
                  src: href,
                  'class': 'nivo-lightbox-item',
                  frameborder: 0,
                  vspace: 0,
                  hspace: 0,
                  scrolling: 'auto'
                });
                content.html(iframe);
                iframe.load(function () {
                  content.removeClass('nivo-lightbox-loading');
                });
              } else {
                return false;
              } // Set the title


      if (link.attr('title')) {
        var titleWrap = $('<span>', {
          'class': 'nivo-lightbox-title'
        });
        titleWrap.text(link.attr('title'));
        $('.nivo-lightbox-title-wrap').html(titleWrap);
      } else {
        $('.nivo-lightbox-title-wrap').html('');
      }
    },
    constructLightbox: function constructLightbox() {
      if ($('.nivo-lightbox-overlay').length) return $('.nivo-lightbox-overlay');
      var overlay = $('<div>', {
        'class': 'nivo-lightbox-overlay nivo-lightbox-theme-' + this.options.theme + ' nivo-lightbox-effect-' + this.options.effect
      });
      var wrap = $('<div>', {
        'class': 'nivo-lightbox-wrap'
      });
      var content = $('<div>', {
        'class': 'nivo-lightbox-content'
      });
      var nav = $('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
      var close = $('<a href="#" class="nivo-lightbox-close" title="Close"><i class="icon-close"></i></a>');
      var title = $('<div>', {
        'class': 'nivo-lightbox-title-wrap'
      });
      var isMSIE =
      /*@cc_on!@*/
      0;
      if (isMSIE) overlay.addClass('nivo-lightbox-ie');
      wrap.append(content);
      wrap.append(title);
      overlay.append(wrap);
      overlay.append(nav);
      overlay.append(close);
      $('body').append(overlay);
      var $this = this;

      if ($this.options.clickOverlayToClose) {
        overlay.on('click', function (e) {
          if (e.target === this || $(e.target).hasClass('nivo-lightbox-content') || $(e.target).hasClass('nivo-lightbox-image')) {
            $this.destructLightbox();
          }
        });
      }

      if ($this.options.clickImgToClose) {
        overlay.on('click', function (e) {
          if (e.target === this || $(e.target).hasClass('nivo-lightbox-image-display')) {
            $this.destructLightbox();
          }
        });
      }

      close.on('click', function (e) {
        e.preventDefault();
        $this.destructLightbox();
      });
      return overlay;
    },
    destructLightbox: function destructLightbox() {
      var $this = this;
      this.options.beforeHideLightbox.call(this);
      $('.nivo-lightbox-overlay').removeClass('nivo-lightbox-open');
      $('.nivo-lightbox-nav').hide();
      $('body').removeClass('nivo-lightbox-body-effect-' + $this.options.effect); // For IE

      var isMSIE =
      /*@cc_on!@*/
      0;

      if (isMSIE) {
        $('.nivo-lightbox-overlay iframe').attr("src", " ");
        $('.nivo-lightbox-overlay iframe').remove();
      } // Remove click handlers


      $('.nivo-lightbox-prev').off('click');
      $('.nivo-lightbox-next').off('click'); // Empty content (for videos)

      $('.nivo-lightbox-content').empty();
      this.options.afterHideLightbox.call(this);
    },
    isHidpi: function isHidpi() {
      var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                              (min--moz-device-pixel-ratio: 1.5),\
                              (-o-min-device-pixel-ratio: 3/2),\
                              (min-resolution: 1.5dppx)";
      if (window.devicePixelRatio > 1) return true;
      if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;
      return false;
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, pluginName)) {
        $.data(this, pluginName, new NivoLightbox(this, options));
      }
    });
  };
})(jQuery, window, document);
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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/nivo-lightbox.js"], null)
//# sourceMappingURL=/nivo-lightbox.5e3e84bf.js.map