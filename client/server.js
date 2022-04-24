const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;
function startServer() {
  const app = express();
  app.use(express.static(path.resolve(__dirname, 'build', 'static')));

  app.listen(port, () => {
    console.log('Your app is listening on port 3000');
  });
}

startServer();
