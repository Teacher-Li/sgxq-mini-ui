;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[31],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * button-group
 * Created by hhh
 * 2019-10-23
 * @prop ...
 */

Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    value: {
      type: String,
      value: ''
    },
    buttons: {
      type: Array,
      value: []
    }
  },
  observers: {
    'value, buttons': function valueButtons(value, buttons) {
      if (!value && buttons.length) {
        this.setData({
          value: buttons[0].value
        });
      }
    }
  },
  methods: {
    onTap: function onTap(event) {
      var value = event.currentTarget.dataset.value;
      this.setData({
        value: value
      });
      this.triggerEvent('click', this.data.value);
    }
  }
});

/***/ })

},[[33,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztBQU1BLFNBQVMsQ0FBQztBQUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjLEVBQUU7QUFEWCxHQURIO0FBS04saUJBQWUsRUFBRSxDQUFDLGNBQUQsQ0FMWDtBQU9OLFlBQVUsRUFBRTtBQUNSLFNBQUssRUFBRTtBQUNILFVBQUksRUFBRSxNQURIO0FBRUgsV0FBSyxFQUFFO0FBRkosS0FEQztBQUtSLFdBQU8sRUFBRTtBQUNMLFVBQUksRUFBRSxLQUREO0FBRUwsV0FBSyxFQUFFO0FBRkY7QUFMRCxHQVBOO0FBa0JOLFdBQVMsRUFBRTtBQUNQLDRDQUFrQixLQUFsQixFQUFpQyxPQUFqQyxFQUErQztBQUMzQyxVQUFJLENBQUMsS0FBRCxJQUFVLE9BQU8sQ0FBQyxNQUF0QixFQUE4QjtBQUMxQixhQUFLLE9BQUwsQ0FBYTtBQUNULGVBQUssRUFBRSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVc7QUFEVCxTQUFiO0FBR0g7QUFDSjtBQVBNLEdBbEJMO0FBNEJOLFNBQU8sRUFBRTtBQUNMLFNBQUssRUFBTCxlQUFNLEtBQU4sRUFBa0I7QUFDTjtBQUNSLFdBQUssT0FBTCxDQUFhO0FBQ1QsYUFBSztBQURJLE9BQWI7QUFHQSxXQUFLLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBSyxJQUFMLENBQVUsS0FBckM7QUFDSDtBQVBJO0FBNUJILENBQUQsQ0FBVCxDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGJ1dHRvbi1ncm91cFxcYnV0dG9uLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBpbmdzL3dlYXBwL2V2ZW50JztcclxuXHJcbi8qKlxyXG4gKiBidXR0b24tZ3JvdXBcclxuICogQ3JlYXRlZCBieSBoaGhcclxuICogMjAxOS0xMC0yM1xyXG4gKiBAcHJvcCAuLi5cclxuICovXHJcbkNvbXBvbmVudCh7XHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcyddLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvYnNlcnZlcnM6IHtcclxuICAgICAgICAndmFsdWUsIGJ1dHRvbnMnICh2YWx1ZTogc3RyaW5nLCBidXR0b25zOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlICYmIGJ1dHRvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBidXR0b25zWzBdLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uVGFwKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrJywgdGhpcy5kYXRhLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9