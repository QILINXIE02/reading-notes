# Readings: AWS: API, Dynamo and Lambda

## AWS API Gateway Overview

- **What is Amazon API Gateway?**: Amazon API Gateway is a fully managed service provided by AWS that allows developers to create, publish, maintain, monitor, and secure APIs at any scale. It acts as a front-door for applications to access data, business logic, or functionality from backend services, such as Lambda functions or DynamoDB tables.
- **Importance of Amazon API Gateway**: API Gateway plays a crucial role in the Serverless ecosystem by providing a centralized and scalable platform for managing APIs. It enables developers to build serverless architectures and easily connect frontend applications with backend services.
- **Integration with Other AWS Services**: API Gateway integrates seamlessly with various AWS services, including AWS Lambda, AWS DynamoDB, AWS S3, and AWS Cognito, allowing developers to create powerful and flexible APIs that leverage the capabilities of these services.

## AWS API Gateway

- **Benefits of Using Amazon API Gateway**:
  1. Scalability: API Gateway scales automatically to handle any amount of traffic.
  2. Security: It provides features like authentication, authorization, and throttling to secure APIs.
  3. Monitoring and Analytics: API Gateway offers built-in monitoring and analytics capabilities to track API usage, performance, and errors.
- **API Types**: Developers can choose between REST APIs and WebSocket APIs when creating APIs with Amazon API Gateway.

## AWS DynamoDB Guide

- **What is DynamoDB?**: DynamoDB is a fully managed NoSQL database service provided by AWS. It offers fast and predictable performance with seamless scalability, making it suitable for a wide range of applications.
- **Recommendation of DynamoDB over MongoDB**: DynamoDB is recommended over MongoDB in scenarios where developers require seamless scalability, low-latency performance, and minimal operational overhead. DynamoDB's fully managed nature and integration with other AWS services make it an attractive choice for serverless and cloud-native applications.

## AWS DynamoDB

- **Explanation to a Non-technical Friend**: DynamoDB is like a big, fast, and reliable digital notebook where you can store and retrieve any type of information you want. It automatically organizes your notes so you can quickly find what you need, and it never runs out of space because it can expand as much as you need.

## Dynamoose

- **What is Dynamoose?**: Dynamoose is a modeling tool and Object-Data Mapping (ODM) library for DynamoDB in Node.js. It simplifies the interaction with DynamoDB by providing a higher-level abstraction and a more intuitive API compared to the AWS SDK.
- **Key Features of Dynamoose**:
  1. Schema Definition: Dynamoose allows developers to define schemas for DynamoDB tables using JavaScript objects.
  2. Data Validation: It supports automatic data validation based on defined schema attributes.
  3. Querying and CRUD Operations: Dynamoose provides methods for querying, creating, reading, updating, and deleting records in DynamoDB tables with ease.

## Reflection

After reading and reviewing the class README, my learning goals include gaining a deeper understanding of AWS services such as API Gateway, DynamoDB, and Lambda, exploring their capabilities, and learning best practices for building scalable and efficient serverless applications using these services.

