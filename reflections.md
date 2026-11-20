### 1. Why is it beneficial to separate your routes, models, and database connection into different directories?

Separating routes, models, and database connections makes the project organized and easier to maintain. Routes handle API requests, models define the database structure, and the database connection file manages the MongoDB connection. This separation makes the code easier to understand, update, and debug.

### 2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT is generally used to replace an entire resource, while PATCH is used to update only specific fields. My PUT endpoint uses `findByIdAndUpdate()` and updates only the fields provided in the request body. Therefore, its behavior more closely resembles PATCH, even though the route uses the PUT method.