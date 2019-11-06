;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[20],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * cell
 * Created by hhh
 * 2019-10-14
 * @prop ...
 */

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  externalClasses: ['custom-class', 'hover-class'],
  properties: {
    hover: {
      type: Boolean,
      value: false
    },
    iconClass: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    footerClass: {
      type: String,
      value: ''
    },
    footer: {
      type: String,
      value: ''
    },
    inline: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    setOuterClass: function setOuterClass(className) {
      this.setData({
        outerClass: className
      });
    }
  }
});

/***/ })

},[[22,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NlbGwvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7QUFNQSxTQUFTLENBQUM7QUFDTixTQUFPLEVBQUU7QUFDTCxrQkFBYyxFQUFFLElBRFg7QUFFTCxpQkFBYSxFQUFFO0FBRlYsR0FESDtBQU1OLGlCQUFlLEVBQUUsQ0FBQyxjQUFELEVBQWlCLGFBQWpCLENBTlg7QUFRTixZQUFVLEVBQUU7QUFDUixTQUFLLEVBQUU7QUFDSCxVQUFJLEVBQUUsT0FESDtBQUVILFdBQUssRUFBRTtBQUZKLEtBREM7QUFLUixhQUFTLEVBQUU7QUFDUCxVQUFJLEVBQUUsTUFEQztBQUVQLFdBQUssRUFBRTtBQUZBLEtBTEg7QUFTUixRQUFJLEVBQUU7QUFDRixVQUFJLEVBQUUsTUFESjtBQUVGLFdBQUssRUFBRTtBQUZMLEtBVEU7QUFhUixTQUFLLEVBQUU7QUFDSCxVQUFJLEVBQUUsTUFESDtBQUVILFdBQUssRUFBRTtBQUZKLEtBYkM7QUFpQlIsU0FBSyxFQUFFO0FBQ0gsVUFBSSxFQUFFLE1BREg7QUFFSCxXQUFLLEVBQUU7QUFGSixLQWpCQztBQXFCUixlQUFXLEVBQUU7QUFDVCxVQUFJLEVBQUUsTUFERztBQUVULFdBQUssRUFBRTtBQUZFLEtBckJMO0FBeUJSLFVBQU0sRUFBRTtBQUNKLFVBQUksRUFBRSxNQURGO0FBRUosV0FBSyxFQUFFO0FBRkgsS0F6QkE7QUE2QlIsVUFBTSxFQUFFO0FBQ0osVUFBSSxFQUFFLE9BREY7QUFFSixXQUFLLEVBQUU7QUFGSDtBQTdCQSxHQVJOO0FBMkNOLFNBQU8sRUFBRTtBQUNMLGlCQUFhLEVBQWIsdUJBQWMsU0FBZCxFQUErQjtBQUMzQixXQUFLLE9BQUwsQ0FBYTtBQUNULGtCQUFVLEVBQUU7QUFESCxPQUFiO0FBR0g7QUFMSTtBQTNDSCxDQUFELENBQVQsQyIsImZpbGUiOiJjb21wb25lbnRzXFxjZWxsXFxjZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNlbGxcclxuICogQ3JlYXRlZCBieSBoaGhcclxuICogMjAxOS0xMC0xNFxyXG4gKiBAcHJvcCAuLi5cclxuICovXHJcbkNvbXBvbmVudCh7XHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJywgJ2hvdmVyLWNsYXNzJ10sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb25DbGFzczoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7IC8vIOWSjGljb27kuozpgInkuIDvvIzpg73mmK/mlL7lnKhjZWxsX2hk6YeM6Z2iXHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXJDbGFzczoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmxpbmU6IHsgLy8g5bem5Y+z5biD5bGA5qC35byP6L+Y5piv5LiK5LiL5biD5bGAXHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2V0T3V0ZXJDbGFzcyhjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJDbGFzczogY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9