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

## Modal

モーダルは HTML、CSS、および JavaScript で構築されている。モーダルの発火には、`.js-toggle-modal` を追加し、`data-target` でモーダルのターゲットを設定する。モーダルの起動例を以下に示す。

<button class="js-toggle-modal" data-target=".modal-01" type="button">Launch modal</button>
``` html
<button class="js-toggle-modal" data-target=".modal-01" type="button">Launch modal</button>
```
<modal />
