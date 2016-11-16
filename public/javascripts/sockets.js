var socket = io.connect();

// WebSocketでの接続
socket.on('connect', function(msg) {
    console.log("connect");
    $('#connectId').html('接続ID::' + socket.socket.transport.sessid);
    $('#type').html('接続方式::' + socket.socket.transport.name);
});

// メッセージを受けたとき
socket.on('message', function(msg) {
    //マーカーの作成
    onCreateMapMarker(msg.value);
});