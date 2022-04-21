const express = require('express');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());//ভিন্ন পোর্টে ব্যবহারের জন্য। 
app.use(express.json()); //body ke pawrar jonno

app.get('/',(req,res)=>{
    res.send('Hello from me Module 64-3 , now it is auto reload by nodemon')
})
const users = [
    {id: 1, name:'sabana',email:'sabana@gmail.com',phone:'017777777'},
    {id: 2, name:'sabnur',email:'sabnur@gmail.com',phone:'017777777'},
    {id: 3, name:'Sucorita',email:'Sucorita@gmail.com',phone:'017777777'},
    {id: 4, name:'Suhonda',email:'Suhonda@gmail.com',phone:'017777777'},
    {id: 5, name:'Srabonti',email:'Srabonti@gmail.com',phone:'017777777'},
    {id: 6, name:'Sabila',email:'Sabila@gmail.com',phone:'017777777'},
    {id: 7, name:'Sohana',email:'Sohana@gmail.com',phone:'017777777'},
]
app.get('/users',(req,res)=>{
    // console.log('query',req.query)
    //filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users)
    }
    
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);    
    const user = users.find(u=>u.id===id);
    res.send(user);

})
app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port,()=>{
    console.log('This is from Listen',port);
})
