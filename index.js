const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("User Management app's server is running...")
})

app.listen(port, () => {
  console.log(`User Management app is running on port ${port}`)
})
