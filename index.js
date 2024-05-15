const express = require('express');
const masterRoute = require('./src/routes/masterRoute');
const courseRoute = require('./src/routes/courseRoute');
const studentRoute = require('./src/routes/studentRoute');
const db = require("./src/helpers/database");
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/masters", masterRoute);
app.use("/api/courses", courseRoute);
app.use("/api/students", studentRoute);

app.listen(port, ()=> console.log("Server running on port", port))

app.get('/', (req, res) => {
    res.send("Hello from Node API")
});


db();