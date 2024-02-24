Documentation

This is an Incomplete solution to the user manangement system.
What the app will do:
This app according to the exercise should be able to use RESTAPI to do the CRUD commands, using a specified worker database model, It should have a frontend and it kind of a refferal system, where a worker refer others into the system.

Folder structure:

User_Management_system.
middleware
   |
    CalculateLevels.js(calculating levels 2 and 3 in our express app.)
model
   |
   worker.js(contains the mongodb schema for our database model).
public
   |
   res
     |
      css(contains all the necessary css files).
    
      javascript(contains all the neccesary javascript file).
    index.html(main html file).
routes
   |
   workerRoutes.js(Contains routed for the CRUD operation).
README.md(Documentation file).
server.js(Main express server).

This app dosent use any frontend framework, but rather pure html codes. All dependecies are found in the package.json file.

It merely contains code to do the CRUD commands using RESTAPI, though it isnt done yet, but it can give the glimpse of what is to be done.



HOW TO START THE APP.

make sure you have your mongodb already installed, and your mongodb server running.
do "cd " into the user_mangement_system folder, and install all dependecies using "npm install".
IF your database server is running, then type "npm start" to start the application, the port is found in the command line console.

It will first of all create a KEY worker with his id on the database, this worker is termed as the super worker, because the codes will not create a new worker entry except there's a referral id provided.
please note that parts of the codes where written by chatgpt, while the remaining part was written by me. I hope to learn more so that I create something tangible.
I have little knowledge of RESTAPI and thats what I used to solve this exercise.