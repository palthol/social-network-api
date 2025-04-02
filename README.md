# Social Network API

## [Click here to view the walkthrough](https://drive.google.com/file/d/1QKAOA6yurm491qzZ4xIHzk_6zCby_nSP/view?usp=sharing)

## Description

This project is a social network API built with Node.js and MongoDB. It allows users to create thoughts, manage friends, and interact with each other through a RESTful API.

## Features

- User management (create, read, update, delete)
- Thought management (create, read, update, delete)
- Friend management (add and remove friends)
- Reactions to thoughts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

``` bash

social-network-api
├── models
│   ├── User.js
│   ├── Thought.js
│   └── index.js
├── controllers
│   ├── userController.js
│   └── thoughtController.js
├── routes
│   ├── api
│   │   ├── userRoutes.js
│   │   ├── thoughtRoutes.js
│   │   └── index.js
│   └── index.js
├── utils
│   └── dateFormat.js
├── config
│   └── connection.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:

   ``` bash
   git clone https://github.com/yourusername/social-network-api.git

   ```

2. Navigate to the project directory:

   ``` bash
   cd social-network-api

   ```

3. Install the dependencies:

   ``` bash
   npm install
   ```

## Usage

1. Start the server:

   ``` bash
   npm start
   ```

2. Use a tool like Postman to interact with the API endpoints.




## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

### Thoughts

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get a thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update a thought by ID
- `DELETE /api/thoughts/:id` - Delete a thought by ID

### Friends

- `POST /api/users/:userId/friends/:friendId` - Add a friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

## License

This project is licensed under the MIT License.
