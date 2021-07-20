const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ontheway:ontheway7833!@boilerplate.8ikjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/',(rep,res) => res.send('Hello World!~~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))