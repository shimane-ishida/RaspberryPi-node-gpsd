Socket.IO node-gpsd Node.jsサーバー

RaspberryPiにGPSモジュールを付け、node-gpsdで取得した情報をSoket.IOで通知するサーバーサイドのサンプル

構成
------------

* express 3.4.8
* Socket.IO v0.11.9
* node-gpsd 0.2.6

インストール

------------
* git cloneして下記のコマンドで必要なパッケージはインストールされる
$ npm install

------------
地図画像(タイル画像)はpublic/tiles/以下へ保存

------------

RaspberryPi側の準備
------------
・ラズベリーパイのルートディレクト以下/dataを作成
・プロジェクトディレクトリのpublic/以下へimgフォルダを作成
・プロジェクトディレクトのpublic/img/以下へ/dataのシンボリックをlistで作成
<pre>
$ sudo mkdir /data
$ mkdir ~/RaspberryPi-node-gpsd/public/img
$ ln -s /data ~/RaspberryPi-node-gpsd/public/img/list
</pre>