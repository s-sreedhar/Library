const express=require('express');
const sql=require('mysql');

const app=express();


app.use(express.json());

const con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"luffy",
    database:"library"
});

app.get('/',(req,res)=>{
    res.json("hello");
})

app.get('/books',(req,res)=>{
    const q="SELECT * FROM books;";
    const books=con.query(q,(err,data)=>{
        if(err){
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
    
});


app.post('/books',(req,res)=>{
const q="INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?, ?, ?, ?)";

const {title,desc,price,cover}=req.body;

con.query(q,[title,desc,price,cover],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
});

});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE id = ? ";
  
    con.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    con.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  

app.listen(8000,()=>{
    console.log("Connected to Backend");
});




