const express=require('express');
const { json} = require("express");
const cors=require('cors');
const app = express();
app.use(cors());
app.use(express.json());
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
  user: "sql9648816",
  password: "KGMFX14DH5",
  database:"sql9648816",
  port:'3306'
});

app.post('/tpdata',async (req,res)=>{
  console.log(req.body.ID)
  var tab ="SELECT * from TpData where सेवार्थआयडी="+"'"+req.body.ID+"'";
    con.query(tab, function (err, result) {
      if (err) throw err;
        console.log(result)
        res.send(result)
    });
})
app.post('/tp',async (req,res)=>{
    
    
    var tab ="SELECT * from TpData";
    con.query(tab, function (err, result) {
      if (err) throw err;
        console.log(result)
        res.send(result)
    });
})


app.listen(80, () => {
    console.log("Running on port 80")
});


