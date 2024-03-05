import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import Tooltip from '../Composer/Tooltip';
export var Navbar = function Navbar(props) {
  var className = props.className,
    title = props.title,
    logo = props.logo,
    leftContent = props.leftContent,
    refreshLabel = props.refreshLabel;
  return /*#__PURE__*/React.createElement("header", {
    className: clsx('Navbar', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "Navbar-left"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-main"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    className: "Navbar-logo",
    src: logo,
    alt: title
  }) : /*#__PURE__*/React.createElement("h2", {
    className: "Navbar-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "Navbar-right"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: refreshLabel
  }, leftContent && /*#__PURE__*/React.createElement(IconButton, _extends({
    size: "lg"
  }, leftContent)))));
};