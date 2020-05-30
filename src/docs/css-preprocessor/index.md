# CSS Preprocessor

CSS プリプロセッサ（CSS メタ言語）は [Sass](https://sass-lang.com/) を利用します。CSS の記法と互換性がある SCSS 記法、最新機能を早期に利用可能な Dart Sass で開発します。

## Breakpoints design

CSS のメディアクエリは、レスポンシブ Web デザインを利用したデバイスに合わせたデザインを作ることができます。当ボイラープレートはあらかじめブレークポイントの設定を用意しています。ブレークポイントの設定は自由に編集できます。具体的には `_variables.scss` の `$breakpoints` マップを変更してください。デフォルトのブレークポイントは以下の通りです。

```scss
$breakpoints: (
  sm: 0,
  md: 768px,
  lg: 1280px,
) !default;
```

また、ブレークポイントでスタイルを切り替えるメディアクエリの指定は [Sass](https://sass-lang.com/) の `@mixin` 経由で利用できます。

### breakpoint-up

メディア特性の範囲特性「最小条件」の `@mixin` になります。

```scss
@include breakpoint-up(sm) { ... }
@include breakpoint-up(md) { ... }
@include breakpoint-up(lg) { ... }
```

以下のように出力されます。

```css
/* breakpoint-up(sm) は画面幅が 0px 以上になるゆえにメディアクエリは使用されません。 */
@media (min-width: 768px) { ... }
@media (min-width: 1280px) { ... }
```

### breakpoint-down

メディア特性の範囲特性「最大条件」の `@mixin` になります。

```scss
// breakpoint-down(sm)は画面幅 0px 以下になるゆえにメディアクエリは使用されません。
@include breakpoint-down(md) { ... }
@include breakpoint-down(lg) { ... }
```

以下のように出力されます。

```css
@media (max-width: 767.8px) { ... }
@media (max-width: 1279.8px) { ... }
```

[Safari の端数処理](https://bugs.webkit.org/show_bug.cgi?id=178261)を考慮して 0.01px ではなく 0.02px を使用します。

### breakpoint-between

メディア特性の範囲特性「最小条件」から「最大条件」を指定できる `@mixin` になります。

```scss
@include breakpoint-between(sm, md) { ... }
@include breakpoint-between(md, lg) { ... }
```

以下のように出力されます。

```css
@media (max-width: 767.98px) { ... }
@media (min-width: 768px) and (max-width: 1279.98px)  { ... }
```

### breakpoint-only

メディア特性の範囲特性を限定する `@mixin` になります。

```scss
@include breakpoint-only(sm) { ... }
@include breakpoint-only(md) { ... }
@include breakpoint-only(lg) { ... }
```

以下のように出力されます。

```css
@media (max-width: 767.98px) { ... }
@media (min-width: 768px) and (max-width: 1279.98px)  { ... }
@media (min-width: 1280px) { ... }
```

なお、当ブレークポイントの設計は CSS フレームワークの [Bootstrap](https://getbootstrap.com/) を参考にしています。
