const express = require('express');
const app = express();
const port =5000;
const cors = require('cors')
const catagories = require('./data/catagories.json');
app.use(cors());
app.get('/',(req, res)=>{
res.send('dragon news is comming')
})

app.get('/catagories',(req, res)=>{
  res.send(catagories)
})

app.listen(port,()=>{
  console.log(`the news is running is port${port}`)
})