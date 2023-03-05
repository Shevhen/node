// Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є
const express = require('express')

const fs = require('fs')
const path = require('path')

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

    if(typeof users[+userId.userId-1]=== "undefined") throw new Error(res.send({"ERROR":"User not exist"}))
    const user = users[+userId.userId-1]

    res.json(user)
})

app.post('/users', (req, res)=>{
    const {username, age, gender} = req.body

    const newUser = {username, age, gender}
    if(!username|| username.length<2) throw new Error(res.send({"ERROR":"name to short"}))
    if(!age|| username.length<1) throw new Error(res.send({"ERROR":"age can't be less then 0"}))
    users.push(newUser)

    fs.writeFile(path.join('users.json'), `${JSON.stringify(users)}`,(err)=>{
            if(err) throw new Error(err.message)
        })
    res.status(200).json({massege: 'user was added!'})
})

app.delete('/users/:userId', (req, res)=>{
    const userId = req.params

    if(typeof users[+userId.userId-1]=== "undefined") throw new Error(res.send({"ERROR":"User not exist"}))

    // users.splice(+userId.userId-1, 1)

    delete users[+userId.userId-1]


    res.status(200).json({massege: 'user was deleted!'})
})


app.listen(5000,()=>{console.log('port work')})