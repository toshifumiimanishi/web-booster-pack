"use strict";

var drawer = function () {
  var toggle = document.querySelector('.js-drawer');
  var dismiss = document.querySelector('.js-drawer-dismiss');
  var target = toggle.getAttribute('aria-controls');
  var drawer = document.querySelector("#".concat(target));
  var isExpanded = toggle.getAttribute('aria-expanded') === 'true' || false;

  var _init = function _init() {
    _handle();
  };

  var _handle = function _handle() {
    toggle.addEventListener('click', _toggle, false);
    dismiss.addEventListener('click', _toggle, false);
  };

  var _toggle = function _toggle() {
    isExpanded = !isExpanded;

    if (isExpanded) {
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  };

  return {
    init: _init
  };
}();

drawer.init();