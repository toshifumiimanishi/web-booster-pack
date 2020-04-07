## What is Website Boilerplate?
Web サイトの開発用テンプレートです。

### Get Started
以下のコマンドでパッケージをインストールしてください。
```
npm install
```
### Usage
以下のコマンドで開発用サーバーの起動 + 自動コンパイルを実行します。
```
npm run dev
```
以下のコマンドでビルドします。
```
npm run build
```
以下のコマンドで視覚回帰テストを実行します。
```
npm run e2e
```

### Breakpoints design

CSS のメディアクエリは、レスポンシブ Web デザインを利用したデバイスに合わせたデザインを作ることができます。当ボイラープレートは標準でブレークポイントを用意しています。ブレークポイントの設定は自由に編集できます。具体的には `_variables.scss` の `$breakpoints` マップを変更してください。また、すべてのメディアクエリは Sass の `@mixin` 経由で利用できます。なお、当ブレークポイントの設計は CSS フレームワークの [Bootstrap](https://getbootstrap.com/) を参考にしています。
