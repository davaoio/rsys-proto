FROM php:7.2-apache

LABEL key="steve"

COPY . /var/www
COPY vhost.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www

RUN docker-php-ext-install mbstring pdo pdo_mysql \
    && a2enmod rewrite \
    && chown -R www-data:www-data /var/www