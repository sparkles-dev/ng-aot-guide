Angular: writing AoT-friendly apps
==================================


#### Kick-Start a project

First, install the Angular CLI.
Since we are going to use yarn as the package manager, we set the configuration for the Angular CLI.
Then, we bootstrap a new project and add a simple CSS framework for the pleasure of the eye:

```bash
$ npm install -g @angular/cli
$ ng set --global packageManager yarn
$ ng new ng-aot-guide
$ cd ng-aot-guide
$ yarn add spectre.css
```

Now, let's generate some application code for demonstration purposes.
We generate an `NgModule`, a `Component`, and a `Service`.

```bash
$ ng generate module bttf
$ ng generate component bttf
$ ng generate service bttf/bttf
```
