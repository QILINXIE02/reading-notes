# Delving Deeper Into CRUD Operations

## Readings: CRUD

### Status Codes Based On REST Methods

- **100’s =**
  These status codes are informational responses indicating that the request initiated by the browser is being continued.

- **200’s =**
  These status codes indicate success. The request was successfully received, understood, and accepted.

- **300’s =**
  These are redirection codes indicating that further action needs to be taken by the user agent in order to fulfill the request.

- **400’s =**
  Client error status codes. These indicate that there was a problem with the request made by the client.

- **500’s =**
  Server error status codes. These indicate that the server failed to fulfill a valid request due to an error on the server's side.

- **What is a status code 202?**
  Status code 202 indicates that the request has been accepted for processing, but the processing has not been completed. It is used for asynchronous processing.

- **What is a status code 308?**
  Status code 308 is a permanent redirect, indicating that the resource has been moved to another URL, and future requests should use this new URL.

- **What code would you use if an update didn’t return data to a client?**
  You would use 204 No Content when an update is successful but the server does not return any data.

- **What code would you use if a resource used to exist but no longer does?**
  You would use 410 Gone to indicate that the resource used to exist but is now permanently removed and no longer available.

- **What is the ‘Forbidden’ status code?**
  The ‘Forbidden’ status code is 403. It indicates that the server understands the request but refuses to authorize it.

### Videos: Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

- **Why do we need to pull our MongoDB database string out of our server and put it into our .env?**
  To enhance security and flexibility. Storing sensitive information, such as database connection strings, in environment variables keeps them out of source code.

- **What is middleware?**
  Middleware is software that lies between an operating system and the applications running on it, essentially functioning as a hidden translation layer. In the context of web servers, middleware is used to process requests through a series of functions before sending a response.

- **What does app.use(express.json()) do?**
  This tells the Express app to recognize incoming Request Objects as JSON objects. This middleware is necessary for parsing JSON payloads in incoming requests.

- **What does the /:id mean in a route?**
  The `/:id` in a route is a route parameter that represents a variable part of the URL, allowing the server to accept input directly in the route path.

- **What is the difference between PUT and PATCH?**
  PUT is used to replace an entire resource. PATCH is used for partial updates to a resource.

- **How do you make a default value in a schema?**
  In a schema, you can define a default value for a field by using the `default` keyword within the field's schema definition.

- **What does a 500 error status code mean?**
  A 500 error status code indicates an internal server error, meaning the server encountered an unexpected condition that prevented it from fulfilling the request.

- **What is the difference between a status 200 and a status 201?**
  A 200 status code indicates that the request has succeeded. A 201 status code indicates that a request has succeeded and a new resource has been created as a result. It is typically used in response to a POST request.

## Things I Want to Know More About

I'm interested in learning more about best practices for API design, especially how to effectively use HTTP status codes to communicate with clients. Additionally, exploring more advanced middleware uses in Express for better request handling and response optimization would be beneficial.
