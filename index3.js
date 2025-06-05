import express from "express";

const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next){
  console.log("The url is: " + req.url);
  console.log("The method is: " + req.method);
  next();
}