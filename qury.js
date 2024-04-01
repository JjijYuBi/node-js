const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
const path = require('path');
const app = express();
app.use(cors());
//ejs 설정
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'.')); // .은 경로


// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1234',
  database: 'test'
});

connection.connect(function(err) {
  if (err) {
    console.error('db 연결 실패!');
    return;
  }
  console.log('db 연결 성공!');
});

app.get('/', function (req, res) {
  res.send('Hello World');
});


app.get('/profile/:id',function(req,res){
  var map = req.params;
  console.log(map);
  // MySQL 쿼리 실행
  // connection.query(`SELECT * FROM TBL_USER WHERE USERID = '${map.id}'`, function (error, results, fields) {
  //   if (error) throw error;
  //   const name = results[0];
  //  // res.send(`<h1>이름 : ${name}</h1>`);
  //  if(results.length==0){
  //   res.send({USERID:"없음",userName:"없음",addr:"없음"})
  //  }else{
  //   res.send(results[0]);
  //  }
    
  // });
  res.render('profile',{jsonData : map});


});

app.get('/search', function (req, res) {
    //localhost:3000/search?id=qwer
  var map = req.query;
  console.log(map);

  // MySQL 쿼리 실행
  connection.query(`SELECT * FROM TBL_USER WHERE USERID = '${map.id}'`, function (error, results, fields) {
    if (error) throw error;
   if(results.length != 1){
    res.send({msg : "fail"});
    
   }else{
    res.send({msg : "success",results});
    
   }
   // res.send(`<h1>이름 : ${name}</h1>`);
    
  });
});

app.get('/insert', function (req, res) {
  var map = req.query; 
  console.log(map);

  // 아이디 중복 체크를 위한 쿼리 실행
  connection.query("SELECT * FROM TBL_USER WHERE USERID = ?", [map.id], function (error, results, fields) {
    if (error) {
      console.error('에러!');
      res.send({msg : '에러 발생!'});
      return;
    }

    if (results.length === 0) {
      connection.query("INSERT INTO TBL_USER (USERID, USERNAME, ADDR) VALUES (?, ?, ?)", [map.id, map.name, map.addr], function (error, results, fields) {
        if (error) {
          console.error('Error inserting user into database: ' + error.stack);
          res.status(500).send('Error inserting user into database');
          return;
        }
        res.send({msg : "저장되었습니다!"});
      });
    } else {
      res.send({msg : "이미 있는 회원입니다."});
    }
  });
});


app.listen(3000);