# WeatherWidget

Welcome to World Wide Weather, an Angular-based weather widget that allows you to explore the current weather conditions by simply clicking on a location on the map. This project was generated with Angular Cli version 17.1.0.

## Prerequisites

Make sure you have the following prerequisites:
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

Install Angular CLI using npm with the following command:
- `npm install -g @angular/cli`

## Clone the project and install dependencies

- Run `git clone https://github.com/Taapke/weather-widget.git`
- Go into the directory and run `npm install`

## Get API key 

- Create an account on <https://www.tomorrow.io/weather-api/> and obtain your API key. Ensure that your API key is kept confidential. Do not expose it publicly or commit it to version control. 

## Add API key to environment file

- Create a new environment file: `src/environments/environment.ts`.
- Copy the contents of the file `src/environments/environment-example.ts` and replace the text `yourAPIkey` with your saved API key.

## Run the project

- Run `ng serve`
- Navigate to <http://localhost:4200/>. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --n-watch --code-coverage` to generate a coverage report.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

