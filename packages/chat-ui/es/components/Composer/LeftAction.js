import React from 'react';
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '50%',
      backgroundColor: "#4F378B",
      color: '#FFFFFF',
      padding: '7px 14px'
    }
  }, firstLetter);
};
export default LeftAction;