const fs = require('fs')
const path = require('path')

// Створіть папку

// fs.mkdir(path.join('rootDir'), (err)=>{
//     if (err) throw new Error(err.message)
// })

// В тій папці створіть 5 папок і 5 файлів

// for (let i = 0; i < 5; i++) {
//     fs.mkdir(path.join('rootDir', 'Dir'+i), (err)=>{
//         if (err) throw new Error(err.message)
//     })
// }
//
// for (let i = 0; i < 5; i++) {
//     fs.writeFile(path.join('rootDir',`file${i}.txt`),'', (err)=>{
//         if (err) throw new Error(err.message)
//     })
// }

// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл

// fs.stat(path.join('rootDir'), (err,files)=>{
//     // if (err) throw new Error(err.message)
//     console.log(files[5])
// })

    fs.readdir(path.join('rootDir'),(err,files)=>{
    if (err) throw new Error(err.message)
        console.log(files)
        const file = files.filter(value => value.name.length === 'D' )
        console.log(file);
        // for (let i = 0; i < files.length; i++) {
        //     if (files.length=== '.'){
        //         console.log('File:')
        //     }
        // }
})


// !!все робіть кодом, не руками
//
// FILE: {fileName}
// FOLDER: {folderName}



