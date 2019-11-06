;require('./../../runtime');require('./../../common');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[32],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * tab
 * Created by hhh
 * 2019-10-23
 * @prop ...
 */

var util_1 = __webpack_require__(1);

Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ['custom-class', 'tab-class'],
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    active: {
      type: String,
      value: '',
      observer: function observer(newVal) {
        this.setActive(newVal);
      }
    },
    extraPadding: {
      type: Number,
      value: 0
    }
  },
  data: {
    lineStyle: '',
    currentIndex: 0,
    duration: 0.3,
    currentName: ''
  },
  ready: function ready() {
    this.setLine(true);
  },
  attached: function attached() {
    var res = wx.getSystemInfoSync();
    this.setData({
      isAndroid: res.platform === 'android'
    });
  },
  methods: {
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery()["in"](_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    trigger: function trigger(eventName, name) {
      var _a = this.data,
          tabs = _a.tabs,
          currentIndex = _a.currentIndex;
      this.triggerEvent(eventName, {
        name: name,
        title: tabs[currentIndex].title
      });
    },
    onTap: function onTap(event) {
      var index = event.currentTarget.dataset.index;
      var child = this.data.tabs[index];
      this.trigger('click', child.key);
      this.setActive(child.key);
    },
    setActive: function setActive(key) {
      if (key !== this.data.currentName) {
        this.data.currentName = key;
        this.trigger('change', key);
        this.setActiveTab();
      }
    },
    setLine: function setLine(skipTransition) {
      var _this = this;

      var _a = this.data,
          currentIndex = _a.currentIndex,
          duration = _a.duration,
          extraPadding = _a.extraPadding;
      this.getRect('.sg-tab', true).then(function (rects) {
        var parentRect = rects[currentIndex];

        _this.getRect('.sg-tab__item', true).then(function (childRects) {
          // 横线的宽度就是目标元素文字的宽度
          var width = childRects[currentIndex].width; // 先计算前面 tab 的宽度

          var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
            return prev + curr.width;
          }, 0); // 再加上 (父元素宽度 - 目标元素宽度) / 2 = 目标元素相对父元素的 left 值

          left += (parentRect.width - width) / 2;
          /* 有时候，为了兼容 tabs 左右留白统一
             刻意为 sg-tabs__nav 样式添加额外的 padding-left 和 padding-right，单位 px
             所以 js 代码里也需要传递与上述 padding-left 数值一样的 extraPadding 属性
          */

          if (extraPadding) left += extraPadding;
          var transition = skipTransition ? '' : "transition-duration: " + duration + "s; -webkit-transition-duration: " + duration + "s;";

          _this.setData({
            lineStyle: "\n                                width: " + util_1.addUnit(width) + ";\n                                -webkit-transform: translateX(" + left + "px);\n                                transform: translateX(" + left + "px);\n                                " + transition + "\n                            "
          });
        });
      });
    },
    setActiveTab: function setActiveTab() {
      var _this = this;

      if (!util_1.isDef(this.data.currentName)) {
        this.setData({
          currentName: this.data.active || (this.data.tabs[0] || {}).key
        });
      }

      var tabs = this.data.tabs.map(function (item, index) {
        var data = __assign(__assign({}, item), {
          active: item.key === _this.data.currentName
        });

        if (data.active) {
          _this.setData({
            currentIndex: index
          });
        }

        return data;
      });
      this.setData({
        tabs: tabs
      });
      util_1.nextTick(function () {
        _this.setLine();
      });
    }
  }
});

