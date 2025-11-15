var express = require('express');
var router = express.Router();

var moviesController = require('../controllers/MovieController');

router.get('/', moviesController.getAllMovies);
router.post('/', moviesController.saveMovie);
router.get('/:id', moviesController.getMovieById);
router.put('/:id', moviesController.updateMovie);
router.get('/title/:title', moviesController.findMovieByTitle);
router.get('/year/:year', moviesController.findMovieByYear)
router.delete('/:id', moviesController.deleteMovie);
module.exports = router;