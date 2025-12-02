const Review = require('../models/Review');
const mongoose = require("mongoose");


async function getAllReviews() {
    return (Review.find());
}
async function getReviewByMovieId(movieId) {
    return (Review.find({
        movie: movieId
    })
        // .populate("movie")
    );
}
async function saveReview(review){
    const newReview = new Review({
        movie: new mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review
    })
    await newReview.save();
    return newReview;
}

async function updateReview(reviewId, review){
    review.movie = new mongoose.Types.ObjectId(review.movie);
    let updatedReview;
    updatedReview = await Review.findByIdAndUpdate(reviewId, review, {new: true});
    return updatedReview;
}

async function deleteReview(reviewId){
    let existingReview = await Review.findById(reviewId);
    if(existingReview){
        return Review.findByIdAndDelete(reviewId);
    }
    else
    {
        throw new Error(`No review found with ${reviewId}`);
    }
}
module.exports = {
    getAllReviews,
    getReviewByMovieId,
    saveReview,
    updateReview,
    deleteReview,
}