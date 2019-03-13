# Front: Biko2 D8 Theme (based on COG)
![by Biko2](https://raw.githubusercontent.com/biko2/biko-repo-bagdes/master/png/biko-bagge-pill.png)
![GitHub last commit](https://img.shields.io/github/last-commit/biko2/front.svg?style=plastic)
![GitHub release](https://img.shields.io/github/release/biko2/front.svg)
![node](https://img.shields.io/node/v/gulp.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

- [Front: Biko2 D8 Theme (based on COG)](#front-biko2-d8-theme-based-on-cog)
  - [Installation](#installation)
    - [Setup Local Development](#setup-local-development)
  - [Ejecutar herramientas](#ejecutar-herramientas)
  - [Tasks](#tasks)
  - [Theme Overview](#theme-overview)
    - [Folder Structure](#folder-structure)
    - [Sass Structure](#sass-structure)
    - [Gulp](#gulp)
    - [JavaScript](#javascript)
    - [Images](#images)
  - [Further Documentation](#further-documentation)
  - [Build Notes](#build-notes)

---

## Installation

Instalar el tema principal.
```
composer require 'drupal/cog'
```
Descargar este theme e incluirlo en el proyecto.


### Setup Local Development

Hay que instalar nodejs para preparar las herramientas. TODO: poner notas para hacerlo.
Desde la carpeta del theme (theme/custom/front) instalar los modulos de cada herramienta.
```
npm install
```

## Ejecutar herramientas
Para compilar todo.
```
gulp
```
Para tenerlo lanzado y que recompile cuando cambiamos los archivos.
```
gulp watch

```
Para lanzar el entorno de desarrollo con live reload.
```
gulp serve
```

Para compilar solo SASS, JS y las páginas.
```
gulp build:dev
```

## Tasks
> Based on [gulp-tasks-front](https://github.com/biko2/gulp-tasks-front)

## Theme Overview

Starter theme for Biko2 proyects.

```
contrib/ (theme folder)
|-- cog/

custom/ (theme folder)
|-- front/ (cloned from cog starterkit)
```

### Folder Structure

```
|-- assets/css/  (generated css)
|-- assets/images/  (theme images)
|-- assets/js/  (compiled js)
|-- src/assets/js/  (js sources)
|-- src/assets/images/  (image sources)
|-- src/assets/fonts/  (font sources)
|-- src/assets/scss/  (SMACSS based sass setup)
|-- src/assets/twigPages/  (Twig based pages)
|-- gulpfile.js  (configured gulp file)
|-- install-node.sh (bash script to install nvm and node)
|-- *logo.png (placeholder logo png file)
|-- *logo.svg (placeholder logo svg file)
|-- node_modules/  (modules generated by npm)
|-- package.json  (configured to load dependencies by npm)
|-- README.md (Documentation)
|-- screenshot.png (placeholder theme screenshot file)
|-- front.info.yml (theme config file)
|-- front.breakpoints.yml (theme breakpoints file)
|-- front.libraries.yml (starter libraries file to load theme assets)
|-- front.theme (file to use for preprocess functions)
|-- theme-settings.php (file to use for making theme settings available in the GUI)
```

### Sass Structure

BEM & Atomic design structure.
```
sass/
  |-- 01_tools/
  |-- 02_settings/
  |-- 03_generic/
  |-- 04_elements/
  |-- 05_objects/
  |-- 06_components/
  |-- 07_pages/
  |-- 08_utilities/
  |-- style.scss
```

[BEM - Atomic documentation] (https://www.lullabot.com/articles/bem-atomic-design-a-css-architecture-worth-loving)

* **styles.scss**  the manifest file that imports all the partials or folders with globbing

### Gulp

The Gulp installation and tasks are setup to work on install, but are still intended to be easily updated based on project needs. The tasks are declared in `gulpfile.js` and broken out within the `gulp-tasks/` subfolder. You can list the available Gulp tasks with `gulp --tasks`. The most common gulp task is `gulp watch` when developing locally, which covers Sass compiling, JS linting, and building dynamic styleguides.  

### JavaScript

An example JS file `app.js` is added by default in the `js/` folder. This file contains sample code wrapped in the `Drupal.behaviors` code standard. This JS file is added to the theme with the following portion of the code from `[theme-name].libraries.yml`. Cog does not have compression enabled for Gulp since it is relying on Drupal's caching system.

```
lib:
  js:
    js/app.js: {}
    js/vendors.js: {}
```

### Images

## Further Documentation


## Build Notes
