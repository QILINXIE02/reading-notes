# Diving Deeper Into More CRUD Operations

## Readings: More CRUD

### CRUD Basics

- **Which HTTP method would you use to update a record through an API?**
  To update a record through an API, you would typically use the PUT method for a full update or the PATCH method for a partial update of a resource.

- **Which REST methods require an ID parameter?**
  REST methods that operate on individual resources typically require an ID parameter to specify the resource to be accessed or manipulated. These methods include GET (when retrieving a single record), PUT, PATCH, and DELETE.

## Videos: Speed Coding: Building a CRUD API

- **What’s the relationship between REST and CRUD?**
  REST (Representational State Transfer) is an architectural style for designing networked applications, while CRUD (Create, Read, Update, Delete) refers to the four basic operations of persistent storage. The relationship between REST and CRUD is that RESTful APIs use HTTP requests to perform CRUD operations on resources, mapping CRUD operations to HTTP methods such as POST (Create), GET (Read), PUT/PATCH (Update), and DELETE (Delete).

- **If you had to describe the process of creating a RESTful API in 5 steps, what would they be?**
  1. **Define the Data Model:** Start by defining the structure of the data that the API will manage, including entities, relationships, and fields.
  2. **Identify the Resources:** Break down the data model into resources (entities) that can be manipulated through the API.
  3. **Design the Endpoints:** For each resource, design the API endpoints (URLs) and map the CRUD operations to HTTP methods (GET, POST, PUT/PATCH, DELETE).
  4. **Implement the Server Logic:** Write the server-side logic to handle the HTTP requests, perform the necessary CRUD operations on the data, and return the appropriate responses.
  5. **Test and Document the API:** Thoroughly test the API to ensure it works as expected. Document the API endpoints, HTTP methods, request payloads, and response formats for developers who will use the API.

## Things I Want to Know More About

I'm interested in exploring advanced CRUD operations, such as handling complex data relationships and optimizing performance for high-traffic APIs. Additionally, I'd like to learn more about best practices for securing RESTful APIs and managing authentication and authorization efficiently.
