const express= require('express');
const Product = require('../models/product');
router.post('/ajout', (req,res)=>{

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
router.get('/getall',(req,res)=>{
    Product.find().then(
        (products)=>{
            res.send(products)
        },
        (err)=>{
            console.log(err);
        }
    )
});
router.get('/getbyid/:id',(req,res)=>{
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
router.put('/update/:id', (req,res)=>{
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
router.delete('/delete/:id',(req,res)=>{
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

const router = express.Router();

module.exports= router;