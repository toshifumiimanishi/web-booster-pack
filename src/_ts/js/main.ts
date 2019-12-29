const getCssVariables = (customProperty: string) => {
  const root = document.documentElement;
  return getComputedStyle(root).getPropertyValue(customProperty);
};

const breakpoints = {
  sm: getCssVariables('--breakpoint-sm'),
  md: getCssVariables('--breakpoint-md'),
  lg: getCssVariables('--breakpoint-lg')
};

const mq = window.matchMedia(`(min-width: ${breakpoints.md})`);
const handleWindowChange = mq => {
  if (mq.matches) {
    // 画面幅 768px 以上の処理
  } else {
    // 画面幅 768px 未満の処理
  }
};

handleWindowChange(mq);
mq.addListener(handleWindowChange);

const loader = (() => {
  const loader: HTMLElement = document.querySelector('.js-loader');
  const target = loader.dataset.target;

  const _init = () => {
    window.addEventListener('load', () => {
      loader.setAttribute('aria-hidden', 'true');
      document.querySelector(target).setAttribute('aria-busy', 'false');
    });
  };

  return {
    init: _init
  };
})();

loader.init();

const drawer = (() => {
  const toggle = document.querySelector('.js-drawer');
  const dismiss = document.querySelector('.js-drawer-dismiss');
  const target = toggle.getAttribute('aria-controls');
  const drawer = document.querySelector(`#${target}`);
  let isExpanded = toggle.getAttribute('aria-expanded') === 'true' || false;

  const _init = () => {
    _handle();
  };

  const _handle = () => {
    toggle.addEventListener('click', _toggle, false);
    dismiss.addEventListener('click', _toggle, false);
  };

  const _toggle = () => {
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
})();

drawer.init();

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
