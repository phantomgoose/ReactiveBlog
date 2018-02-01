const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/client/build')));

const port = process.env.PORT || 5000;

require('./server/config/mongooseConfig');
require('./server/config/routes')(app);

app.listen(port);
console.log(`Server running on port ${port}`);
