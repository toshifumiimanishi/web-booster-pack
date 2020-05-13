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

## What's included

各ディレクトリ / ファイルの役割を下記に示します。

```
website-boilerplate/
├── .circleci/ ... CircleCI 関連ディレクトリ
├── .editorconfig ... EditorConfig の設定ファイル
├── .eslintrc.json ... ESLint の設定ファイル
├── .gitignore ... Git の追跡対象を制御するファイル
├── .node-version ... Node.js のバージョンを指定するファイル
├── .prettierrc ... Prettier の設定ファイル
├── .stylelintrc ... stylelint の設定ファイル
├── .vscode/ ... VS Code 関連ファイル
├── babel.config.json ... Babel の設定ファイル
├── docs/ ... ドキュメントを管理するディレクトリ
├── gulpfile.js ... gulp の設定ファイル
├── htdocs/ ... 本番用ディレクトリ
│   ├── css/
│   ├── img/
│   ├── index.html
│   └── js/
├── jest-puppeteer.config.js
├── package-lock.json
├── package.json
├── rollup.config.js ... rollup.js の設定ファイル
├── src ... 開発用ディレクトリ
│   ├── docs/
│   ├── ejs/ ... EJS 関連のコード一式
│   │   ├── data/ ... メタ情報やパーシャルファイルの設定情報を JSON ファイル形式で管理するディレクトリ
│   │   ├── partials/ ... EJS パーシャルファイル格納用ディレクトリ
│   │   └── index.ejs
│   ├── sass/ ... Sass 関連のコード一式
│   │   └── css/
│   │       ├── partials/ ... Sass パーシャルファイル格納用ディレクトリ
│   │       │   ├── _function.scss ... Sass 関数を管理するファイル
│   │       │   ├── _test.scss ... テスト駆動マークアップ用ファイル
│   │       │   ├── _utilities.scss ... 僅かなスタイル調整のための便利クラスを定義するファイル
│   │       │   ├── _variables.scss ... 変数を管理するファイル
│   │       │   ├── foundation/ ... リセット CSS やプロジェクトにおける基本的なスタイルを定義するファイル格納用ディレクトリ
│   │       │   ├── helpers/ ... ヘルパークラス用ディレクトリ
│   │       │   └── mixins/ ... ミックスインを管理するディレクトリ
│   │       └── main.scss
│   └── ts/ ... TypeScript 関連のコード一式
│       └── js/
│           ├── entry.ts ... rollup.js のエントリーファイル
│           └── modules/ ... モジュールファイル格納用ディレクトリ
├── test/
│   └── e2e/ ... E2E テスト関連のスクリプトを管理するディレクトリ
└── tsconfig.json ... TypeScript の設定ファイル
```

## Documentation

Website Boilerplate の詳細は[公式ドキュメント](https://toshifumiimanishi.github.io/website-boilerplate/overview/)をチェックしてください。

## Get Started
以下のコマンドでパッケージをインストールしてください。
```
npm install
```

## Usage
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
