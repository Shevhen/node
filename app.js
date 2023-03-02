
// const {helper} = require('./helper')
//
// helper()

// const os = require('os')
//
// console.log(os.cpus())

const fs = require('fs')
const path = require('path')

// fs.writeFile(path.join('txt'), 'I like snikers',(err)=>{
//     if(err) throw new Error(err.message)
// })

// fs.readFile(path.join('txt'), (err, data)=>{
//     // if(err) throw new Error(err.message)
//     console.log(data.toString())
// })

// fs.appendFile(path.join('txt'), 'I like snikers',(err)=>{
//     if(err) throw new Error(err.message)
// })

// fs.truncate(path.join('txt'), (err)=>{
//     if(err) throw new Error(err.message)
// })

fs.unlink(path.join('txt'), (err)=>{
    if(err) throw new Error(err.message)
})
