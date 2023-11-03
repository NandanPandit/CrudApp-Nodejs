const express = require("express");
const app = express();
const port = 3000;

//import router
const crudRouter = require("../crudApp/src/crud-router/crudRouter");

//set ejs as a view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//Now coming data to change into json format
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//pass all url this middleware
app.use(crudRouter);

app.listen(port, () => {
  console.log(`Server started at port number ${port}`);
});
