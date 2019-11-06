;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[11],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * button
 * Created by hhh
 * 2019-10-10
 */

var bem_1 = __webpack_require__(12);

function computedClassName(type, size) {
  var classes = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    classes[_i - 2] = arguments[_i];
  }

  return bem_1["default"]('button', __spreadArrays([type, size], classes));
}

var DEFAULT_TYPE = 'default';
var DEFAULT_SIZE = 'auto';
Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ['custom-class', 'hover-class'],
  properties: {
    id: {
      type: String
    },
    lang: {
      type: String,
      value: 'en'
    },
    type: {
      type: String,
      value: DEFAULT_TYPE
    },
    size: {
      type: String,
      value: DEFAULT_SIZE
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    block: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String
    },
    sessionFrom: {
      type: String
    },
    sendMessageTitle: {
      type: String
    },
    sendMessagePath: {
      type: String
    },
    sendMessageImg: {
      type: String
    },
    showMessageCard: {
      type: Boolean,
      value: false
    },
    appParameter: {
      type: String
    },
    customStyle: {
      type: String
    },
    color: {
      type: String,
      observer: function observer(color) {
        var style = '';

        if (color) {
          style += "color: " + (this.data.plain ? color : 'white') + ";";

          if (!this.data.plain) {
            // Use background instead of backgroundColor to make linear-gradient work
            style += "background: " + color + ";";
          }
        }

        if (style !== this.data.style) {
          this.setData({
            style: style
          });
        }
      }
    }
  },
  data: {
    style: '',
    className: computedClassName(DEFAULT_TYPE, DEFAULT_SIZE)
  },
  observers: {
    'type, size, loading, disabled, plain, block': function typeSizeLoadingDisabledPlainBlock(type, size, loading, disabled, plain, block) {
      this.setData({
        className: computedClassName(type, size, {
          block: block,
          plain: plain,
          loading: loading,
          disabled: disabled && !loading
        })
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.data.disabled && !this.data.loading) {
        this.triggerEvent('click', event);
      }
    },
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.triggerEvent('getuserinfo', event);
    },
    bindContact: function bindContact(event) {
      this.triggerEvent('contact', event);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.triggerEvent('getPhoneNumber', event);
    },
    bindError: function bindError(event) {
      this.triggerEvent('error', event);
    },
    bindLaunchApp: function bindLaunchApp(event) {
      this.triggerEvent('launchApp', event);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.triggerEvent('openSetting', event);
    }
  }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memoize = __webpack_require__(13);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PREFIX = 'sg-';

function join(name, mods) {
  name = PREFIX + name;
  mods = mods.map(function (mod) {
    return "".concat(name, "--").concat(mod);
  });
  mods.unshift(name);
  return mods.join(' ');
}

function traversing(mods, conf) {
  if (!conf) {
    return;
  }

  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf);
  } else if (Array.isArray(conf)) {
    conf.forEach(function (item) {
      traversing(mods, item);
    });
  } else if (_typeof(conf) === 'object') {
    Object.keys(conf).forEach(function (key) {
      conf[key] && mods.push(key);
    });
  }
}

function bem(name, conf) {
  var mods = [];
  traversing(mods, conf);
  return join(name, mods);
}

var _default = (0, _memoize.memoize)(bem);

exports["default"] = _default;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoize = memoize;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Simple memoize
 * wxs doesn't support fn.apply, so this memoize only support up to 2 args
 */
function isPrimitive(value) {
  var type = _typeof(value);

  return type === 'boolean' || type === 'number' || type === 'string' || type === 'undefined' || value === null;
} // mock simple fn.call in wxs


function call(fn, args) {
  if (args.length === 2) {
    return fn(args[0], args[1]);
  }

  if (args.length === 1) {
    return fn(args[0]);
  }

  return fn();
}

function serializer(args) {
  if (args.length === 1 && isPrimitive(args[0])) {
    return args[0];
  }

  var obj = {};

  for (var i = 0; i < args.length; i++) {
    obj["key".concat(i)] = args[i];
  }

  return JSON.stringify(obj);
}

