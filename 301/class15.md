# Reading: Authentication

### What is OAuth

1. **What is OAuth?**
   OAuth is an open standard for access delegation, commonly used as a way for internet users to grant websites or applications access to their information on other websites but without giving them the passwords. It's used for token-based authentication and authorization.

2. **Give an example of what using OAuth would look like.**
   An example of using OAuth could be a website allowing you to log in using your Google account. Instead of creating a new username and password for the site, you use your Google credentials, and Google confirms your identity to the website without sharing your login details.

3. **How does OAuth work? What are the steps that it takes to authenticate the user?**
   - **User Authorization**: The user is asked if they agree to give the application certain access to their data.
   - **Application Receives Authorization Grant**: If the user agrees, the application receives an authorization grant that serves as permission to request an access token.
   - **Application Requests Access Token**: The application requests an access token from the authorization server by presenting authentication of its own identity, along with the authorization grant.
   - **Application Receives Access Token**: If the application's request is valid, the authorization server issues an access token.
   - **Application Accesses the Resource**: The application uses the access token to access the protected resource (such as user data) from the resource server.

4. **What is OpenID?**
   OpenID is an authentication standard that allows users to be authenticated by cooperating sites (known as Relying Parties, or RPs) using a third-party service, sharing identity information between domains.

### Authorization and Authentication flows

1. **What is the difference between authorization and authentication?**
   Authentication is the process of verifying who a user is, while authorization is the process of verifying what specific applications, files, and data a user has access to.

2. **What is Authorization Code Flow?**
   The Authorization Code Flow is a secure method of authentication in which an authorization code is first obtained, then exchanged for an access token, and optionally a refresh token.

3. **What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**
   This flow is an enhancement to the Authorization Code Flow to prevent certain attacks and to be able to securely perform the OAuth exchange from public clients.

4. **What is Implicit Flow with Form Post?**
   Implicit Flow with Form Post is a simplified OAuth flow previously recommended for single-page apps (SPAs) that retrieves an access token directly from the authorization request.

5. **What is Client Credentials Flow?**
   The Client Credentials Flow grants access tokens based on the authorization granted to the client itself, rather than on behalf of a user.

6. **What is Device Authorization Flow?**
   Device Authorization Flow allows devices without browsers or with limited input capability to obtain an authorization grant from user-interaction on another device with better input capabilities.

7. **What is Resource Owner Password Flow?**
   This flow allows requesting tokens with a username and password directly, which is considered less secure and only recommended in specific scenarios where trust is high and other flows are not viable.

## Things I Want to Know More About

I'm curious to explore more about the security implications and best practices around implementing OAuth, especially in scenarios involving sensitive data. Furthermore, understanding the practical applications of different authorization flows in various types of applications would be insightful.
