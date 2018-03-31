webpackJsonp([1],{

/***/ "./resources/assets/js/app.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App_jsx__ = __webpack_require__("./resources/assets/js/components/App.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_App_jsx__["a" /* default */], null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_jsx__ = __webpack_require__("./resources/assets/js/components/Footer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Host_jsx__ = __webpack_require__("./resources/assets/js/components/Host.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Information_jsx__ = __webpack_require__("./resources/assets/js/components/Information.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Main_jsx__ = __webpack_require__("./resources/assets/js/components/Main.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                __WEBPACK_IMPORTED_MODULE_3__Main_jsx__["a" /* default */],
                { title: 'Oh Baby!' },
                React.createElement(__WEBPACK_IMPORTED_MODULE_1__Host_jsx__["a" /* default */], { name: 'Pamella Agostini' }),
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__Information_jsx__["a" /* default */], null),
                React.createElement(
                    __WEBPACK_IMPORTED_MODULE_0__Footer_jsx__["a" /* default */],
                    null,
                    'Gifts registered at ',
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Amazon.com'
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Information = function (_React$Component) {
    _inherits(Information, _React$Component);

    function Information() {
        _classCallCheck(this, Information);

        return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
    }

    _createClass(Information, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "footer",
                null,
                this.props.children
            );
        }
    }]);

    return Information;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Information);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Host.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Host = function (_React$Component) {
    _inherits(Host, _React$Component);

    function Host() {
        _classCallCheck(this, Host);

        return _possibleConstructorReturn(this, (Host.__proto__ || Object.getPrototypeOf(Host)).apply(this, arguments));
    }

    _createClass(Host, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Please, join us at a baby shower in honor of"
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.name
                )
            );
        }
    }]);

    return Host;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Host);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Information.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Information = function (_React$Component) {
    _inherits(Information, _React$Component);

    function Information() {
        _classCallCheck(this, Information);

        return _possibleConstructorReturn(this, (Information.__proto__ || Object.getPrototypeOf(Information)).apply(this, arguments));
    }

    _createClass(Information, [{
        key: "render",
        value: function render() {
            return React.createElement("div", null);
        }
    }]);

    return Information;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Information);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/js/components/Main.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { "class": "flex flex-wrap h-screen items-center justify-center" },
                React.createElement(
                    "div",
                    { "class": "text-center w-64" },
                    React.createElement(
                        "h1",
                        null,
                        this.props.title
                    ),
                    this.props.children
                )
            );
        }
    }]);

    return Main;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Main);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/react/index.js")))

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.jsx");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvc3QuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01haW4uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzcz8yODI5Il0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5mb3JtYXRpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiSG9zdCIsIm5hbWUiLCJNYWluIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLGlEQUFBQSxDQUFTQyxNQUFULENBQWdCLG9CQUFDLG9FQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkMsRzs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFDLDBFQUFEO0FBQUEsa0JBQU0sT0FBTSxVQUFaO0FBQ0ksb0NBQUMsMERBQUQsSUFBTSxNQUFLLGtCQUFYLEdBREo7QUFFSSxvQ0FBQyxpRUFBRCxPQUZKO0FBR0k7QUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFDd0I7QUFBQTtBQUFBLDBCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFEeEI7QUFISixhQURKO0FBU0g7Ozs7RUFYNEJDLE1BQU1DLFM7O3lEQUFsQkYsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMQUcsVzs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFBO0FBQUE7QUFBVSxxQkFBS0MsS0FBTCxDQUFXQztBQUFyQixhQURKO0FBR0g7Ozs7RUFMb0NKLE1BQU1DLFM7O3lEQUExQkMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQUcsSTs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQU0seUJBQUtGLEtBQUwsQ0FBV0c7QUFBakI7QUFGSixhQURKO0FBTUg7Ozs7RUFSNkJOLE1BQU1DLFM7O3lEQUFuQkksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQUgsVzs7Ozs7Ozs7Ozs7aUNBQ1A7QUFDTixtQkFDSSxnQ0FESjtBQUdIOzs7O0VBTG9DRixNQUFNQyxTOzt5REFBMUJDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUFLLEk7Ozs7Ozs7Ozs7O2lDQUNQO0FBQ04sbUJBQ0k7QUFBQTtBQUFBLGtCQUFTLFNBQU0scURBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssU0FBTSxrQkFBWDtBQUNJO0FBQUE7QUFBQTtBQUFNLDZCQUFLSixLQUFMLENBQVdLO0FBQWpCLHFCQURKO0FBR00seUJBQUtMLEtBQUwsQ0FBV0M7QUFIakI7QUFESixhQURKO0FBU0g7Ozs7RUFYNkJKLE1BQU1DLFM7O3lEQUFuQk0sSTs7Ozs7Ozs7QUNBckIseUMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanN4IiwiaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qc3gnO1xuaW1wb3J0IEhvc3QgZnJvbSAnLi9Ib3N0LmpzeCc7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSAnLi9JbmZvcm1hdGlvbi5qc3gnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYWluIHRpdGxlPVwiT2ggQmFieSFcIj5cbiAgICAgICAgICAgICAgICA8SG9zdCBuYW1lPVwiUGFtZWxsYSBBZ29zdGluaVwiIC8+XG4gICAgICAgICAgICAgICAgPEluZm9ybWF0aW9uIC8+XG4gICAgICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgR2lmdHMgcmVnaXN0ZXJlZCBhdCA8YSBocmVmPVwiI1wiPkFtYXpvbi5jb208L2E+XG4gICAgICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgICAgICA8L01haW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC5qc3giLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb290ZXI+eyB0aGlzLnByb3BzLmNoaWxkcmVuIH08L2Zvb3Rlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSwgam9pbiB1cyBhdCBhIGJhYnkgc2hvd2VyIGluIGhvbm9yIG9mPC9wPlxuICAgICAgICAgICAgICAgIDxoMj57IHRoaXMucHJvcHMubmFtZSB9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ib3N0LmpzeCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9ybWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvcm1hdGlvbi5qc3giLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdy02NFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01haW4uanN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==