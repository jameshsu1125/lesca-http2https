"use strict";

module.exports = {
  go: function go() {
    if (window.location.hostname == 'localhost') return;

    if (location.protocol != 'https:') {
      location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
  }
};