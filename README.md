

# TODO's CRUD PLAIN NODE
Hello, 👋👋.
I hope you enjoy the project

## Table of Contents

- [About](#about)
- [Why?](#Why?)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Built With](#built-with)

## About

In this project, I've created a simple C.R.U.D for Tasks entity.
This crud utilizes in-file storage (db.json) plain Node.JS and plain JavaScript for all methods.
This project does not utilize any external library whatsoever, it was all built in node.js's native modules.

## Why?

The goal of this project is to create a simple C.R.U.D. without the need to use any external dependencies. With that, I was able to learn much more from Node.js's native modules and methods such as Streams, Buffers, FS, and more.

## Getting Started

Here's the step-by-step on how to run the project on your machine

### Prerequisites
- [ ] **Node.js 18 or higher installed:** 
 You can download and install Node.js from the official [Node.js website](https://nodejs.org/).

- [ ] **NPM (or any package manager):** 
 NPM comes installed alongside Node, so if you have it, it's all good 😄😄

### Installation

```bash
### Clone the repository
git clone https://github.com/fernandortec/todos-plain-nodejs.git 
cd todos-plain-nodejs

### Install necessary modules
npm install
``` 

## Usage

Now just run the project with ```NPM``` and you're good to go.

```bash
npm seed
npm start
``` 

## Features

List and briefly describe the key features of your project.

-   **Creation of a todo**
-   **Listing all todos**
-   **Updating a todo by `id`**
-   **Removing a todo by `id`**
-   **Marking a todo as complete by `id`**
##
-  **Advanced Functionality:** 
	- Mass import of todos from a CSV file (Real Challenge!)


## Routes and Business Rules
- **`id`** - Unique identifier for each todo
- **`title`** - Title of the todo
- **`description`** - Detailed description of the todo
- **`completed_at`** - Date when the todo was completed. The initial value should be `null`
- **`created_at`** - Date when the todo was created.
- **`updated_at`** - Should always be updated to the date when the todo was last updated.

#### Routes:

- **`POST - /todos`**

  It should be possible to create a todo in the database by sending the `title` and `description` fields in the request `body`.

  When creating a todo, the fields: `id`, `created_at`, `updated_at`, and `completed_at` should be automatically filled, following the guidance of the properties above.

- **`GET - /todos`**

  It should be possible to list all todos saved in the database.

  It should also be possible to perform a search, filtering todos by `title` and `description`.

- **`PUT - /todos/:id`**

  It should be possible to update a todo by `id`.

  In the request `body`, it should receive only the `title` and/or `description` to be updated.

  If only the `title` is sent, it means that the `description` cannot be updated, and vice versa.

  Before performing the update, a validation should be done to check if the `id` belongs to a todo saved in the database.

- **`DELETE - /todos/:id`**

  It should be possible to remove a todo by `id`.

  Before performing the removal, a validation should be done to check if the `id` belongs to a todo saved in the database.

- **`PATCH - /todos/:id/complete`**

## Built With

List the technologies and tools used in your project.

-  Node.JS
-  JavaScript
-   NPM
- csv-parse

##

### That's it, thank you for reading until here
