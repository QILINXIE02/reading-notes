# Readings: Data Modeling

## Introduction

This README provides reading material, code samples, and additional resources related to data modeling, covering topics such as NoSQL vs SQL databases and SQL modeling techniques. It includes reflection questions to help reinforce learning objectives.

## Reading

### NoSQL vs SQL

- **What type of database is the best fit for the complex query intensive environment?**
  - SQL databases are typically the best fit for complex query-intensive environments due to their ability to perform complex joins and transactions efficiently.

- **What type of database is the best fit for hierarchical data storage?**
  - NoSQL databases are often the best fit for hierarchical data storage due to their flexible schema and support for nested data structures.

- **Describe the differences in scalability between a SQL and NoSQL database as though you were speaking to a non-technical friend.**
  - SQL databases typically scale vertically, meaning they handle increased workload by adding more resources (CPU, memory) to a single server. NoSQL databases, on the other hand, scale horizontally, meaning they handle increased workload by distributing data across multiple servers, allowing for more seamless expansion as demand grows.

### SQL Modeling Techniques

- **Among data tables, what is a one-to-many relationship and how do we “relate” them?**
  - A one-to-many relationship means that one record in a table can be associated with multiple records in another table. We relate them by using foreign keys in the "many" side table that reference the primary key of the "one" side table.

- **Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.**
  - Prior to designing your relational database, it might be useful to **create a schema** of the database tables and their relationships.

- **Explain the difference between a primary and foreign key.**
  - A primary key is a unique identifier for a record in a table, used to ensure each record is uniquely identifiable. A foreign key, on the other hand, is a field in a table that refers to the primary key of another table, establishing a relationship between the two tables.

## Videos

### SQL vs NoSQL

- **How do we treat keywords and parameters differently in SQL syntax?**
  - In SQL syntax, keywords are reserved words that have predefined meanings and cannot be used as identifiers. Parameters, on the other hand, are placeholders used in queries to represent values that will be supplied later.

- **Define normalization within the context of schemas and data.**
  - Normalization is the process of organizing data in a database to reduce redundancy and dependency. It involves dividing large tables into smaller tables and defining relationships between them to ensure data integrity.

- **Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.**
  - A one-to-one relationship means that each record in one table is related to exactly one record in another table. A one-to-many relationship means that each record in one table can be related to multiple records in another table. A many-to-many relationship means that multiple records in one table can be related to multiple records in another table through a linking table.

## Bookmark and Review

- [Sequelize API](https://sequelize.org/)

## Reflection

- **What are your learning goals after reading and reviewing the class README?**
  - My learning goals include understanding the differences between SQL and NoSQL databases, mastering SQL modeling techniques, and gaining practical skills in data modeling and database design. I aim to apply these concepts effectively in designing and implementing database solutions for various applications.
