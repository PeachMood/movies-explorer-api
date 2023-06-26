const express = require('express');

const router = express.Router();

const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validators/moviesValidator');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateCreateMovie, createMovie);
router.delete('/:movieId', validateDeleteMovie, deleteMovie);

module.exports = router;
