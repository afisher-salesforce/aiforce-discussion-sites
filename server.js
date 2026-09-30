const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

// Serve the infographic as the root page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'se-workflow-infographic.html'));
});

// Serve any other static files in the repo
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
