# JdevWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.













-----------------------------------------
docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 new jdev-workspace --create-application=false
cd jdev-workspace

docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 generate library jdev-angular-lib

docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 generate component jdev-search-and-result-as-select --project=jdev-angular-lib

docker run --rm -it -v $(pwd):/myWorkDir nodejs-util:node22 install

docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 build jdev-angular-lib

cd dist/jdev-angular-lib
npm login
npm publish --access public

------------
cd jdev-workspace
docker run --rm -it -v $(pwd):/myWorkDir nodejs-util:node22 install
docker run --rm -it -v $(pwd):/myWorkDir angular-util:node22 build jdev-angular-lib
cd dist/jdev-angular-lib
npm login
npm publish --access public
cd ../../..
pwd