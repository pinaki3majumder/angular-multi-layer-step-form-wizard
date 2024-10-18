# MultiLayerStepFormWizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Overview
This project implements a dynamic multi-layer step form using Angular 17.2.1. The form fields, validation rules, and steps are dynamically generated based on a JSON configuration, with support for nested multi-step forms within a single step. This allows for complex form structures with dynamic rendering.

## Features
- **Dynamic Form Rendering**: The entire form is rendered dynamically based on a JSON configuration file.
- **Multi-Layer Steps**: The form is divided into multiple steps with navigation between them.
- **Nested Multi-Step Forms**: One or more steps can contain additional multi-step forms, creating a nested step form structure.
- **Validation**: Each step, including nested forms, has client-side validation using Angular’s reactive forms.
- **Reusability**: This form can be reused for various scenarios by updating the JSON configuration.

## Technologies Used
- **Angular**: Version 17.2.1
- **Reactive Forms**: For managing form control, form group, and validation.
- **TypeScript**: The project is written in TypeScript.
- **HTML5/CSS3**: For styling the form components.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
