# ChuckJoke

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
npm install && npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

## Running the app from Docker image

If you have Docker installed, you can run this app in two simple commands:

1. `docker pull ghcr.io/bruceleeu/chuck-joke:latest` (or replace `latest` with your desired version tag)
2. `docker run --name chuck-joke -p 3000:8080 -d ghcr.io/bruceleeu/chuck-joke`

This will pull the latest image from the repo and serve the content on `localhost:3000`

## Application in action

![Random Jokes](/public/chuck-joke_screenshot_1.png "Random Jokes")
![Favourite Jokes](/public/chuck-joke_screenshot_2.png "Favourite Jokes")
