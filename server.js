
const express = require('express');
const mongoose = require('./config/db');
const User = require ('./models/User');
const Product = require ('./models/Product');
const Article = require ('./models/Article');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
// User
app.post('/ajoutuser', (req,res)=>{

    let userFromPostman = req.body;
    let user = new User(userFromPostman);
    user.save().then(
        (saved)=>{
            console.log('saved user');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
app.get('/getalluser',(req,res)=>{
    User.find().then(
        (users)=>{
            res.send(users)
        },
        (err)=>{
            console.log(err);
        }
    )
});
app.get('/getbyiduser/:id',(req,res)=>{
    let id=req.params.id;
    User.findById({_id:id}).then(
        (user)=>{
            console.log(`User ${user} found`);
            res.send(user)
        },
        (err)=>{
            console.log(err);
        }
    );
});
app.put('/updateuser/:id', (req,res)=>{
    let id = req.params.id;
    let userToUpdate= req.body;

    User.findByIdAndUpdate({_id:id}, userToUpdate, {new:true}).then(
        (updatedUser)=>{
            res.send(updatedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});
app.delete('/deleteuser/:id',(req,res)=>{
    id= req.params.id;
    User.findByIdAndDelete({_id:id}).then(
        (deletedUser)=>{
            console.log(`User ${deletedUser} deleted`);
            res.send(deletedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});

//Article
app.post('/ajoutarticle', (req,res)=>{

    let userFromPostman = req.body;
    let article = new Article(userFromPostman);
    article.save().then(
        (saved)=>{
            console.log('saved article');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
app.get('/getallarticle',(req,res)=>{
    Article.find().then(
        (articles)=>{
            res.send(articles)
        },
        (err)=>{
            console.log(err);
        }
    )
});
app.get('/getbyidarticle/:id',(req,res)=>{
    let id=req.params.id;
    Article.findById({_id:id}).then(
        (article)=>{
            console.log(`Article ${article} found`);
            res.send(article)
        },
        (err)=>{
            console.log(err);
        }
    );
});
app.put('/updatearticle/:id', (req,res)=>{
    let id = req.params.id;
    let userToUpdate= req.body;

    Article.findByIdAndUpdate({_id:id}, userToUpdate, {new:true}).then(
        (updatedUser)=>{
            res.send(updatedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});
app.delete('/deletearticle/:id',(req,res)=>{
    id= req.params.id;
    Article.findByIdAndDelete({_id:id}).then(
        (deletedUser)=>{
            console.log(`Article ${deletedUser} deleted`);
            res.send(deletedUser);
        },
        (err)=>{
            res.send(err);
        }
    );
});
// Product
app.post('/ajoutproduct', (req,res)=>{

    let productFromPostman = req.body;
    let product = new Product(productFromPostman);
    product.save().then(
        (saved)=>{
            console.log('saved product');
            res.send(saved);

        },
        (err)=>{
            console.log(err);
        }
    );


});
app.get('/getallproduct',(req,res)=>{
    Product.find().then(
        (products)=>{
            res.send(products)
        },
        (err)=>{
            console.log(err);
        }
    )
});
app.get('/getbyidproduct/:id',(req,res)=>{
    let id=req.params.id;
    Product.findById({_id:id}).then(
        (product)=>{
            console.log(`product ${product} found`);
            res.send(product)
        },
        (err)=>{
            console.log(err);
        }
    );
});
app.put('/updateproduct/:id', (req,res)=>{
    let id = req.params.id;
    let productToUpdate= req.body;

    Product.findByIdAndUpdate({_id:id}, productToUpdate, {new:true}).then(
        (updatedproduct)=>{
            res.send(updatedproduct);
        },
        (err)=>{
            res.send(err);
        }
    );
});
app.delete('/deleteproduct/:id',(req,res)=>{
    id= req.params.id;
    Product.findByIdAndDelete({_id:id}).then(
        (deletedproduct)=>{
            console.log(`product ${deletedproduct} deleted`);
            res.send(deletedproduct);
        },
        (err)=>{
            res.send(err);
        }
    );
});

app.listen(port, () =>{
    console.log(`Server started on ${port}`);
});