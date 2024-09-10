const { error } = require("console");
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
// const FormRoute = require("./routes/FormRoute")


app.set("view engine", "hbs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/", FormRoute)


const url = process.env.LOCAL_MONGO_URL;

mongoose.connect(url)
.then(() => {
console.log("Connected to mongoDB");
})
.catch((error) => {
    console.log("Error connecting to Database " + error.message);
});

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server is running on port " + 
        port
    );
});

