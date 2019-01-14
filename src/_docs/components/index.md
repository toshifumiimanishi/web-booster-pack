# Components

## Card

基本的なカードの例を以下に示す。Flexbox の設計は、各カードのコンテンツ量に依存しない高さ（=高さ合わせ）を可能にする。

<div class="c-card">
  <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
  <div class="c-card_body">
    <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
    <div class="c-card_txt">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
    <small>Last updated 3 mins ago</small>
  </div>
</div>

``` html
<div class="c-card">
  <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
  <div class="c-card_body">
    <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
    <div class="c-card_txt">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
    <small>Last updated 3 mins ago</small>
  </div>
</div>
```

## Card layout

グリッドレイアウトの組み合わせを以下に示す。

<div class="c-grid">
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni, suscipit rem veritatis recusandae, quidem quo dicta incidunt, eos quas nisi soluta cum harum impedit!</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Ten common pitfalls to avoid when designing card components.</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
</div>

``` html
<div class="c-grid">
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni, suscipit rem veritatis recusandae, quidem quo dicta incidunt, eos quas nisi soluta cum harum impedit!</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="c-card">
    <div class="c-card_header"><img src="https://fakeimg.pl/300x200/282828/eae0d0/?retina=1&text=Dummy Image"></div>
    <div class="c-card_body">
      <div class="c-card_tit"><a class="c-card_link" href="">Card title</a></div>
      <div class="c-card_txt">Ten common pitfalls to avoid when designing card components.</div>
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
</div>
```