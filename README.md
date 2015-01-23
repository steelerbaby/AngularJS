# AngularJS
* AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.
* Angular JS provides you with rich set of APIs to define these modules and linked them together with dependency injection. 

## Introduction
* MVC capability
* Declarative programming
* extend HTML to better serve dynamic content through two way data binding, auto sync of models & views

## Directives
* ng-app - add as an attribute to tell Angular where to be active
* ng-model - two way data binding between elements. Generally all form elements would be models and "bind" to certain other html events on the page. The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
* ng-show - attribute conditionally show an element, depending on the value of a boolean expression. Similar to ng-show you can also use ng-hide, which exactly does opposite of ng-show.
* ng-bind - bind model to view
* ng-init directive initialize AngularJS application variables.

## Expressions


## Modules
Modules can be aggregated to form complete web app. Modules are the logical entities that you divide your app in. So your app can contain several modules (like Transaction, Report, etc.). Each module represent a logical entity within the app.


## Controllers 
Controllers are nothing but plain JavaScript functions which are bound to a particular scope. Controllers are used to add logic to your view. Views are HTML pages. These pages simply shows the data that we bind to them using two-way data binding in Angular. Basically it is Controllers responsibility to glue the Model (data) with the View. Your controller must be responsible for binding model data to views using $scope. It does not contain logic to fetch the data or manipulating it.

## Scope
Scope is nothing but an object that Glues the View with Controller. They hold the Model data that we need to pass to view. Scope uses Angular’s two-way data binding to bind model data to view. Imagine $scope as an object that links Controller to the View. It is controllers responsibility to initialize the data that the view needs to display. This is done by making changes to $scope.


## Service
You use a service in a controller. You delegate to a service.
* HTTP Service
* Routing
* REST 
