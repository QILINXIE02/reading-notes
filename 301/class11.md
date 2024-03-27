# Understanding MongoDB and Mongoose: SQL vs NoSQL

## Readings: MongoDB and Mongoose

### nosql vs sql

| SQL (Structured Query Language) | NoSQL (Not Only SQL) |
|---------------------------------|-----------------------|
| Relational Database Management Systems (RDBMS) | Non-relational or distributed database system. |
| Structured data with a predefined schema | Flexible data models with dynamic schema for unstructured data. |
| Vertically scalable (scale-up by increasing the horsepower of the existing hardware) | Horizontally scalable (scale-out across commodity servers) |
| Uses SQL for defining and manipulating data | Queries are focused on collection of documents. |
| Best suited for complex queries | Best suited for hierarchical data storage as it supports key-value pairs, document-based, graph databases |

- **What kind of data is a good fit for an SQL database?**
  Structured data that adheres to a strict schema is a good fit for an SQL database. Real-world example: A banking system where transactions, accounts, and user details need to be stored in a highly structured and interrelated manner.

- **What kind of data is a good fit for a NoSQL database?**
  Unstructured or semi-structured data with dynamic schemas is a good fit for NoSQL databases. Real-world example: Social media platforms like Twitter, where data is diverse, the schema can vary, and there is a need for horizontal scaling.

- **Which type of database is best for hierarchical data storage?**
  NoSQL databases are best suited for hierarchical data storage because they can store data in a key-value pair, document-based, or graph databases which are more flexible for this kind of structure.

- **Which type of database is best for scalability?**
  NoSQL databases are generally considered better for scalability, especially horizontal scaling across commodity servers.

### Videos: sql vs nosql

- **What does SQL stand for?**
  SQL stands for Structured Query Language.

- **What is a relational database?**
  A relational database is a type of database that stores and provides access to data points that are related to one another.

- **What type of structure does a relational database work with?**
  A relational database works with tables that are structured in rows and columns.

- **What is a ‘schema’?**
  A schema is a blueprint or architecture of how the database is structured, defining how data is organized and how the relations among them are associated.

- **What is a NoSQL database?**
  A NoSQL database is a non-relational database that allows for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.

- **How does it work?**
  It works by storing data in formats such as key-value pairs, document-based, column-based, or graph databases, allowing for more flexible and scalable data management.

- **What is inside of a MongoDB database?**
  Inside of a MongoDB database, data is stored in BSON documents (Binary JSON), collections, which can be compared to tables in SQL databases, but with a dynamic schema that can change over time.

- **Which is more flexible - SQL or MongoDB? and why.**
  MongoDB (representing NoSQL databases) is more flexible than SQL because it allows for a dynamic schema, enabling developers to store data in multiple formats without the need to define the structure upfront.

- **What is the disadvantage of a NoSQL database?**
  The main disadvantage of a NoSQL database is the lack of standardization, leading to challenges in complex queries and transactions compared to the well-established, standard query language (SQL) of relational databases.

## Things I Want to Know More About

I'm curious to learn more about the practical applications and performance implications of choosing NoSQL databases like MongoDB for real-time, large-scale web applications. Additionally, I’d like to explore the integration of MongoDB with modern web frameworks and the best practices for schema design and data modeling in such environments.
