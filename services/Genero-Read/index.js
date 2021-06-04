const express = require("express");

const port = process.env.PORT || 3010;

const app = express();

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
});