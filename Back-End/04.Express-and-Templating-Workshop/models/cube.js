const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: String,
    difficultyLevel: Number
});

const CubeModel = mongoose.Model('Cube', modelSchema);