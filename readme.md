## RSYS Prototype
RSYS is a website running Laravel + VueJS.

### Installation
This will require composer and nodejs/npm in your local machine.

```
$ docker-compose up --build
$ docker exec -it rsys_app_1 bash
$ composer install
$ npm install && npm run dev
```

Configure your `.env` file for the database credentials which can be found inside `docker-compose.yml` file.

Lastly, run:

```
$ php artisan migrate
```

You can then view in your browser @ `localhost:8080`

### Tech Stack
* docker
* docker-compose
* laravel
* vuejs
* vuetify (Material VueJS Framework)
* vue-router

### API Documentation
https://documenter.getpostman.com/view/9116065/SVtVVUby?version=latest#4bb88510-2e73-4e02-9ce0-439f7d09fb04
