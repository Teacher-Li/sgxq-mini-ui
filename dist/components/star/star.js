;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[40],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
  options: {// multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
    value: {
      type: Number
    },
    count: {
      type: Number,
      value: 5
    },
    index: {
      type: Number
    },
    prefixCls: {
      type: String
    }
  },
  data: {
    // 这里是一些组件内部数据
    className: ''
  },
  observers: {
    'prefixCls, value, index': function prefixClsValueIndex(prefixCls, value, index) {
      var cls = prefixCls;
      var starValue = index + 1;

      if (value + 0.5 === starValue) {
        cls += ' sg-star-half sg-star-active';
      } else {
        cls += starValue <= value ? ' sg-star-full' : ' sg-star-zero';
      }

      this.setData({
        className: cls
      });
    }
  },
  methods: {// 这里是一个自定义方法
  }
});

/***/ })

},[[42,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXIvc3Rhci5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJvcHRpb25zIiwicHJvcGVydGllcyIsInZhbHVlIiwidHlwZSIsIk51bWJlciIsImNvdW50IiwiaW5kZXgiLCJwcmVmaXhDbHMiLCJTdHJpbmciLCJkYXRhIiwiY2xhc3NOYW1lIiwib2JzZXJ2ZXJzIiwiY2xzIiwic3RhclZhbHVlIiwic2V0RGF0YSIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLFNBQVMsQ0FBQztBQUNOQyxTQUFPLEVBQUUsQ0FDTDtBQURLLEdBREg7QUFJTkMsWUFBVSxFQUFFO0FBQ1I7QUFDQUMsU0FBSyxFQUFFO0FBQ0hDLFVBQUksRUFBRUM7QUFESCxLQUZDO0FBS1JDLFNBQUssRUFBRTtBQUNIRixVQUFJLEVBQUVDLE1BREg7QUFFSEYsV0FBSyxFQUFFO0FBRkosS0FMQztBQVNSSSxTQUFLLEVBQUU7QUFDSEgsVUFBSSxFQUFFQztBQURILEtBVEM7QUFZUkcsYUFBUyxFQUFFO0FBQ1BKLFVBQUksRUFBRUs7QUFEQztBQVpILEdBSk47QUFvQk5DLE1BQUksRUFBRTtBQUNGO0FBQ0FDLGFBQVMsRUFBRTtBQUZULEdBcEJBO0FBd0JOQyxXQUFTLEVBQUU7QUFDUCwrQkFBMkIsNkJBQVVKLFNBQVYsRUFBcUJMLEtBQXJCLEVBQTRCSSxLQUE1QixFQUFtQztBQUMxRCxVQUFJTSxHQUFHLEdBQUdMLFNBQVY7QUFDQSxVQUFNTSxTQUFTLEdBQUdQLEtBQUssR0FBRyxDQUExQjs7QUFDQSxVQUFJSixLQUFLLEdBQUcsR0FBUixLQUFnQlcsU0FBcEIsRUFBK0I7QUFDM0JELFdBQUcsSUFBSSw4QkFBUDtBQUNILE9BRkQsTUFFTztBQUNIQSxXQUFHLElBQUlDLFNBQVMsSUFBSVgsS0FBYixHQUFxQixlQUFyQixHQUF1QyxlQUE5QztBQUNIOztBQUNELFdBQUtZLE9BQUwsQ0FBYTtBQUNUSixpQkFBUyxFQUFFRTtBQURGLE9BQWI7QUFHSDtBQVpNLEdBeEJMO0FBc0NORyxTQUFPLEVBQUUsQ0FDTDtBQURLO0FBdENILENBQUQsQ0FBVCxDIiwiZmlsZSI6ImNvbXBvbmVudHNcXHN0YXJcXHN0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIC8vIG11bHRpcGxlU2xvdHM6IHRydWUgLy8g5Zyo57uE5Lu25a6a5LmJ5pe255qE6YCJ6aG55Lit5ZCv55So5aSac2xvdOaUr+aMgVxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDov5nph4zlrprkuYnkuoblsZ7mgKfvvIzlsZ7mgKflgLzlj6/ku6XlnKjnu4Tku7bkvb/nlKjml7bmjIflrppcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlZml4Q2xzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgLy8g6L+Z6YeM5piv5LiA5Lqb57uE5Lu25YaF6YOo5pWw5o2uXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnJ1xyXG4gICAgfSxcclxuICAgIG9ic2VydmVyczoge1xyXG4gICAgICAgICdwcmVmaXhDbHMsIHZhbHVlLCBpbmRleCc6IGZ1bmN0aW9uIChwcmVmaXhDbHMsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgY2xzID0gcHJlZml4Q2xzO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFyVmFsdWUgPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSArIDAuNSA9PT0gc3RhclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjbHMgKz0gJyBzZy1zdGFyLWhhbGYgc2ctc3Rhci1hY3RpdmUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xzICs9IHN0YXJWYWx1ZSA8PSB2YWx1ZSA/ICcgc2ctc3Rhci1mdWxsJyA6ICcgc2ctc3Rhci16ZXJvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvLyDov5nph4zmmK/kuIDkuKroh6rlrprkuYnmlrnms5VcclxuICAgIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=