const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const dbConfig = require('./Config/database');
const router = require('./router');

const connection = mysql.createConnection({
    host: dbConfig.hrPool.host,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

const port = process.env.PORT || 3600;
const app = express();

app.set("json spaces", 2);
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', router);

app.listen(port, (err) => {
    if (err) console.log("Error sarting the server"), process.exit(1);
    
    connection.connect((errDB) => {
        if (err) console.log("Error connecting DataBase"), process.exit(1);

        console.log(`DB Connected`);
    })

    console.log(`Server listening at http://localhost:${port}/`);
});