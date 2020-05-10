## What is Website Boilerplate?

Website Boilerplate とは、静的な Web サイトを開発するためのボイラープレートです。主にフロントエンドの周辺技術をターゲットに整備しています。具体的な技術スタックは以下の通りです。

| 区分 | 技術スタック |
| --- | --- |
| 言語 | HTML / EJS / CSS / Sass / PostCSS / JavaScript / TypeScript |
| タスクランナー | gulp |
| モジュールバンドラ | rollup.js |
| トランスパイラ | Babel |
| テストフレームワーク | Jest + Puppeteer |
| その他周辺技術 | EditorConfig / stylelint / ESLint / Prettier |

### Documentation

Website Boilerplate の詳細は[公式ドキュメント](https://toshifumiimanishi.github.io/website-boilerplate/overview/)をチェックしてください。

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
