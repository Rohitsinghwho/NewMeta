import express from 'express'
import dotenv from 'dotenv'
import ConnectDb from './db/mongodatabase.js'
const app = express();
const port = 5000; 
dotenv.config({
  path:'../.env'
})

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


ConnectDb().then(()=>{
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch((e)=>{
  console.log("Error in Connecting to server and database ",e);
})

// Routes
import RegisterRoute from './Routes/User.Route.js'


app.use('/api/user/v1',RegisterRoute);
