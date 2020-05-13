# Overview

Website Boilerplate とは、静的な Web サイトを開発するためのボイラープレートです。主にフロントエンドの周辺技術をターゲットに整備しています。具体的な技術スタックは以下の通りです。

| 区分 | 技術スタック |
| --- | --- |
| 言語 | HTML / EJS / CSS / Sass / PostCSS / JavaScript / TypeScript |
| タスクランナー | gulp |
| モジュールバンドラ | rollup.js |
| トランスパイラ | Babel |
| テストフレームワーク | Jest + Puppeteer |
| その他周辺技術 | EditorConfig / stylelint / ESLint / Prettier |

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

## ESLint と Prettier の併用

まずはじめに ESLint と Prettier は役割が異なります。[ESLint](https://eslint.org/) は JavaScript のための静的検証ツールであり、[Prettier](https://prettier.io/) はコードフォーマッターです。 **昨今のフロントエンド開発では両者を併せて利用することを推奨されています。** 実は ESLint にもコード整形機能が備わっているのですが、「餅は餅屋」という言葉があるようにコードフォーマッターである Prettier にコード整形を一任させることでより優れたコード整形を実現できます。

ESLint と Prettier を併用するには、[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) と [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) を利用します。

- eslint-config-prettier： Prettier と競合するルールを無効にするためのプラグイン
- eslint-plugin-prettier： Prettier 経由でコードを整形するためのルールを追加するプラグイン

ESLint 以外にも TSLint や stylelint のようなリンターと併用するための方法は [Prettier の公式ドキュメント](https://prettier.io/docs/en/integrating-with-linters.html)に記載されています。

ちなみに、当ボイラープレートの TypeScript のリンターは TSLint ではなく ESLint を利用します。理由は TSLint 開発チームが ESLint のプラグインとして TSLint の機能を統合していく [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) プロジェクトを開始し、TSLint は非推奨となりました。
