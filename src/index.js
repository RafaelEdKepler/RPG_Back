const express = require("express");
const cors = require("cors");

//const https = require("https");
//const fs = request("fs");

const sequelize = require("./config/database");
const InfoController = require("./controllers/infoController");

const app = express();

sequelize.sync().then(() => console.log("Banco de dados conectado"))

app.use(express.json());
app.use(cors());

console.log(InfoController);

app.get("/getAll", InfoController.getAll);
app.post("/save", InfoController.save);
app.delete("/remove/:id", InfoController.delete);
app.put("/update", InfoController.update);

//https.createServer(app).listen(3333, () => console.log("Aberto"));
app.listen(3333, () => console.log("Aberto"))

