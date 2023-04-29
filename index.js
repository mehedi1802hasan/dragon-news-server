const express=require('express')
const app=express();
const port = process.env.PORT || 9999;
const cors = require('cors');
const category=require('./data/Category.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Dragon is running....');
});
app.get('/category',(req,res)=>{
    res.send(category)
    console.log(category)
})

app.listen(port,()=>{
    console.log(`Dragon Api is running on port ${port}`);
});
