var express = require ("express");
var mysql = require ("mysql");
var bodyParser = require('body-parser');
const { json } = require("body-parser");

var app = express();

// Request body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CORS Ayarları */

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
});

/*  CORS Bitiş  */


/* Mysql Bağlantı Ayarları */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Volthread"
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  /* Mysql Connection End */




// App Request List
// Direk gelecek olan istek için hata.
app.get('/',function(req,res){
    res.write("ERROR!!!");
    res.end();
});


// Kayıt getirme Servisi
// Veri tabanına ilgili offset ve limit değerlerini göndererek tüm liste yerine tabloda gösterilecek olan verileri döndürür.
app.post('/getEmployes',function(req,res){

    var funcObj = JSON.parse(req.body.getter);
    let sql  = `Select * from employes ORDER BY EmployesNo LIMIT ${funcObj.limit} OFFSET ${funcObj.offset} `;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Sayfalama için Veri tabanında bulunan toplam veri sayısını verir.
app.get('/getDataCount',function(req,res){

    let sql  = `SELECT COUNT(*) as dataCount FROM employes`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Yeni Kayıt Ekleme Servisi
app.post('/employesAdd',function(req,res){
     var pobj = JSON.parse(req.body.employesData);
     let sql  = `INSERT INTO employes (EmployesNo , EmployesName , EmployesEmail , EmployesSalary , EmployesCounty) VALUES ( '${pobj.EmployesNo}', '${pobj.EmployesName}', '${pobj.EmployesEmail}' , '${pobj.EmployesSalary}' , '${pobj.EmployesCounty}' )`;
     let query = db.query(sql, (err,result) => {
         if(err) throw err;
         res.send("Success");
     });
});

// Kayıt Silme
app.delete('/delEmployes/:id', function (req, res) {
    var id = req.params.id;
    let sql  = "DELETE FROM employes WHERE EmployesID = " + id;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        res.send("Success");
   });

});

/* App Request End */

app.listen(5380);