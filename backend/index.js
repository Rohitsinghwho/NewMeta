import express from 'express'
import dotenv from 'dotenv'
import ConnectDb from './db/mongodatabase.js'
const app = express();
const port = 5000; 
dotenv.config({
  path:'../.env'
})

// Your API endpoint logic goes here
app.get('/api/data', (req, res) => {
  // Handle request to get data
  // ...
  res.json({ data: 'Some data from backend' });
});


ConnectDb().then(()=>{
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch((e)=>{
  console.log("Error in Connecting to server and database ",e);
})


