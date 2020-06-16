webpackHotUpdate("static/development/pages/home.js",{

/***/ "./src/Components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/Components/Header/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      nowActive = _useState[0],\n      setNowActive = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var getStatus = function getStatus() {\n    setNowActive(0);\n    dispatch({\n      type: 'STATUS'\n    });\n  };\n\n  var getEmbark = function getEmbark() {\n    setNowActive(1);\n    dispatch({\n      type: 'EMBARK'\n    });\n  };\n\n  var getSubspace = function getSubspace() {\n    setNowActive(2);\n    dispatch({\n      type: 'SUBSPACE'\n    });\n  };\n\n  var getNimbus = function getNimbus() {\n    setNowActive(3);\n    dispatch({\n      type: 'NIMBUS'\n    });\n  };\n\n  return __jsx(\"section\", {\n    className: \"intro intro-news\"\n  }, __jsx(\"div\", {\n    className: \"container\"\n  }, __jsx(\"div\", {\n    className: \"row\"\n  }, __jsx(\"div\", {\n    className: \"col-12\"\n  }, __jsx(\"div\", {\n    className: \"inner pt-110\"\n  }, __jsx(\"h1\", {\n    className: \"mb-50\"\n  }, \"Tutorials\"), __jsx(\"h3\", {\n    className: \"teaser-1\"\n  }, \"The Status Network Tutorial Archive\"), __jsx(\"ul\", {\n    className: \"filters\"\n  }, __jsx(\"li\", {\n    key: \"0\"\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: nowActive === 0 ? \"active\" : '',\n    onClick: function onClick() {\n      return getStatus();\n    }\n  }, \"Status\")), __jsx(\"li\", {\n    key: \"1\"\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: nowActive === 1 ? \"active\" : '',\n    onClick: function onClick() {\n      return getEmbark();\n    }\n  }, \"Embark\")), __jsx(\"li\", {\n    key: \"3\"\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: nowActive === 2 ? \"active\" : '',\n    onClick: function onClick() {\n      return getSubspace();\n    }\n  }, \"Subspace\")), __jsx(\"li\", {\n    key: \"2\"\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: nowActive === 3 ? \"active\" : '',\n    onClick: function onClick() {\n      return getNimbus();\n    }\n  }, \"Nimbus\"))))))));\n};\n\n_s(Header, \"Q9hHdM2mz2sGhpNjp3Qg98yMFVc=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = Header;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzFkNjEiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJub3dBY3RpdmUiLCJzZXROb3dBY3RpdmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ2V0U3RhdHVzIiwidHlwZSIsImdldEVtYmFyayIsImdldFN1YnNwYWNlIiwiZ2V0TmltYnVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDc0I7QUFFdEI7O0FBR0EsSUFBTUEsTUFBZ0QsR0FBRyxTQUFuREEsTUFBbUQsR0FBbUI7QUFBQTs7QUFBQSxrQkFFdENDLHNEQUFRLENBQVMsQ0FBVCxDQUY4QjtBQUFBLE1BRWpFQyxTQUZpRTtBQUFBLE1BRXREQyxZQUZzRDs7QUFHeEUsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCSCxnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCTCxnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCTixnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCUCxnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNBQyxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFPQSxTQUNJO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsaUJBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLDJDQUZKLEVBS0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNJO0FBQUksT0FBRyxFQUFDO0FBQVIsS0FBWTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFFTCxTQUFTLEtBQUssQ0FBZCxHQUFrQixRQUFsQixHQUE2QixFQUFwRDtBQUF3RCxXQUFPLEVBQUU7QUFBQSxhQUFNSSxTQUFTLEVBQWY7QUFBQTtBQUFqRSxjQUFaLENBREosRUFFSTtBQUFJLE9BQUcsRUFBQztBQUFSLEtBQVk7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBRUosU0FBUyxLQUFLLENBQWQsR0FBa0IsUUFBbEIsR0FBNkIsRUFBcEQ7QUFBd0QsV0FBTyxFQUFFO0FBQUEsYUFBTU0sU0FBUyxFQUFmO0FBQUE7QUFBakUsY0FBWixDQUZKLEVBR0k7QUFBSSxPQUFHLEVBQUM7QUFBUixLQUFZO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUVOLFNBQVMsS0FBSyxDQUFkLEdBQWtCLFFBQWxCLEdBQTZCLEVBQXBEO0FBQXdELFdBQU8sRUFBRTtBQUFBLGFBQU1PLFdBQVcsRUFBakI7QUFBQTtBQUFqRSxnQkFBWixDQUhKLEVBSUk7QUFBSSxPQUFHLEVBQUM7QUFBUixLQUFZO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUVQLFNBQVMsS0FBSyxDQUFkLEdBQWtCLFFBQWxCLEdBQTZCLEVBQXBEO0FBQXdELFdBQU8sRUFBRTtBQUFBLGFBQU1RLFNBQVMsRUFBZjtBQUFBO0FBQWpFLGNBQVosQ0FKSixDQUxKLENBREosQ0FESixDQURKLENBREosQ0FESjtBQXNCSCxDQWpERDs7R0FBTVYsTTtVQUdlSyx1RDs7O0tBSGZMLE07QUFtRE4iLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IElIZWFkaW5nIH0gZnJvbSBcIi4vSGVhZGluZ1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEhvbWVBY3Rpb25zIH0gZnJvbSBcIkBBY3Rpb25zXCI7XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUhlYWRpbmcuSVByb3BzPiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cbiAgICBjb25zdCBbbm93QWN0aXZlLCBzZXROb3dBY3RpdmVdID0gdXNlU3RhdGU8TnVtYmVyPigwKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHNldE5vd0FjdGl2ZSgwKVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFUVVMnIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEVtYmFyayA9ICgpID0+IHtcbiAgICAgICAgc2V0Tm93QWN0aXZlKDEpXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0VNQkFSSycgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3Vic3BhY2UgPSAoKSA9PiB7XG4gICAgICAgIHNldE5vd0FjdGl2ZSgyKVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVUJTUEFDRScgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmltYnVzID0gKCkgPT4ge1xuICAgICAgICBzZXROb3dBY3RpdmUoMylcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTklNQlVTJyB9KTtcbiAgICB9XG5cblxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvIGludHJvLW5ld3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXIgcHQtMTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUwXCI+VHV0b3JpYWxzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGVhc2VyLTFcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFN0YXR1cyBOZXR3b3JrIFR1dG9yaWFsIEFyY2hpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9XCIwXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e25vd0FjdGl2ZSA9PT0gMCA/IFwiYWN0aXZlXCIgOiAnJ30gb25DbGljaz17KCkgPT4gZ2V0U3RhdHVzKCl9PlN0YXR1czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMVwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtub3dBY3RpdmUgPT09IDEgPyBcImFjdGl2ZVwiIDogJyd9IG9uQ2xpY2s9eygpID0+IGdldEVtYmFyaygpfT5FbWJhcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT1cIjNcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17bm93QWN0aXZlID09PSAyID8gXCJhY3RpdmVcIiA6ICcnfSBvbkNsaWNrPXsoKSA9PiBnZXRTdWJzcGFjZSgpfT5TdWJzcGFjZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMlwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtub3dBY3RpdmUgPT09IDMgPyBcImFjdGl2ZVwiIDogJyd9IG9uQ2xpY2s9eygpID0+IGdldE5pbWJ1cygpfT5OaW1idXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj4gICAgICAgIFxuICAgICk7XG59O1xuXG5leHBvcnQgeyBIZWFkZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Header/index.tsx\n");

/***/ })

})