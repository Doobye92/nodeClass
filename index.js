var express = require("express"); // 설치한 express module을 불러와서 변수에 담는다
var app = express(); // express를 실행하여 app object를 초기화 한다.

app.get("/", function (req, res) {
    // 서버에 get 요청이 있는 경우
    // '/' 위치에 get요청을 받는 경우,  - 이 함수를 이벤트 리스너라고 함
    res.send(`Hello world!`); // 헬로 월드를 출력한다.
});

var port = 3000; // 사용할 포트 번호를 port 변수에 넣는다.
app.listen(port, function () {
    // listen은 서버가 실행되는 경우에 동작함 - 이 함수를 이벤트 리스너라고 함
    // port 변수를 이용하여 3000번 포트에 node.js서버를 연결
    console.log(`server on! http://localhost` + port); // 서버가 실행되면 콘솔창에 메시지를 표시
});
