var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({ 
    title: String,
    year: String,
    duration: String,
    genre: [String],
    director: String,
    stars: [String],
    rating: { type: Number, min:1, max:10},
    price: Number 
});

module.exports = mongoose.model('Movie', movieSchema);