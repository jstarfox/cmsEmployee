const express = require("express")
const formidableMiddleware = require("express-formidable")
const path = require("path")
const mongoose = require("mongoose") 
const config = require("./config/database")

/* Connection to mongoDB */
mongoose.connect(config.database, {
    useUnifiedTopology : true,
    useNewUrlParser: true
});

const db = mongoose.connection;


/*Handle error events during connection */
db.on("error", console.error.bind(console, "connection error"));


/* Open the connection */
db.once("open", ()=> console.log("connected to MngoDB"));

/* Initialise express app */
const app = express();

/* Use formidable middleware*/
app.use(formidableMiddleware());

// Create the public folder for static files
//
// Set the public folder for middleware
app.use(express.static(path.join(__dirname, "public")));

/**  Add headers */
//Set the headers of the response object in the middleware- CORS
app.use(function(req, res, next){
//Set the “Access-Control-Allow-Origin” for the Website you wish to allow to connect
res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

//Set the “Access-Control-Allow-Methods” for the Request methods you wish to allow
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");

//Set the  "Access-Control-Allow-Headers“ for the Request headers you wish to allow
res.setHeader("Access-Control-Allow-Headers", "content-type, X-Requested-With");

//Set "Access-Control-Allow-Credentials“ to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
res.setHeader("Access-Control-Allow-Credentials", true);


//Pass to next layer of middleware
next();
});


/*
Set the route defined using require
*/
const employees = require("./routes/employees")
const pages = require("./routes/pages")

/*
Load the middleware function on the app */
app.use("/employees", employees);
app.use("/pages", pages);
//Start the server by listening to port 3000
const port=3000;
app.listen(port, () => console.log("Server is running at: " + port));