function memoize(fn) {
  var cache = {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = serializer(args);

    if (cache[key] === undefined) {
      cache[key] = call(fn, args);
    }

    return cache[key];
  };
}

/***/ })

},[[11,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2JlbS9tZW1vaXplLmpzIl0sIm5hbWVzIjpbIlBSRUZJWCIsImpvaW4iLCJuYW1lIiwibW9kcyIsIm1hcCIsIm1vZCIsInVuc2hpZnQiLCJ0cmF2ZXJzaW5nIiwiY29uZiIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaXRlbSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJiZW0iLCJpc1ByaW1pdGl2ZSIsInZhbHVlIiwidHlwZSIsImNhbGwiLCJmbiIsImFyZ3MiLCJsZW5ndGgiLCJzZXJpYWxpemVyIiwib2JqIiwiaSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZW1vaXplIiwiY2FjaGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBS0E7O0FBR0EsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUF5QyxJQUF6QyxFQUFxRDtBQUFFOztPQUFBLFUsRUFBQSxxQixFQUFBLEksRUFBZTtBQUFmOzs7QUFDbkQsU0FBTyxpQkFBSSxRQUFKLEVBQVksZ0JBQUcsSUFBSCxFQUFTLElBQVQsR0FBa0IsT0FBbEIsQ0FBWixDQUFQO0FBQ0g7O0FBRUQsSUFBTSxZQUFZLEdBQUcsU0FBckI7QUFDQSxJQUFNLFlBQVksR0FBRyxNQUFyQjtBQUVBLFNBQVMsQ0FBQztBQUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjLEVBQUU7QUFEWCxHQURIO0FBS04saUJBQWUsRUFBRSxDQUFDLGNBQUQsRUFBaUIsYUFBakIsQ0FMWDtBQU9OLFlBQVUsRUFBRTtBQUNSLE1BQUUsRUFBRTtBQUNBLFVBQUksRUFBRTtBQUROLEtBREk7QUFJUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsTUFESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBSkU7QUFRUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsTUFESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBUkU7QUFZUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsTUFESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBWkU7QUFnQlIsU0FBSyxFQUFFO0FBQ0gsVUFBSSxFQUFFLE9BREg7QUFFSCxXQUFLLEVBQUU7QUFGSixLQWhCQztBQW9CUixZQUFRLEVBQUU7QUFDTixVQUFJLEVBQUUsT0FEQTtBQUVOLFdBQUssRUFBRTtBQUZELEtBcEJGO0FBd0JSLFNBQUssRUFBRTtBQUNILFVBQUksRUFBRSxPQURIO0FBRUgsV0FBSyxFQUFFO0FBRkosS0F4QkM7QUE0QlIsV0FBTyxFQUFFO0FBQ0wsVUFBSSxFQUFFLE9BREQ7QUFFTCxXQUFLLEVBQUU7QUFGRixLQTVCRDtBQWdDUixZQUFRLEVBQUU7QUFDTixVQUFJLEVBQUU7QUFEQSxLQWhDRjtBQW1DUixlQUFXLEVBQUU7QUFDVCxVQUFJLEVBQUU7QUFERyxLQW5DTDtBQXNDUixvQkFBZ0IsRUFBRTtBQUNkLFVBQUksRUFBRTtBQURRLEtBdENWO0FBeUNSLG1CQUFlLEVBQUU7QUFDYixVQUFJLEVBQUU7QUFETyxLQXpDVDtBQTRDUixrQkFBYyxFQUFFO0FBQ1osVUFBSSxFQUFFO0FBRE0sS0E1Q1I7QUErQ1IsbUJBQWUsRUFBRTtBQUNiLFVBQUksRUFBRSxPQURPO0FBRWIsV0FBSyxFQUFFO0FBRk0sS0EvQ1Q7QUFtRFIsZ0JBQVksRUFBRTtBQUNWLFVBQUksRUFBRTtBQURJLEtBbkROO0FBc0RSLGVBQVcsRUFBRTtBQUNULFVBQUksRUFBRTtBQURHLEtBdERMO0FBeURSLFNBQUssRUFBRTtBQUNILFVBQUksRUFBRSxNQURIO0FBRUgsY0FBUSxFQUFSLGtCQUFTLEtBQVQsRUFBc0I7QUFDbEIsWUFBSSxLQUFLLEdBQUcsRUFBWjs7QUFFQSxZQUFJLEtBQUosRUFBVztBQUNQLGVBQUssSUFBSSxhQUFVLEtBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsS0FBbEIsR0FBMEIsT0FBcEMsSUFBMkMsR0FBcEQ7O0FBRUEsY0FBSSxDQUFDLEtBQUssSUFBTCxDQUFVLEtBQWYsRUFBc0I7QUFDbEI7QUFDQSxpQkFBSyxJQUFJLGlCQUFlLEtBQWYsR0FBb0IsR0FBN0I7QUFDSDtBQUNKOztBQUVELFlBQUksS0FBSyxLQUFLLEtBQUssSUFBTCxDQUFVLEtBQXhCLEVBQStCO0FBQzNCLGVBQUssT0FBTCxDQUFhO0FBQUUsaUJBQUs7QUFBUCxXQUFiO0FBQ0g7QUFDSjtBQWpCRTtBQXpEQyxHQVBOO0FBcUZOLE1BQUksRUFBRTtBQUNGLFNBQUssRUFBRSxFQURMO0FBRUYsYUFBUyxFQUFFLGlCQUFpQixDQUFDLFlBQUQsRUFBZSxZQUFmO0FBRjFCLEdBckZBO0FBMEZOLFdBQVMsRUFBRTtBQUNQLG1EQUE2QywyQ0FDNUMsSUFENEMsRUFDdEMsSUFEc0MsRUFDaEMsT0FEZ0MsRUFDdkIsUUFEdUIsRUFDYixLQURhLEVBQ04sS0FETSxFQUNEO0FBQ3hDLFdBQUssT0FBTCxDQUFhO0FBQ1QsaUJBQVMsRUFBRSxpQkFBaUIsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhO0FBQ3JDLGVBQUssT0FEZ0M7QUFFckMsZUFBSyxPQUZnQztBQUdyQyxpQkFBTyxTQUg4QjtBQUlyQyxrQkFBUSxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBSmMsU0FBYjtBQURuQixPQUFiO0FBUUg7QUFYTSxHQTFGTDtBQXdHTixTQUFPLEVBQUU7QUFDTCxXQUFPLEVBQVAsaUJBQVEsS0FBUixFQUFvQjtBQUNoQixVQUFJLENBQUMsS0FBSyxJQUFMLENBQVUsUUFBWCxJQUF1QixDQUFDLEtBQUssSUFBTCxDQUFVLE9BQXRDLEVBQStDO0FBQzNDLGFBQUssWUFBTCxDQUFrQixPQUFsQixFQUEyQixLQUEzQjtBQUNIO0FBQ0osS0FMSTtBQU9MLG1CQUFlLEVBQWYseUJBQWdCLEtBQWhCLEVBQTRCO0FBQ3hCLFdBQUssWUFBTCxDQUFrQixhQUFsQixFQUFpQyxLQUFqQztBQUNILEtBVEk7QUFXTCxlQUFXLEVBQVgscUJBQVksS0FBWixFQUF3QjtBQUNwQixXQUFLLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsS0FBN0I7QUFDSCxLQWJJO0FBZUwsc0JBQWtCLEVBQWxCLDRCQUFtQixLQUFuQixFQUErQjtBQUMzQixXQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLEtBQXBDO0FBQ0gsS0FqQkk7QUFtQkwsYUFBUyxFQUFULG1CQUFVLEtBQVYsRUFBc0I7QUFDbEIsV0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEtBQTNCO0FBQ0gsS0FyQkk7QUF1QkwsaUJBQWEsRUFBYix1QkFBYyxLQUFkLEVBQTBCO0FBQ3RCLFdBQUssWUFBTCxDQUFrQixXQUFsQixFQUErQixLQUEvQjtBQUNILEtBekJJO0FBMkJMLG1CQUFlLEVBQWYseUJBQWdCLEtBQWhCLEVBQTRCO0FBQ3hCLFdBQUssWUFBTCxDQUFrQixhQUFsQixFQUFpQyxLQUFqQztBQUNIO0FBN0JJO0FBeEdILENBQUQsQ0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxLQUFmOztBQUVBLFNBQVNDLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEJELE1BQUksR0FBR0YsTUFBTSxHQUFHRSxJQUFoQjtBQUNBQyxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxxQkFBT0gsSUFBUCxlQUFnQkcsR0FBaEI7QUFBQSxHQUFaLENBQVA7QUFDQUYsTUFBSSxDQUFDRyxPQUFMLENBQWFKLElBQWI7QUFDQSxTQUFPQyxJQUFJLENBQUNGLElBQUwsQ0FBVSxHQUFWLENBQVA7QUFDSDs7QUFFRCxTQUFTTSxVQUFULENBQW9CSixJQUFwQixFQUEwQkssSUFBMUIsRUFBZ0M7QUFDNUIsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUVELE1BQUksT0FBT0EsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFQLEtBQWdCLFFBQWhELEVBQTBEO0FBQ3RETCxRQUFJLENBQUNNLElBQUwsQ0FBVUQsSUFBVjtBQUNILEdBRkQsTUFFTyxJQUFJRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsSUFBZCxDQUFKLEVBQXlCO0FBQzVCQSxRQUFJLENBQUNJLE9BQUwsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDakJOLGdCQUFVLENBQUNKLElBQUQsRUFBT1UsSUFBUCxDQUFWO0FBQ0gsS0FGRDtBQUdILEdBSk0sTUFJQSxJQUFJLFFBQU9MLElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7QUFDakNNLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZUCxJQUFaLEVBQWtCSSxPQUFsQixDQUEwQixVQUFBSSxHQUFHLEVBQUk7QUFDN0JSLFVBQUksQ0FBQ1EsR0FBRCxDQUFKLElBQWFiLElBQUksQ0FBQ00sSUFBTCxDQUFVTyxHQUFWLENBQWI7QUFDSCxLQUZEO0FBR0g7QUFDSjs7QUFFRCxTQUFTQyxHQUFULENBQWFmLElBQWIsRUFBbUJNLElBQW5CLEVBQXlCO0FBQ3JCLE1BQU1MLElBQUksR0FBRyxFQUFiO0FBQ0FJLFlBQVUsQ0FBQ0osSUFBRCxFQUFPSyxJQUFQLENBQVY7QUFDQSxTQUFPUCxJQUFJLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFYO0FBQ0g7O2VBR2Msc0JBQVFjLEdBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZjs7OztBQUtBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLE1BQU1DLElBQUksV0FBVUQsS0FBVixDQUFWOztBQUNBLFNBQ0lDLElBQUksS0FBSyxTQUFULElBQ0RBLElBQUksS0FBSyxRQURSLElBRURBLElBQUksS0FBSyxRQUZSLElBR0RBLElBQUksS0FBSyxXQUhSLElBSURELEtBQUssS0FBSyxJQUxiO0FBT0gsQyxDQUVEOzs7QUFDQSxTQUFTRSxJQUFULENBQWNDLEVBQWQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLE1BQUlBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQixXQUFPRixFQUFFLENBQUNDLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZCxDQUFUO0FBQ0g7O0FBRUQsTUFBSUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CLFdBQU9GLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFUO0FBQ0g7O0FBRUQsU0FBT0QsRUFBRSxFQUFUO0FBQ0g7O0FBRUQsU0FBU0csVUFBVCxDQUFvQkYsSUFBcEIsRUFBMEI7QUFDdEIsTUFBSUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLElBQXFCTixXQUFXLENBQUNLLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBcEMsRUFBK0M7QUFDM0MsV0FBT0EsSUFBSSxDQUFDLENBQUQsQ0FBWDtBQUNIOztBQUNELE1BQU1HLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osSUFBSSxDQUFDQyxNQUF6QixFQUFpQ0csQ0FBQyxFQUFsQyxFQUFzQztBQUNsQ0QsT0FBRyxjQUFPQyxDQUFQLEVBQUgsR0FBaUJKLElBQUksQ0FBQ0ksQ0FBRCxDQUFyQjtBQUNIOztBQUNELFNBQU9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxHQUFmLENBQVA7QUFDSDs7QUFFTSxTQUFTSSxPQUFULENBQWlCUixFQUFqQixFQUFxQjtBQUN4QixNQUFNUyxLQUFLLEdBQUcsRUFBZDtBQUVBLFNBQU8sWUFBbUI7QUFBQSxzQ0FBTlIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQ3RCLFFBQU1QLEdBQUcsR0FBR1MsVUFBVSxDQUFDRixJQUFELENBQXRCOztBQUNBLFFBQUlRLEtBQUssQ0FBQ2YsR0FBRCxDQUFMLEtBQWVnQixTQUFuQixFQUE4QjtBQUMxQkQsV0FBSyxDQUFDZixHQUFELENBQUwsR0FBYUssSUFBSSxDQUFDQyxFQUFELEVBQUtDLElBQUwsQ0FBakI7QUFDSDs7QUFFRCxXQUFPUSxLQUFLLENBQUNmLEdBQUQsQ0FBWjtBQUNILEdBUEQ7QUFRSCxDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGJ1dHRvblxcYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGJ1dHRvblxyXG4gKiBDcmVhdGVkIGJ5IGhoaFxyXG4gKiAyMDE5LTEwLTEwXHJcbiAqL1xyXG5pbXBvcnQgYmVtIGZyb20gJy4uLy4uL3V0aWxzL2JlbSc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy93ZWFwcC9ldmVudCc7XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlZENsYXNzTmFtZSh0eXBlOiBzdHJpbmcsIHNpemU6IHN0cmluZywgLi4uY2xhc3NlczogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBiZW0oJ2J1dHRvbicsIFt0eXBlLCBzaXplLCAuLi5jbGFzc2VzXSk7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfVFlQRSA9ICdkZWZhdWx0JztcclxuY29uc3QgREVGQVVMVF9TSVpFID0gJ2F1dG8nO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJywgJ2hvdmVyLWNsYXNzJ10sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IERFRkFVTFRfVFlQRVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBERUZBVUxUX1NJWkVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWluOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlc3Npb25Gcm9tOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VuZE1lc3NhZ2VUaXRsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbmRNZXNzYWdlUGF0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbmRNZXNzYWdlSW1nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd01lc3NhZ2VDYXJkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwUGFyYW1ldGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIG9ic2VydmVyKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IGBjb2xvcjogJHt0aGlzLmRhdGEucGxhaW4gPyBjb2xvciA6ICd3aGl0ZSd9O2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnBsYWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBiYWNrZ3JvdW5kIGluc3RlYWQgb2YgYmFja2dyb3VuZENvbG9yIHRvIG1ha2UgbGluZWFyLWdyYWRpZW50IHdvcmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQ6ICR7Y29sb3J9O2A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gdGhpcy5kYXRhLnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc3R5bGUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzdHlsZTogJycgYXMgc3RyaW5nLFxyXG4gICAgICAgIGNsYXNzTmFtZTogY29tcHV0ZWRDbGFzc05hbWUoREVGQVVMVF9UWVBFLCBERUZBVUxUX1NJWkUpXHJcbiAgICB9LFxyXG5cclxuICAgIG9ic2VydmVyczoge1xyXG4gICAgICAgICd0eXBlLCBzaXplLCBsb2FkaW5nLCBkaXNhYmxlZCwgcGxhaW4sIGJsb2NrJ1xyXG4gICAgICAgICh0eXBlLCBzaXplLCBsb2FkaW5nLCBkaXNhYmxlZCwgcGxhaW4sIGJsb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNvbXB1dGVkQ2xhc3NOYW1lKHR5cGUsIHNpemUsIHtcclxuICAgICAgICAgICAgICAgICAgICBibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBwbGFpbixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCAmJiAhbG9hZGluZyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrJywgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmluZEdldFVzZXJJbmZvKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZ2V0dXNlcmluZm8nLCBldmVudCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmluZENvbnRhY3QoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjb250YWN0JywgZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJpbmRHZXRQaG9uZU51bWJlcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dldFBob25lTnVtYmVyJywgZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJpbmRFcnJvcihldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Vycm9yJywgZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJpbmRMYXVuY2hBcHAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdsYXVuY2hBcHAnLCBldmVudCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmluZE9wZW5TZXR0aW5nKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb3BlblNldHRpbmcnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgbWVtb2l6ZSB9IGZyb20gJy4vbWVtb2l6ZSc7XHJcblxyXG5jb25zdCBQUkVGSVggPSAnc2ctJztcclxuXHJcbmZ1bmN0aW9uIGpvaW4obmFtZSwgbW9kcykge1xyXG4gICAgbmFtZSA9IFBSRUZJWCArIG5hbWU7XHJcbiAgICBtb2RzID0gbW9kcy5tYXAobW9kID0+IGAke25hbWV9LS0ke21vZH1gKTtcclxuICAgIG1vZHMudW5zaGlmdChuYW1lKTtcclxuICAgIHJldHVybiBtb2RzLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhdmVyc2luZyhtb2RzLCBjb25mKSB7XHJcbiAgICBpZiAoIWNvbmYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25mID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29uZiA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBtb2RzLnB1c2goY29uZik7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29uZikpIHtcclxuICAgICAgICBjb25mLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRyYXZlcnNpbmcobW9kcywgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25mID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbmYpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uZltrZXldICYmIG1vZHMucHVzaChrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZW0obmFtZSwgY29uZikge1xyXG4gICAgY29uc3QgbW9kcyA9IFtdO1xyXG4gICAgdHJhdmVyc2luZyhtb2RzLCBjb25mKTtcclxuICAgIHJldHVybiBqb2luKG5hbWUsIG1vZHMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZShiZW0pO1xyXG4iLCIvKipcclxuICogU2ltcGxlIG1lbW9pemVcclxuICogd3hzIGRvZXNuJ3Qgc3VwcG9ydCBmbi5hcHBseSwgc28gdGhpcyBtZW1vaXplIG9ubHkgc3VwcG9ydCB1cCB0byAyIGFyZ3NcclxuICovXHJcblxyXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xyXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZSA9PT0gJ2Jvb2xlYW4nXHJcbiAgICB8fCB0eXBlID09PSAnbnVtYmVyJ1xyXG4gICAgfHwgdHlwZSA9PT0gJ3N0cmluZydcclxuICAgIHx8IHR5cGUgPT09ICd1bmRlZmluZWQnXHJcbiAgICB8fCB2YWx1ZSA9PT0gbnVsbFxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gbW9jayBzaW1wbGUgZm4uY2FsbCBpbiB3eHNcclxuZnVuY3Rpb24gY2FsbChmbiwgYXJncykge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZuKGFyZ3NbMF0sIGFyZ3NbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBmbihhcmdzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm4oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VyaWFsaXplcihhcmdzKSB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNQcmltaXRpdmUoYXJnc1swXSkpIHtcclxuICAgICAgICByZXR1cm4gYXJnc1swXTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgb2JqW2BrZXkke2l9YF0gPSBhcmdzW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW1vaXplKGZuKSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IHt9O1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHNlcmlhbGl6ZXIoYXJncyk7XHJcbiAgICAgICAgaWYgKGNhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjYWNoZVtrZXldID0gY2FsbChmbiwgYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==