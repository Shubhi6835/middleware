import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

//specify the directory
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
});


//app.use(logger);

//tried something that doesn't  worked.
function logger(req, res, next){
  next();
}

app.post("/submit", (req, res)=>{
  res.send("Your Name is:" + req.body.street + req.body.pet + "😄");
  console.log(req.body);
})

