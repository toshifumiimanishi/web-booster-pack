<template>
  <div class="c-modal -overlay modal-01" role="dialog" aria-hidden="true">
    <div class="c-modal_container">
      <div class="c-modal_contents" role="document">
        <div class="c-modal_content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet necessitatibus, rem quae sint cupiditate
            qui reprehenderit nostrum hic repellendus cum quia corporis rerum fugit! Natus illum eius odio maiores
            vero.</p>
          <button class="c-modal_btn c-btn" type="button" data-dismiss="modal" aria-label="close">Close</button>
          <button class="c-modal_btn -floating" type="button" data-dismiss="modal" aria-label="close">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
      const toggleButton = document.querySelectorAll('.js-toggle-modal');
  let currentScrollY = 0;

  toggleButton.forEach(element => {
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

    element.addEventListener('keydown', event => {
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
  }
}
</script>

<style lang="scss" scoped>
.c-modal {
  z-index: 1005;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(#000, 0.7);
  transition: all 0.3s ease;
  overflow-y: auto;
  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
  }
}

.c-modal_container {
  display: flex;
  min-height: 100%;
  align-items: center;

  // 以下、IE11 ハック
  _:-ms-lang(x)::-ms-backdrop,
  & {
    min-height: 100vh;
  }
  &::after {
    content: "";
    min-height: inherit;
    font-size: 0;
  }
}

.c-modal_contents {
  position: relative;
  margin: 64px auto;
  width: 100%;
}

.c-modal_content {
  display: none;
  padding: 1.6rem;
  border-radius: 2px;
  background: #fff;
  [aria-hidden="false"] & {
    display: block;
  }
}

.c-modal_btn {
  &.-floating {
    position: absolute;
    top: -54px;
    right: 10px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
  }
}
</style>
