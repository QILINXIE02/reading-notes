# Readings: Express, NPM, TDD, CI/CD

## Introduction

This reading provides reading material, code samples, and additional resources related to Express.js, NPM, Test-Driven Development (TDD), and Continuous Integration/Continuous Deployment (CI/CD). It covers an introduction to these topics, explains important concepts, and includes reflection questions.

## Reading

- **An introduction to NodeJS and Express**
  - **Explain middleware, answer as though I were a non-technical recruiter.**
    - Middleware in Express.js acts as a bridge between the client and the server, handling requests and responses. It's like a series of gates that filter and process data as it moves through the server, ensuring security, authentication, and other functionalities.

  - **Express the most popular __ __ ____.**
    - Express is the most popular web application framework for Node.js.

  - **Express is “unopinionated.” What does that mean?**
    - Express being "unopinionated" means that it provides flexibility and freedom to developers. It doesn't impose strict rules or conventions, allowing developers to structure their applications as they see fit.

  - **What is a module and why is modularity useful to us as developers?**
    - A module is a reusable piece of code that encapsulates functionality. Modularity is useful to developers because it promotes code reusability, maintainability, and organization. It allows developers to break down complex systems into smaller, manageable parts.

- **What is NPM?**
  - **What version of npm are you running on your machine?**
    - To check the version of npm installed on your machine, you can run the command `npm -v`.

  - **What command would you type to install a library/package called ‘jshint’ into your node project?**
    - To install the 'jshint' library/package into your Node project, you would run the command `npm install jshint`.

- **What is TDD?**
  - **Explain why tests are important. Please explain as though I were your non-technical elder.**
    - Tests are important because they ensure that our code works as intended and continues to work even as we make changes. They provide a safety net, helping us catch and fix bugs early, which saves time and effort in the long run.

  - **What are three expected benefits of testing?**
    1. Increased confidence in the codebase.
    2. Reduced number of bugs and errors.
    3. Improved maintainability and code quality.

  - **Name at least 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.**
    - Individual pitfalls: Over-reliance on mocks/stubs, writing tests after implementing the code.
    - Team pitfalls: Lack of communication about test coverage, inconsistent testing practices.

- **CI/CD**
  - **What are three benefits of Continuous Integration?**
    1. Early detection of integration issues.
    2. Faster feedback loop for developers.
    3. Improved collaboration among team members.

  - **What is the difference between Continuous Delivery and Continuous Deployment?**
    - Continuous Delivery ensures that the code is always in a deployable state, ready to be deployed manually. Continuous Deployment, on the other hand, automatically deploys every change to production without manual intervention.

  - **Explain how GitHub fits into this process assuming the listener comes from a non-technical background.**
    - GitHub serves as a platform for version control and collaboration on code. It allows developers to store and manage their code repositories, track changes made by team members, and coordinate the integration of new features or fixes into the main codebase.

## Bookmark and Review

- [nodeJS docs](https://nodejs.org/en/docs/)
- [npm docs](https://docs.npmjs.com/)
- [express docs](https://expressjs.com/en/api.html)
- [http status codes](https://httpstatuses.com/)
- [supertest](https://github.com/visionmedia/supertest)

## Reflection

- **What are your learning goals after reading and reviewing the class README?**
  - My learning goals include gaining a deeper understanding of Express.js, NPM, TDD, and CI/CD practices. I aim to apply these concepts effectively in my projects and improve my development workflow.
