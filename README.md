# Node.js Web Application: Features and Usage

## 1. 起動方法

### 必要な環境
- **Node.js**: バージョン 14.x 以上
- **npm**: Node.js に含まれるパッケージマネージャ

### 手順
1. 必要なパッケージをインストール:
   ```bash
   npm install express ejs
   ```
2. アプリケーションを起動:
   ```bash
   node app5.js
   ```
3. ブラウザでアクセス:
   `http://localhost:8080` にアクセスして各機能を確認します。

---

## 2. Git管理

### 変更したファイル
- **app5.js**: アプリケーションのメインロジック
- **views/**: レンダリングされるテンプレートファイル:
  - `show.ejs`
  - `icon.ejs`
  - `luck.ejs`
  - `janken.ejs`
  - `acchimuitehoi.ejs`
  - `rightorleft.ejs'
- **public/**: 静的ファイル:
  - `Apple_logo_black.svg`

### Git操作
1. 変更内容を追加:
   ```bash
   git add .
   ```
2. コミット:
   ```bash
   git commit -m "Add additional games and improve app5.js"
   ```
3. リポジトリにプッシュ:
   ```bash
   git push origin main
   ```

---

## 3. 機能の説明と使用手順

### 1. `/hello1` と `/hello2`
- **説明**: 2種類の異なるメッセージを画面に表示する
- **使用方法**: `/hello1` または `/hello2` にアクセス。

### 2. `/icon`
- **説明**: 静的な画像（Appleのロゴ）を表示する
- **使用方法**: `/icon` にアクセス。

### 3. `/luck`
- **説明**: ランダムに運勢（大吉、中吉、吉など）を表示する
- **使用方法**: `/luck` にアクセス。

### 4. `/janken`
- **説明**: ユーザの手（グー、チョキ、パー）に対して、CPUの手をランダムに生成して勝敗を判定
- **使用方法**:
  クエリパラメータで以下を指定：
  - `hand`: ユーザの手（例: グー）
  - `win`: 勝利数（初回は0）
  - `total`: 総試合数（初回は0)
  
 

### 5. `/acchimuitehoi`
- **説明**: ユーザの方向（上、下、左、右）とCPUの方向を比較して勝敗を判定
- **使用方法**:
  クエリパラメータ `direction` を指定してアクセス。
  


### 6. `/rightorleft`
- **説明**: ユーザの選択（右または左）とCPUの選択を比較して勝敗を判定
- **使用方法**:
  クエリパラメータ `choice` を指定してアクセス。
  
 

---

## 4. フォルダ構成

```
project/
├── app5.js                  # メインアプリケーションファイル
├── public/                  # 静的ファイルを格納するディレクトリ
│   └── Apple_logo_black.svg
├── views/                   # テンプレートファイルを格納するディレクトリ
│   ├── show.ejs
│   ├── icon.ejs
│   ├── luck.ejs
│   ├── janken.ejs
│   ├── acchimuitehoi.ejs
│   └── rightorleft.ejs
└── README.md                # ドキュメントファイル
```

---

## 5. Gitでの管理

1. 変更内容をステージング:
   ```bash
   git add .
   ```
2. 変更内容をコミット:
   ```bash
   git commit -m "Add new game features to app5.js"
   ```
3. リポジトリにプッシュ:
   ```bash
   git push origin main
   ```
