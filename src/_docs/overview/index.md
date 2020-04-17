# Overview

## Breakpoints design

CSS のメディアクエリは、レスポンシブ Web デザインを利用したデバイスに合わせたデザインを作ることができます。当ボイラープレートは標準でブレークポイントを用意しています。ブレークポイントの設定は自由に編集できます。具体的には `_variables.scss` の `$breakpoints` マップを変更してください。デフォルトのブレークポイントは以下の通りです。

```scss
$breakpoints: (
  sm: 0,
  md: 768px,
  lg: 1280px,
) !default;
```

また、ブレークポイントでスタイルを切り替えるメディアクエリの指定は [Sass](https://sass-lang.com/) の `@mixin` 経由で利用できます。たとえば、md（768px）以上の画面サイズに適用したいスタイルを指定するには次のようになります。

```scss
@include breakpoint-min(md) { ... }
```

なお、当ブレークポイントの設計は CSS フレームワークの [Bootstrap](https://getbootstrap.com/) を参考にしています。
