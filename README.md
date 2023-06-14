# Movie explorer API 🎬
Сервис, предоставляющий API для приложения Movies explorer.

## API

GET /users/me - возвращает информацию о пользователе
 PATCH /users/me - обновляет информацию о пользователе
 GET /movies - все сохранённые пользователем фильмы
 POST /movies - создаёт фильм с переданными в теле данными
 DELETE /movies/_id - удаляет сохранённый фильм по _id
 POST /signup - создаёт пользователя с переданными в теле данными
 POST /signin - возвращает JWT, если в теле запроса переданы правильные почта и пароль
 POST /signout - удаляет JWT из куки

## Инструменты разработки
#### Node.js
Cерверный JavaScript-фреймворк, который позволяет запускать JavaScript на стороне сервера. Он использует событийно-ориентированную архитектуру и неблокирующий ввод/вывод для обеспечения высокой производительности приложений.

Документация: https://nodejs.org/en

#### Express
Фреймворк для Node.js, который позволяет разрабатывать веб-приложения и API. Он использует принципы RESTful API и построен на основе объектов request и response.

Документация: https://expressjs.com/

#### Joi
Фреймворк для валидации данных. Вместе с библиотекой сelebrate позволяет проверять корректность данных до обращения к базе данных, что существенно снижает нагрузку на приложение.

Документация: https://joi.dev/

#### Mongoose
Библиотека объектно-ориентированного программировани, которая создает соединение между MongoDB и средой выполнения Node.js.

Документация: https://mongoosejs.com/

## Структура проекта
Структура сервиса Movie explorer API составлена согласно общепринятым практикам разработки на Express. Проект включает в себя следующие директории:
* `configs` - файлы для настройки сервера.
* `routes` - определение маршрутов, к которым могут обращаться пользователи и определение действий, которые необходимо выполнить для каждого маршрута.
* `middlewares` - функции, которые выполняются перед и после обработки запроса.
* `controllers` - файлы для обработки запросов и реализации бизнес-логики приложения.
* `models` содержит описания моделей для работы с базой данных.
* `utils` - вспомогательные утилиты для упрощения процесса разработки и улучшения качества кода.

## Запуск
Перед запуском проекта необходимо в корневой директории разместить файл `.env` с настройками приложения и базы данных. Например:
```
NODE_ENV=production
JWT_SECRET=jwt-secret
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=bitfilmsdb
```

После найстроки приложение можно запустить в следующих режимах:
1. Разработка: `npm run dev`
2. Деплой: `npm run start`
3. Линтер: `npm run eslint` или `npm run eslint-fix`

## Ссылки
Домен: https://api.movies.diploma.nomoredomains.rocks

IP: 51.250.12.249
