;require('./../../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * card-topic
 * Created by Jervis
 * 2019-10-23
 * @prop ...
 */

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    cardType: {
      type: String,
      value: '0'
    },
    isVideo: {
      type: Boolean,
      value: false
    },
    hasWatch: {
      type: Number,
      value: 0
    },
    hasCommit: {
      type: Number,
      value: 0
    },
    imgList: {
      type: Array,
      value: [],
      observer: function observer(list) {
        var count = list.length; // if (list.length > 3) {
        //     list = list.slice(0, 3);
        // }

        this.setData({
          coverList: list,
          allCount: count
        });
      }
    },
    content: {
      type: String,
      value: '制作台是游戏中最重要的道具之一，那么怎么打造制作台呢，快跟小编一起来看一下吧～制作台是游戏中最重要的道具之一，那么怎么打造制作台呢，快跟小编一起来看一下吧～'
    }
  },
  data: {
    coverList: [],
    allCount: 0 // 图片张数

  },
  methods: {
    toPostDetail: function toPostDetail(e) {
      var type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: "/pages/postDetail/postDetail?type=" + type
      });
    }
  }
});

/***/ })

},[[4,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQvY2FyZC10b3BpYy9jYXJkLXRvcGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQU1BLFNBQVMsQ0FBQztBQUNOLFNBQU8sRUFBRTtBQUNMLGtCQUFjLEVBQUU7QUFEWCxHQURIO0FBSU4sWUFBVSxFQUFFO0FBQ1IsWUFBUSxFQUFFO0FBQ04sVUFBSSxFQUFFLE1BREE7QUFFTixXQUFLLEVBQUU7QUFGRCxLQURGO0FBS1IsV0FBTyxFQUFFO0FBQ0wsVUFBSSxFQUFFLE9BREQ7QUFFTCxXQUFLLEVBQUU7QUFGRixLQUxEO0FBU1IsWUFBUSxFQUFFO0FBQ04sVUFBSSxFQUFFLE1BREE7QUFFTixXQUFLLEVBQUU7QUFGRCxLQVRGO0FBYVIsYUFBUyxFQUFFO0FBQ1AsVUFBSSxFQUFFLE1BREM7QUFFUCxXQUFLLEVBQUU7QUFGQSxLQWJIO0FBaUJSLFdBQU8sRUFBRTtBQUNMLFVBQUksRUFBRSxLQUREO0FBRUwsV0FBSyxFQUFFLEVBRkY7QUFHTCxjQUFRLEVBQVIsa0JBQVMsSUFBVCxFQUFpQjtBQUNiLFlBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFuQixDQURhLENBRWI7QUFDQTtBQUNBOztBQUVBLGFBQUssT0FBTCxDQUFhO0FBQ1QsbUJBQVMsRUFBRSxJQURGO0FBRVQsa0JBQVEsRUFBRTtBQUZELFNBQWI7QUFJSDtBQWJJLEtBakJEO0FBZ0NSLFdBQU8sRUFBRTtBQUNMLFVBQUksRUFBRSxNQUREO0FBRUwsV0FBSyxFQUFFO0FBRkY7QUFoQ0QsR0FKTjtBQXlDTixNQUFJLEVBQUU7QUFDRixhQUFTLEVBQUUsRUFEVDtBQUVGLFlBQVEsRUFBRSxDQUZSLENBRW9COztBQUZwQixHQXpDQTtBQTZDTixTQUFPLEVBQUU7QUFDTCxnQkFBWSx3QkFBQyxDQUFELEVBQUU7QUFDVixVQUFNLElBQUksR0FBRyxDQUFDLENBQUMsYUFBRixDQUFnQixPQUFoQixDQUF3QixJQUFyQztBQUNBLFFBQUUsQ0FBQyxVQUFILENBQWM7QUFBRSxXQUFHLEVBQUUsdUNBQXFDO0FBQTVDLE9BQWQ7QUFDSDtBQUpJO0FBN0NILENBQUQsQ0FBVCxDIiwiZmlsZSI6ImNvbXBvbmVudHNcXGNhcmRcXGNhcmQtdG9waWNcXGNhcmQtdG9waWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogY2FyZC10b3BpY1xyXG4gKiBDcmVhdGVkIGJ5IEplcnZpc1xyXG4gKiAyMDE5LTEwLTIzXHJcbiAqIEBwcm9wIC4uLlxyXG4gKi9cclxuQ29tcG9uZW50KHtcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjYXJkVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzVmlkZW86IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzV2F0Y2g6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzQ29tbWl0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltZ0xpc3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXIobGlzdDogW10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobGlzdC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdCA9IGxpc3Quc2xpY2UoMCwgMyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBjb3Zlckxpc3Q6IGxpc3QsLy8gRklYTUU6IFRzOiAyMzIyXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQ291bnQ6IGNvdW50XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAn5Yi25L2c5Y+w5piv5ri45oiP5Lit5pyA6YeN6KaB55qE6YGT5YW35LmL5LiA77yM6YKj5LmI5oCO5LmI5omT6YCg5Yi25L2c5Y+w5ZGi77yM5b+r6Lef5bCP57yW5LiA6LW35p2l55yL5LiA5LiL5ZCn772e5Yi25L2c5Y+w5piv5ri45oiP5Lit5pyA6YeN6KaB55qE6YGT5YW35LmL5LiA77yM6YKj5LmI5oCO5LmI5omT6YCg5Yi25L2c5Y+w5ZGi77yM5b+r6Lef5bCP57yW5LiA6LW35p2l55yL5LiA5LiL5ZCn772eJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY292ZXJMaXN0OiBbXSwgLy8g5oiq5Y+W5Y6f5pWw57uE5YmN5LiJ5bygXHJcbiAgICAgICAgYWxsQ291bnQ6IDAgYXMgbnVtYmVyIC8vIOWbvueJh+W8oOaVsFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b1Bvc3REZXRhaWwoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogYC9wYWdlcy9wb3N0RGV0YWlsL3Bvc3REZXRhaWw/dHlwZT0ke3R5cGV9YCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9