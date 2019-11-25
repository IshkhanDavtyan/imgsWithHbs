const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const hbs = require('handlebars')


// const publicDirPath = path.join(__dirname,'./html')
// app.use(express.static(publicDirPath))

app.set('view engine','hbs')




app.get('/any', (req, response) => {

    const int = '68d392ae69e3e2953374ac6673b707e2cbbaf1416ebe5fd538ebd9ced1364f55'
    const url = 'https://api.unsplash.com/photos?per_page=5&client_id=' + int
    let newArr = []

    request({ url, json: true }, (error, res) => {
        if (error) {
            return error
        }
            for (let i = 0; i < +res.body.length; i++) {
                newArr.push(res.body[i].urls.raw)
            }

            response.render('index',{
                arr: newArr
            })
            console.log(newArr)
        
    })


})



app.listen(3000, () => {
    console.log("server")
})

// .then((response)=>{
//     response.json().then((data)=>{
//             if(data.error){
//                 console.log('error')
//             }
            
//                 newArr = data.arr
            

//     })})