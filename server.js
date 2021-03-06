const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const data = require('./src/data.json');

app.listen(port, () => console.log(`Listening on port ${port}`));

// GET routes
app.get('/example', (req, res) => {
  res.send(data);
});

// create a GET route for serving data.json
