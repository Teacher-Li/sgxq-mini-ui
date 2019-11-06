;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[22],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持

  },
  externalClasses: ['custom-class'],
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: ''
    },
    show: {
      type: Boolean,
      value: false
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mask: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    // 这里是一个自定义方法
    close: function close() {
      this.setData({
        show: false
      });
      this.triggerEvent('close');
    },
    closeByMask: function closeByMask() {
      if (!this.data.maskClosable) return;
      this.close();
    },
    stopEvent: function stopEvent() {}
  }
});

/***/ })

},[[24,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTLENBQUM7QUFDTixTQUFPLEVBQUU7QUFDTCxrQkFBYyxFQUFFLElBRFg7QUFFTCxpQkFBYSxFQUFFLElBRlYsQ0FFZTs7QUFGZixHQURIO0FBTU4saUJBQWUsRUFBRSxDQUFDLGNBQUQsQ0FOWDtBQVFOLFlBQVUsRUFBRTtBQUNSO0FBQ0EsU0FBSyxFQUFFO0FBQ0gsVUFBSSxFQUFFLE1BREg7QUFFSCxXQUFLLEVBQUU7QUFGSixLQUZDO0FBTVIsUUFBSSxFQUFFO0FBQ0YsVUFBSSxFQUFFLE9BREo7QUFFRixXQUFLLEVBQUU7QUFGTCxLQU5FO0FBVVIsZ0JBQVksRUFBRTtBQUNWLFVBQUksRUFBRSxPQURJO0FBRVYsV0FBSyxFQUFFO0FBRkcsS0FWTjtBQWNSLFFBQUksRUFBRTtBQUNGLFVBQUksRUFBRSxPQURKO0FBRUYsV0FBSyxFQUFFO0FBRkw7QUFkRSxHQVJOO0FBMkJOLFNBQU8sRUFBRTtBQUNMO0FBQ0EsU0FBSztBQUNELFdBQUssT0FBTCxDQUFhO0FBQ1QsWUFBSSxFQUFFO0FBREcsT0FBYjtBQUdBLFdBQUssWUFBTCxDQUFrQixPQUFsQjtBQUNILEtBUEk7QUFRTCxlQUFXO0FBQ1AsVUFBSSxDQUFDLEtBQUssSUFBTCxDQUFVLFlBQWYsRUFBNkI7QUFDN0IsV0FBSyxLQUFMO0FBQ0gsS0FYSTtBQVlMLGFBQVMsd0JBQUs7QUFaVDtBQTNCSCxDQUFELENBQVQsQyIsImZpbGUiOiJjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZSAvLyDlnKjnu4Tku7blrprkuYnml7bnmoTpgInpobnkuK3lkK/nlKjlpJpzbG905pSv5oyBXHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnXSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g6L+Z6YeM5a6a5LmJ5LqG5bGe5oCn77yM5bGe5oCn5YC85Y+v5Lul5Zyo57uE5Lu25L2/55So5pe25oyH5a6aXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFza0Nsb3NhYmxlOiB7IC8vIOaYr+WQpueCueWHuyBtYXNrIOWFs+mXrVxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2s6IHsgLy8g5piv5ZCm6ZyA6KaBIOmBrue9qeWxglxyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8g6L+Z6YeM5piv5LiA5Liq6Ieq5a6a5LmJ5pa55rOVXHJcbiAgICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZUJ5TWFzaygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEubWFza0Nsb3NhYmxlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BFdmVudCgpIHt9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9