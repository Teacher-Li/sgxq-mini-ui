;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[8],{

/***/ 8:
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
/**
 * image
 * Created by hhh
 * 2019-10-31
 * @prop ...
 */


Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    src: {
      type: String,
      value: ''
    },
    defaultSrc: {
      type: String,
      value: '/static/images/bg_default.png'
    },
    customStyle: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    webp: {
      type: Boolean,
      value: false
    },
    lazyLoad: {
      type: Boolean,
      value: false
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    src: function src(value) {
      if (value) {
        this.setData({
          show: true
        });
      }
    }
  },
  data: {
    show: false
  },
  methods: {
    bindError: function bindError() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      this.setData({
        show: false
      });
      this.triggerEvent.apply(this, __spreadArrays(['error'], args));
    },
    bindLoad: function bindLoad() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      this.triggerEvent.apply(this, __spreadArrays(['load'], args));
    }
  }
});

/***/ })

},[[8,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQU1BLFNBQVMsQ0FBQztBQUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjLEVBQUU7QUFEWCxHQURIO0FBS04saUJBQWUsRUFBRSxDQUFDLGNBQUQsQ0FMWDtBQU9OLFlBQVUsRUFBRTtBQUNSLE9BQUcsRUFBRTtBQUNELFVBQUksRUFBRSxNQURMO0FBRUQsV0FBSyxFQUFFO0FBRk4sS0FERztBQUtSLGNBQVUsRUFBRTtBQUNSLFVBQUksRUFBRSxNQURFO0FBRVIsV0FBSyxFQUFFO0FBRkMsS0FMSjtBQVNSLGVBQVcsRUFBRTtBQUNULFVBQUksRUFBRSxNQURHO0FBRVQsV0FBSyxFQUFFO0FBRkUsS0FUTDtBQWFSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxNQURKO0FBRUYsV0FBSyxFQUFFO0FBRkwsS0FiRTtBQWlCUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsT0FESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBakJFO0FBcUJSLFlBQVEsRUFBRTtBQUNOLFVBQUksRUFBRSxPQURBO0FBRU4sV0FBSyxFQUFFO0FBRkQsS0FyQkY7QUF5QlIsdUJBQW1CLEVBQUU7QUFDakIsVUFBSSxFQUFFLE9BRFc7QUFFakIsV0FBSyxFQUFFO0FBRlU7QUF6QmIsR0FQTjtBQXNDTixXQUFTLEVBQUU7QUFDUCxPQUFHLGVBQUMsS0FBRCxFQUFNO0FBQ0wsVUFBSSxLQUFKLEVBQVc7QUFDUCxhQUFLLE9BQUwsQ0FBYTtBQUNULGNBQUksRUFBRTtBQURHLFNBQWI7QUFHSDtBQUNKO0FBUE0sR0F0Q0w7QUErQ04sTUFBSSxFQUFFO0FBQ0YsUUFBSSxFQUFFO0FBREosR0EvQ0E7QUFrRE4sU0FBTyxFQUFFO0FBQ0wsYUFBUztBQUFDOztXQUFBLFUsRUFBQSxxQixFQUFBLEksRUFBTztBQUFQOzs7QUFDTixXQUFLLE9BQUwsQ0FBYTtBQUNULFlBQUksRUFBRTtBQURHLE9BQWI7QUFHQSxXQUFLLFlBQUwsQ0FBaUIsS0FBakIsT0FBSSxnQkFBYyxPQUFkLEdBQTBCLElBQTFCLENBQUo7QUFDSCxLQU5JO0FBT0wsWUFBUTtBQUFDOztXQUFBLFUsRUFBQSxxQixFQUFBLEksRUFBTztBQUFQOzs7QUFDTCxXQUFLLFlBQUwsQ0FBaUIsS0FBakIsT0FBSSxnQkFBYyxNQUFkLEdBQXlCLElBQXpCLENBQUo7QUFDSDtBQVRJO0FBbERILENBQUQsQ0FBVCxDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGltYWdlXFxpbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBpbWFnZVxyXG4gKiBDcmVhdGVkIGJ5IGhoaFxyXG4gKiAyMDE5LTEwLTMxXHJcbiAqIEBwcm9wIC4uLlxyXG4gKi9cclxuQ29tcG9uZW50KHtcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcyddLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcmM6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRTcmM6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJy9zdGF0aWMvaW1hZ2VzL2JnX2RlZmF1bHQucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3NjYWxlVG9GaWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VicDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhenlMb2FkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd01lbnVCeUxvbmdwcmVzczoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9ic2VydmVyczoge1xyXG4gICAgICAgIHNyYyh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHNob3c6IGZhbHNlIGFzIGJvb2xlYW4sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJpbmRFcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Vycm9yJywgLi4uYXJncyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kTG9hZCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdsb2FkJywgLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==