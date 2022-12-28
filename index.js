const express=require('express');
const cors=require('cors');
// const user=require('./Routes')
const Router=require('./Routes')

const app=express()
const port=5000;

app.use(cors());

app.use(express.urlencoded({extends: true}))
app.use(express.json())

// app.use("/",user)
app.use("",Router)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })