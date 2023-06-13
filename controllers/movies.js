const { Error } = require('mongoose');

const { ValidationError } = Error;

const Movie = require('../models/movie');
const StatusCodes = require('../utils/StatusCodes');
const BadRequest = require('../utils/errors/BadRequest');
const Forbidden = require('../utils/errors/Forbidden');
const NotFound = require('../utils/errors/NotFound');

function getMovies(req, res, next) {
  const owner = req.auth.userId;

  Movie.find({ owner })
    .then((movies) => res.status(StatusCodes.OK).json(movies))
    .catch((error) => next(error));
}

function createMovie(req, res, next) {
  const owner = req.auth.userId;
  const movie = req.body;

  Movie.create({ owner, ...movie })
    .then((createdMovie) => res.status(StatusCodes.CREATED).json(createdMovie))
    .catch((error) => {
      if (error instanceof ValidationError) {
        next(new BadRequest(error.message));
      } else {
        next(error);
      }
    });
}

function deleteMovie(req, res, next) {
  const FORBIDDEN_MESSAGE = 'Нет прав на удаление указанного фильма.';
  const SUCCESS_MESSAGE = 'Фильм успешно удален.';
  const NOT_FOUND_MESSAGE = 'Фильм с указанным id не найден.';

  const owner = req.auth.userId;
  const movieId = req.params.movieId;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFound(NOT_FOUND_MESSAGE);
      }
      if (movie.owner.toString() !== owner) {
        throw new Forbidden(FORBIDDEN_MESSAGE);
      }
      return Movie.deleteOne(movie);
    })
    .then(() => res.status(StatusCodes.OK).send(SUCCESS_MESSAGE))
    .catch((error) => next(error));
}

module.exports = { getMovies, createMovie, deleteMovie };
