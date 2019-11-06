;require('./../../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[51],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * foot-bar
 * Created by Jervis
 * 2019-06-06
 * @prop ...
 */
Component({
  properties: {},
  data: {
    barType: 1
  },
  attached: function attached() {},
  detached: function detached() {},
  methods: {
    navEvent: function navEvent(e) {
      console.log('foot-bar event', e);
      var type = e.currentTarget.dataset.type;
      var url;
      console.log('type', type);

      switch (type) {
        case '1':
          url = '/pages/test/index/index';
          break;

        case '2':
          url = '/pages/test/pageTwo/pageTwo';
          break;

        case '3':
          url = '/pages/test/pageThree/pageThree';
          break;

        default:
          console.log('type error');
          break;
      }

      console.log(url);
      wx.reLaunch({
        url: url
      });
    }
  }
});

/***/ })

},[[53,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3QvZm9vdC1iYXIvZm9vdC1iYXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRhdGEiLCJiYXJUeXBlIiwiYXR0YWNoZWQiLCJkZXRhY2hlZCIsIm1ldGhvZHMiLCJuYXZFdmVudCIsImUiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidXJsIiwid3giLCJyZUxhdW5jaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUFBLFNBQVMsQ0FBQztBQUNOQyxZQUFVLEVBQUUsRUFETjtBQUVOQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFO0FBRFAsR0FGQTtBQUtOQyxVQUxNLHNCQUtLLENBQUUsQ0FMUDtBQU1OQyxVQU5NLHNCQU1LLENBQUUsQ0FOUDtBQU9OQyxTQUFPLEVBQUU7QUFDTEMsWUFESyxvQkFDSUMsQ0FESixFQUNPO0FBQ1JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixDQUE5QjtBQUNBLFVBQU1HLElBQUksR0FBR0gsQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsSUFBckM7QUFDQSxVQUFJRyxHQUFKO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JDLElBQXBCOztBQUNBLGNBQVFBLElBQVI7QUFDQSxhQUFLLEdBQUw7QUFDSUcsYUFBRyxHQUFHLHlCQUFOO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lBLGFBQUcsR0FBRyw2QkFBTjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJQSxhQUFHLEdBQUcsaUNBQU47QUFDQTs7QUFDSjtBQUNJTCxpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBO0FBWko7O0FBY0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0FDLFFBQUUsQ0FBQ0MsUUFBSCxDQUFZO0FBQ1JGLFdBQUcsRUFBSEE7QUFEUSxPQUFaO0FBR0g7QUF4Qkk7QUFQSCxDQUFELENBQVQsQyIsImZpbGUiOiJjb21wb25lbnRzXFx0ZXN0XFxmb290LWJhclxcZm9vdC1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogZm9vdC1iYXJcclxuICogQ3JlYXRlZCBieSBKZXJ2aXNcclxuICogMjAxOS0wNi0wNlxyXG4gKiBAcHJvcCAuLi5cclxuICovXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBiYXJUeXBlOiAxXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7fSxcclxuICAgIGRldGFjaGVkKCkge30sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbmF2RXZlbnQoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZm9vdC1iYXIgZXZlbnQnLCBlKTtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICAgICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHVybCA9ICcvcGFnZXMvdGVzdC9pbmRleC9pbmRleCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAnL3BhZ2VzL3Rlc3QvcGFnZVR3by9wYWdlVHdvJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHVybCA9ICcvcGFnZXMvdGVzdC9wYWdlVGhyZWUvcGFnZVRocmVlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R5cGUgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9