/***/ })

},[[34,0,2]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvdGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU1BOztBQUdBLFNBQVMsQ0FBQztBQUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjLEVBQUU7QUFEWCxHQURIO0FBS04saUJBQWUsRUFBRSxDQUFDLGNBQUQsRUFBaUIsV0FBakIsQ0FMWDtBQU9OLFlBQVUsRUFBRTtBQUNSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxLQURKO0FBRUYsV0FBSyxFQUFFO0FBRkwsS0FERTtBQUtSLFVBQU0sRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosV0FBSyxFQUFFLEVBRkg7QUFHSixjQUFRLG9CQUFDLE1BQUQsRUFBTztBQUNYLGFBQUssU0FBTCxDQUFlLE1BQWY7QUFDSDtBQUxHLEtBTEE7QUFZUixnQkFBWSxFQUFFO0FBQ1YsVUFBSSxFQUFFLE1BREk7QUFFVixXQUFLLEVBQUU7QUFGRztBQVpOLEdBUE47QUF5Qk4sTUFBSSxFQUFFO0FBQ0YsYUFBUyxFQUFFLEVBRFQ7QUFFRixnQkFBWSxFQUFFLENBRlo7QUFHRixZQUFRLEVBQUUsR0FIUjtBQUlGLGVBQVcsRUFBRTtBQUpYLEdBekJBO0FBZ0NOLE9BQUs7QUFDRCxTQUFLLE9BQUwsQ0FBYSxJQUFiO0FBQ0gsR0FsQ0s7QUFvQ04sVUFBUTtBQUNKLFFBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxpQkFBSCxFQUFaO0FBQ0EsU0FBSyxPQUFMLENBQWE7QUFDVCxlQUFTLEVBQUUsR0FBRyxDQUFDLFFBQUosS0FBaUI7QUFEbkIsS0FBYjtBQUdILEdBekNLO0FBMkNOLFNBQU8sRUFBRTtBQUNMLFdBQU8sRUFBUCxpQkFBUSxRQUFSLEVBQTBCLEdBQTFCLEVBQXNDO0FBQXRDOztBQUNJLGFBQU8sSUFBSSxPQUFKLENBQVksbUJBQU87QUFDdEIsVUFBRSxDQUFDLG1CQUFILFNBQ1EsS0FE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QUMsYUFBTSxLQUFLLElBQUwsQ0FBVSxXQUFoQixDQUFMLEVBQW1DO0FBQy9CLGFBQUssT0FBTCxDQUFhO0FBQ1QscUJBQVcsRUFBRSxLQUFLLElBQUwsQ0FBVSxNQUFWLElBQW9CLENBQUMsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLENBQWYsS0FBcUIsRUFBdEIsRUFBMEI7QUFEbEQsU0FBYjtBQUdIOztBQUVELFVBQU0sSUFBSSxHQUFHLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxHQUFmLENBQW1CLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBb0I7QUFDaEQsWUFBTSxJQUFJLHlCQUNILElBREcsR0FDQztBQUNQLGdCQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUwsS0FBYSxLQUFJLENBQUMsSUFBTCxDQUFVO0FBRHhCLFNBREQsQ0FBVjs7QUFLQSxZQUFJLElBQUksQ0FBQyxNQUFULEVBQWlCO0FBQ2IsZUFBSSxDQUFDLE9BQUwsQ0FBYTtBQUNULHdCQUFZLEVBQUU7QUFETCxXQUFiO0FBR0g7O0FBRUQsZUFBTyxJQUFQO0FBQ0gsT0FiWSxDQUFiO0FBZUEsV0FBSyxPQUFMLENBQWE7QUFDVCxZQUFJO0FBREssT0FBYjtBQUlBLHNCQUFTO0FBQ0wsYUFBSSxDQUFDLE9BQUw7QUFDSCxPQUZEO0FBR0g7QUFoSEk7QUEzQ0gsQ0FBRCxDQUFULEMiLCJmaWxlIjoiY29tcG9uZW50c1xcdGFic1xcdGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiB0YWJcclxuICogQ3JlYXRlZCBieSBoaGhcclxuICogMjAxOS0xMC0yM1xyXG4gKiBAcHJvcCAuLi5cclxuICovXHJcbmltcG9ydCB7IG5leHRUaWNrLCBpc0RlZiwgYWRkVW5pdCB9IGZyb20gJ0AvdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy93ZWFwcC9ldmVudCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnLCAndGFiLWNsYXNzJ10sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRhYnM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBvYnNlcnZlcihuZXdWYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKG5ld1ZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dHJhUGFkZGluZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGluZVN0eWxlOiAnJyxcclxuICAgICAgICBjdXJyZW50SW5kZXg6IDAsXHJcbiAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICBjdXJyZW50TmFtZTogJycgYXMgc3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0TGluZSh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBpc0FuZHJvaWQ6IHJlcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRSZWN0KHNlbGVjdG9yOiBzdHJpbmcsIGFsbDogYm9vbGVhbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuICAgICAgICAgICAgICAgICAgICAuaW4odGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbCAmJiByZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZXhlYygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB0YWJzLCBjdXJyZW50SW5kZXggfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KGV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0YWJzW2N1cnJlbnRJbmRleF0udGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25UYXAoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLmRhdGEudGFic1tpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCBjaGlsZC5rZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShjaGlsZC5rZXkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldEFjdGl2ZShrZXk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSB0aGlzLmRhdGEuY3VycmVudE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jdXJyZW50TmFtZSA9IGtleTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywga2V5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRMaW5lKHNraXBUcmFuc2l0aW9uPzogYm9vbGVhbikge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50SW5kZXgsIGR1cmF0aW9uLCBleHRyYVBhZGRpbmcgfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnNnLXRhYicsIHRydWUpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVjdHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSByZWN0c1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnNnLXRhYl9faXRlbScsIHRydWUpLnRoZW4oKGNoaWxkUmVjdHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmqKrnur/nmoTlrr3luqblsLHmmK/nm67moIflhYPntKDmloflrZfnmoTlrr3luqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjaGlsZFJlY3RzW2N1cnJlbnRJbmRleF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFiOiuoeeul+WJjemdoiB0YWIg55qE5a695bqmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gcmVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci53aWR0aCwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlho3liqDkuIogKOeItuWFg+e0oOWuveW6piAtIOebruagh+WFg+e0oOWuveW6pikgLyAyID0g55uu5qCH5YWD57Sg55u45a+554i25YWD57Sg55qEIGxlZnQg5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgKz0gKHBhcmVudFJlY3Qud2lkdGggLSB3aWR0aCkgLyAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyog5pyJ5pe25YCZ77yM5Li65LqG5YW85a65IHRhYnMg5bem5Y+z55WZ55m957uf5LiAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIu+aEj+S4uiBzZy10YWJzX19uYXYg5qC35byP5re75Yqg6aKd5aSW55qEIHBhZGRpbmctbGVmdCDlkowgcGFkZGluZy1yaWdodO+8jOWNleS9jSBweFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICDmiYDku6UganMg5Luj56CB6YeM5Lmf6ZyA6KaB5Lyg6YCS5LiO5LiK6L+wIHBhZGRpbmctbGVmdCDmlbDlgLzkuIDmoLfnmoQgZXh0cmFQYWRkaW5nIOWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFQYWRkaW5nKSBsZWZ0ICs9IGV4dHJhUGFkZGluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBza2lwVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtkdXJhdGlvbn1zOyAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR7ZHVyYXRpb259cztgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke2FkZFVuaXQod2lkdGgpfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2xlZnR9cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2xlZnR9cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlVGFiKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRGVmKHRoaXMuZGF0YS5jdXJyZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5hbWU6IHRoaXMuZGF0YS5hY3RpdmUgfHwgKHRoaXMuZGF0YS50YWJzWzBdIHx8IHt9KS5rZXlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YWJzID0gdGhpcy5kYXRhLnRhYnMubWFwKChpdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpdGVtLmtleSA9PT0gdGhpcy5kYXRhLmN1cnJlbnROYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdGFic1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGluZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==