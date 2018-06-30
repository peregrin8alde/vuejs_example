# 練習アプリ２

- デフォルト設定で初期化
- firebaseと連携してログイン／ログアウト
    - https://firebase.google.com/docs/web/setup?hl=ja
    - `yarn add firebase --save`
    - configは`.env.local`に記述して使用する。
        - https://cli.vuejs.org/guide/mode-and-env.html#local-only-variables
- データベースへの読み書き
    - https://firebase.google.com/docs/database/web/start?hl=ja
    - 該当するパスに対するユーザの権限の設定が必要  
      https://firebase.google.com/docs/database/security/?hl=ja

        ```
        {
          "rules": {
            "data": {
              ".read": true,
              ".write": "auth.uid != null"
            }
          }
        }
        ```
    - 読み込みは参照リスナーを使ったリアルタイム更新
- `config/firebase.js`でやってるような工夫をしないと、firebaseアプリの多重起動でエラーとなる。