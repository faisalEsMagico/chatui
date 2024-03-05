"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _excluded = ["type", "className", "spin", "name"];
var Icon = exports.Icon = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var type = props.type,
    className = props.className,
    spin = props.spin,
    name = props.name,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var ariaProps = typeof name === 'string' ? {
    'aria-label': name
  } : {
    'aria-hidden': true
  };
  if (type === 'chevron-right') {
    return /*#__PURE__*/_react.default.createElement("svg", {
      fill: "#000",
      height: "18px",
      width: "18px",
      version: "1.1",
      id: "XMLID_287_",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24",
      xmlSpace: "preserve"
    }, /*#__PURE__*/_react.default.createElement("g", {
      id: "next"
    }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("polygon", {
      points: "6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 \t\t"
    }))));
  } else if (type === 'chevron-left') {
    return /*#__PURE__*/_react.default.createElement("svg", {
      fill: "#000",
      height: "18px",
      width: "18px",
      version: "1.1",
      id: "XMLID_54_",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24",
      xmlSpace: "preserve"
    }, /*#__PURE__*/_react.default.createElement("g", {
      id: "previous"
    }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("polygon", {
      points: "17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 \t\t"
    }))));
  } else if (type === 'restart') {
    return /*#__PURE__*/_react.default.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M6 13.285C6 11.635 6.67 10.135 7.76 9.04503L6.34 7.62503C4.9 9.07503 4 11.075 4 13.285C4 17.365 7.05 20.725 11 21.215V19.195C8.17 18.715 6 16.255 6 13.285ZM20 13.285C20 8.86503 16.42 5.28503 12 5.28503C11.94 5.28503 11.88 5.29503 11.82 5.29503L12.91 4.20503L11.5 2.78503L8 6.28503L11.5 9.78503L12.91 8.37503L11.83 7.29503C11.89 7.29503 11.95 7.28503 12 7.28503C15.31 7.28503 18 9.97503 18 13.285C18 16.255 15.83 18.715 13 19.195V21.215C16.95 20.725 20 17.365 20 13.285Z",
      fill: "black"
    }));
  }
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    className: (0, _clsx.default)('Icon', {
      'is-spin': spin
    }, "#svg-icon-".concat(type)),
    ref: ref
  }, ariaProps, other), /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: "#icon-".concat(type)
  }));
});