# Template Engine

テンプレートエンジンは [EJS](https://ejs.co/) を利用します。EJS は HTML ベースの構文で可読性があり、シンプルな機能を兼ね備えた軽量なテンプレートエンジンです。EJS には include 機能があります。当ボイラープレートには、あらかじめ用意した include ファイルを以下に示します。

## Metadata

HTML のメタ情報を管理するためのパーシャルファイルになります。パーシャルファイルはファイル名の先頭に _（アンダースコア）を慣習的につけます。メタ情報のデータは `data/_meta.json` で管理します。ローカル変数 `page` は `data/_meta.json` で管理されているページ名を参照します。

```
<%- include(sitedata.path.relative + 'partials/_meta', {page: 'top'})%>
```

::: tip Column
`og:type` はトップページに `website`、下層ページに `article` を指定することが慣例です。
:::

## Breadcrumb

パンくずリストのインクルードの例を以下に示します。

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

::: tip Column
### Microdata vs JSON-LD

Google は構造化データには JSON-LD の使用を推奨しています。しかし、テンプレートエンジンに構造化データを組み込む際、`script` 要素に構造化データを切り離す JSON-LD より Microdata のほうが都合がよいかと思います。
:::
