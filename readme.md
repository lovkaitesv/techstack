# Test task for techstack ltd.
## Apartment marketplace application

### Installation

Note: project requires pre-installed Node.js and Sequelize-cli

* Clone repository to your machine
* Install dependencies and launch project

Client  
```
cd client 
npm install
npm run dev
```

Api
* create database  
* go to api folder`cd api`
* create `.env` file and configure variables
```
PORT="5000"   if you use any other port, you need change link at client/axios file
DB_NAME="your db name"
DB_USER="By default is postgres"
DB_PASSWORD="use password"
DB_HOST="localhost"
DB_PORT=5432
CLIENT_URL="http://localhost:5173"
NODE_ENV="development"
```
To run api properly for the first time, run 
```
npm install
npm run db
npm run start
```