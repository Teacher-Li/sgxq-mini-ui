;require('./runtime');require('./common');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// app.js
var util = __webpack_require__(1);

var EventBus = __webpack_require__(2);

App({
  onLaunch: function onLaunch() {
    var _this = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now()); // 登录

    wx.login({
      success: function success(res) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    });
    var systemInfo = wx.getSystemInfoSync();
    wx.setStorageSync('platform', systemInfo.platform); // 获取用户信息

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function success(res) {
              // 可以将 res 发送给后台解码出 unionId
              _this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况

              if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: null,
    selectedTab: 0
  }
}); // 猴子方法，覆盖原生框架初始化的page component , 简化调用库

(function () {
  var _page = Page;
  var _component = Component;

  Page = function Page(ob) {
    var onload = ob.onLoad || function () {};

    ob.onLoad = function () {
      customSetup.call(this); // TODO: store
      // mta.Page.init()
      // store.injectTo(this, store)
      // store.setStoreData(this, store)
      // const arg = [].slice.call(arguments);
      // console.log(this.route);
      // if (this.route.match('pages/index')) {
      //     this.getTabBar().setData({
      //         selected: 0
      //     });
      // }
      // if (this.route.match('pages/choicest')) {
      //     this.getTabBar().setData({
      //         selected: 1
      //     });
      // }
      // if (this.route.match('pages/resource')) {
      //     this.getTabBar().setData({
      //         selected: 2
      //     });
      // }
      // if (this.route.match('pages/my')) {
      //     this.getTabBar().setData({
      //         selected: 3
      //     });
      //     console.log(this.getTabBar());
      // }

      onload.call(this, arguments.length <= 0 ? undefined : arguments[0]);
    };

    _page(ob);
  };

  Component = function Component(ob) {
    var created = ob.created || function () {};

    var attached = ob.attached || function () {};

    var detached = ob.detached || function () {};

    ob.created = function () {
      customSetup.call(this); // store.injectTo(this, store)
      // const arg = [].slice.call(arguments);

      created.call(this, arguments.length <= 0 ? undefined : arguments[0]);
    };

    ob.attached = function () {
      // store.addComponent(this)
      // store.setStoreData(this, store)
      // const arg = [].slice.call(arguments);
      attached.call(this, arguments.length <= 0 ? undefined : arguments[0]);
    };

    ob.detached = function () {
      // store.removeComponent(this)
      // const arg = [].slice.call(arguments);
      detached.call(this, arguments.length <= 0 ? undefined : arguments[0]);
    };

    _component(ob);
  };

  var customSetup = function customSetup() {
    this.util = util;
    this.EventBus = EventBus;
    this.globalData = getApp().globalData;
    this.device = getApp().device;
    /**
     * setData数组
     * @param data { Object } 数据，如'{ list: ['a', 'b'] }'
     * @param cb { Funtion } 设置成功的回调
     */

    this.setArrayData = function (data, cb) {
      var _this2 = this;

      if (_typeof(data) !== 'object' || Array.isArray(data)) {
        return;
      }

      var _setData = {};
      var origin = null;
      Object.keys(data).forEach(function (key) {
        origin = _this2.data[key];

        if (typeof origin === 'undefined') {
          origin = [];
        }

        if (!Array.isArray(origin) || !Array.isArray(data[key])) {
          return;
        }

        data[key].forEach(function (item, index) {
          _setData["".concat(key, "[").concat(origin.length + index, "]")] = item;
        });
      });
      this.setData(_setData, function () {
        cb && cb();
      });
    }; // TODO: 增加全局webview


    this.goToWebView = function (url, title) {
      this.$store.commit('updateWebView', {
        title: title || '',
        url: url || ''
      });
      wx.navigateTo({
        url: '/pages/browser/web-view/web-view'
      });
    };
  };
})();

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * EventBus 组件间传参 by JervisCen
 * 2019-10-17
 *
 * 调用方式
 *
 * app.EventBus.$on(name,self,callback) 监听方法，使用时将方法挂载在页面的onLoad周期
 * app.EventBus.$emit(name,data) 广播方法，
 * app.EventBus.$remove(name,self) 移除指定监听事件
 * app.EventBus.$removeAll() 清空events对象
 *
 * TODO: 后期改写成公共类
 */
