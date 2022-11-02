const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Database
const baseDeDatos = require('./config/db.js');

//Static
app.use(express.static(__dirname + '/public'));

//Rutas

const routes = require("./routes/index.routes")
app.use(routes)

//Servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});

