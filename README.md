# Sable

## Getting Started
Run `npm install` in the project root directory, on completion of the installation run `npm start` to begin watching for file changes.

### Tasks
Tasks should be run from the project root directory.
Prefix the task with `npm run`, for example; `npm run clean`.
The tasks `start` and `test` are special tasks that can be run whilst omitting the `run` keyword. Eg. `npm start`, or `npm test`.

- **start**: Clean the build folder and begin watching for development file changes
- **test**: Run the frontend test suite
- **test:coverage**: Run the frontend test suite and generate a code coverage report
- **clean**: Remove the /build folder
- **watch:dev**: Build the files and begin watching for development changes

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

## To Do

- [x] Setup Development Tooling
- [x] Create Redux Flow
- [ ] Setup Linting (JS)
- [ ] Setup Linting (SASS)
- [ ] Integrate UI Router
- [ ] Add Tests for sample redux flow
- [ ] Setup angular ng-cache-loader to load templates
