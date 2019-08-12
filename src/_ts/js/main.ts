const modal = (function() {
  const toggleButton = document.querySelectorAll('.js-toggle-modal');
  let currentScrollY = 0;

  toggleButton.forEach((element: HTMLElement) => {
    const target = document.querySelector(element.dataset.target);
    const dialog = target.querySelector('[role="document"]');
    const dismissButton = target.querySelectorAll('[data-dismiss="modal"]');

    element.addEventListener('click', () => {
      _launch(target);
    });

    dismissButton.forEach(element => {
      element.addEventListener('click', () => {
        _dismiss(target);
      });
    });

    target.addEventListener('click', () => {
      _dismiss(target);
    });

    dialog.addEventListener('click', event => {
      event.stopPropagation();
    });

    element.addEventListener('keydown', (event: KeyboardEvent) => {
      const escKeyCode = 27;

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
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      currentScrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.right = '0';
      document.body.style.left = '0';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function _deactivateScrollLock() {
      document.body.setAttribute('style', '');
      window.scrollTo(0, currentScrollY);
    }
  });
})();
