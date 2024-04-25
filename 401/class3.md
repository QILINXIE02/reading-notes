# Readings: Express REST API

## Introduction

This README provides reading material, code samples, and additional resources related to building REST APIs with Express.js. It covers an introduction to ES6 Classes and Express Routing, along with reflection questions.

## Readings

### Review: ES6 Classes

- **Classes are a template for creating ____.**
  - Classes are a template for creating objects.

- **Can a class declaration be hoisted?**
  - No, unlike function declarations, class declarations are not hoisted. They must be declared before they are used.

- **How would you describe a constructor and contextual “this” to a non-technical friend?**
  - A constructor is like a special function inside a class that is called automatically when you create a new object from that class. The "this" keyword refers to the current object being created, allowing you to access and modify its properties.

### Using Express Routing

- **Within Express, what does routing refer to?**
  - In Express, routing refers to the process of determining how an application responds to a client request to a particular endpoint, or URL, and HTTP method.

- **What is the difference between a route path and a route method?**
  - A route path is the URL endpoint to which the client sends the request, while a route method is the HTTP method (GET, POST, PUT, DELETE, etc.) used to access that endpoint.

- **When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?**
  - It is appropriate to add next as a parameter to a route handler when you want to pass control to the next middleware function in the stack. If next has been passed to your middleware as a parameter, you must call it to pass control to the next middleware function.

### Express Routing

- **What is an Express Router?**
  - An Express Router is a middleware that provides a way to group route handlers together based on a common URL prefix.

- **By what mean do we initialize express.Router() in an express server?**
  - We initialize express.Router() by calling it as a function and assigning it to a variable, then using that variable to define routes.

- **What do we use route middleware for?**
  - Route middleware is used to perform actions on requests and responses before they are handled by the route handler. It can be used for tasks such as authentication, validation, logging, etc.

## Reflection

- **What are your learning goals after reading and reviewing the class README?**
  - My learning goals include gaining a deeper understanding of ES6 Classes and Express Routing, and applying these concepts effectively in building RESTful APIs with Express.js. I aim to improve my skills in route handling, middleware usage, and overall API design.
