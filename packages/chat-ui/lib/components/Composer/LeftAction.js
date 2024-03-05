"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var LeftAction = function LeftAction(_ref) {
  var _userName$trim$;
  var userName = _ref.userName;
  console.log("user name:", {
    userName: userName
  });
  var firstLetter = userName && (userName === null || userName === void 0 || (_userName$trim$ = userName.trim()[0]) === null || _userName$trim$ === void 0 ? void 0 : _userName$trim$.toUpperCase());
  if (!userName) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      borderRadius: '50%',
      backgroundColor: "#4F378B",
      color: '#FFFFFF',
      padding: '7px 14px'
    }
  }, firstLetter);
};
var _default = exports.default = LeftAction;