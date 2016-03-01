# NgRx Examples

[Angular 2](https://angular.io/) + [ngrx](https://github.com/ngrx) examples, inspired by official [redux examples](https://github.com/rackt/redux/tree/master/examples).

##Goal

These examples illustrate how to utilize ngrx within an Angular 2 application. This repository will be actively maintained and updated as new tools (dev tools?) and functionality become available and best practices are established.

##Contributions

As Angular 2 and ngrx are relatively new, patterns and best practices are still being established. Examples found in this repository demonstrate how I (or the project author) would structure the solution but discussion and refinement is always encouraged! Please open an issue, submit a pull request, or drop me a message on [twitter](https://twitter.com/btroncone) to present a different approach or idea. This repository will feature the most solid, agreed upon techniques as they evolve.

Please add any additional Angular 2, ngrx, or reactive programming articles, repositories, or code samples you find useful. I will keep this list as up-to-date as possible!


##Additional Resources
Additional Angular 2, ngrx, and reactive programming articles, repositories, and code samples:

###Articles
* [Build a Better Angular 2 Application with Redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/) - Lukas Ruebbelke
* [Reactive Data Flow in Angular 2](http://blog.lambda-it.ch/reactive-data-flow-in-angular-2/) - Wayne Maurer
* [Understand and Utilize the Async Pipe in Angular 2](http://briantroncone.com/?p=623) - Brian Troncone

###Presentations and Slides
* [Introduction to RxJS 5 - NG-NL 2016](http://slides.com/gerardsans/ng-nl-rxjs5) - Gerard Sans
* [Angular 2 Change Detection Explained](http://pascalprecht.github.io/slides/angular-2-change-detection-explained/#/) - Pascal Precht
* [Angular 2 and the Single Immutable State Tree](https://speakerdeck.com/cironunes/angular-2-and-the-single-immutable-state-tree) - Ciro Nunes

###Repositories and Code Samples
* [NgRx Sample Project Utilizing Immutable and Normalizr](https://github.com/ngrx/angular2-store-example) - Cody Lundquist
* [NgRx Auth Example](https://github.com/SekibOmazic/ngrx-auth-example) - Sekib Omazic
* [Todo with Undo/Redo](http://plnkr.co/edit/UnU1wnFcausVFfEP2RGD?p=preview) - Rob Wormald
* [NgRx Dev Tools First Look](http://plnkr.co/edit/Hb4pJP3jGtOp6b7JubzS?p=preview) - Rob Wormald
* [An example implementation of ngrx-store with async actions](https://github.com/thaiat/ngrx-store-example) - Avi Haiat

### Middleware Examples
* [Store-Saga - Rx implementation of redux-saga for @ngrx/store](https://github.com/MikeRyan52/store-saga) - Mike Ryan
* [NgRx Local Storage - Basic example syncing state slices to local storage](https://gist.github.com/btroncone/d3095cf56f63a9e948a1) - Brian Troncone


##Getting Started
```bash
# clone the repo
git clone https://github.com/btroncone/ngrx-examples.git

# cd into repo
cd ngrx-examples

# cd into project of your choice
cd counter

# install dependencies
npm install

# start the server
npm start
```

##Build

Project builds are a stripped down version of [Angular Class Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter), an exceptional Angular 2 seed project. Tests can be executed with either [WallabyJS](http://wallabyjs.com/) or Karma (soon!). 

##Examples

* Counter ([source](https://github.com/btroncone/ngrx-examples/tree/master/counter))
* Todos ([source](https://github.com/btroncone/ngrx-examples/tree/master/todos))
* Async ([source](https://github.com/btroncone/ngrx-examples/tree/master/async))
* Todos with Undo/Redo ([based off example](http://plnkr.co/edit/UnU1wnFcausVFfEP2RGD?p=preview)) ([source](https://github.com/btroncone/ngrx-examples/tree/master/todos-undo-redo))
* Shopping Cart - Coming soon!
* Real World - In Progress!
* Much more to come!

