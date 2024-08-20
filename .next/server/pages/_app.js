/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/styles/navbar.module.scss":
/*!***************************************!*\
  !*** ./src/styles/navbar.module.scss ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"navbar_navbar__O5KRa\",\n\t\"menu\": \"navbar_menu__hF2Fg\",\n\t\"menuItem\": \"navbar_menuItem__ACBQO\",\n\t\"subMenu\": \"navbar_subMenu__AzRZf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL25hdmJhci5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldF9ibGVjd2ViX2VycC8uL3NyYy9zdHlsZXMvbmF2YmFyLm1vZHVsZS5zY3NzPzUzZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwibmF2YmFyX25hdmJhcl9fTzVLUmFcIixcblx0XCJtZW51XCI6IFwibmF2YmFyX21lbnVfX2hGMkZnXCIsXG5cdFwibWVudUl0ZW1cIjogXCJuYXZiYXJfbWVudUl0ZW1fX0FDQlFPXCIsXG5cdFwic3ViTWVudVwiOiBcIm5hdmJhcl9zdWJNZW51X19BelJaZlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/navbar.module.scss\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.js\n\n\n\n\n\nfunction MyApp({ Component, pageProps, menuData, isAuthenticated }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                menuData: menuData,\n                isAuthenticated: isAuthenticated\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    const menuFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"src/data/menu.json\");\n    let menuData = {\n        menu: []\n    };\n    try {\n        const jsonData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(menuFilePath, \"utf-8\");\n        console.log(\"JSON Data:\", jsonData); // Ajoute ce log pour vérifier le contenu du fichier\n        menuData = JSON.parse(jsonData);\n    } catch (error) {\n        console.error(\"Failed to load menu.json:\", error);\n    }\n    return {\n        props: {\n            menuData,\n            isAuthenticated: false\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUNJO0FBQ0k7QUFDc0I7QUFDWDtBQUVuQyxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRTtJQUNoRSxxQkFDRTs7MEJBQ0UsOERBQUNMLDhEQUFNQTtnQkFBQ0ksVUFBVUE7Z0JBQVVDLGlCQUFpQkE7Ozs7OzswQkFDN0MsOERBQUNIO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCO0FBRU8sZUFBZUc7SUFDcEIsTUFBTUMsZUFBZVIsZ0RBQVMsQ0FBQ1UsUUFBUUMsR0FBRyxJQUFJO0lBQzlDLElBQUlOLFdBQVc7UUFBRU8sTUFBTSxFQUFFO0lBQUM7SUFFMUIsSUFBSTtRQUNGLE1BQU1DLFdBQVdkLHNEQUFlLENBQUNTLGNBQWM7UUFDL0NPLFFBQVFDLEdBQUcsQ0FBQyxjQUFjSCxXQUFXLG9EQUFvRDtRQUN6RlIsV0FBV1ksS0FBS0MsS0FBSyxDQUFDTDtJQUN4QixFQUFFLE9BQU9NLE9BQU87UUFDZEosUUFBUUksS0FBSyxDQUFDLDZCQUE2QkE7SUFDN0M7SUFFQSxPQUFPO1FBQ0xDLE9BQU87WUFDTGY7WUFDQUMsaUJBQWlCO1FBQ25CO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlSixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0X2JsZWN3ZWJfZXJwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAuanNcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIG1lbnVEYXRhLCBpc0F1dGhlbnRpY2F0ZWQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIG1lbnVEYXRhPXttZW51RGF0YX0gaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBtZW51RmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYy9kYXRhL21lbnUuanNvbicpO1xyXG4gIGxldCBtZW51RGF0YSA9IHsgbWVudTogW10gfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGpzb25EYXRhID0gZnMucmVhZEZpbGVTeW5jKG1lbnVGaWxlUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnSlNPTiBEYXRhOicsIGpzb25EYXRhKTsgLy8gQWpvdXRlIGNlIGxvZyBwb3VyIHbDqXJpZmllciBsZSBjb250ZW51IGR1IGZpY2hpZXJcclxuICAgIG1lbnVEYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBtZW51Lmpzb246XCIsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZW51RGF0YSxcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWVudURhdGEiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRTdGF0aWNQcm9wcyIsIm1lbnVGaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwibWVudSIsImpzb25EYXRhIiwicmVhZEZpbGVTeW5jIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1_sass@1.77.8/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/navbar.module.scss */ \"./src/styles/navbar.module.scss\");\n/* harmony import */ var _styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Navbar = ({ menuData = {\n    menu: []\n}, isAuthenticated })=>{\n    console.log(\"Navbar Menu Data:\", menuData); // Log pour vérifier les données reçues\n    const renderMenuItems = (menuItems)=>{\n        return menuItems.map((menuItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menuItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: menuItem.url,\n                        children: menuItem.label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    menuItem.subMenu && menuItem.subMenu.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subMenu),\n                        children: renderMenuItems(menuItem.subMenu)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navbar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_navbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu),\n            children: menuData.menu.length > 0 ? renderMenuItems(menuData.menu) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: \"No menu available\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 23,\n                columnNumber: 70\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cide7\\\\Documents\\\\blecweb_enterprise\\\\client\\\\0001 Blecweb\\\\bw_site_erp_nextjs_pg\\\\src\\\\components\\\\Navbar.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDcUI7QUFFbEQsTUFBTUUsU0FBUyxDQUFDLEVBQUVDLFdBQVc7SUFBRUMsTUFBTSxFQUFFO0FBQUMsQ0FBQyxFQUFFQyxlQUFlLEVBQUU7SUFDMURDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJKLFdBQVcsdUNBQXVDO0lBRW5GLE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QixPQUFPQSxVQUFVQyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQzlCLDhEQUFDQztnQkFBZUMsV0FBV2IsNEVBQWU7O2tDQUN4Qyw4REFBQ0Qsa0RBQUlBO3dCQUFDZSxNQUFNSixTQUFTSyxHQUFHO2tDQUFHTCxTQUFTTSxLQUFLOzs7Ozs7b0JBQ3hDTixTQUFTTyxPQUFPLElBQUlQLFNBQVNPLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLG1CQUM3Qyw4REFBQ0M7d0JBQUdOLFdBQVdiLDJFQUFjO2tDQUMxQk8sZ0JBQWdCRyxTQUFTTyxPQUFPOzs7Ozs7O2VBSjlCTjs7Ozs7SUFTYjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJUCxXQUFXYiwwRUFBYTtrQkFDM0IsNEVBQUNtQjtZQUFHTixXQUFXYix3RUFBVztzQkFDdkJFLFNBQVNDLElBQUksQ0FBQ2UsTUFBTSxHQUFHLElBQUlYLGdCQUFnQkwsU0FBU0MsSUFBSSxrQkFBSSw4REFBQ1M7MEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7QUFFQSxpRUFBZVgsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldF9ibGVjd2ViX2VycC8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcz8zZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL25hdmJhci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBtZW51RGF0YSA9IHsgbWVudTogW10gfSwgaXNBdXRoZW50aWNhdGVkIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnTmF2YmFyIE1lbnUgRGF0YTonLCBtZW51RGF0YSk7IC8vIExvZyBwb3VyIHbDqXJpZmllciBsZXMgZG9ubsOpZXMgcmXDp3Vlc1xyXG5cclxuICBjb25zdCByZW5kZXJNZW51SXRlbXMgPSAobWVudUl0ZW1zKSA9PiB7XHJcbiAgICByZXR1cm4gbWVudUl0ZW1zLm1hcCgobWVudUl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17bWVudUl0ZW0udXJsfT57bWVudUl0ZW0ubGFiZWx9PC9MaW5rPlxyXG4gICAgICAgIHttZW51SXRlbS5zdWJNZW51ICYmIG1lbnVJdGVtLnN1Yk1lbnUubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc3ViTWVudX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJNZW51SXRlbXMobWVudUl0ZW0uc3ViTWVudSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAge21lbnVEYXRhLm1lbnUubGVuZ3RoID4gMCA/IHJlbmRlck1lbnVJdGVtcyhtZW51RGF0YS5tZW51KSA6IDxsaT5ObyBtZW51IGF2YWlsYWJsZTwvbGk+fVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJOYXZiYXIiLCJtZW51RGF0YSIsIm1lbnUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyTWVudUl0ZW1zIiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJpbmRleCIsImxpIiwiY2xhc3NOYW1lIiwiaHJlZiIsInVybCIsImxhYmVsIiwic3ViTWVudSIsImxlbmd0aCIsInVsIiwibmF2IiwibmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.5_react-dom@18.3.1_react@18.3.1_sass@1.77.8","vendor-chunks/@swc+helpers@0.5.5"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();