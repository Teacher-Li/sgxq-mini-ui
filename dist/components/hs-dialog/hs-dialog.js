;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[28],{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * hs-dialog 半弹窗
 * Created by hhh
 * 2019-10-18
 * @prop ...
 */

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    title: {
      type: String,
      value: ''
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mask: {
      type: Boolean,
      value: true
    },
    show: {
      type: Boolean,
      value: false
    },
    footer: {
      type: Boolean,
      value: false
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  methods: {
    closeOnTapMask: function closeOnTapMask() {
      if (this.data.maskClosable) {
        this.setData({
          show: false
        });
        this.triggerEvent('close');
      }
    },
    onCancel: function onCancel() {
      this.triggerEvent('cancel');
    },
    onConfirm: function onConfirm() {
      this.triggerEvent('confirm');
    },
    stopEvent: function stopEvent() {}
  }
});

/***/ })

},[[30,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hzLWRpYWxvZy9ocy1kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7O0FBTUEsU0FBUyxDQUFDO0FBQ04sU0FBTyxFQUFFO0FBQ0wsaUJBQWEsRUFBRSxJQURWO0FBRUwsa0JBQWMsRUFBRTtBQUZYLEdBREg7QUFNTixpQkFBZSxFQUFFLENBQUMsY0FBRCxDQU5YO0FBUU4sWUFBVSxFQUFFO0FBQ1IsU0FBSyxFQUFFO0FBQ0gsVUFBSSxFQUFFLE1BREg7QUFFSCxXQUFLLEVBQUU7QUFGSixLQURDO0FBS1IsZ0JBQVksRUFBRTtBQUNWLFVBQUksRUFBRSxPQURJO0FBRVYsV0FBSyxFQUFFO0FBRkcsS0FMTjtBQVNSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxPQURKO0FBRUYsV0FBSyxFQUFFO0FBRkwsS0FURTtBQWFSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxPQURKO0FBRUYsV0FBSyxFQUFFO0FBRkwsS0FiRTtBQWlCUixVQUFNLEVBQUU7QUFDSixVQUFJLEVBQUUsT0FERjtBQUVKLFdBQUssRUFBRTtBQUZILEtBakJBO0FBcUJSLGNBQVUsRUFBRTtBQUNSLFVBQUksRUFBRSxNQURFO0FBRVIsV0FBSyxFQUFFO0FBRkMsS0FyQko7QUF5QlIsZUFBVyxFQUFFO0FBQ1QsVUFBSSxFQUFFLE1BREc7QUFFVCxXQUFLLEVBQUU7QUFGRTtBQXpCTCxHQVJOO0FBdUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjO0FBQ1YsVUFBSSxLQUFLLElBQUwsQ0FBVSxZQUFkLEVBQTRCO0FBQ3hCLGFBQUssT0FBTCxDQUFhO0FBQ1QsY0FBSSxFQUFFO0FBREcsU0FBYjtBQUdBLGFBQUssWUFBTCxDQUFrQixPQUFsQjtBQUNIO0FBQ0osS0FSSTtBQVVMLFlBQVE7QUFDSixXQUFLLFlBQUwsQ0FBa0IsUUFBbEI7QUFDSCxLQVpJO0FBY0wsYUFBUztBQUNMLFdBQUssWUFBTCxDQUFrQixTQUFsQjtBQUNILEtBaEJJO0FBa0JMLGFBQVMsd0JBQUs7QUFsQlQ7QUF2Q0gsQ0FBRCxDQUFULEMiLCJmaWxlIjoiY29tcG9uZW50c1xcaHMtZGlhbG9nXFxocy1kaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogaHMtZGlhbG9nIOWNiuW8ueeql1xyXG4gKiBDcmVhdGVkIGJ5IGhoaFxyXG4gKiAyMDE5LTEwLTE4XHJcbiAqIEBwcm9wIC4uLlxyXG4gKi9cclxuQ29tcG9uZW50KHtcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLCAvLyDlnKjnu4Tku7blrprkuYnml7bnmoTpgInpobnkuK3lkK/nlKjlpJpzbG905pSv5oyBXHJcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnXSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6IHsgLy8g5by556qX5qCH6aKY77yM5Lmf5Y+v5Lul6YCa6L+HIHNsb3Qg6Ieq5a6a5LmJXHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXNrQ2xvc2FibGU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2s6IHsgLy8g5piv5ZCm6ZyA6KaBIOmBrue9qeWxglxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvdzogeyAvLyDmmK/lkKblvIDlkK/lvLnnqpdcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWxUZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtVGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu5a6aJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNsb3NlT25UYXBNYXNrKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hc2tDbG9zYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xvc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2FuY2VsJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25Db25maXJtKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY29uZmlybScpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0b3BFdmVudCgpIHt9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9