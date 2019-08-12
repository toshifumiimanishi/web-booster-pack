var modal = (function () {
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
            document.body.style.top = "-" + currentScrollY + "px";
            document.body.style.right = '0';
            document.body.style.left = '0';
            document.body.style.paddingRight = scrollbarWidth + "px";
        }
        function _deactivateScrollLock() {
            document.body.setAttribute('style', '');
            window.scrollTo(0, currentScrollY);
        }
    });
})();
