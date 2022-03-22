"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHttps = exports.toHttp = exports["default"] = void 0;

var toHttps = function toHttps() {
  if (window.location.hostname == 'localhost') return;

  if (location.protocol != 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
};

exports.toHttps = toHttps;

var toHttp = function toHttp() {
  if (window.location.hostname == 'localhost') return;

  if (location.protocol != 'http:') {
    location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
  }
};

exports.toHttp = toHttp;
var Http2https = toHttps;
var _default = Http2https;
exports["default"] = _default;