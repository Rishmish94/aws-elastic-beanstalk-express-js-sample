const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Everyone , we have reached till the last of the tutorial, If you like this presentation , do like this blog and share among your friends who are in need , Thank you'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
