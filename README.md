# Welcome to the junior devs service for holiday tracking! 
## The junior devs team is as follows:
* Michael Steinacher
* Rebecca Ransome
* Kieran Bird
* Shaun Fitzsimons
* Simon Dunn
* Holly Adamson
* James Poprawski


## Prerequisites
### Database
Requires access to the cloud Postgres database.

To connect to the database create a `.env` file in the root folder, use the `.exampleenv` as a template and set the variable `DATABASE_URL` and `SHADOW_DATABASE_URL` to equal the connection strings for your database. 
eg:  
DATABASE_URL="your-connection-string-here"
SHADOW_DATABASE_URL="your-connection-string-here"  

Ask in the chat for the connection strings. 


## Start the app
1. Set connection strings for database
2. If using a new instance of database then run  migration command to setup tables `npx prisma migrate deploy`. If using the cloud database the tables will already be setup and this step is not required. 
3. Start the application with `npm start`
4. App is running on localhost:3000

## Using the app
Current functionality is:
* Entering start and end date and submitting form will take you to a confirmation page displaying details.
* Submitting the form will save `id`, `startDate` and `endDate` into the database.
* When on homepage all data from database is logged to console.