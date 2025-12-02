let reviewService = require('../services/ReviewService');

async function getAllReviews(req, res,next ) {
    let reviews = await reviewService.getAllReviews();
    return res.json({
        message: 'All reviews successfully',
        data: reviews,
    });
}

async function getReviewByMovieId(req, res, next){
    let movieId = req.params.movieId;
    let reviews = await reviewService.getReviewByMovieId(movieId);

    res.json({
        message: 'success',
        data: reviews,
    })
}

async function saveReview(req, res, next){
     let review = req.body;

     try{
        let savedReview = await reviewService.saveReview(review);
        res.status(201)
            .json({
                message: 'Review saved successfully',
                data: savedReview,
            })
     }catch(err){
         res.status(400).send({
             message: err.message,
         })
     }
}

async function updateReview(req, res, next){
    let reviewId = req.params.reviewId;
    let review = req.body;

    try{
        let updatedReview = await reviewService.updateReview(reviewId, review);
        res.status(200)
        .json({
            message: 'Review saved successfully',
            data: updatedReview,
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}

async function deleteReview(req, res, next){
    let reviewId = req.params.reviewId;
    try{
        let deletedReview = await reviewService.deleteReview(reviewId);
        return res.status(200).json({
            message: 'Review deleted successfully',
            data: deletedReview,
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}

module.exports = {
    getAllReviews,
    getReviewByMovieId,
    saveReview,
    updateReview,
    deleteReview,
}