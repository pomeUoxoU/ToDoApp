# ToDoApp

シンプルな白基調の ToDo アプリです。  
HTML / CSS / JavaScript だけで構成しています。

## ファイル構成

- `index.html`  
  画面の骨組み（入力フォーム、追加ボタン、ToDo一覧）
- `style.css`  
  白基調のシンプルなスタイル定義
- `script.js`  
  ToDo の追加・削除・完了チェックのロジック

## 起動方法

### 1) ブラウザで直接開く
`index.html` をブラウザで開くだけで動作します。

### 2) ローカルサーバーで開く（推奨）
このフォルダで以下を実行します。

```bash
python3 -m http.server 8000
```

その後ブラウザで以下へアクセスしてください。

- <http://localhost:8000>
