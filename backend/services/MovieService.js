const Movie = require('../models/Movie');

async function getAllMovies(){
    return Movie.find();
}
async function getMovieById(id)
{
    return Movie.findById(id);
}

async function findMovieByTitle(movieTitle){
    return Movie.find({
        title: {
            $regex: movieTitle
        }
    });
}
const findMovieByYear = async (year) => {
    return Movie.find({
        year: year
    });
}
async function saveMovie(movie){

    console.log(movie);
    let newMovie = new Movie({
        ...movie
    });
    return newMovie.save();
}
async function updateMovie(id, movie){
    let oldMovie = await Movie.findById(id);
    if(oldMovie)
    {
        return Movie.findByIdAndUpdate(id, movie, {new: true});
    }
    else
    {
        throw new Error('Movie not found: id: ' + id);
    }
}

async function deleteMovie(id){
    let oldMovie = await Movie.findById(id);
    if(oldMovie)
    {
        return Movie.findByIdAndDelete(id);
    }
    else
    {
        throw new Error('Movie not found: id: ' + id);
    }
}
module.exports = {
    getAllMovies,
    getMovieById,
    saveMovie,
    updateMovie,
    findMovieByTitle,
    findMovieByYear,
    deleteMovie,
}