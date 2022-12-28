const express= require('express');
const users= require('./model/usermodel');
const post=require('./model/postmodel');
const Router=require(express.Router())

try {
    Router.post('/signup',(req,res)=>{
        const register=users.create(req.body);
        res.status(200).json({
           status:'success',
           data: register
        })
    })

} catch (error) {
    console.log(error);
}

try {
    Router.post('/home',(req,res)=>{
        const postdata=post.create(req.body);
        res.status(200).json({
           status:'success',
           data: postdata
        })
    })

} catch (error) {
    console.log(error);
}

try {
    Router.get('/signin',(req,res)=>{
        const auth=users.findOne({email: users.email});
        res.status(200).json({
           status:'success'
        })
    })

} catch (error) {
    console.log(error);
}


module.exports=Router