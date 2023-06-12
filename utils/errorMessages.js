function getRequiredMessage(fieldName) {
  return `Поле "${fieldName}" является обязательным.`;
};

function getTypeMessage(fieldName, typeDescription) {
  return `Поле ${fieldName} должно быть следующего формата: ${typeDescription}.`;
}

function getExistsMessage(resourse) {
  const string = resourse.charAt(0).toUpperCase() + resourse.slice(1);
  return `${string} с указанным id не найден.`;
}

const auth = {
  token: {
    required: 'Требуется авторизация.'
  },
  credentials: {
    exists: 'Неправильные почта или пароль.'
  }
};

const user = {
  id: {
    exists: getExistsMessage('пользователь'),
    type: getTypeMessage('id', 'ObjectId'),
  },
  email: {
    required: getRequiredMessage('email'),
    type: getTypeMessage('email', 'электронная почта'),
  },
  password: {
    required: getRequiredMessage('password'),
    type: getTypeMessage('password', 'строка'),
  },
  name: {
    required: getRequiredMessage('name'),
    type: getTypeMessage('name', 'строка, длиной от 2 до 30 символов'),
  },
};

const movie = {
  id: {
    exists: getExistsMessage('фильм'),
    type: getTypeMessage('id', 'ObjectId'),
  },
  country: {
    required: getRequiredMessage('country'),
    type: getTypeMessage('country', 'строка'),
  },
  director: {
    required: getRequiredMessage('director'),
    type: getTypeMessage('director', 'строка'),
  },
  duration: {
    required: getRequiredMessage('duration'),
    type: getTypeMessage('duration', 'число (в секундах)'),
  },
  year: {
    required: getRequiredMessage('year'),
    type: getTypeMessage('year', 'строка'),
  },
  description: {
    required: getRequiredMessage('description'),
    type: getTypeMessage('description', 'строка'),
  },
  image: {
    required: getRequiredMessage('image'),
    type: getTypeMessage('image', 'строка с URL-адресом'),
  },
  trailerLink: {
    required: getRequiredMessage('trailerLink'),
    type: getTypeMessage('trailerLink', 'строка с URL-адресом'),
  },
  thumbnail: {
    required: getRequiredMessage('thumbnail'),
    type: getTypeMessage('thumbnail', 'строка с URL-адресом'),
  },
  owner: {
    required: getRequiredMessage('owner'),
    type: getTypeMessage('owner', 'ObjectId'),
  },
  movieId: {
    required: getRequiredMessage('movieId'),
    type: getTypeMessage('movieId', 'число'),
  },
  nameRU: {
    required: getRequiredMessage('nameRU'),
    type: getTypeMessage('nameRU', 'строка'),
  },
  nameEN: {
    required: getRequiredMessage('nameEN'),
    type: getTypeMessage('nameEN', 'строка'),
  }
};

const errorMessages = { auth, user, movie };

module.exports = errorMessages;
