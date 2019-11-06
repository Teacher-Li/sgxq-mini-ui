;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[15],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class', 'mask-class'],
  properties: {
    title: {
      type: String,
      value: ''
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
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
    actions: {
      type: Array,
      value: [],
      observer: function observer(actions) {
        // 支持 一维数组 写法
        if (actions.length > 0 && typeof actions[0] !== 'string' && !(actions[0] instanceof Array)) {
          this.setData({
            actions: [this.data.actions]
          });
        }
      }
    }
  },
  methods: {
    buttonTap: function buttonTap(event) {
      var _a = event.currentTarget.dataset,
          value = _a.value,
          groupindex = _a.groupindex,
          index = _a.index;
      this.triggerEvent('actiontap', {
        value: value,
        groupindex: groupindex,
        index: index
      });
    },
    closeActionSheet: function closeActionSheet(event) {
      var type = event.currentTarget.dataset.type;

      if (this.data.maskClosable || type) {
        // 点击 action 里面的 取消
        this.setData({
          show: false
        }); // 关闭回调事件

        this.triggerEvent('close');
      }
    },
    stopEvent: function stopEvent() {}
  }
});

/***/ })

},[[17,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjdGlvbnNoZWV0L2FjdGlvbnNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsU0FBUyxDQUFDO0FBQ04sU0FBTyxFQUFFO0FBQ0wsaUJBQWEsRUFBRSxJQURWO0FBRUwsa0JBQWMsRUFBRTtBQUZYLEdBREg7QUFNTixpQkFBZSxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFqQixDQU5YO0FBUU4sWUFBVSxFQUFFO0FBQ1IsU0FBSyxFQUFFO0FBQ0gsVUFBSSxFQUFFLE1BREg7QUFFSCxXQUFLLEVBQUU7QUFGSixLQURDO0FBS1IsY0FBVSxFQUFFO0FBQ1IsVUFBSSxFQUFFLE9BREU7QUFFUixXQUFLLEVBQUU7QUFGQyxLQUxKO0FBU1IsY0FBVSxFQUFFO0FBQ1IsVUFBSSxFQUFFLE1BREU7QUFFUixXQUFLLEVBQUU7QUFGQyxLQVRKO0FBYVIsZ0JBQVksRUFBRTtBQUNWLFVBQUksRUFBRSxPQURJO0FBRVYsV0FBSyxFQUFFO0FBRkcsS0FiTjtBQWlCUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsT0FESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBakJFO0FBcUJSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxPQURKO0FBRUYsV0FBSyxFQUFFO0FBRkwsS0FyQkU7QUF5QlIsV0FBTyxFQUFFO0FBQ0wsVUFBSSxFQUFFLEtBREQ7QUFFTCxXQUFLLEVBQUUsRUFGRjtBQUdMLGNBQVEsRUFBUixrQkFBUyxPQUFULEVBQXVCO0FBQ25CO0FBQ0EsWUFDSSxPQUFPLENBQUMsTUFBUixHQUFpQixDQUFqQixJQUNBLE9BQU8sT0FBTyxDQUFDLENBQUQsQ0FBZCxLQUFzQixRQUR0QixJQUVBLEVBQUUsT0FBTyxDQUFDLENBQUQsQ0FBUCxZQUFzQixLQUF4QixDQUhKLEVBSUU7QUFDRSxlQUFLLE9BQUwsQ0FBYTtBQUNULG1CQUFPLEVBQUUsQ0FBQyxLQUFLLElBQUwsQ0FBVSxPQUFYO0FBREEsV0FBYjtBQUdIO0FBQ0o7QUFkSTtBQXpCRCxHQVJOO0FBbUROLFNBQU8sRUFBRTtBQUNMLGFBQVMsRUFBVCxtQkFBVSxLQUFWLEVBQXNCO0FBQ1o7QUFBQSxVQUFFLGdCQUFGO0FBQUEsVUFBUywwQkFBVDtBQUFBLFVBQXFCLGdCQUFyQjtBQUNOLFdBQUssWUFBTCxDQUFrQixXQUFsQixFQUErQjtBQUFFLGFBQUssT0FBUDtBQUFTLGtCQUFVLFlBQW5CO0FBQXFCLGFBQUs7QUFBMUIsT0FBL0I7QUFDSCxLQUpJO0FBS0wsb0JBQWdCLEVBQWhCLDBCQUFpQixLQUFqQixFQUE2QjtBQUNqQjs7QUFDUixVQUFJLEtBQUssSUFBTCxDQUFVLFlBQVYsSUFBMEIsSUFBOUIsRUFBb0M7QUFDaEM7QUFDQSxhQUFLLE9BQUwsQ0FBYTtBQUNULGNBQUksRUFBRTtBQURHLFNBQWIsRUFGZ0MsQ0FLaEM7O0FBQ0EsYUFBSyxZQUFMLENBQWtCLE9BQWxCO0FBQ0g7QUFDSixLQWZJO0FBZ0JMLGFBQVMsd0JBQUs7QUFoQlQ7QUFuREgsQ0FBRCxDQUFULEMiLCJmaWxlIjoiY29tcG9uZW50c1xcYWN0aW9uc2hlZXRcXGFjdGlvbnNoZWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBpbmdzL3dlYXBwL2V2ZW50JztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZSwgLy8g5Zyo57uE5Lu25a6a5LmJ5pe255qE6YCJ6aG55Lit5ZCv55So5aSac2xvdOaUr+aMgVxyXG4gICAgICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnLCAnbWFzay1jbGFzcyddLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0aXRsZTogeyAvLyDmoIfpophcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDYW5jZWw6IHsgIC8vIOaYr+WQpuaYvuekuuWPlua2iOaMiemSrlxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsVGV4dDogeyAvLyDlj5bmtojmjInpkq7mlofmoYhcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ+WPlua2iCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2tDbG9zYWJsZTogeyAvLyDngrnlh7vpga7nvakg5YWz6ZetIGFjdGlvbnNoZWV0XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFzazogeyAvLyDmmK/lkKbpnIDopoEg6YGu572p5bGCXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93OiB7IC8vIOaYr+WQpuW8gOWQryBhY3Rpb25zaGVldFxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHsgLy8gYWN0aW9ucyDliJfooahcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXSwgLy8ge3RleHQsIGV4dENsYXNzfVxyXG4gICAgICAgICAgICBvYnNlcnZlcihhY3Rpb25zOiBhbnlbXSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pSv5oyBIOS4gOe7tOaVsOe7hCDlhpnms5VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYWN0aW9uc1swXSAhPT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICAhKGFjdGlvbnNbMF0gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0aGlzLmRhdGEuYWN0aW9uc11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJ1dHRvblRhcChldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgZ3JvdXBpbmRleCwgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2FjdGlvbnRhcCcsIHsgdmFsdWUsIGdyb3VwaW5kZXgsIGluZGV4IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VBY3Rpb25TaGVldChldmVudDogRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubWFza0Nsb3NhYmxlIHx8IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOeCueWHuyBhY3Rpb24g6YeM6Z2i55qEIOWPlua2iFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlhbPpl63lm57osIPkuovku7ZcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbG9zZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wRXZlbnQoKSB7fVxyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==