const express = require('express');

const movieRouter = express.Router();
const movieController = require('./movie.controller');

movieRouter.post('/create', movieController.createMovieItem);
movieRouter.get('/all', movieController.getAllMovies);
movieRouter.get('/:id', movieController.getSingleMovie);
movieRouter.patch('/update/:id', movieController.updateMovieInfo);
movieRouter.delete('/delete/:id', movieController.deleteMovie);

module.exports = movieRouter;
