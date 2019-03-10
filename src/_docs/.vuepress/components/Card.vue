<template>
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt"><slot></slot></div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.c-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 0.25rem;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 0 0.25rem;
  }
  &:focus-within {
    box-shadow: 0 0 0 0.25rem;
  }
}

.c-card_header {
  flex-shrink: 0;
}

.c-card_body {
  display: flex;
  flex-direction: column;
  padding: 2em;
  background-color: #e9ebef;
  flex-grow: 1;

  > * + * {
    margin-top: 0.75rem;
  }

  :nth-last-child(2) {
    margin-bottom: 0.75rem;
  }

  :last-child {
    margin-top: auto;
  }
}

.c-card_tit {
  text-align: center;
}

.c-card_link {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
