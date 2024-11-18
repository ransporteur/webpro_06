# webpro_06

## このプログラムについて

## ファイル一覧

webpro_06
じゃんけん
(# 見出し)

このプロフラムについて
1. /hello1 エンドポイント
機能
/hello1にアクセスすると、show.ejs テンプレートを使用して「Hello world」と「Bon jour」を表示する。
使用手順
ブラウザで http://localhost:8080/hello1 にアクセスしてください。ブラウザ画面に「Hello world」「Bon jour」が表示する。

2. /hello2 エンドポイント
機能
/hello2 エンドポイントもshow.ejs テンプレートを使用し、「Hello world」と「Bon jour」を表示するが、hello1とは異なり、変数の定義をエンドポイント内で直接行っている。
使用手順
http://localhost:8080/hello2 にアクセスすると、同様に「Hello world」「Bon jour」が表示されている。

3. /icon エンドポイント
機能
/icon エンドポイントでは、icon.ejs テンプレートを使用してアイコン画像（Appleロゴ）を表示する。画像のパスとaltテキストが指定されている。
使用手順
http://localhost:8080/icon にアクセスすると、Appleのロゴ画像が表示される。

4. /luck エンドポイント
機能
/luck エンドポイントでは、乱数生成を使用して1から6の間の数を生成し、簡単なおみくじのように「大吉」や「中吉」といった運勢を表示する。
使用手順
http://localhost:8080/luck にアクセスすると、運勢（「大吉」「中吉」など）が表示される。サーバーログには「あなたの運勢は[結果]です」というメッセージが表示される。

5. /janken エンドポイント
機能
/janken エンドポイントは、じゃんけんゲームを実装している。プレイヤーの手（グー、チョキ、パー）をクエリパラメータとして受け取り、ランダムに生成されたコンピュータの手と比較して勝敗を決定する。
使用手順
http://localhost:8080/janken?hand=グー&win=0&total=0 のようにアクセスし、手（hand）、勝ち数（win）、試合数（total）をクエリパラメータで指定しする。勝敗結果が画面に表示され、プレイヤーとCPUの手も確認できる。

6. /calculate エンドポイント
機能
/calculate エンドポイントは、簡単な計算機機能を提供する。num1 と num2 の数値と演算タイプ（operation）をクエリパラメータとして受け取り、足し算か掛け算の結果を返す。
使用手順
http://localhost:8080/calculate?num1=5&num2=3&operation=add のようにアクセスし、operation に add または multiply を指定します。計算結果が画面に表示される。

7. /datetime エンドポイント
機能
/datetime エンドポイントでは、現在の日付と時刻を取得し、テンプレートで表示する。
使用手順
http://localhost:8080/datetime にアクセスすると、現在の日付と時刻が画面に表示される。
a