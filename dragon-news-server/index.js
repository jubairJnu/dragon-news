const express = require('express');
const app = express();
const port =5000;
const cors = require('cors')
const catagories = require('./data/catagories.json');
const news = require('./data/news.json');
app.use(cors());
app.get('/',(req, res)=>{
res.send('dragon news is comming')
})

app.get('/catagories',(req, res)=>{
  res.send(catagories)
})

app.get('/news',(req, res)=>{
  res.send(news);
})

app.get('/news/:id', ( req, res)=>{
const id = req.params.id;
const selectedId= news.find(n=> n._id === id)
res.send(selectedId);  
})


app.get('/catagory/:id', (req, res )=>{
  const id = parseInt(req.params.id);
  
  if(id === 0){
    res.send(news);
  }
else{  const catagoryId = news.filter(catagory=> parseInt(catagory.category_id) === id);
  res.send(catagoryId);}
})

app.listen(port,()=>{
  console.log(`the news is running is port${port}`)
})