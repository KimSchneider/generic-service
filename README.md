# generic-service

## Development

### `npm run dev`

Using `nodemon` during development for hot reloading.

Running with `ts-node` using `npm start`. No compilation required, but there is a `npm run build` command, too.

### environment

Create `.env` file with environment variables like database credentials and other secrets or environment specific configuration.

Before adding a key to `.env`, make sure to add the key including a description to `.env.definition`. This is the environment variable documentation.

## Build

### `npm run build`

Cleans `dist` and builds `src` to `dist`.

### eslint

`eslint` is configured and installed for TypeScript and also configured to run on build.

## Production

`npm start` can be used for production mode or any other custom startup. Just make sure to `build` everything.
