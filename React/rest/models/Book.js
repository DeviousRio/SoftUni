const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

module.exports = new Model('Book', bookSchema);