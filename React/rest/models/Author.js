const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const authorSchema = new Schema({

    nickname: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    born: {
        type: String,
        required: true
    },

    books: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

module.exports = new Model('Author', authorSchema);