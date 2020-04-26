/*
code written by Mikhail in class, taken from https://github.com/mikhail-cct/mongodb-test
and adapted to suit my project
*/
var express = require('express'),
router = express.Router(),
movieCtrl = require('./movie-controller');

router.get('/', function(req, res) {
    res.render('index');
});

//routes to get all movies, get movie by id, add a new movie, update by id and delete by id 
router.post('/movies', movieCtrl.createMovie);
router.get('/movies', movieCtrl.getMovies);
router.get('/movies/:id', movieCtrl.getMovie);
router.delete('/movies/:id', movieCtrl.deleteMovie);
router.put('/movies/:id', movieCtrl.updateMovie);

module.exports = router;
