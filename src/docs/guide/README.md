## What is Website Boilerplate?

Website Boilerplate とは、静的な Web サイトを開発するためのボイラープレートです。主にフロントエンドの周辺技術をターゲットに整備しています。具体的な技術スタックは以下の通りです。

| 区分 | 技術スタック |
| --- | --- |
| 言語 | HTML / EJS / CSS / Sass / PostCSS / JavaScript / TypeScript |
| タスクランナー | gulp |
| モジュールバンドラ | rollup.js |
| トランスパイラ | Babel |
| テストフレームワーク | Jest + Puppeteer |
| その他周辺技術 | EditorConfig / stylelint / ESLint / Prettier / husky |

## Getting Started

### Prerequisites

- [Node.js 12+](https://nodejs.org/en/)

### Quick Start

以下のコマンドでパッケージをインストールしてください。

```sh
npm install
```

以下のコマンドで開発用サーバーの起動 + 自動コンパイルを実行します。

```sh
npm run dev
```
以下のコマンドでビルドします。

```sh
npm run build
```
以下のコマンドで視覚回帰テストを実行します。

```sh
npm run e2e
```


## Directory Structure

各ディレクトリ / ファイルの役割を下記に示します。

```
website-boilerplate/
├── .circleci/ ... CircleCI 関連ディレクトリ
├── .editorconfig ... EditorConfig の設定ファイル
├── .eslintrc.json ... ESLint の設定ファイル
├── .gitignore ... Git の追跡対象を制御するファイル
├── .npmrc ... npm の設定ファイル
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
│   │       │   ├── _functions.scss ... Sass 関数を管理するファイル
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

## Why Not ...?

### ESLint と Prettier の併用

まずはじめに ESLint と Prettier は役割が異なります。[ESLint](https://eslint.org/) は JavaScript のための静的検証ツールであり、[Prettier](https://prettier.io/) はコードフォーマッターです。 **昨今のフロントエンド開発では両者を併せて利用することを推奨されています。** 実は ESLint にもコード整形機能が備わっているのですが、「餅は餅屋」という言葉があるようにコードフォーマッターである Prettier にコード整形を一任させることでより優れたコード整形を実現できます。

ESLint と Prettier を併用するには、[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) と [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) を利用します。

- eslint-config-prettier： Prettier と競合するルールを無効にするためのプラグイン
- eslint-plugin-prettier： Prettier 経由でコードを整形するためのルールを追加するプラグイン

ESLint 以外にも TSLint や stylelint のようなリンターと併用するための方法は [Prettier の公式ドキュメント](https://prettier.io/docs/en/integrating-with-linters.html)に記載されています。

ちなみに、当ボイラープレートの TypeScript のリンターは TSLint ではなく ESLint を利用します。理由は TSLint 開発チームが ESLint のプラグインとして TSLint の機能を統合していく [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) プロジェクトを開始し、TSLint は非推奨となりました。

### TypeScript と Babel の役割

[TypeScript](https://www.typescriptlang.org/) には tsc という Microsoft 謹製のトランスパイラがありますが、TypeScript は静的型付けのみに徹し、トランスパイルは [Babel](https://babeljs.io/) を利用しています。Babel は `@babel/preset-typescript` を利用することで TypeScript に対応可能です。
