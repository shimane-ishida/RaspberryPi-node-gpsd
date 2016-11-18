var socket = io.connect();

// WebSocketでの接続
socket.on('connect', function(msg) {
    console.log("connect");
});

// メッセージを受けたとき
socket.on('message', function(msg) {
    //マーカーの作成
    onCreateMapMarker(msg.value);
});
