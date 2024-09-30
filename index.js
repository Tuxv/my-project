const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic route to display a smiley face
app.get('/', (req, res) => {
  res.send('<h1>😊 first change!</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

