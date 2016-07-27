# Sable

## Getting Started
Run `npm install` in the project root directory, on completion of the installation run `npm start` to begin watching for file changes.

### Tasks
Tasks should be run from the project root directory.
Prefix the task with `npm run`, for example; `npm run clean`.
The tasks `start` and `test` are special tasks that can be run whilst omitting the `run` keyword. Eg. `npm start`, or `npm test`.

- Start: Clean the build folder and begin watching for development file changes
- Test: Run the frontend test suite
- Test Coverage: Run the frontend test suite and generate a code coverage report
- Clean: Remove the /build folder
- Watch Development: Build the files and begin watching for development changes

## Node Package Manager

### NPM Application Dependencies
Application dependencies are installed using `npm install`.
- Angular
- Angular UI Router
- NG-Redux
- Redux

### NPM Development Dependencies
Development dependencies are installed using `npm install` unless the `--production` flag has been added.
- Babel Core
- Babel Preset ES2015
- Babel Register
- Chai
- Istanbul (ES6 test coverage)
- Mocha
- Nyan Progress Webpack Plugin
- Webpack
- Babel Loader
- Rimraf
