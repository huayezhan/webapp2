import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({

name: {
    type: String,
    trim: true,
    required: 'Name is required'
},

description: {
    type: String,
    trim: true,
},
    
price: {
    type: Number,
    trim: true,
    unique: 'Price already exists',
    required: 'Price is required'
},

quantity: {
    type: Number,
    trim: true,
    required: 'Price is required'
},
category: {
    type: String,
    trim: true,
    required: 'Category is required'
},

created: {
    type: Date,
    default: Date.now
},
updated: {
    type: Date,
    default: Date.now
},
})


//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('products', ProductSchema);
