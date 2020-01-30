# Netflux-mini-netflix-web-app-ALC
This is a project built as  Andela Leraning Community 4.0 phase 2 challenge

# Netflux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## API
The API is built seperate from the front end and is built on node using express and mongo db as the database.
## Setting up the API

Default port = 3500

1) The previous run of te npm install should have installed the packages required to run the api.

You will need to set up mongodb(mongolink) on your device to run the following then follow the steps outlined below.

Run the following commands in your command line.
<!-- TODO -->
1) mongo movieApi < api/moviesJson.js <!-- This will create the movieAPI database and create the movie list within a collection called movies-->
2) mongo movieApi < api/usersJson.js <!-- This will create a collection called users that will store your users-->
