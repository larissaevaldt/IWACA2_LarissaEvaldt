var Movie = require('./models/movie');

exports.createMovie = function(req, res) { 
    var newmovie = new Movie(req.body);
    newmovie.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(user); 
});
};

exports.getMovies = function(req, res) {
  Movie.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.getMovie = function(req, res) {
  Movie.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.updateMovie = function(req, res) {
  Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.deleteMovie = function(req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};