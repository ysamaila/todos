# NestJS CRUD Todo API

This is a simple Todo API built using the [NestJS](https://nestjs.com/) framework. The API allows users to create, update, delete, and retrieve todo items.

## Features

- **CRUD Operations**: Create, read, update, and delete todo items (But using a mock data).
- **Modular Structure**: Follows best practices for structuring a NestJS project.
  
## Requirements

To run this project, you need the following installed on your machine:

- Node.js (v12.x or higher)
- npm (v6.x or higher)
- NestJS CLI (optional but recommended)

## Installation

1. Clone the repository:

   
   git clone https://github.com/ysamaila/todos.git

2. Navigate to the project directory:

  
  cd todos
  Install the dependencies:

  
  npm install

3. Running the Application
   Start the development server:

  
  npm run start
  Alternatively, to enable hot-reload:

 
  npm run start:dev
  The API will be running on:
  http://localhost:3000

# API Endpoints

## Get All Todos
``` 
URL: /todo
Method: GET
Description: Retrieves all the todos.
Response:
200 OK: List of todos.`
```

## Get Todo by ID
```
URL: /todo/:id
Method: GET
Description: Retrieves a specific todo by its ID.
Parameters:
id (required): The ID of the todo to retrieve.
Response:
200 OK: The todo item.
404 Not Found.`
```

## Create a New Todo
```
URL: /todo
Method: POST
Description: Creates a new todo item.
Request Body:
id (number, required): The id of the todo item.
description (string, optional): The description of the todo item.
completed (boolean, optional): The completion status of the todo item.
Response:
201 Created: The created todo item.`
```


## Update Todo by ID
```
URL: /todo/:id
Method: PUT
Description: Updates the description and completion status of an existing todo item.
```

### Route Parameters:
```
id (required): The ID of the todo to update.
```

### Query Parameters:
```
description (string, optional): New description of the todo item.
completed (boolean, optional): New completion status of the todo item.
Response:
200 OK: The updated todo item.
404 Not Found.
```

## Delete Todo by ID
  ```
  URL: /todo/:id
  Method: DELETE
  Description: Deletes a todo item by its ID.
  Parameters:
  id (required): The ID of the todo to delete.
  Response:
  200 OK: Successfully deleted.
  404 Not Found.
```

## Folder Structure
```
    src/
    ├── app.controller.ts        # The main controller
    ├── app.module.ts            # The root module
    ├── app.service.ts           # The main service (Later deleted)
    ├── todo/
    │   ├── todo.controller.ts   # Controller to handle all HTTP requests related to todos
    │   ├── todo.service.ts      # Service to manage todo logic and data interaction
    │   ├── todo.dto.ts          # Data Transfer Object for validating todo input
    ├── main.ts                  # Application entry point

```

## Swagger Docs not integrated. Thank you.