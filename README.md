# Project Naval War

This project is a user graphical interface for the Naval War game, the role of which is to present the functions in the back-end C# program as a graphical interface.
We used a ASP .NEt core API for the backend part with Entity Framework Core and Microsoft SQL Server

## How to use our application
Start the backend using Visual Studio 2022. 
Create a Database called NavalWarDBConect in SSMS.
Use the command "Update-Database" from the DAL project to generate the classes in Microsoft SQL Server as there is already the migration's files created. 
The string of the database is : "NavalWarDBContextConnection": "Data Source=localhost;Initial Catalog=NavalWarDBContext;Integrated Security=True;MultipleActiveResultSets=True;TrustServerCertificate=True"

There is no username or password for the database because it is used in localhost only.

After that, you can start the API using the start button in Visual Studio 2022. It will start on the port 5199. 

## GUI
To use our website you should start the frontend with the npm run dev command after using npm install to get all the nodes_modules as we used next.js for the frontend
It will start on the port 3000. We allowed CORS requests from the 3000 port in the API.
## Creators
Ao Xie - Xuanzhe Xia - Paul Bonhomme - Paul Marcelet

## ref

