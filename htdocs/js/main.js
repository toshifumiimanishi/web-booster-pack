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

var modal = function () {
  var toggleButton = document.querySelectorAll('.js-toggle-modal');
  var currentScrollY = 0;
  toggleButton.forEach(function (element) {
    var target = document.querySelector(element.dataset.target);
    var dialog = target.querySelector('[role="document"]');
    var dismissButton = target.querySelectorAll('[data-dismiss="modal"]');
    element.addEventListener('click', function () {
      _launch(target);
    });
    dismissButton.forEach(function (element) {
      element.addEventListener('click', function () {
        _dismiss(target);
      });
    });
    target.addEventListener('click', function () {
      _dismiss(target);
    });
    dialog.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    element.addEventListener('keydown', function (event) {
      var escKeyCode = 27;

      if (event.keyCode === escKeyCode) {
        _dismiss(target);
      }
    });

    function _launch(element) {
      _activateScrollLock();

      element.setAttribute('aria-hidden', 'false');
    }

    function _dismiss(element) {
      _deactivateScrollLock();

      element.setAttribute('aria-hidden', 'true');
    }

    function _activateScrollLock() {
      var scrollbarWidth = window.innerWidth - document.body.clientWidth;
      currentScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = "-".concat(currentScrollY, "px");
      document.body.style.right = '0';
      document.body.style.left = '0';
      document.body.style.paddingRight = "".concat(scrollbarWidth, "px");
    }

    function _deactivateScrollLock() {
      document.body.setAttribute('style', '');
      window.scrollTo(0, currentScrollY);
    }
  });
}();