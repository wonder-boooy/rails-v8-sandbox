# Repository Guidelines

## プロジェクト構成とモジュール配置
- `app/` にRailsのMVC（controllers/models/views）、mailers、helpersを配置します。
- `config/` にRails設定と環境設定、DB/Cache/Queue/Cableの設定を配置します。
- `db/` にseedとRidgepoleのスキーマ（`db/schemas/Schemafile`とテーブル定義）を配置します。
- `test/` にMinitestとfixtures（`test/fixtures`）を配置します。
- `public/`、`storage/`、`tmp/` はRails標準のランタイム/アセット置き場です。
- `bin/` にプロジェクト用スクリプト（Rails、setup、lint、セキュリティスキャン）があります。

## アーキテクチャ概要
- コアドメインはユーザーとプロフィールで、`app/models`で1対1の関連を持ちます。
- 認証はDeviseを使用し、JSONのカスタムエンドポイントは `app/controllers/users` にあります。
- ホーム画面はサーバー描画のビュー（`app/views/homes/show.html.erb`）です。
- PWAのアセットは `app/views/pwa` から配信されます（manifestとservice worker）。

## ビルド/テスト/開発コマンド
- `bin/setup` でGemをインストールし、DB準備、不要ファイル削除、必要ならdev起動まで行います。
- `bin/dev` で `Procfile.dev` に従ってアプリとTailwindのwatchを起動します。
- `bin/rails server` はRailsサーバーのみ起動します。
- `bin/rails tailwindcss:watch` はCSSのビルド/監視を行います。
- `bin/rails test` はMinitest一式を実行します。
- `bin/rails test test/models/user_test.rb` で単一ファイルのテストを実行します。
- `bin/rubocop` はRubyのlint（Omakaseルール）を実行します。
- `bin/brakeman` と `bin/bundler-audit` はセキュリティスキャンです。

## コーディングスタイルと命名規則
- Rubyは2スペースインデント、`rubocop-rails-omakase` に従います。
- Railsの慣習に合わせ、クラスは `CamelCase`、ファイルは `snake_case` を使います。
- マイグレーション/スキーマはRidgepoleで `db/schemas/` に管理します。

## テスト方針
- フレームワークはMinitest（system test向けにCapybara/Seleniumが利用可能）。
- テストファイルは `test/` 配下で `_test.rb` で命名します（例: `test/models/user_test.rb`）。
- モデルテストでデータが必要な場合は `test/fixtures` を使用します。

## コミットとプルリクガイドライン
- 直近の履歴は短い命令形の件名（例: “fix ci”, “lint”）です。
- 変更は目的ごとに小さく分け、リファクタと挙動変更を混ぜないでください。
- PRは変更内容、テスト結果を記載し、UI変更はスクリーンショットを添付してください。
- 関連Issueやタスクがある場合はリンクします。

## 設定とデータ
- DB設定は `config/database.yml`（MySQL）です。
- Seedは `db/seeds.rb` に置き、再実行しても安全にします。
