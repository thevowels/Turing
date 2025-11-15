let movieService = require('../services/MovieService');
const mongoose = require('mongoose');

async function getAllMovies(req, res){
    let movies = await movieService.getAllMovies();

    res.status(200).json({
        message: 'All Movies',
        data: movies
    });
}
async function getMovieById(req, res){
    const id = req.params.id;
    try{
        const movie = await movieService.getMovieById(id);
        res.status(200).json({
            message: 'Movie with ID',
            data: movie
        });
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',
            error: err
        })
    }
}

async function findMovieByTitle(req, res){
    try{
        let title= req.params.title;
        let movies = await movieService.findMovieByTitle(title);
        res.status(200).json({
            message: 'Movie with Title',
            data: movies
        });
    }catch(err){
        res.status(404).json({
            error: err.toString()
        });
    }
}

async function findMovieByYear(req, res){
    try{
        let year = req.params.year;
        let movies = await movieService.findMovieByYear(year);
        res.status(200).json({
            'message': 'Movie with Year',
            data: movies
        });
    }catch (error){
        res.status(404).json({
            error: error.toString()
        });
    }
}

async function saveMovie(req, res){
    let movie = req.body;

    try{
        let newMovie = await movieService.saveMovie(movie);
        console.log('success', newMovie);
        res.status(200).json({
            message: 'Movie saved successfully',
            data: newMovie,
        });
    }catch(err){
        console.error(err);
        if(err instanceof mongoose.Error.ValidationError){
            res.status(400).json({
                message: "Validation Error",
                error: err
            })
        }
        else{
            res.status(500).json({
                message: "Something went wrong",
                error: err,
            })
        }
    }
}

async  function updateMovie(req, res){
    const id = req.params.id;
    const movie = req.body;

    try{
        let updatedMovie = await movieService.updateMovie(id, movie);
        res.json({
            message: 'Updated Movie',
            data: updatedMovie,
        });
    }catch(err){
        res.status(404).json({
            message: 'Something went wrong',
            error: err.message
        });
    }
}

async function deleteMovie(req, res){
    const id = req.params.id;
    try{
        let movie = await movieService.deleteMovie(id);
        res.status(200).json({
            message: 'Movie deleted successfully',
            data: movie
        });
    }catch(err){
        res.status(404).json({
            message: 'Something went wrong',
            error: err.message
        })
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    findMovieByTitle,
    findMovieByYear,
    saveMovie,
    updateMovie,
    deleteMovie
}