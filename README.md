# ORM E-Commerce application back-end

## Description

This project called for completion of an E-commerce application's back-end. The assignment's criteria were as follows: 

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

```

## Installation

Installation for this application involves downloading the repo code and opening in your environment. </br> 
VSCode uses an integrated terminal through which this application is meant to be initialized. NPM libraries and dependencies must also be downloaded such as Express, dotenv, Sequelize and MySQL2. </br>
The commands "npm init -y" as well as all the above mentioned package installations must be ran in order to initialize the needed libraries. </br>
in your .env file, be sure to add your mysql username and password before connecting using mysql2 </br>
AFTER THE ABOVE INSTALLATIONS: </br>
FIRST CD INTO "db" THEN run the command -u root -p and input password to initialize mysql. </br>
run the command "source schema.sql" to initialize the database.</br>
run "quit", then cd into the main directory. </br>
run the command "npm run seed" to seed the database. </br>
at this point, you can open Insomnia Core and run your GET PUT POST and DELETE routes to retrieve info. </br>

Source code for the portfolio page can be found here: [JavaScript](https://github.com/IVignollesJeong/ORM-e-commerce-back-end/blob/master/server.js).

## Usage



https://github.com/IVignollesJeong/ORM-e-commerce-back-end/assets/131202032/6afbb01f-fd61-4c3b-bfca-b66d6725600f



## Credits

[mysql2 NPM package](https://www.npmjs.com/package/mysql2) </br>
[express.js NPM package](https://www.npmjs.com/package/express) </br>
[dotenv NPM package](https://www.npmjs.com/package/dotenv) </br>
[sequelize NPM package](https://www.npmjs.com/package/sequelize) </br>
Starter Code - OSU Bootcamp

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
