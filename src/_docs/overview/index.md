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

## ESLint と Prettier の併用

まずはじめに ESLint と Prettier は役割が異なります。[ESLint](https://eslint.org/) は JavaScript のための静的検証ツールであり、[Prettier](https://prettier.io/) はコードフォーマッターです。 **昨今のフロントエンド開発では両者を併せて利用することを推奨されています。** 実は ESLint にもコード整形機能が備わっているのですが、「餅は餅屋」という言葉があるようにコードフォーマッターである Prettier にコード整形を一任させることでより優れたコード整形を実現できます。

ESLint と Prettier を併用するには、[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) と [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) を利用します。

- eslint-config-prettier： Prettier と競合するルールを無効にするためのプラグイン
- eslint-plugin-prettier： Prettier 経由でコードを整形するためのルールを追加するプラグイン

ESLint 以外にも TSLint や Stylelint のようなリンターと併用するための方法は [Prettier の公式ドキュメント](https://prettier.io/docs/en/integrating-with-linters.html)に記載されています。

ちなみに、当テンプレートの TypeScript のリンターは TSLint ではなく ESLint を利用します。理由は TSLint 開発チームが ESLint のプラグインとして TSLint の機能を統合していく [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) プロジェクトを開始し、TSLint は非推奨となりました。
