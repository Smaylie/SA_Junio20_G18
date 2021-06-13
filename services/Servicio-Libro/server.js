const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const cors = require("cors");
const multer = require("multer");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "67.207.80.187",
  port: "3306",
  user: "sa123",
  password: "1234",
  database: "SA",
};

// middlewares
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post('/imagenlibro', upload.single('libroImage'), (req, res, next) => {
    res.end()
})
app.use("/api", routes);

//server running
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
