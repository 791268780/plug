const express = require('express');
const bodyparser=require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs')
let formidable = require('formidable')
const app = express();
app.use(bodyparser.urlencoded({   
    extended :false              //进止使用querystring查询字符串
    }));
 
app.listen(3000,()=>{
    console.log('ok  3000');
})

app.use(multipart({uploadDir:'./src/assets' }));

app.post('/list',multipartMiddleware,(req,res)=>{
    console.log(req.files,req.files.file.path)

    res.send(req.body,req.files,req.files.file.path)
    // let from = new formidable.IncomingForm();
    // from.encoding = 'utf-8';
    // from.uploadDir = './src/assets/';
    // from.keepExtensions = true;
    // from.maxFieldsSize = 2*1024*1024;

    // from.parse(req,function(err,fields,files){
    //     console.log(files)
    //     res.send(files.name);

    // })

})

