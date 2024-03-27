# Understanding API Design Best Practices

## Reading: API Design Best Practices

1. **What does REST stand for?**
   REST stands for Representational State Transfer. It is an architectural style for designing networked applications.

2. **REST APIs are designed around a ____**
   REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client.

3. **What is an identifier of a resource? Give an example.**
   An identifier of a resource is a URI (Uniform Resource Identifier) that uniquely identifies that resource. For example, `https://api.example.com/users/1234` where `1234` is the identifier for a specific user in the system.

4. **What are the most common HTTP verbs?**
   The most common HTTP verbs are GET, POST, PUT, DELETE, and PATCH.

5. **What should the URIs be based on?**
   The URIs should be based on nouns (the resource) and not verbs (the operations on the resource).

6. **Give an example of a good URI.**
   A good example of a URI is `https://api.example.com/orders` for accessing orders resources.

7. **What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?**
   A ‘chatty’ web API means one that requires many network requests to accomplish simple tasks. This is generally considered a bad thing as it can lead to increased load on the server and slower performance for the client.

8. **What status code does a successful GET request return?**
   A successful GET request typically returns a status code of 200 OK.

9. **What status code does an unsuccessful GET request return?**
   An unsuccessful GET request may return various status codes, including 404 Not Found if the resource cannot be found.

10. **What status code does a successful POST request return?**
    A successful POST request typically returns a status code of 201 Created.

11. **What status code does a successful DELETE request return?**
    A successful DELETE request typically returns a status code of 204 No Content.

## Things I Want to Know More About

I'm interested in learning more about the nuances of RESTful API design, especially in terms of best practices for versioning, handling large datasets, and authentication. Additionally, I'd like to explore other API design paradigms, such as GraphQL, and understand their advantages and use cases compared to REST.
