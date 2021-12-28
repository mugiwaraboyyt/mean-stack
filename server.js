const express = require('express');
const mongoose = require('./config/db');
const productRouter = require ('./routes/products');
const userRouter =  require('./routes/users');
const articleRouter =  require('./routes/articles');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/article', articleRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);


app.use('/getfile' , express.static('./upload'));


app.listen(port, () =>{
    console.log(`Server started on ${port}`);
});