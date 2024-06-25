const express = require('express');
const app = express();
const port = 5000; // Replace with your desired port

// Your API endpoint logic goes here
app.get('/api/data', (req, res) => {
  // Handle request to get data
  // ...
  res.json({ data: 'Some data from backend' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});