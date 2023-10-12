const express = require("express");
const app = express(); 
const mysql=require("mysql2");
const cors =require("cors");
const bodyparser =require('body-parser');



app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));


const dp = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"root19102001",
    database: "crudstudent"
    
});


app.get("/get",(req,res)=>{
    const sqlGet = "SELECT * FROM crudstudent.crudtable";
    db.query(sqlGet, (error,result)=>{
      console.log("getting")
        res.send(result);
    });
});

app.post("/create", (req, res) => {
    const { Name,Contact,Email,Course } = req.body;
    const sqlInsert =
      "INSERT INTO crudtable (Name,Contact,Email,Course) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [Name,Contact,Email,Course], (error, result) => {
      if (error) {
        console.log(error);
      }else{
        console.log("creation")
        res.send(result);
      }
    });
  });

  app.delete("/delete/:id", (req, res) => {
    const sqlDelete = "DELETE FROM crudtable WHERE id = ?";
    const { id } = req.params;
    
    db.query(sqlDelete, id, (error, result) => {
      if (error) {
        console.log(error);
      }else{
        console.log("deleted succesfully")
        res.send(result);
      }
    });
  });



app.listen(5000,()=>{
   console.log("server is running");
});