var events = {}; // 全局事件对象
// 监听事件 name-事件名 self-当前作用域 callback 回调

function on(name, self, callback) {
  var tuple = [self, callback];
  var callbacks = events[name];

  if (Array.isArray(callbacks)) {
    callbacks.push(tuple);
  } else {
    events[name] = [tuple];
  }
} // 移除监听事件 name-事件名 self-当前作用域


function remove(name, self) {
  var callbacks = events[name];

  if (Array.isArray(callbacks)) {
    events[name] = callbacks.filter(function (tuple) {
      return tuple[0] !== self;
    });
  }
} // 移除当前所有监听事件


function removeAll() {
  events = {};
} // 触发事件方法 name-事件名 data- 参数


function emit(name, data) {
  var callbacks = events[name];

  if (Array.isArray(callbacks)) {
    callbacks.forEach(function (tuple) {
      var self = tuple[0];
      var callback = tuple[1];
      callback.call(self, data);
    });
  }
}

exports.$on = on;
exports.$remove = remove;
exports.$emit = emit;
exports.$removeAll = removeAll;

/***/ })
],[[0,0,2]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZXZlbnRCdXMuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJFdmVudEJ1cyIsIkFwcCIsIm9uTGF1bmNoIiwibG9ncyIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJ1bnNoaWZ0IiwiRGF0ZSIsIm5vdyIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJzZXRTdG9yYWdlU3luYyIsInBsYXRmb3JtIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJzZWxlY3RlZFRhYiIsIl9wYWdlIiwiUGFnZSIsIl9jb21wb25lbnQiLCJDb21wb25lbnQiLCJvYiIsIm9ubG9hZCIsIm9uTG9hZCIsImN1c3RvbVNldHVwIiwiY2FsbCIsImNyZWF0ZWQiLCJhdHRhY2hlZCIsImRldGFjaGVkIiwiZ2V0QXBwIiwiZGV2aWNlIiwic2V0QXJyYXlEYXRhIiwiZGF0YSIsImNiIiwiQXJyYXkiLCJpc0FycmF5IiwiX3NldERhdGEiLCJvcmlnaW4iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsInNldERhdGEiLCJnb1RvV2ViVmlldyIsInVybCIsInRpdGxlIiwiJHN0b3JlIiwiY29tbWl0IiwibmF2aWdhdGVUbyIsImV2ZW50cyIsIm9uIiwibmFtZSIsInNlbGYiLCJjYWxsYmFjayIsInR1cGxlIiwiY2FsbGJhY2tzIiwicHVzaCIsInJlbW92ZSIsImZpbHRlciIsInJlbW92ZUFsbCIsImVtaXQiLCJleHBvcnRzIiwiJG9uIiwiJHJlbW92ZSIsIiRlbWl0IiwiJHJlbW92ZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFN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dXRpbHMvdXRpbC50cycpO1xyXG5jb25zdCBFdmVudEJ1cyA9IHJlcXVpcmUoJy4vdXRpbHMvZXZlbnRCdXMuanMnKTtcclxuXHJcbkFwcCh7XHJcbiAgICBvbkxhdW5jaCgpIHtcclxuICAgICAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgICAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcclxuICAgICAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XHJcbiAgICAgICAgLy8g55m75b2VXHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncGxhdGZvcm0nLCBzeXN0ZW1JbmZvLnBsYXRmb3JtKTtcclxuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnbG9iYWxEYXRhOiB7XHJcbiAgICAgICAgdXNlckluZm86IG51bGwsXHJcbiAgICAgICAgc2VsZWN0ZWRUYWI6IDBcclxuICAgIH1cclxufSk7XHJcbi8vIOeMtOWtkOaWueazle+8jOimhuebluWOn+eUn+ahhuaetuWIneWni+WMlueahHBhZ2UgY29tcG9uZW50ICwg566A5YyW6LCD55So5bqTXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBfcGFnZSA9IFBhZ2U7XHJcbiAgICBjb25zdCBfY29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5cclxuICAgIFBhZ2UgPSBmdW5jdGlvbiAob2IpIHtcclxuICAgICAgICBjb25zdCBvbmxvYWQgPSBvYi5vbkxvYWQgfHwgZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgb2Iub25Mb2FkID0gZnVuY3Rpb24gKC4uLmFyZykge1xyXG4gICAgICAgICAgICBjdXN0b21TZXR1cC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBzdG9yZVxyXG4gICAgICAgICAgICAvLyBtdGEuUGFnZS5pbml0KClcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlLmluamVjdFRvKHRoaXMsIHN0b3JlKVxyXG4gICAgICAgICAgICAvLyBzdG9yZS5zZXRTdG9yZURhdGEodGhpcywgc3RvcmUpXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCBhcmcgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm91dGUpO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5yb3V0ZS5tYXRjaCgncGFnZXMvaW5kZXgnKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxlY3RlZDogMFxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucm91dGUubWF0Y2goJ3BhZ2VzL2Nob2ljZXN0JykpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZWN0ZWQ6IDFcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnJvdXRlLm1hdGNoKCdwYWdlcy9yZXNvdXJjZScpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNlbGVjdGVkOiAyXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5yb3V0ZS5tYXRjaCgncGFnZXMvbXknKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxlY3RlZDogM1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFRhYkJhcigpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBvbmxvYWQuY2FsbCh0aGlzLCBhcmdbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3BhZ2Uob2IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDb21wb25lbnQgPSBmdW5jdGlvbiAob2IpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gb2IuY3JlYXRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgICBjb25zdCBhdHRhY2hlZCA9IG9iLmF0dGFjaGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgICAgIGNvbnN0IGRldGFjaGVkID0gb2IuZGV0YWNoZWQgfHwgZnVuY3Rpb24gKCkge307XHJcbiAgICAgICAgb2IuY3JlYXRlZCA9IGZ1bmN0aW9uICguLi5hcmcpIHtcclxuICAgICAgICAgICAgY3VzdG9tU2V0dXAuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gc3RvcmUuaW5qZWN0VG8odGhpcywgc3RvcmUpXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zdCBhcmcgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZWQuY2FsbCh0aGlzLCBhcmdbMF0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG9iLmF0dGFjaGVkID0gZnVuY3Rpb24gKC4uLmFyZykge1xyXG4gICAgICAgICAgICAvLyBzdG9yZS5hZGRDb21wb25lbnQodGhpcylcclxuICAgICAgICAgICAgLy8gc3RvcmUuc2V0U3RvcmVEYXRhKHRoaXMsIHN0b3JlKVxyXG4gICAgICAgICAgICAvLyBjb25zdCBhcmcgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGF0dGFjaGVkLmNhbGwodGhpcywgYXJnWzBdKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvYi5kZXRhY2hlZCA9IGZ1bmN0aW9uICguLi5hcmcpIHtcclxuICAgICAgICAgICAgLy8gc3RvcmUucmVtb3ZlQ29tcG9uZW50KHRoaXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGFyZyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgZGV0YWNoZWQuY2FsbCh0aGlzLCBhcmdbMF0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgX2NvbXBvbmVudChvYik7XHJcbiAgICB9O1xyXG4gICAgbGV0IGN1c3RvbVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXRpbCA9IHV0aWw7XHJcbiAgICAgICAgdGhpcy5FdmVudEJ1cyA9IEV2ZW50QnVzO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YSA9IGdldEFwcCgpLmdsb2JhbERhdGE7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBnZXRBcHAoKS5kZXZpY2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNldERhdGHmlbDnu4RcclxuICAgICAgICAgKiBAcGFyYW0gZGF0YSB7IE9iamVjdCB9IOaVsOaNru+8jOWmgid7IGxpc3Q6IFsnYScsICdiJ10gfSdcclxuICAgICAgICAgKiBAcGFyYW0gY2IgeyBGdW50aW9uIH0g6K6+572u5oiQ5Yqf55qE5Zue6LCDXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zZXRBcnJheURhdGEgPSBmdW5jdGlvbiAoZGF0YSwgY2IpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgX3NldERhdGEgPSB7fTtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbiA9IG51bGw7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbiA9IHRoaXMuZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9yaWdpbikgfHwgIUFycmF5LmlzQXJyYXkoZGF0YVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBfc2V0RGF0YVtgJHtrZXl9WyR7b3JpZ2luLmxlbmd0aCArIGluZGV4fV1gXSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoX3NldERhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFRPRE86IOWinuWKoOWFqOWxgHdlYnZpZXdcclxuICAgICAgICB0aGlzLmdvVG9XZWJWaWV3ID0gZnVuY3Rpb24gKHVybCwgdGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd1cGRhdGVXZWJWaWV3Jywge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwgfHwgJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2Jyb3dzZXIvd2ViLXZpZXcvd2ViLXZpZXcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59KCkpO1xyXG4iLCIvKipcclxuICogRXZlbnRCdXMg57uE5Lu26Ze05Lyg5Y+CIGJ5IEplcnZpc0NlblxyXG4gKiAyMDE5LTEwLTE3XHJcbiAqXHJcbiAqIOiwg+eUqOaWueW8j1xyXG4gKlxyXG4gKiBhcHAuRXZlbnRCdXMuJG9uKG5hbWUsc2VsZixjYWxsYmFjaykg55uR5ZCs5pa55rOV77yM5L2/55So5pe25bCG5pa55rOV5oyC6L295Zyo6aG16Z2i55qEb25Mb2Fk5ZGo5pyfXHJcbiAqIGFwcC5FdmVudEJ1cy4kZW1pdChuYW1lLGRhdGEpIOW5v+aSreaWueazle+8jFxyXG4gKiBhcHAuRXZlbnRCdXMuJHJlbW92ZShuYW1lLHNlbGYpIOenu+mZpOaMh+WumuebkeWQrOS6i+S7tlxyXG4gKiBhcHAuRXZlbnRCdXMuJHJlbW92ZUFsbCgpIOa4heepumV2ZW50c+WvueixoVxyXG4gKlxyXG4gKiBUT0RPOiDlkI7mnJ/mlLnlhpnmiJDlhazlhbHnsbtcclxuICovXHJcblxyXG5sZXQgZXZlbnRzID0ge307IC8vIOWFqOWxgOS6i+S7tuWvueixoVxyXG5cclxuLy8g55uR5ZCs5LqL5Lu2IG5hbWUt5LqL5Lu25ZCNIHNlbGYt5b2T5YmN5L2c55So5Z+fIGNhbGxiYWNrIOWbnuiwg1xyXG5mdW5jdGlvbiBvbihuYW1lLCBzZWxmLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgdHVwbGUgPSBbc2VsZiwgY2FsbGJhY2tdO1xyXG4gICAgY29uc3QgY2FsbGJhY2tzID0gZXZlbnRzW25hbWVdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2FsbGJhY2tzKSkge1xyXG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKHR1cGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnRzW25hbWVdID0gW3R1cGxlXTtcclxuICAgIH1cclxufVxyXG4vLyDnp7vpmaTnm5HlkKzkuovku7YgbmFtZS3kuovku7blkI0gc2VsZi3lvZPliY3kvZznlKjln59cclxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIHNlbGYpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGV2ZW50c1tuYW1lXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNhbGxiYWNrcykpIHtcclxuICAgICAgICBldmVudHNbbmFtZV0gPSBjYWxsYmFja3MuZmlsdGVyKHR1cGxlID0+IHR1cGxlWzBdICE9PSBzZWxmKTtcclxuICAgIH1cclxufVxyXG4vLyDnp7vpmaTlvZPliY3miYDmnInnm5HlkKzkuovku7ZcclxuZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xyXG4gICAgZXZlbnRzID0ge307XHJcbn1cclxuXHJcbi8vIOinpuWPkeS6i+S7tuaWueazlSBuYW1lLeS6i+S7tuWQjSBkYXRhLSDlj4LmlbBcclxuZnVuY3Rpb24gZW1pdChuYW1lLCBkYXRhKSB7XHJcbiAgICBjb25zdCBjYWxsYmFja3MgPSBldmVudHNbbmFtZV07XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYWxsYmFja3MpKSB7XHJcbiAgICAgICAgY2FsbGJhY2tzLmZvckVhY2godHVwbGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdHVwbGVbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdHVwbGVbMV07XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2VsZiwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydHMuJG9uID0gb247XHJcbmV4cG9ydHMuJHJlbW92ZSA9IHJlbW92ZTtcclxuZXhwb3J0cy4kZW1pdCA9IGVtaXQ7XHJcbmV4cG9ydHMuJHJlbW92ZUFsbCA9IHJlbW92ZUFsbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==