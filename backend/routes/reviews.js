var express = require('express');
var router = express.Router();

var reviewController = require('../controllers/ReviewController');


router.get('/', reviewController.getAllReviews);
router.post('/', reviewController.saveReview);
router.get('/movie/:movieId', reviewController.getReviewByMovieId);
router.put('/:reviewId', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview)
module.exports = router;