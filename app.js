// Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є
const express = require('express')

const fs = require('fs/promises')

const [...users]= require("./users.json");
const {urlencoded, json} = require("express");

// console.log(users)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/foto',(req, res)=>{
    res.send('I AM INSIDE')
})

app.get('/users',(req, res)=>{
    res.json(users)
})

app.get('/users/:userId',(req, res)=>{
   const userId = req.params
    const user = users[+userId.userId-1]

    res.json(user)
})

app.post('/users', (req, res)=>{
    const body = req.body
    users.push(body)

    fs.w

    res.status(200).json({massege: 'user was added!'})
})

app.delete('/users/:userId', (req, res)=>{
    const userId = req.body
    users.splice(+userId.userId-1,1)

    res.status(200).json({massege: 'user was deleted!'})
})


app.listen(5000,()=>{console.log('port work')})