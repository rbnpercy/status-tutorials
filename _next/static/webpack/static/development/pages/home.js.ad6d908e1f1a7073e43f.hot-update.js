webpackHotUpdate("static/development/pages/home.js",{

/***/ "./src/Actions/HomeActions/index.ts":
/*!******************************************!*\
  !*** ./src/Actions/HomeActions/index.ts ***!
  \******************************************/
/*! exports provided: FetchEmbark, FetchOldEmbark, FetchNimbus, FetchSubspace, HomeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchEmbark\", function() { return FetchEmbark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchOldEmbark\", function() { return FetchOldEmbark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchNimbus\", function() { return FetchNimbus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchSubspace\", function() { return FetchSubspace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeActions\", function() { return HomeActions; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Definitions */ \"./src/Definitions/index.ts\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// #region Global Imports\n// #endregion Global Imports\n// #region Local Imports\n // #endregion Local Imports\n// #region Interface Imports\n\n// #endregion Interface Imports\n\n\nvar parseString = __webpack_require__(/*! xml2js */ \"./node_modules/xml2js/lib/xml2js.js\").parseString;\n\nvar CORS_PROXY = \"https://cors-fix.status.im/\";\nvar embarkBlog = \"https://blog.embarklabs.io/atom.xml\";\nvar embarkOldBlog = \"https://framework.embarklabs.io/atom.xml\";\nvar nimbusBlog = \"https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:nim&limit=all&include=authors\";\nvar subspaceBlog = \"https://our.status.im/ghost/api/v2/content/posts/?key=10e7f8c1f793d2945ea1177076&filter=tag:subspace&limit=all&include=authors\";\nvar embarkData = '';\nvar parsedEmbarkData = [];\nvar nimbusData = '';\nvar parsedNimbusData = [];\nvar subspaceData = '';\nvar parsedSubspaceData = [];\nvar FetchEmbark = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(CORS_PROXY) + \"\".concat(embarkBlog)).then(function (response) {\n              return response.text();\n            }).then(function (data) {\n              embarkData = data;\n              parseString(embarkData, function (err, result) {\n                var entries = result.feed.entry;\n                entries.forEach(function (entry) {\n                  var category = entry.category[0]['$']['term'];\n\n                  if (category === 'tutorials') {\n                    var postData = {};\n                    postData.title = entry.title[0];\n                    postData.published = entry.published[0];\n                    postData.url = entry.id[0];\n                    postData.summary = entry.summary[0]._;\n                    parsedEmbarkData.push(postData);\n                  }\n                });\n              });\n            }).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                while (1) {\n                  switch (_context.prev = _context.next) {\n                    case 0:\n                      _context.next = 2;\n                      return FetchOldEmbark();\n\n                    case 2:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }\n              }, _callee);\n            })));\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function FetchEmbark() {\n    return _ref.apply(this, arguments);\n  };\n}();\n_c = FetchEmbark;\nvar FetchOldEmbark = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(CORS_PROXY) + \"\".concat(embarkOldBlog)).then(function (response) {\n              return response.text();\n            }).then(function (data) {\n              embarkData = data;\n              parseString(embarkData, function (err, result) {\n                var entries = result.feed.entry;\n                entries.forEach(function (entry) {\n                  var category = entry.category[0]['$']['term'];\n                  var title = entry.title[0];\n                  var checkDuplicate = title == \"How to upgrade to Embark 4\" || title == \"Introduction to Web3 - What Are Your Options?\" || title.includes(\"Nim vs Crystal\");\n\n                  if (category === 'tutorials' && !checkDuplicate) {\n                    var postData = {};\n                    postData.title = entry.title[0];\n                    postData.published = entry.published[0];\n                    postData.url = entry.id[0];\n                    postData.summary = entry.summary[0]._;\n                    parsedEmbarkData.push(postData);\n                  }\n                });\n              });\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function FetchOldEmbark() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n_c2 = FetchOldEmbark;\nvar FetchNimbus = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(CORS_PROXY) + \"\".concat(nimbusBlog)).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              nimbusData = data.posts;\n              nimbusData.forEach(function (entry) {\n                var postData = {};\n                postData.title = entry.title;\n                postData.published_at = entry.published_at;\n                postData.excerpt = entry.excerpt;\n                postData.author = entry.primary_author.name;\n                postData.feature_image = entry.feature_image;\n                postData.url = entry.url;\n                parsedNimbusData.push(postData);\n              });\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function FetchNimbus() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n_c3 = FetchNimbus;\nvar FetchSubspace = /*#__PURE__*/function () {\n  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(CORS_PROXY) + \"\".concat(subspaceBlog)).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              subspaceData = data.posts;\n              subspaceData.forEach(function (entry) {\n                var postData = {};\n                postData.title = entry.title;\n                postData.published_at = entry.published_at;\n                postData.excerpt = entry.excerpt;\n                postData.author = entry.primary_author.name;\n                postData.feature_image = entry.feature_image;\n                postData.url = entry.url;\n                parsedSubspaceData.push(postData);\n              });\n            });\n\n          case 2:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function FetchSubspace() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n_c4 = FetchSubspace;\nvar HomeActions = {\n  Map: function Map(payload) {\n    return {\n      payload: payload,\n      type: _Definitions__WEBPACK_IMPORTED_MODULE_2__[\"ActionConsts\"].Home.SetReducer\n    };\n  },\n  Reset: function Reset() {\n    return {\n      type: _Definitions__WEBPACK_IMPORTED_MODULE_2__[\"ActionConsts\"].Home.ResetReducer\n    };\n  },\n  GetEmbarkData: function GetEmbarkData(payload) {\n    return /*#__PURE__*/function () {\n      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return FetchEmbark();\n\n              case 2:\n                dispatch({\n                  payload: {\n                    embarkData: parsedEmbarkData\n                  },\n                  type: _Definitions__WEBPACK_IMPORTED_MODULE_2__[\"ActionConsts\"].Home.SetReducer\n                });\n                parsedEmbarkData = [];\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x) {\n        return _ref6.apply(this, arguments);\n      };\n    }();\n  },\n  GetNimbusData: function GetNimbusData(payload) {\n    return /*#__PURE__*/function () {\n      var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                _context7.next = 2;\n                return FetchNimbus();\n\n              case 2:\n                dispatch({\n                  payload: {\n                    nimbusData: parsedNimbusData\n                  },\n                  type: _Definitions__WEBPACK_IMPORTED_MODULE_2__[\"ActionConsts\"].Home.SetReducer\n                });\n                parsedNimbusData = [];\n\n              case 4:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }));\n\n      return function (_x2) {\n        return _ref7.apply(this, arguments);\n      };\n    }();\n  },\n  Active: function Active(activeIndex) {\n    return /*#__PURE__*/function () {\n      var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(dispatch) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                _context8.next = 2;\n                return dispatch({\n                  payload: {\n                    active: activeIndex\n                  },\n                  type: _Definitions__WEBPACK_IMPORTED_MODULE_2__[\"ActionConsts\"].Home.SetReducer\n                });\n\n              case 2:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }));\n\n      return function (_x3) {\n        return _ref8.apply(this, arguments);\n      };\n    }();\n  }\n};\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"FetchEmbark\");\n$RefreshReg$(_c2, \"FetchOldEmbark\");\n$RefreshReg$(_c3, \"FetchNimbus\");\n$RefreshReg$(_c4, \"FetchSubspace\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9Ib21lQWN0aW9ucy9pbmRleC50cz9jNjhkIl0sIm5hbWVzIjpbInBhcnNlU3RyaW5nIiwicmVxdWlyZSIsIkNPUlNfUFJPWFkiLCJlbWJhcmtCbG9nIiwiZW1iYXJrT2xkQmxvZyIsIm5pbWJ1c0Jsb2ciLCJzdWJzcGFjZUJsb2ciLCJlbWJhcmtEYXRhIiwicGFyc2VkRW1iYXJrRGF0YSIsIm5pbWJ1c0RhdGEiLCJwYXJzZWROaW1idXNEYXRhIiwic3Vic3BhY2VEYXRhIiwicGFyc2VkU3Vic3BhY2VEYXRhIiwiRmV0Y2hFbWJhcmsiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIiwiZXJyIiwicmVzdWx0IiwiZW50cmllcyIsImZlZWQiLCJlbnRyeSIsImZvckVhY2giLCJjYXRlZ29yeSIsInBvc3REYXRhIiwidGl0bGUiLCJwdWJsaXNoZWQiLCJ1cmwiLCJpZCIsInN1bW1hcnkiLCJfIiwicHVzaCIsIkZldGNoT2xkRW1iYXJrIiwiY2hlY2tEdXBsaWNhdGUiLCJpbmNsdWRlcyIsIkZldGNoTmltYnVzIiwianNvbiIsInBvc3RzIiwicHVibGlzaGVkX2F0IiwiZXhjZXJwdCIsImF1dGhvciIsInByaW1hcnlfYXV0aG9yIiwibmFtZSIsImZlYXR1cmVfaW1hZ2UiLCJGZXRjaFN1YnNwYWNlIiwiSG9tZUFjdGlvbnMiLCJNYXAiLCJwYXlsb2FkIiwidHlwZSIsIkFjdGlvbkNvbnN0cyIsIkhvbWUiLCJTZXRSZWR1Y2VyIiwiUmVzZXQiLCJSZXNldFJlZHVjZXIiLCJHZXRFbWJhcmtEYXRhIiwiZGlzcGF0Y2giLCJHZXROaW1idXNEYXRhIiwiQWN0aXZlIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0NBRUE7QUFFQTs7QUFFQTtBQUVBOztBQUVBLElBQUlBLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxtREFBRCxDQUFQLENBQWtCRCxXQUFwQzs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsNkJBQW5CO0FBRUEsSUFBTUMsVUFBVSxHQUFHLHFDQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBRywwQ0FBdEI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsMkhBQW5CO0FBRUEsSUFBTUMsWUFBWSxHQUFHLGdJQUFyQjtBQUVBLElBQUlDLFVBQWUsR0FBRyxFQUF0QjtBQUNBLElBQUlDLGdCQUFvQixHQUFHLEVBQTNCO0FBRUEsSUFBSUMsVUFBZSxHQUFHLEVBQXRCO0FBQ0EsSUFBSUMsZ0JBQW9CLEdBQUcsRUFBM0I7QUFFQSxJQUFJQyxZQUFpQixHQUFHLEVBQXhCO0FBQ0EsSUFBSUMsa0JBQXNCLEdBQUcsRUFBN0I7QUFvQk8sSUFBTUMsV0FBVztBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMseURBQUssQ0FBQyxVQUFHWixVQUFILGNBQW9CQyxVQUFwQixDQUFELENBQUwsQ0FDTFksSUFESyxDQUNBLFVBQUFDLFFBQVE7QUFBQSxxQkFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxhQURSLEVBRUxGLElBRkssQ0FFQSxVQUFBRyxJQUFJLEVBQUk7QUFDVlgsd0JBQVUsR0FBR1csSUFBYjtBQUNBbEIseUJBQVcsQ0FBQ08sVUFBRCxFQUFhLFVBQVVZLEdBQVYsRUFBbUJDLE1BQW5CLEVBQStCO0FBQ25ELG9CQUFNQyxPQUFtQixHQUFHRCxNQUFNLENBQUNFLElBQVAsQ0FBWUMsS0FBeEM7QUFDQUYsdUJBQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFBRCxLQUFLLEVBQUk7QUFDckIsc0JBQU1FLFFBQVEsR0FBR0YsS0FBSyxDQUFDRSxRQUFOLENBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixNQUF2QixDQUFqQjs7QUFDQSxzQkFBSUEsUUFBUSxLQUFLLFdBQWpCLEVBQThCO0FBQzFCLHdCQUFNQyxRQUFhLEdBQUcsRUFBdEI7QUFDQUEsNEJBQVEsQ0FBQ0MsS0FBVCxHQUFpQkosS0FBSyxDQUFDSSxLQUFOLENBQVksQ0FBWixDQUFqQjtBQUNBRCw0QkFBUSxDQUFDRSxTQUFULEdBQXFCTCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBckI7QUFDQUYsNEJBQVEsQ0FBQ0csR0FBVCxHQUFlTixLQUFLLENBQUNPLEVBQU4sQ0FBUyxDQUFULENBQWY7QUFDQUosNEJBQVEsQ0FBQ0ssT0FBVCxHQUFtQlIsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsQ0FBcEM7QUFDQXhCLG9DQUFnQixDQUFDeUIsSUFBakIsQ0FBc0JQLFFBQXRCO0FBQ0g7QUFDSixpQkFWRDtBQVdILGVBYlUsQ0FBWDtBQWNILGFBbEJLLEVBbUJMWCxJQW5CSyxnTUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ0ltQixjQUFjLEVBRGxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJBLEdBRGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhyQixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCO0tBQU1BLFc7QUF5Qk4sSUFBTXFCLGNBQWM7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDcEJwQix5REFBSyxDQUFDLFVBQUdaLFVBQUgsY0FBb0JFLGFBQXBCLENBQUQsQ0FBTCxDQUNMVyxJQURLLENBQ0EsVUFBQUMsUUFBUTtBQUFBLHFCQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLGFBRFIsRUFFTEYsSUFGSyxDQUVBLFVBQUFHLElBQUksRUFBSTtBQUNWWCx3QkFBVSxHQUFHVyxJQUFiO0FBQ0FsQix5QkFBVyxDQUFDTyxVQUFELEVBQWEsVUFBVVksR0FBVixFQUFtQkMsTUFBbkIsRUFBK0I7QUFDbkQsb0JBQU1DLE9BQW1CLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxLQUF4QztBQUNBRix1QkFBTyxDQUFDRyxPQUFSLENBQWdCLFVBQUFELEtBQUssRUFBSTtBQUNyQixzQkFBTUUsUUFBUSxHQUFHRixLQUFLLENBQUNFLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLEVBQXVCLE1BQXZCLENBQWpCO0FBQ0Esc0JBQU1FLEtBQUssR0FBR0osS0FBSyxDQUFDSSxLQUFOLENBQVksQ0FBWixDQUFkO0FBQ0Esc0JBQU1RLGNBQWMsR0FBR1IsS0FBSyxJQUFJLDRCQUFULElBQXlDQSxLQUFLLElBQUksK0NBQWxELElBQ25CQSxLQUFLLENBQUNTLFFBQU4sQ0FBZSxnQkFBZixDQURKOztBQUVBLHNCQUFJWCxRQUFRLEtBQUssV0FBYixJQUE0QixDQUFDVSxjQUFqQyxFQUFpRDtBQUM3Qyx3QkFBTVQsUUFBYSxHQUFHLEVBQXRCO0FBQ0FBLDRCQUFRLENBQUNDLEtBQVQsR0FBaUJKLEtBQUssQ0FBQ0ksS0FBTixDQUFZLENBQVosQ0FBakI7QUFDQUQsNEJBQVEsQ0FBQ0UsU0FBVCxHQUFxQkwsS0FBSyxDQUFDSyxTQUFOLENBQWdCLENBQWhCLENBQXJCO0FBQ0FGLDRCQUFRLENBQUNHLEdBQVQsR0FBZU4sS0FBSyxDQUFDTyxFQUFOLENBQVMsQ0FBVCxDQUFmO0FBQ0FKLDRCQUFRLENBQUNLLE9BQVQsR0FBbUJSLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsRUFBaUJDLENBQXBDO0FBQ0F4QixvQ0FBZ0IsQ0FBQ3lCLElBQWpCLENBQXNCUCxRQUF0QjtBQUNIO0FBQ0osaUJBYkQ7QUFjSCxlQWhCVSxDQUFYO0FBaUJILGFBckJLLENBRG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRRLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7TUFBTUEsYztBQXlCTixJQUFNRyxXQUFXO0FBQUEsK0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2pCdkIseURBQUssQ0FBQyxVQUFHWixVQUFILGNBQW9CRyxVQUFwQixDQUFELENBQUwsQ0FDTFUsSUFESyxDQUNBLFVBQUFDLFFBQVE7QUFBQSxxQkFBSUEsUUFBUSxDQUFDc0IsSUFBVCxFQUFKO0FBQUEsYUFEUixFQUVMdkIsSUFGSyxDQUVBLFVBQUFHLElBQUksRUFBSTtBQUNWVCx3QkFBVSxHQUFHUyxJQUFJLENBQUNxQixLQUFsQjtBQUNBOUIsd0JBQVUsQ0FBQ2UsT0FBWCxDQUFtQixVQUFDRCxLQUFELEVBQXVCO0FBQ3RDLG9CQUFNRyxRQUFhLEdBQUcsRUFBdEI7QUFDQUEsd0JBQVEsQ0FBQ0MsS0FBVCxHQUFpQkosS0FBSyxDQUFDSSxLQUF2QjtBQUNBRCx3QkFBUSxDQUFDYyxZQUFULEdBQXdCakIsS0FBSyxDQUFDaUIsWUFBOUI7QUFDQWQsd0JBQVEsQ0FBQ2UsT0FBVCxHQUFtQmxCLEtBQUssQ0FBQ2tCLE9BQXpCO0FBQ0FmLHdCQUFRLENBQUNnQixNQUFULEdBQWtCbkIsS0FBSyxDQUFDb0IsY0FBTixDQUFxQkMsSUFBdkM7QUFDQWxCLHdCQUFRLENBQUNtQixhQUFULEdBQXlCdEIsS0FBSyxDQUFDc0IsYUFBL0I7QUFDQW5CLHdCQUFRLENBQUNHLEdBQVQsR0FBZU4sS0FBSyxDQUFDTSxHQUFyQjtBQUNBbkIsZ0NBQWdCLENBQUN1QixJQUFqQixDQUFzQlAsUUFBdEI7QUFDSCxlQVREO0FBVUgsYUFkSyxDQURpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYVyxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCO01BQU1BLFc7QUFrQk4sSUFBTVMsYUFBYTtBQUFBLCtMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNuQmhDLHlEQUFLLENBQUMsVUFBR1osVUFBSCxjQUFvQkksWUFBcEIsQ0FBRCxDQUFMLENBQ0xTLElBREssQ0FDQSxVQUFBQyxRQUFRO0FBQUEscUJBQUlBLFFBQVEsQ0FBQ3NCLElBQVQsRUFBSjtBQUFBLGFBRFIsRUFFTHZCLElBRkssQ0FFQSxVQUFBRyxJQUFJLEVBQUk7QUFDVlAsMEJBQVksR0FBR08sSUFBSSxDQUFDcUIsS0FBcEI7QUFDQTVCLDBCQUFZLENBQUNhLE9BQWIsQ0FBcUIsVUFBQ0QsS0FBRCxFQUF5QjtBQUMxQyxvQkFBTUcsUUFBYSxHQUFHLEVBQXRCO0FBQ0FBLHdCQUFRLENBQUNDLEtBQVQsR0FBaUJKLEtBQUssQ0FBQ0ksS0FBdkI7QUFDQUQsd0JBQVEsQ0FBQ2MsWUFBVCxHQUF3QmpCLEtBQUssQ0FBQ2lCLFlBQTlCO0FBQ0FkLHdCQUFRLENBQUNlLE9BQVQsR0FBbUJsQixLQUFLLENBQUNrQixPQUF6QjtBQUNBZix3QkFBUSxDQUFDZ0IsTUFBVCxHQUFrQm5CLEtBQUssQ0FBQ29CLGNBQU4sQ0FBcUJDLElBQXZDO0FBQ0FsQix3QkFBUSxDQUFDbUIsYUFBVCxHQUF5QnRCLEtBQUssQ0FBQ3NCLGFBQS9CO0FBQ0FuQix3QkFBUSxDQUFDRyxHQUFULEdBQWVOLEtBQUssQ0FBQ00sR0FBckI7QUFDQWpCLGtDQUFrQixDQUFDcUIsSUFBbkIsQ0FBd0JQLFFBQXhCO0FBQ0gsZUFURDtBQVVILGFBZEssQ0FEbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYm9CLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7TUFBTUEsYTtBQWtCTixJQUFNQyxXQUFXLEdBQUc7QUFDdkJDLEtBQUcsRUFBRSxhQUFDQyxPQUFEO0FBQUEsV0FBa0I7QUFDbkJBLGFBQU8sRUFBUEEsT0FEbUI7QUFFbkJDLFVBQUksRUFBRUMseURBQVksQ0FBQ0MsSUFBYixDQUFrQkM7QUFGTCxLQUFsQjtBQUFBLEdBRGtCO0FBTXZCQyxPQUFLLEVBQUU7QUFBQSxXQUFPO0FBQ1ZKLFVBQUksRUFBRUMseURBQVksQ0FBQ0MsSUFBYixDQUFrQkc7QUFEZCxLQUFQO0FBQUEsR0FOZ0I7QUFVdkJDLGVBQWEsRUFBRSx1QkFBQ1AsT0FBRDtBQUFBO0FBQUEsbU1BQTJDLGtCQUN0RFEsUUFEc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR2hENUMsV0FBVyxFQUhxQzs7QUFBQTtBQUl0RDRDLHdCQUFRLENBQUM7QUFDTFIseUJBQU8sRUFBRTtBQUNMMUMsOEJBQVUsRUFBRUM7QUFEUCxtQkFESjtBQUlMMEMsc0JBQUksRUFBRUMseURBQVksQ0FBQ0MsSUFBYixDQUFrQkM7QUFKbkIsaUJBQUQsQ0FBUjtBQU1BN0MsZ0NBQWdCLEdBQUcsRUFBbkI7O0FBVnNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FWUTtBQXVCdkJrRCxlQUFhLEVBQUUsdUJBQUNULE9BQUQ7QUFBQTtBQUFBLG1NQUEyQyxrQkFDdERRLFFBRHNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUdoRHBCLFdBQVcsRUFIcUM7O0FBQUE7QUFJdERvQix3QkFBUSxDQUFDO0FBQ0xSLHlCQUFPLEVBQUU7QUFDTHhDLDhCQUFVLEVBQUVDO0FBRFAsbUJBREo7QUFJTHdDLHNCQUFJLEVBQUVDLHlEQUFZLENBQUNDLElBQWIsQ0FBa0JDO0FBSm5CLGlCQUFELENBQVI7QUFNQTNDLGdDQUFnQixHQUFHLEVBQW5COztBQVZzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBdkJRO0FBb0N2QmlELFFBQU0sRUFBRSxnQkFBQ0MsV0FBRDtBQUFBO0FBQUEsbU1BQXNCLGtCQUMxQkgsUUFEMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBR3BCQSxRQUFRLENBQUM7QUFDWFIseUJBQU8sRUFBRTtBQUNMWSwwQkFBTSxFQUFFRDtBQURILG1CQURFO0FBSVhWLHNCQUFJLEVBQUVDLHlEQUFZLENBQUNDLElBQWIsQ0FBa0JDO0FBSmIsaUJBQUQsQ0FIWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcENlLENBQXBCIiwiZmlsZSI6Ii4vc3JjL0FjdGlvbnMvSG9tZUFjdGlvbnMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xuXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcbmltcG9ydCB7IEFjdGlvbkNvbnN0cyB9IGZyb20gXCJARGVmaW5pdGlvbnNcIjtcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xuXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXG5pbXBvcnQgeyBJSG9tZVBhZ2UgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcbi8vICNlbmRyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxudmFyIHBhcnNlU3RyaW5nID0gcmVxdWlyZSgneG1sMmpzJykucGFyc2VTdHJpbmc7XG5cbmNvbnN0IENPUlNfUFJPWFkgPSBcImh0dHBzOi8vY29ycy1maXguc3RhdHVzLmltL1wiO1xuXG5jb25zdCBlbWJhcmtCbG9nID0gXCJodHRwczovL2Jsb2cuZW1iYXJrbGFicy5pby9hdG9tLnhtbFwiO1xuY29uc3QgZW1iYXJrT2xkQmxvZyA9IFwiaHR0cHM6Ly9mcmFtZXdvcmsuZW1iYXJrbGFicy5pby9hdG9tLnhtbFwiO1xuXG5jb25zdCBuaW1idXNCbG9nID0gXCJodHRwczovL291ci5zdGF0dXMuaW0vZ2hvc3QvYXBpL3YyL2NvbnRlbnQvcG9zdHMvP2tleT0xMGU3ZjhjMWY3OTNkMjk0NWVhMTE3NzA3NiZmaWx0ZXI9dGFnOm5pbSZsaW1pdD1hbGwmaW5jbHVkZT1hdXRob3JzXCI7XG5cbmNvbnN0IHN1YnNwYWNlQmxvZyA9IFwiaHR0cHM6Ly9vdXIuc3RhdHVzLmltL2dob3N0L2FwaS92Mi9jb250ZW50L3Bvc3RzLz9rZXk9MTBlN2Y4YzFmNzkzZDI5NDVlYTExNzcwNzYmZmlsdGVyPXRhZzpzdWJzcGFjZSZsaW1pdD1hbGwmaW5jbHVkZT1hdXRob3JzXCI7XG5cbmxldCBlbWJhcmtEYXRhOiBhbnkgPSAnJztcbmxldCBwYXJzZWRFbWJhcmtEYXRhOmFueSA9IFtdO1xuXG5sZXQgbmltYnVzRGF0YTogYW55ID0gJyc7XG5sZXQgcGFyc2VkTmltYnVzRGF0YTphbnkgPSBbXTtcblxubGV0IHN1YnNwYWNlRGF0YTogYW55ID0gJyc7XG5sZXQgcGFyc2VkU3Vic3BhY2VEYXRhOmFueSA9IFtdO1xuXG5pbnRlcmZhY2UgTmltYnVzQmxvZyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBwdWJsaXNoZWRfYXQ6IHN0cmluZztcbiAgICBwcmltYXJ5X2F1dGhvcjogYW55O1xuICAgIGV4Y2VycHQ6IHN0cmluZztcbiAgICBmZWF0dXJlX2ltYWdlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdWJzcGFjZUJsb2cge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGlzaGVkX2F0OiBzdHJpbmc7XG4gICAgcHJpbWFyeV9hdXRob3I6IGFueTtcbiAgICBleGNlcnB0OiBzdHJpbmc7XG4gICAgZmVhdHVyZV9pbWFnZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRmV0Y2hFbWJhcmsgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7Q09SU19QUk9YWX1gKyBgJHtlbWJhcmtCbG9nfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBlbWJhcmtEYXRhID0gZGF0YVxuICAgICAgICBwYXJzZVN0cmluZyhlbWJhcmtEYXRhLCBmdW5jdGlvbiAoZXJyOmFueSwgcmVzdWx0OmFueSkge1xuICAgICAgICAgICAgY29uc3QgZW50cmllczogQXJyYXk8YW55PiA9IHJlc3VsdC5mZWVkLmVudHJ5O1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGVudHJ5LmNhdGVnb3J5WzBdWyckJ11bJ3Rlcm0nXVxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ3R1dG9yaWFscycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdERhdGE6IGFueSA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhLnRpdGxlID0gZW50cnkudGl0bGVbMF07XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhLnB1Ymxpc2hlZCA9IGVudHJ5LnB1Ymxpc2hlZFswXTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEudXJsID0gZW50cnkuaWRbMF07XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhLnN1bW1hcnkgPSBlbnRyeS5zdW1tYXJ5WzBdLl87XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEVtYmFya0RhdGEucHVzaChwb3N0RGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgRmV0Y2hPbGRFbWJhcmsoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEZldGNoT2xkRW1iYXJrID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKGAke0NPUlNfUFJPWFl9YCsgYCR7ZW1iYXJrT2xkQmxvZ31gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgZW1iYXJrRGF0YSA9IGRhdGFcbiAgICAgICAgcGFyc2VTdHJpbmcoZW1iYXJrRGF0YSwgZnVuY3Rpb24gKGVycjphbnksIHJlc3VsdDphbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXM6IEFycmF5PGFueT4gPSByZXN1bHQuZmVlZC5lbnRyeTtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBlbnRyeS5jYXRlZ29yeVswXVsnJCddWyd0ZXJtJ11cbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVudHJ5LnRpdGxlWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrRHVwbGljYXRlID0gdGl0bGUgPT0gXCJIb3cgdG8gdXBncmFkZSB0byBFbWJhcmsgNFwiIHx8IHRpdGxlID09IFwiSW50cm9kdWN0aW9uIHRvIFdlYjMgLSBXaGF0IEFyZSBZb3VyIE9wdGlvbnM/XCIgfHwgXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLmluY2x1ZGVzKFwiTmltIHZzIENyeXN0YWxcIilcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09ICd0dXRvcmlhbHMnICYmICFjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0RGF0YTogYW55ID0ge31cbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEudGl0bGUgPSBlbnRyeS50aXRsZVswXTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEucHVibGlzaGVkID0gZW50cnkucHVibGlzaGVkWzBdO1xuICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YS51cmwgPSBlbnRyeS5pZFswXTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEuc3VtbWFyeSA9IGVudHJ5LnN1bW1hcnlbMF0uXztcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkRW1iYXJrRGF0YS5wdXNoKHBvc3REYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgRmV0Y2hOaW1idXMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7Q09SU19QUk9YWX1gKyBgJHtuaW1idXNCbG9nfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBuaW1idXNEYXRhID0gZGF0YS5wb3N0c1xuICAgICAgICBuaW1idXNEYXRhLmZvckVhY2goKGVudHJ5OiBOaW1idXNCbG9nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0RGF0YTogYW55ID0ge31cbiAgICAgICAgICAgIHBvc3REYXRhLnRpdGxlID0gZW50cnkudGl0bGU7XG4gICAgICAgICAgICBwb3N0RGF0YS5wdWJsaXNoZWRfYXQgPSBlbnRyeS5wdWJsaXNoZWRfYXQ7XG4gICAgICAgICAgICBwb3N0RGF0YS5leGNlcnB0ID0gZW50cnkuZXhjZXJwdDtcbiAgICAgICAgICAgIHBvc3REYXRhLmF1dGhvciA9IGVudHJ5LnByaW1hcnlfYXV0aG9yLm5hbWU7XG4gICAgICAgICAgICBwb3N0RGF0YS5mZWF0dXJlX2ltYWdlID0gZW50cnkuZmVhdHVyZV9pbWFnZTtcbiAgICAgICAgICAgIHBvc3REYXRhLnVybCA9IGVudHJ5LnVybDtcbiAgICAgICAgICAgIHBhcnNlZE5pbWJ1c0RhdGEucHVzaChwb3N0RGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IEZldGNoU3Vic3BhY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYCR7Q09SU19QUk9YWX1gKyBgJHtzdWJzcGFjZUJsb2d9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHN1YnNwYWNlRGF0YSA9IGRhdGEucG9zdHNcbiAgICAgICAgc3Vic3BhY2VEYXRhLmZvckVhY2goKGVudHJ5OiBTdWJzcGFjZUJsb2cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhOiBhbnkgPSB7fVxuICAgICAgICAgICAgcG9zdERhdGEudGl0bGUgPSBlbnRyeS50aXRsZTtcbiAgICAgICAgICAgIHBvc3REYXRhLnB1Ymxpc2hlZF9hdCA9IGVudHJ5LnB1Ymxpc2hlZF9hdDtcbiAgICAgICAgICAgIHBvc3REYXRhLmV4Y2VycHQgPSBlbnRyeS5leGNlcnB0O1xuICAgICAgICAgICAgcG9zdERhdGEuYXV0aG9yID0gZW50cnkucHJpbWFyeV9hdXRob3IubmFtZTtcbiAgICAgICAgICAgIHBvc3REYXRhLmZlYXR1cmVfaW1hZ2UgPSBlbnRyeS5mZWF0dXJlX2ltYWdlO1xuICAgICAgICAgICAgcG9zdERhdGEudXJsID0gZW50cnkudXJsO1xuICAgICAgICAgICAgcGFyc2VkU3Vic3BhY2VEYXRhLnB1c2gocG9zdERhdGEpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBIb21lQWN0aW9ucyA9IHtcbiAgICBNYXA6IChwYXlsb2FkOiB7fSkgPT4gKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcbiAgICB9KSxcblxuICAgIFJlc2V0OiAoKSA9PiAoe1xuICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5SZXNldFJlZHVjZXIsXG4gICAgfSksXG5cbiAgICBHZXRFbWJhcmtEYXRhOiAocGF5bG9hZDogSUhvbWVQYWdlLkFjdGlvbnMuRW1iYXJrRGF0YSkgPT4gYXN5bmMgKFxuICAgICAgICBkaXNwYXRjaDogRGlzcGF0Y2hcbiAgICApID0+IHtcbiAgICAgICAgYXdhaXQgRmV0Y2hFbWJhcmsoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVtYmFya0RhdGE6IHBhcnNlZEVtYmFya0RhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZEVtYmFya0RhdGEgPSBbXVxuICAgIH0sXG5cbiAgICBHZXROaW1idXNEYXRhOiAocGF5bG9hZDogSUhvbWVQYWdlLkFjdGlvbnMuRW1iYXJrRGF0YSkgPT4gYXN5bmMgKFxuICAgICAgICBkaXNwYXRjaDogRGlzcGF0Y2hcbiAgICApID0+IHtcbiAgICAgICAgYXdhaXQgRmV0Y2hOaW1idXMoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIG5pbWJ1c0RhdGE6IHBhcnNlZE5pbWJ1c0RhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZE5pbWJ1c0RhdGEgPSBbXVxuICAgIH0sXG5cbiAgICBBY3RpdmU6IChhY3RpdmVJbmRleDogYW55KSA9PiBhc3luYyAoXG4gICAgICAgIGRpc3BhdGNoOiBEaXNwYXRjaFxuICAgICkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmVJbmRleCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5TZXRSZWR1Y2VyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Actions/HomeActions/index.ts\n");

/***/ }),

/***/ "./src/Actions/index.ts":
/*!******************************!*\
  !*** ./src/Actions/index.ts ***!
  \******************************/
/*! exports provided: FetchEmbark, FetchOldEmbark, FetchNimbus, FetchSubspace, HomeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _HomeActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeActions */ \"./src/Actions/HomeActions/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FetchEmbark\", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__[\"FetchEmbark\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FetchOldEmbark\", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__[\"FetchOldEmbark\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FetchNimbus\", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__[\"FetchNimbus\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FetchSubspace\", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__[\"FetchSubspace\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HomeActions\", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__[\"HomeActions\"]; });\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9pbmRleC50cz82ZTEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QiIsImZpbGUiOiIuL3NyYy9BY3Rpb25zL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vSG9tZUFjdGlvbnNcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Actions/index.ts\n");

/***/ })

})