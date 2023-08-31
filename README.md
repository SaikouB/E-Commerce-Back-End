# E-Commerce Backend
  ![Static Badge](https://img.shields.io/badge/license-MIT-blue.svg)

An express.js e-commerce web application that uses sequalize to interact with a MySQL database.

## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#testing)
  - [License](#license)
  - [Questions](#questions)


## Description

This is a express.js backend application that lets a user utilize GET, POST, PUT, and DELETE routes using an API development platform such as Insomnia to successfully retrieve, create, update, and delete data in the database.

## Installation

To installl:

- [VS Code](https://code.visualstudio.com) Download code editing software.
- [Node.js](https://nodejs.org/en) Download runtime software to be able to download dependencies.
    * `npm install express` A Node.js framework for backend development
    * `npm install mysql` A database management software
    * `npm install mysql2` 
    * `npm instal sequelize` A node.js ORM that works with MySQL database.
    * `npm install dotenv` enviromental file to keep sensitive data safe and connect to MySQL database

## Usage

After installation procees:
- Clone this repostiory using terminal(MacOS) or GitBash(Windows)
- Open application in VS Code and run the following commands to begin:
    - Got to schema.sql file in db folder and open integrated terminal, sign into mysql shell and run `source schema.sql`
    - Next, click on the server.js file, open integrated terminal and source the seeds file by typing `npm run seeds` or `node seeds/index.js`
    - Lastly, in the same terminal, run: `npm start` or `node server.js` to invoke application and listen for PORT 3001

## Testing

- [Insomnia](https://insomnia.rest/) is recommended - An open source application that lets user design, debug and test APIs
- Use PORT `localhost:3001` via Insomnia followed by `/api` and then one of the three APIs (`/categories`, `/products`, `/tags`)

## License

This project is licensed under https://opensource.org/licenses/MIT 


## Questions
Feel free to check out more of my work on GitHub (https://github.com/SaikouB),
or to contact me with any questions about this project, send me an email at bsaikou1990@gmail.com