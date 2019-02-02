# Components

## Breadcrumb

パンくずリストのインクルードの例を以下に示す。

```
<%- include(sitedata.path.relative + '_partials/_breadcrumb', {breadcrumbList: ['第二階層', '第三階層'], breadcrumbLink: ['/standards/example.html', '/example.html']}) %>
```

コンパイル結果は以下の通りになる。構造化データの形式は、Microdata を使用する。

``` html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="http://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <a href="/" itemprop="item"><span itemprop="name">第一階層</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <a href="/standards/example.html" itemprop="item"><span itemprop="name">第二階層</span></a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" aria-current="page">
      <a href="/example.html" itemprop="item"><span itemprop="name">第三階層</span></a>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

### Microdata vs JSON-LD

Google は、構造化データには JSON-LD の使用を推奨している。しかし、テンプレートエンジンに構造化データを組み込む際、`script` 要素に構造化データを切り離す JSON-LD より Microdata のほうが都合がよい。

## Card

基本的なカードの例を以下に示す。Flexbox の設計は、各カードのコンテンツ量に依存しない高さ（=高さ合わせ）を可能にする。カード全体をクリッカブルにする場合、スクリーンリーダーの冗長な読み上げを避けるため、擬似要素でカード全体をクリッカブルにする方法を推奨する。

<card>Some quick example text to build on the card title and make up the bulk of the card's content.</card>

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
  <card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni, suscipit rem veritatis recusandae, quidem quo dicta incidunt, eos quas nisi soluta cum harum impedit!</card>
  <card>Some quick example text to build on the card title and make up the bulk of the card's content.</card>
  <card>Ten common pitfalls to avoid when designing card components.</card>
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
