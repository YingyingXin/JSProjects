// Note: 使用power shell或者其他命令行cd到该文件夹，使用 “ nodemon node.js” 指令打开后台server开始监听port 3000
// bodyParser 用来获取html submit 的form信息， 通过res.body可获取form里所有标有name的变量信息。比如form里有两个
// input，它们各自有自己的name， 分别对应num1, num2, 那么这两个num1, num2就是变量名

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
    // 当有请求发到port 3000时，res.sendFile 从后台调取index.html发向前端
    // __dirname 可以获取当前host该后台程序文件的路径名
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    let a = Number(req.body.num1);
    let b = Number(req.body.num2);
    res.send('The product is ' + a * b);
})

app.listen(port, ()=>console.log("Server started at port:" + port));
