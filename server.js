const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')


const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.get('*', (req, res) => {
// console.log("A new request received at " + Date.now());
// console.log('req url:' + req.url);
// console.log('req complete:' + req.complete);
// console.log('req query:' + req.query);
// console.log('req params:' + req.params);
// console.log('req body:' + req.body);
// console.log('res:' + res);
//   // function testJSON(req){
//   //     try{
//   //         JSON.parse(res);
//   //         return true;
//   //     }
//   //     catch (error){
//   //         return false;
//   //     }
//   // }
// // if (req.body) {
// //   // just receive it and send it to where ever
// // res.sendFile(path.resolve(__dirname, './src/actions/index.js'));
// //
// // }
// // if not just go send root
//   // res.sendFile(path.resolve(__dirname, 'index.html'));
// console.log('api request received');
// res.send(req.url);
// });

app.listen(port);
console.log('Server started');
