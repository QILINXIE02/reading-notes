# Reading: API Integration

## Review API Server Build

### Difference between Query String Parameter and Path Parameter:
- **Query String Parameter**: Query string parameters are appended to the end of a URL and separated by a question mark (?). They are used to provide additional information to the server about the request. Example: `http://our-site.com/api/v3/stuff?id=things`
- **Path Parameter**: Path parameters are part of the URL path itself and are used to define specific resources or endpoints. They are typically indicated by a placeholder in the URL path. Example: `http://our-site.com/api/v3/stuff/things`

### Dynamic API Interface:
- Our dynamic API interface allows clients to interact with our API by specifying different resources and actions through a user-friendly interface. It abstracts away the complexities of making HTTP requests and handling responses.
- Imagine our API interface as a virtual assistant that understands our requests and translates them into actions that the API server can understand. It provides a seamless experience for users to access and manipulate data without needing to understand the underlying technical details.

## Review Auth Server Build

### Middleware for Authentication:
- Middleware functions can be used in our server to implement authentication mechanisms such as basic and bearer auth. These middleware functions intercept incoming requests, validate the credentials provided, and either grant or deny access based on the authentication method used.
- For basic auth, the middleware would extract the username and password from the request headers and verify them against the credentials stored in the server.
- For bearer auth, the middleware would verify the authenticity of the bearer token provided in the request headers against a trusted source.

### OAuth Handshake:
- OAuth involves a handshake process between the client, the authorization server, and the resource server.
- The client initiates the process by redirecting the user to the authorization server, where they authenticate and authorize the client.
- Once authorized, the authorization server issues an access token to the client, which is then used to access protected resources on the resource server.

### Role Based Access Control (RBAC):
- Role Based Access Control (RBAC) is a security model that defines access rights based on user roles.
- In RBAC, access to resources is determined by the roles assigned to users, rather than their individual identities.
- For example, a user with an "Admin" role may have full access to all resources, while a user with a "Guest" role may have limited access.

## Things I Want to Know More About

- In-depth implementation details of OAuth and its various flows.
- Best practices for securing APIs against common security threats.
- Real-world examples of complex API integrations and their architecture.
