# NgRx Inventory App

![Blank diagram](https://user-images.githubusercontent.com/32598290/107129213-7b871700-68cc-11eb-823c-8cbf05c3744f.png)

A simple Inventory Management App build with Angular and NgRx.

Check demo [here](https://sakmanal.github.io/NgRx-Inventory-App) !!

- State Management with NgRX.
- Unidirectional data flow with Container and Presentation components pattern.
- PrimeNg Component Library.
- Containerize the app with Docker.

## Running the Project Locally
___
### Development server
1. Install the Angular CLI: `npm install -g @angular/cli`.
1. Run `npm install` at the root of this project.
1. Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running the Project Using Docker Containers
___
### Development server
1. Run ` docker-compose -f docker-compose.dev.yml build`
2. Run `docker-compose -f docker-compose.dev.yml up`
3. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
### Production server
1. Run `docker-compose -f docker-compose.prod.yml build`
2. Run `docker-compose -f docker-compose.prod.yml up`
3. Visit http://localhost


![cust](https://user-images.githubusercontent.com/32598290/106369488-956bab80-635a-11eb-8321-9fe8c1d660a1.png)

![pro](https://user-images.githubusercontent.com/32598290/106369495-a3b9c780-635a-11eb-833d-e3460a9ee8e0.png)

